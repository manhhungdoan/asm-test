import './App.scss'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import PageContent from './routes';
import { route } from './utils/constants/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


function App() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [selectedKey, setSelectedKey] = useState();
  const menuList = [
    {
      key: route.BAI1,
      label: 'Bài 1'
    },
    {
      key: route.BAI2,
      label: 'Bài 2'
    },
    {
      key: route.BAI3,
      label: 'Bài 3'
    },
    {
      key: route.BAI4,
      label: 'Bài 4'
    },
    {
      key: route.BAI5,
      label: 'Bài 5'
    },
    {
      key: route.BAI6,
      label: 'Bài 6'
    },
    {
      key: route.BAI7,
      label: 'Bài 7'
    },
    {
      key: route.BAI8,
      label: 'Bài 8'
    },
  ]
  const handleMenuClick = ({ key }) => {
    navigate(key)
  }

  return (
    <Layout
    >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={menuList}
          onClick={handleMenuClick}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
          }}
        >
          <PageContent />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Asm doing by ManhHung
      </Footer>
    </Layout>
  );
}

export default App;
