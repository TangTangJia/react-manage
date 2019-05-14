import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import route from '../route.js'
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class index extends Component {
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider style={{
                        // overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 200 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>Navigation One</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3"> <Link to="/wallet">表格</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ marginLeft: 200 }}>
                        <Header style={{ backgroundColor: '#eee' }}>Header</Header>
                        <Content style={{ backgroundColor: '#fff', padding: 30 }}>{this.props.children}</Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
