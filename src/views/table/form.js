import React, { Component } from 'react'
import { Form, Input } from 'antd';
class form extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('name')(
                        <Input placeholder="姓名" />
                    )
                    }
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('age')(
                        <Input placeholder="年龄" />
                    )
                    }
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('gender')(
                        <Input placeholder="性别" />
                    )
                    }
                </Form.Item>
            </Form>
        )
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         // this.props.onSubmit(err, values);
    //     })
    // }
}
const editForm = Form.create()(form);
export default editForm