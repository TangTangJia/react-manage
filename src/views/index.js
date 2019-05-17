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
                            // onClick={this.handleClick}
                            style={{ width: 200 }}
                            // defaultSelectedKeys={['1']}
                            // defaultOpenKeys={['sub1']}
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
                                <Menu.Item key="1"> <Link to="/wallet">表格</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="sub2">
                                <Link to="/echarts">
                                    <Icon type="pie-chart" />
                                    <span>图表</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu key="sub3"
                                title={
                                    <span>
                                        <Icon type="edit" />
                                        <span>Navigation Two</span>
                                    </span>
                                }>
                                <Menu.Item><Link to="/editor">富文本</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="sub4">
                                <Link to="/card">
                                    <Icon type="file-text" />
                                    <span>卡片</span>
                                </Link>
                            </Menu.Item>
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
