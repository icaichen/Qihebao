import { Card, Row, Col, List, Typography, Tag, Progress, Alert } from 'antd';
import { WarningOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const RiskCenter = () => {
  const overallRisk = {
    totalCompanies: 156,
    highRisk: 24,
    mediumRisk: 67,
    lowRisk: 65,
    trend: 'up',
  };

  const riskAlerts = [
    { id: 1, company: '腾讯科技', type: 'REGULATORY', severity: 'HIGH', description: '数据跨境传输合规风险', time: '2小时前' },
    { id: 2, company: '蚂蚁集团', type: 'FINANCIAL', severity: 'HIGH', description: '反洗钱监控异常', time: '5小时前' },
    { id: 3, company: '字节跳动', type: 'REPUTATIONAL', severity: 'MEDIUM', description: '海外内容审查风险', time: '1天前' },
    { id: 4, company: '拼多多', type: 'OPERATIONAL', severity: 'MEDIUM', description: '供应链合规问题', time: '2天前' },
  ];

  const riskDistribution = [
    { type: '监管合规', count: 42, color: '#1890ff' },
    { type: '金融风险', count: 38, color: '#52c41a' },
    { type: '操作风险', count: 28, color: '#faad14' },
    { type: '声誉风险', count: 25, color: '#f5222d' },
    { type: '法律风险', count: 23, color: '#722ed1' },
  ];

  const severityColor = (severity: string) => {
    switch(severity) {
      case 'HIGH': return 'red';
      case 'MEDIUM': return 'orange';
      case 'LOW': return 'green';
      default: return 'default';
    }
  };

  return (
    <div>
      <Alert
        message="风险监控中心"
        description="实时监控企业合规风险，及时发现并处理高风险事件"
        type="info"
        showIcon
        style={{ marginBottom: 24 }}
      />

      <Row gutter={24} style={{ marginBottom: 24 }}>
        <Col span={6}>
          <Card>
            <StatisticCard
              title="监控企业总数"
              value={overallRisk.totalCompanies}
              icon={<RiseOutlined />}
              color="#1890ff"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <StatisticCard
              title="高风险企业"
              value={overallRisk.highRisk}
              icon={<WarningOutlined />}
              color="#f5222d"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <StatisticCard
              title="中风险企业"
              value={overallRisk.mediumRisk}
              icon={<WarningOutlined />}
              color="#fa8c16"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <StatisticCard
              title="低风险企业"
              value={overallRisk.lowRisk}
              icon={<FallOutlined />}
              color="#52c41a"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginBottom: 24 }}>
        <Col span={12}>
          <Card title="风险告警">
            <List
              dataSource={riskAlerts}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<WarningOutlined style={{ color: severityColor(item.severity), fontSize: 20 }} />}
                    title={<><Text strong>{item.company}</Text> - {item.description}</>}
                    description={`${item.type} · ${item.time}`}
                  />
                  <Tag color={severityColor(item.severity)}>{item.severity}</Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="风险类型分布">
            {riskDistribution.map(item => (
              <div key={item.type} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <Text>{item.type}</Text>
                  <Text strong>{item.count}件</Text>
                </div>
                <Progress 
                  percent={(item.count / 156) * 100} 
                  strokeColor={item.color}
                  showInfo={false}
                />
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      <Card title="风险趋势分析">
        <div style={{ textAlign: 'center', padding: 40 }}>
          <Title level={4}>📈 风险监控图表区域</Title>
          <Text type="secondary">集成可视化图表展示风险趋势（Mock）</Text>
        </div>
      </Card>
    </div>
  );
};

const StatisticCard = ({ title, value, icon, color }: any) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ fontSize: 32, color, marginBottom: 8 }}>{icon}</div>
    <Title level={2} style={{ marginBottom: 0 }}>{value}</Title>
    <Text type="secondary">{title}</Text>
  </div>
);

export default RiskCenter;