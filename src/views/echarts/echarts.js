import React, { Component } from 'react'
import { Divider } from 'antd';
import Bar from './bar.js'
import Line from './line.js'
const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}
const lineOption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}
export default class echarts extends Component {
    render() {
        return (
            <div>
                <Bar option={option} />
                <Divider />
                <Line option={lineOption} />
            </div>
        )
    }
}
