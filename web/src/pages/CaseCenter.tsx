import { Card, Table, Tag, Button, Space, Steps, Modal, Form, Input, Select } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Option } = Select;

const CaseCenter = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const cases = [
    { id: '1', title: '腾讯数据出境合规整改', status: 'IN_PROGRESS', priority: 'HIGH', company: '腾讯科技', assignee: '张三', created: '2025-02-20', deadline: '2025-03-20' },
    { id: '2', title: '阿里巴巴反垄断调查应对', status: 'OPEN', priority: 'URGENT', company: '阿里巴巴', assignee: '李四', created: '2025-02-18', deadline: '2025-03-10' },
    { id: '3', title: '华为出口许可证申请', status: 'RESOLVED', priority: 'MEDIUM', company: '华为技术', assignee: '王五', created: '2025-02-15', deadline: '2025-02-28' },
    { id: '4', title: '字节跳动海外内容审查', status: 'IN_PROGRESS', priority: 'MEDIUM', company: '字节跳动', assignee: '赵六', created: '2025-02-10', deadline: '2025-03-05' },
    { id: '5', title: '百度AI算法备案', status: 'CLOSED', priority: 'LOW', company: '百度', assignee: '钱七', created: '2025-02-05', deadline: '2025-02-25' },
  ];

  const columns = [
    { title: '工单标题', dataIndex: 'title', key: 'title', width: 250 },
    { 
      title: '状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => {
        const statusMap: any = {
          OPEN: { text: '待处理', color: 'default' },
          IN_PROGRESS: { text: '进行中', color: 'processing' },
          RESOLVED: { text: '已解决', color: 'success' },
          CLOSED: { text: '已关闭', color: 'warning' },
        };
        const config = statusMap[status] || { text: status, color: 'default' };
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    },
    { 
      title: '优先级', 
      dataIndex: 'priority', 
      key: 'priority',
      render: (priority: string) => {
        const priorityMap: any = {
          LOW: { text: '低', color: 'green' },
          MEDIUM: { text: '中', color: 'blue' },
          HIGH: { text: '高', color: 'orange' },
          URGENT: { text: '紧急', color: 'red' },
        };
        const config = priorityMap[priority] || { text: priority, color: 'default' };
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    },
    { title: '关联企业', dataIndex: 'company', key: 'company' },
    { title: '负责人', dataIndex: 'assignee', key: 'assignee' },
    { title: '创建时间', dataIndex: 'created', key: 'created' },
    { title: '截止时间', dataIndex: 'deadline', key: 'deadline' },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: () => (
        <Space>
          <Button type="link" size="small">处理</Button>
          <Button type="link" size="small">详情</Button>
        </Space>
      ),
    },
  ];

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Card 
        title="工单管理" 
        extra={
          <Space>
            <Input placeholder="搜索工单..." prefix={<SearchOutlined />} style={{ width: 200 }} />
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>新建工单</Button>
          </Space>
        }
      >
        <Table 
          columns={columns} 
          dataSource={cases} 
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Modal
        title="新建工单"
        open={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <Form layout="vertical">
          <Form.Item label="工单标题" required>
            <Input placeholder="请输入工单标题" />
          </Form.Item>
          <Form.Item label="关联企业" required>
            <Select placeholder="请选择企业">
              <Option value="tencent">腾讯科技</Option>
              <Option value="alibaba">阿里巴巴</Option>
              <Option value="huawei">华为技术</Option>
              <Option value="bytedance">字节跳动</Option>
              <Option value="baidu">百度</Option>
            </Select>
          </Form.Item>
          <Form.Item label="工单类型" required>
            <Select placeholder="请选择类型">
              <Option value="compliance">合规整改</Option>
              <Option value="investigation">调查应对</Option>
              <Option value="license">许可证申请</Option>
              <Option value="review">内容审查</Option>
              <Option value="filing">备案登记</Option>
            </Select>
          </Form.Item>
          <Form.Item label="优先级" required>
            <Select placeholder="请选择优先级">
              <Option value="low">低</Option>
              <Option value="medium">中</Option>
              <Option value="high">高</Option>
              <Option value="urgent">紧急</Option>
            </Select>
          </Form.Item>
          <Form.Item label="负责人" required>
            <Select placeholder="请选择负责人">
              <Option value="zhangsan">张三</Option>
              <Option value="lisi">李四</Option>
              <Option value="wangwu">王五</Option>
              <Option value="zhaoliu">赵六</Option>
            </Select>
          </Form.Item>
          <Form.Item label="工单描述">
            <Input.TextArea rows={4} placeholder="请详细描述工单内容..." />
          </Form.Item>
        </Form>
      </Modal>

      <Card title="工单处理流程" style={{ marginTop: 24 }}>
        <Steps
          current={1}
          items={[
            { title: '创建工单', description: '2025-02-20 10:00' },
            { title: '分配处理', description: '2025-02-20 10:30' },
            { title: '处理中', description: '进行中' },
            { title: '审核验收', description: '待处理' },
            { title: '关闭工单', description: '待处理' },
          ]}
        />
      </Card>
    </div>
  );
};

export default CaseCenter;