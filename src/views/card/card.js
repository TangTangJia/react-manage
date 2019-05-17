import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import $http from '../../request/api.js'
import { spawn } from 'child_process';
const { Meta } = Card;
export default class card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                <Row gutter={16}>
                    {this.state.data.map((item, index) => {
                        return <Col span={6} key={index}>
                            <Card title={item.title} extra={<a href={"/cardInfo/" + (index + 1)}>More</a>} style={{ width: 300 }}>
                                {
                                    item.content.map((subItem, i) => {
                                        return <p key={i}>{subItem}</p>
                                    })
                                }
                            </Card>
                        </Col>
                    })
                    }
                </Row>
            </div >
        )
    }
    componentDidMount() {
        $http.getCard().then(res => {
            console.log(res)
            this.setState({
                data: res.data.list
            })
        })
    }
}
