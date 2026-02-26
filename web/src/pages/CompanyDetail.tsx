import { Card, Descriptions, Tag, Timeline, Row, Col, Statistic, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const CompanyDetail = () => {
  const company = {
    id: '1',
    name: '腾讯科技',
    legalName: '腾讯科技有限公司',
    taxId: '91440300708461136T',
    industry: '互联网',
    address: '广东省深圳市南山区高新区科技中一路腾讯大厦',
    website: 'https://www.tencent.com',
    description: '中国领先的互联网增值服务提供商，提供社交、游戏、金融、广告等服务。',
    riskScore: 85,
    riskLevel: 'HIGH',
    riskTrend: 'up',
  };

  const riskEvents = [
    { time: '2025-02-25', event: '数据安全合规检查', status: 'pending', color: 'red' },
    { time: '2025-02-20', event: '反垄断调查跟进', status: 'resolved', color: 'green' },
    { time: '2025-02-15', event: '境外投资备案', status: 'completed', color: 'blue' },
    { time: '2025-02-10', event: '知识产权侵权诉讼', status: 'pending', color: 'orange' },
  ];

  return (
    <div>
      <Card title="企业详情" style={{ marginBottom: 24 }}>
        <Descriptions bordered column={2}>
          <Descriptions.Item label="企业名称">{company.name}</Descriptions.Item>
          <Descriptions.Item label="法定名称">{company.legalName}</Descriptions.Item>
          <Descriptions.Item label="统一信用代码">{company.taxId}</Descriptions.Item>
          <Descriptions.Item label="行业">{company.industry}</Descriptions.Item>
          <Descriptions.Item label="地址" span={2}>{company.address}</Descriptions.Item>
          <Descriptions.Item label="官网"><a href={company.website} target="_blank" rel="noreferrer">{company.website}</a></Descriptions.Item>
          <Descriptions.Item label="描述" span={2}>{company.description}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Row gutter={24} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="风险评分"
              value={company.riskScore}
              precision={0}
              valueStyle={{ color: company.riskScore > 70 ? '#cf1322' : company.riskScore > 40 ? '#d46b08' : '#389e0d' }}
              prefix={company.riskTrend === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              suffix="/100"
            />
            <Progress percent={company.riskScore} strokeColor={company.riskScore > 70 ? '#cf1322' : company.riskScore > 40 ? '#d46b08' : '#389e0d'} />
            <div style={{ marginTop: 8 }}>
              <Tag color={company.riskLevel === 'HIGH' ? 'red' : company.riskLevel === 'MEDIUM' ? 'orange' : 'green'}>{company.riskLevel}</Tag>
              <span style={{ marginLeft: 8 }}>风险等级</span>
            </div>
          </Card>
        </Col>
        <Col span={16}>
          <Card title="风险事件时间线">
            <Timeline>
              {riskEvents.map((item, index) => (
                <Timeline.Item 
                  key={index} 
                  color={item.color}
                  dot={item.status === 'resolved' ? <CheckCircleOutlined /> : <ExclamationCircleOutlined />}
                >
                  <p>{item.time} - {item.event}</p>
                  <Tag color={item.color}>{item.status}</Tag>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12}>
          <Card title="合规报告">
            <p>最近一次合规审计：2025-02-20</p>
            <p>审计结果：<Tag color="green">通过</Tag></p>
            <p>下次审计时间：2025-08-20</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="关联案件">
            <p>当前活跃案件：2件</p>
            <p>已结案：15件</p>
            <p>平均处理周期：45天</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyDetail;