import React, { Component } from 'react'
import { Tag } from 'antd';
import wrapWithComponent from './hoc.js'
class tags extends Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map((item, index) => {
                        return <Tag color="magenta" key={index}>{item.title}</Tag>
                    })
                }
            </div>
        )
    }
}
const Tags = wrapWithComponent(tags)
export default Tags
