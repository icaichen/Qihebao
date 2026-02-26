#!/bin/bash

# 律所与企业法务合规尽调平台 - 一键启动脚本
# 启动数据库、后端API和前端Web应用

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG_FILE="$PROJECT_ROOT/scripts/startup.log"

echo "========================================"
echo "合规尽调平台启动脚本"
echo "========================================"

# 创建日志目录
mkdir -p "$(dirname "$LOG_FILE")"
echo "日志文件: $LOG_FILE"
echo "" > "$LOG_FILE"

log() {
    local message="$1"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $message" | tee -a "$LOG_FILE"
}

check_dependency() {
    if ! command -v "$1" &> /dev/null; then
        log "错误: 未找到 $1，请先安装"
        exit 1
    fi
}

# 检查依赖
log "检查系统依赖..."
check_dependency "docker"
check_dependency "docker-compose"
check_dependency "node"
check_dependency "npm"

# 启动数据库服务
log "启动 PostgreSQL 数据库..."
cd "$PROJECT_ROOT"
if ! docker-compose up -d postgres 2>&1 | tee -a "$LOG_FILE"; then
    log "错误: 数据库启动失败"
    exit 1
fi

# 等待数据库就绪
log "等待数据库就绪..."
sleep 5
MAX_WAIT=30
WAIT_COUNT=0
while ! docker-compose exec -T postgres pg_isready -U compliance_user -d compliance_db 2>&1 | tee -a "$LOG_FILE"; do
    WAIT_COUNT=$((WAIT_COUNT + 1))
    if [ $WAIT_COUNT -ge $MAX_WAIT ]; then
        log "错误: 数据库启动超时"
        exit 1
    fi
    sleep 2
done
log "数据库已就绪"

# 启动后端API
log "设置后端API..."
cd "$PROJECT_ROOT/api"

if [ ! -d "node_modules" ]; then
    log "安装后端依赖..."
    npm install 2>&1 | tee -a "$LOG_FILE"
fi

log "生成Prisma客户端..."
npx prisma generate 2>&1 | tee -a "$LOG_FILE"

log "应用数据库迁移..."
npx prisma migrate dev --name init 2>&1 | tee -a "$LOG_FILE"

log "启动后端服务器 (端口: 3000)..."
npm run start:dev 2>&1 | tee -a "$LOG_FILE" &
BACKEND_PID=$!
sleep 5

# 检查后端是否运行
if ! curl -s http://localhost:3000/companies > /dev/null; then
    log "警告: 后端API可能未正常启动，继续启动前端..."
fi

# 启动前端Web应用
log "设置前端Web应用..."
cd "$PROJECT_ROOT/web"

if [ ! -d "node_modules" ]; then
    log "安装前端依赖..."
    npm install 2>&1 | tee -a "$LOG_FILE"
fi

log "启动前端开发服务器 (端口: 5173)..."
npm run dev 2>&1 | tee -a "$LOG_FILE" &
FRONTEND_PID=$!
sleep 3

# 显示启动信息
log "========================================"
log "✅ 所有服务已启动!"
log ""
log "访问地址:"
log "  🌐 前端应用: http://localhost:5173"
log "  🔧 后端API:  http://localhost:3000"
log "  🗄️  数据库:   localhost:5432"
log "  📊 pgAdmin:  http://localhost:5050"
log ""
log "数据库连接信息:"
log "  - 数据库: compliance_db"
log "  - 用户: compliance_user"
log "  - 密码: compliance_pass"
log ""
log "pgAdmin登录:"
log "  - 邮箱: admin@compliance.local"
log "  - 密码: admin"
log ""
log "按 Ctrl+C 停止所有服务"
log "========================================"

# 捕获退出信号
cleanup() {
    log "正在停止服务..."
    kill $FRONTEND_PID 2>/dev/null || true
    kill $BACKEND_PID 2>/dev/null || true
    cd "$PROJECT_ROOT"
    docker-compose down 2>&1 | tee -a "$LOG_FILE"
    log "服务已停止"
    exit 0
}

trap cleanup SIGINT SIGTERM

# 保持脚本运行
wait