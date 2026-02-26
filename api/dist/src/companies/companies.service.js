"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
let CompaniesService = class CompaniesService {
    companies = [
        { id: '1', name: '腾讯科技', legalName: '腾讯科技有限公司', industry: '互联网', riskScore: 85, riskLevel: 'HIGH' },
        { id: '2', name: '阿里巴巴', legalName: '阿里巴巴集团', industry: '电商', riskScore: 42, riskLevel: 'MEDIUM' },
        { id: '3', name: '华为技术', legalName: '华为技术有限公司', industry: '通信', riskScore: 28, riskLevel: 'LOW' },
        { id: '4', name: '字节跳动', legalName: '字节跳动有限公司', industry: '社交', riskScore: 67, riskLevel: 'MEDIUM' },
        { id: '5', name: '百度', legalName: '百度在线网络技术', industry: '搜索', riskScore: 55, riskLevel: 'MEDIUM' },
    ];
    search(query) {
        if (!query)
            return this.companies;
        return this.companies.filter(company => company.name.includes(query) || company.legalName.includes(query));
    }
    findAll() {
        return this.companies;
    }
    findOne(id) {
        return this.companies.find(company => company.id === id) || null;
    }
};
exports.CompaniesService = CompaniesService;
exports.CompaniesService = CompaniesService = __decorate([
    (0, common_1.Injectable)()
], CompaniesService);
//# sourceMappingURL=companies.service.js.map