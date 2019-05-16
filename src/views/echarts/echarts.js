import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
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
export default class echarts extends Component {
    render() {
        return (
            <div>
                <ReactEcharts option={option} />
            </div>
        )
    }
}
