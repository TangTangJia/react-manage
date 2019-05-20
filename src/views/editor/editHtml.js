import React, { Component } from 'react'
import Editor from './editor.js'
export default class editHtml extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }
    render() {
        return (
            <div>
                <Editor getContent={this.getContent} />
                <h2>输出内容</h2>
                <div className="output-content" dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            </div>
        )
    }
    getContent = (content) => {  // 接收子组件数据
        console.log(content)
        this.setState({
            content: content
        })
    }
}
