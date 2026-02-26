import { Injectable } from '@nestjs/common';

@Injectable()
export class RisksService {
  private risks = [
    { id: '1', company: '腾讯科技', type: 'REGULATORY', severity: 'HIGH', description: '数据跨境传输合规风险', time: '2小时前' },
    { id: '2', company: '蚂蚁集团', type: 'FINANCIAL', severity: 'HIGH', description: '反洗钱监控异常', time: '5小时前' },
    { id: '3', company: '字节跳动', type: 'REPUTATIONAL', severity: 'MEDIUM', description: '海外内容审查风险', time: '1天前' },
    { id: '4', company: '拼多多', type: 'OPERATIONAL', severity: 'MEDIUM', description: '供应链合规问题', time: '2天前' },
  ];

  findAll() {
    return this.risks;
  }
}