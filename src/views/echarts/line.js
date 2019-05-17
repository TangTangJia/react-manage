import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
export default class line extends Component {
    render() {
        return (
            <div>
                <ReactEcharts option={this.props.option} />
            </div>
        )
    }
}
