"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RisksService = void 0;
const common_1 = require("@nestjs/common");
let RisksService = class RisksService {
    risks = [
        { id: '1', company: '腾讯科技', type: 'REGULATORY', severity: 'HIGH', description: '数据跨境传输合规风险', time: '2小时前' },
        { id: '2', company: '蚂蚁集团', type: 'FINANCIAL', severity: 'HIGH', description: '反洗钱监控异常', time: '5小时前' },
        { id: '3', company: '字节跳动', type: 'REPUTATIONAL', severity: 'MEDIUM', description: '海外内容审查风险', time: '1天前' },
        { id: '4', company: '拼多多', type: 'OPERATIONAL', severity: 'MEDIUM', description: '供应链合规问题', time: '2天前' },
    ];
    findAll() {
        return this.risks;
    }
};
exports.RisksService = RisksService;
exports.RisksService = RisksService = __decorate([
    (0, common_1.Injectable)()
], RisksService);
//# sourceMappingURL=risks.service.js.map