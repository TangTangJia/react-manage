import React, { Component } from 'react'
import { Layout } from 'antd';
const { Content } = Layout;
export default class content extends Component {
    render() {
        return (
            <div>
                <Content style={{ backgroundColor: '#fff' }}>{this.props.children}</Content>
            </div>
        )
    }
}
