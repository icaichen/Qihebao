import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  private companies = [
    { id: '1', name: '腾讯科技', legalName: '腾讯科技有限公司', industry: '互联网', riskScore: 85, riskLevel: 'HIGH' },
    { id: '2', name: '阿里巴巴', legalName: '阿里巴巴集团', industry: '电商', riskScore: 42, riskLevel: 'MEDIUM' },
    { id: '3', name: '华为技术', legalName: '华为技术有限公司', industry: '通信', riskScore: 28, riskLevel: 'LOW' },
    { id: '4', name: '字节跳动', legalName: '字节跳动有限公司', industry: '社交', riskScore: 67, riskLevel: 'MEDIUM' },
    { id: '5', name: '百度', legalName: '百度在线网络技术', industry: '搜索', riskScore: 55, riskLevel: 'MEDIUM' },
  ];

  search(query: string) {
    if (!query) return this.companies;
    return this.companies.filter(company => 
      company.name.includes(query) || company.legalName.includes(query)
    );
  }

  findAll() {
    return this.companies;
  }

  findOne(id: string) {
    return this.companies.find(company => company.id === id) || null;
  }
}