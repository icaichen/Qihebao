import { Card, Table, Tag, Button, Space, Dropdown } from 'antd';
import { FileTextOutlined, DownloadOutlined, EyeOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';

const ReportCenter = () => {
  const reports = [
    { id: '1', title: '腾讯科技2025年度合规审计报告', type: 'COMPLIANCE_AUDIT', status: 'APPROVED', company: '腾讯科技', date: '2025-02-20', author: '张三' },
    { id: '2', title: '阿里巴巴反垄断风险评估报告', type: 'RISK_ASSESSMENT', status: 'UNDER_REVIEW', company: '阿里巴巴', date: '2025-02-18', author: '李四' },
    { id: '3', title: '华为技术出口管制尽调报告', type: 'DUE_DILIGENCE', status: 'DRAFT', company: '华为技术', date: '2025-02-15', author: '王五' },
    { id: '4', title: '字节跳动数据安全合规报告', type: 'COMPLIANCE_AUDIT', status: 'APPROVED', company: '字节跳动', date: '2025-02-10', author: '赵六' },
    { id: '5', title: '百度AI伦理审查报告', type: 'ANNUAL_REVIEW', status: 'ARCHIVED', company: '百度', date: '2025-02-05', author: '钱七' },
  ];

  const columns = [
    { title: '报告标题', dataIndex: 'title', key: 'title', width: 300 },
    { 
      title: '类型', 
      dataIndex: 'type', 
      key: 'type',
      render: (type: string) => {
        const typeMap: any = {
          COMPLIANCE_AUDIT: { text: '合规审计', color: 'blue' },
          RISK_ASSESSMENT: { text: '风险评估', color: 'green' },
          DUE_DILIGENCE: { text: '尽职调查', color: 'purple' },
          ANNUAL_REVIEW: { text: '年度审查', color: 'orange' },
        };
        const config = typeMap[type] || { text: type, color: 'default' };
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    },
    { 
      title: '状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => {
        const statusMap: any = {
          DRAFT: { text: '草稿', color: 'default' },
          UNDER_REVIEW: { text: '审核中', color: 'processing' },
          APPROVED: { text: '已批准', color: 'success' },
          ARCHIVED: { text: '已归档', color: 'warning' },
        };
        const config = statusMap[status] || { text: status, color: 'default' };
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    },
    { title: '关联企业', dataIndex: 'company', key: 'company' },
    { title: '创建日期', dataIndex: 'date', key: 'date' },
    { title: '创建人', dataIndex: 'author', key: 'author' },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: () => (
        <Space>
          <Button type="link" icon={<EyeOutlined />} size="small" />
          <Button type="link" icon={<EditOutlined />} size="small" />
          <Button type="link" icon={<DownloadOutlined />} size="small" />
          <Dropdown menu={{
            items: [
              { key: '1', label: '导出PDF' },
              { key: '2', label: '分享链接' },
              { key: '3', label: '复制报告' },
              { key: '4', label: '删除' },
            ]
          }}>
            <Button type="link" icon={<MoreOutlined />} size="small" />
          </Dropdown>
        </Space>
      ),
    },
  ];



  return (
    <div>
      <Card 
        title="报告中心" 
        extra={
          <Space>
             <Dropdown menu={{
               items: [
                 { key: '1', label: '合规审计报告' },
                 { key: '2', label: '风险评估报告' },
                 { key: '3', label: '尽职调查报告' },
                 { key: '4', label: '年度审查报告' },
               ]
             }}>
              <Button type="primary" icon={<FileTextOutlined />}>新建报告</Button>
            </Dropdown>
            <Button icon={<DownloadOutlined />}>批量导出</Button>
          </Space>
        }
      >
        <Table 
          columns={columns} 
          dataSource={reports} 
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
};

export default ReportCenter;