import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from "react-redux"
import * as Action from '../../redux/action'
class status extends Component {
    render() {
        const { increment, decrement } = this.props;
        return (
            <div>
                <Button type="primary" icon="plus" style={{ marginRight: 20 }} onClick={() => increment()}>增加右上角通知数量</Button>
                <Button type="primary" icon="minus" onClick={() => decrement()}>减少右上角通知数量</Button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { count: state }
}
export default connect(mapStateToProps, Action)(status);

