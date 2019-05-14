import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd';
import { Modal, Button } from 'antd';
import $http from '../../request/api.js'
export default class wallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '性别',
                    dataIndex: 'gender',
                    key: 'gender',
                },
                {
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '操作',
                    key: 'action',
                    render: () => (
                        <span>
                            <a onClick={this.edit}>编辑</a>
                            <Divider type="vertical" />
                            <a onClick={this.delete}>删除</a>
                        </span>
                    )
                }
            ],
            visible: false, // 控制弹框显示
        }
    }
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
    componentDidMount() {
        $http.getData().then(res => {
            console.log(res)
            this.setState({
                data: res.data.list
            })
        })
    }
    delete = () => {
        console.log('删除')
    }
    edit = () => {
        this.setState({
            visible: true
        })
    }
    handleOk = () => {

    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
}
