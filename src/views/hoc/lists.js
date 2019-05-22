import React, { Component } from 'react'
import { List } from 'antd';
import wrapWithComponent from './hoc.js'
class lists extends Component {
    render() {
        return (
            <div>
                <List
                    style={{ marginTop: 20 }}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={item => <List.Item>{item.desc}</List.Item>}
                />
            </div>
        )
    }
}
const Lists = wrapWithComponent(lists)
export default Lists
