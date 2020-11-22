import { Menu, Layout } from 'antd'

export const Page = ({ children }) => {
  return (
    <Layout>
      <Layout.Sider>
        <Menu>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Users</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}
