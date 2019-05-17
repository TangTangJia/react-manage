import React, { Component } from 'react'

export default class cardInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id
        }
    }
    render() {
        return (
            <div style={{ fontSize: 18 }}>
                文章id:{this.state.id}
            </div>
        )
    }
    componentDidMount() {
        console.log(this.state.id)
    }
}
