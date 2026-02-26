# 律所与企业法务合规尽调平台

一个为企业法务合规和风险尽调设计的全栈Web应用，提供企业搜索、风险监控、报告管理和工单处理功能。

## 技术栈

- **前端**: React 18 + TypeScript + Vite + Ant Design
- **后端**: NestJS + TypeScript + Prisma
- **数据库**: PostgreSQL (Docker)
- **开发工具**: Docker Compose, Node.js 18+

## 项目结构

```
platform/
├── web/                    # 前端React应用
│   ├── src/
│   │   ├── components/     # 可复用组件
│   │   ├── pages/         # 页面组件
│   │   ├── services/      # API服务
│   │   ├── types/         # TypeScript类型定义
│   │   └── utils/         # 工具函数
│   └── package.json
├── api/                    # 后端NestJS应用
│   ├── src/
│   │   ├── companies/     # 企业相关模块
│   │   ├── risks/         # 风险相关模块
│   │   ├── reports/       # 报告相关模块
│   │   ├── cases/         # 工单相关模块
│   │   └── prisma/        # Prisma schema
│   └── package.json
├── docker-compose.yml     # 数据库服务配置
├── scripts/               # 开发脚本
└── docs/                  # 项目文档
```

## 快速启动

### 前置要求

- Docker & Docker Compose
- Node.js 18+ 和 npm

### 1. 启动数据库

```bash
# 在项目根目录执行
docker-compose up -d
```

这将启动:
- PostgreSQL: `localhost:5432`
  - 数据库: `compliance_db`
  - 用户: `compliance_user`
  - 密码: `compliance_pass`
- pgAdmin: `localhost:5050`
  - 邮箱: `admin@compliance.local`
  - 密码: `admin`

### 2. 设置后端API

```bash
# 进入api目录
cd api

# 安装依赖
npm install

# 生成Prisma客户端
npx prisma generate

# 运行数据库迁移（首次运行）
npx prisma migrate dev --name init

# 启动开发服务器（端口3000）
npm run start:dev
```

### 3. 设置前端Web应用

```bash
# 进入web目录
cd web

# 安装依赖
npm install

# 启动开发服务器（端口5173）
npm run dev
```

### 4. 访问应用

- 前端: http://localhost:5173
- 后端API: http://localhost:3000
- pgAdmin: http://localhost:5050

## 功能页面

1. **企业搜索** - 搜索和查看企业基本信息及风险评分
2. **企业详情** - 查看企业详细信息、风险事件时间线和合规报告
3. **风险中心** - 监控全局风险告警和风险类型分布
4. **报告中心** - 管理和查看各类合规报告
5. **工单管理** - 处理和跟踪合规相关工单

## API端点

- `GET /companies/search?q=关键词` - 搜索企业
- `GET /companies/:id` - 获取企业详情
- `GET /risks` - 获取风险列表
- `GET /reports` - 获取报告列表
- `GET /cases` - 获取工单列表

## 数据模型

主要数据表:
- `users` - 用户信息
- `companies` - 企业信息
- `risk_scores` - 企业风险评分
- `risk_events` - 风险事件记录
- `reports` - 合规报告
- `cases` - 工单记录

详细schema见 `api/prisma/schema.prisma`

## 开发脚本

项目根目录提供了一键启动脚本:

```bash
# 给予执行权限
chmod +x scripts/dev.sh

# 启动所有服务
./scripts/dev.sh
```

## 下一步开发建议

1. **用户认证** - 添加JWT认证和权限控制
2. **数据可视化** - 集成ECharts或Recharts展示风险趋势
3. **实时通知** - 使用WebSocket推送风险告警
4. **文件上传** - 支持报告附件上传和下载
5. **工作流引擎** - 实现合规审批流程
6. **数据导入** - 支持从Excel/CSV批量导入企业数据
7. **API文档** - 使用Swagger/OpenAPI生成API文档
8. **单元测试** - 添加前后端测试覆盖率

## 许可证

内部使用