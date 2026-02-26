import { Card, Table, Tag, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Search } = Input;

const mockCompanies = [
  { id: '1', name: '腾讯科技', legalName: '腾讯科技有限公司', industry: '互联网', riskScore: 85, riskLevel: 'HIGH', lastUpdated: '2025-02-25' },
  { id: '2', name: '阿里巴巴', legalName: '阿里巴巴集团', industry: '电商', riskScore: 42, riskLevel: 'MEDIUM', lastUpdated: '2025-02-24' },
  { id: '3', name: '华为技术', legalName: '华为技术有限公司', industry: '通信', riskScore: 28, riskLevel: 'LOW', lastUpdated: '2025-02-23' },
  { id: '4', name: '字节跳动', legalName: '字节跳动有限公司', industry: '社交', riskScore: 67, riskLevel: 'MEDIUM', lastUpdated: '2025-02-22' },
  { id: '5', name: '百度', legalName: '百度在线网络技术', industry: '搜索', riskScore: 55, riskLevel: 'MEDIUM', lastUpdated: '2025-02-21' },
];

const CompanySearch = () => {
  const [data, setData] = useState(mockCompanies);

  const columns = [
    { title: '企业名称', dataIndex: 'name', key: 'name' },
    { title: '法定名称', dataIndex: 'legalName', key: 'legalName' },
    { title: '行业', dataIndex: 'industry', key: 'industry' },
    { 
      title: '风险评分', 
      dataIndex: 'riskScore', 
      key: 'riskScore',
      render: (score: number) => <span style={{ fontWeight: 'bold', color: score > 70 ? '#cf1322' : score > 40 ? '#d46b08' : '#389e0d' }}>{score}</span>
    },
    { 
      title: '风险等级', 
      dataIndex: 'riskLevel', 
      key: 'riskLevel',
      render: (level: string) => {
        let color = 'green';
        if (level === 'HIGH') color = 'red';
        else if (level === 'MEDIUM') color = 'orange';
        return <Tag color={color}>{level}</Tag>;
      }
    },
    { title: '最后更新', dataIndex: 'lastUpdated', key: 'lastUpdated' },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space>
          <Button type="link" size="small">查看详情</Button>
          <Button type="link" size="small">风险评估</Button>
        </Space>
      ),
    },
  ];

  const handleSearch = (value: string) => {
    const filtered = mockCompanies.filter(company => 
      company.name.includes(value) || company.legalName.includes(value)
    );
    setData(filtered);
  };

  return (
    <div>
      <Card title="企业搜索" extra={<Button type="primary">新增企业</Button>}>
        <Search 
          placeholder="输入企业名称或法定名称" 
          enterButton={<><SearchOutlined /> 搜索</>}
          size="large"
          onSearch={handleSearch}
          style={{ marginBottom: 24 }}
        />
        <Table columns={columns} dataSource={data} rowKey="id" />
      </Card>
    </div>
  );
};

export default CompanySearch;