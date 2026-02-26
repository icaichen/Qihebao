"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesService = void 0;
const common_1 = require("@nestjs/common");
let CasesService = class CasesService {
    cases = [
        { id: '1', title: '腾讯数据出境合规整改', status: 'IN_PROGRESS', priority: 'HIGH', company: '腾讯科技', assignee: '张三', created: '2025-02-20', deadline: '2025-03-20' },
        { id: '2', title: '阿里巴巴反垄断调查应对', status: 'OPEN', priority: 'URGENT', company: '阿里巴巴', assignee: '李四', created: '2025-02-18', deadline: '2025-03-10' },
        { id: '3', title: '华为出口许可证申请', status: 'RESOLVED', priority: 'MEDIUM', company: '华为技术', assignee: '王五', created: '2025-02-15', deadline: '2025-02-28' },
        { id: '4', title: '字节跳动海外内容审查', status: 'IN_PROGRESS', priority: 'MEDIUM', company: '字节跳动', assignee: '赵六', created: '2025-02-10', deadline: '2025-03-05' },
        { id: '5', title: '百度AI算法备案', status: 'CLOSED', priority: 'LOW', company: '百度', assignee: '钱七', created: '2025-02-05', deadline: '2025-02-25' },
    ];
    findAll() {
        return this.cases;
    }
};
exports.CasesService = CasesService;
exports.CasesService = CasesService = __decorate([
    (0, common_1.Injectable)()
], CasesService);
//# sourceMappingURL=cases.service.js.map