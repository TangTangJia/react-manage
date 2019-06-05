import React, { Component } from 'react'
import { Modal, message, Table, Divider } from 'antd';
import EditForm from './form.js'
import $http from '../../request/api.js'
export default class wallet extends Component {
    constructor(props) {
        super(props)
        this.editForm = React.createRef()
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
                    render: (text, record) => (
                        <span>
                            <a onClick={() => { this.edit(record) }}>编辑</a>
                            <Divider type="vertical" />
                            <a onClick={this.delete}>删除</a>
                        </span>
                    )
                }
            ],
            visible: false, // 控制弹框显示
            id: null // 当前行id
        }
    }
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} rowKey={record => record.id} />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                >
                    <EditForm ref={this.editForm} />
                </Modal>
            </div>
        )
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        $http.getData().then(res => {
            console.log(res)
            this.setState({
                data: res.data.list
            })
        })
    }
    delete = () => {
        message.success('假装删除');
    }
    edit = (record) => {
        // console.log(record.id)
        this.setState({
            id: record.id
        })
        this.setState({
            visible: true
        })
    }
    // handleOk = () => {
    //     this.handleSubmit()
    // }
    handleCancel = () => {
        this.setState({
            visible: false
        })
        this.editForm.current.resetFields() // 重置表单数据
    }
    handleSubmit = () => {
        this.editForm.current.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                $http.editData(values, this.state.id).then(res => { // 因为是模拟的数据 所以修改之后会返回修改后的数据数组 和前面的首次获取数据不是同一个接口
                    console.log(res)
                    this.setState({
                        data: res.data.list,
                        visible: false
                    })
                    message.success('修改成功');
                    this.editForm.current.resetFields()
                })
            }
        });
    }
}
