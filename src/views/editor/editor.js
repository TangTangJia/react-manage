import React, { Component } from 'react'
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import { Button } from 'antd';
export default class editor extends Component {
    state = {
        editorState: '', // 设置编辑器初始内容
        outputHTML: ''
    }
    render() {
        // const { editorState, outputHTML } = this.state
        return (
            <div>
                <BraftEditor onChange={this.handleChange} />
                <Button type="primary" onClick={this.send}>发布</Button>
            </div>
        )
    }
    handleChange = (editorState) => {
        this.setState({
            editorState: editorState
        })
    }
    send = () => {
        this.setState({
            outputHTML: this.state.editorState.toHTML()
        }, () => {
            this.props.getContent(this.state.outputHTML) // 将数据传给父组件
        })
    }
}
