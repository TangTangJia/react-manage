import React, { Component } from 'react'
import $http from '../../request/api.js'
export default (WrappedComponent) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                list: []
            }
        }
        render() {
            return <WrappedComponent list={this.state.list} />
        }
        componentDidMount() {
            $http.getHoc().then(res => {
                console.log(res)
                this.setState({
                    list: res.data.list
                })
            })
        }
    }
    return NewComponent
}