import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, ConfigProvider, theme } from 'antd';
import { 
  SearchOutlined, 
  BankOutlined, 
  WarningOutlined, 
  FileTextOutlined, 
  InboxOutlined,
  DashboardOutlined 
} from '@ant-design/icons';
import CompanySearch from './pages/CompanySearch';
import CompanyDetail from './pages/CompanyDetail';
import RiskCenter from './pages/RiskCenter';
import ReportCenter from './pages/ReportCenter';
import CaseCenter from './pages/CaseCenter';
import './App.css';

const { Header, Sider, Content } = Layout;

function App() {
  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: <Link to="/">仪表板</Link> },
    { key: 'companies', icon: <SearchOutlined />, label: <Link to="/companies">企业搜索</Link> },
    { key: 'company-detail', icon: <BankOutlined />, label: <Link to="/company/1">企业详情</Link> },
    { key: 'risks', icon: <WarningOutlined />, label: <Link to="/risks">风险中心</Link> },
    { key: 'reports', icon: <FileTextOutlined />, label: <Link to="/reports">报告中心</Link> },
    { key: 'cases', icon: <InboxOutlined />, label: <Link to="/cases">工单管理</Link> },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={220} theme="light" breakpoint="lg" collapsedWidth="0">
            <div style={{ height: 64, padding: 16, borderBottom: '1px solid #f0f0f0' }}>
              <h2 style={{ margin: 0, color: '#1890ff' }}>合规尽调平台</h2>
              <div style={{ fontSize: 12, color: '#666' }}>Compliance Due Diligence</div>
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={['companies']}
              items={menuItems}
              style={{ borderRight: 0 }}
            />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: '0 24px', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: 0 }}>企业法务合规尽调平台</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span>欢迎，管理员</span>
                </div>
              </div>
            </Header>
            <Content style={{ margin: 24 }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 360 }}>
                <Routes>
                  <Route path="/" element={<CompanySearch />} />
                  <Route path="/companies" element={<CompanySearch />} />
                  <Route path="/company/:id" element={<CompanyDetail />} />
                  <Route path="/risks" element={<RiskCenter />} />
                  <Route path="/reports" element={<ReportCenter />} />
                  <Route path="/cases" element={<CaseCenter />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;