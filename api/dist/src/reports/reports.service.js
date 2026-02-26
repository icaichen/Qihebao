"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
let ReportsService = class ReportsService {
    reports = [
        { id: '1', title: '腾讯科技2025年度合规审计报告', type: 'COMPLIANCE_AUDIT', status: 'APPROVED', company: '腾讯科技', date: '2025-02-20', author: '张三' },
        { id: '2', title: '阿里巴巴反垄断风险评估报告', type: 'RISK_ASSESSMENT', status: 'UNDER_REVIEW', company: '阿里巴巴', date: '2025-02-18', author: '李四' },
        { id: '3', title: '华为技术出口管制尽调报告', type: 'DUE_DILIGENCE', status: 'DRAFT', company: '华为技术', date: '2025-02-15', author: '王五' },
        { id: '4', title: '字节跳动数据安全合规报告', type: 'COMPLIANCE_AUDIT', status: 'APPROVED', company: '字节跳动', date: '2025-02-10', author: '赵六' },
        { id: '5', title: '百度AI伦理审查报告', type: 'ANNUAL_REVIEW', status: 'ARCHIVED', company: '百度', date: '2025-02-05', author: '钱七' },
    ];
    findAll() {
        return this.reports;
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)()
], ReportsService);
//# sourceMappingURL=reports.service.js.map