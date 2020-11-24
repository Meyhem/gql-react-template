import { Layout, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import GraphQLImage from '../assets/images/graphql.svg'

const StyledLayout = styled(Layout)`
  background: white;
  height: 100%;
`

const StyledSider = styled(Layout.Sider)`
  background: black;
  height: 100%;
`

const StyledContent = styled(Layout.Content)`
  padding: 24px;
`

const Brand = styled.img`
  margin: 24px;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 16px 0 16px 24px;
  color: white;

  &.active {
    background: #202020;
  }
`

export const Page = ({ heading, children }) => {
  return (
    <StyledLayout>
      <StyledSider>
        <Brand src={GraphQLImage} />
        <StyledNavLink to="/dashboard" activeClassName="active">
          Dashboard &raquo;
        </StyledNavLink>
        <StyledNavLink to="/users" activeClassName="active">
          Users &raquo;
        </StyledNavLink>
      </StyledSider>
      <StyledContent>
        <Typography.Title>{heading}</Typography.Title>
        {children}
      </StyledContent>
    </StyledLayout>
  )
}
