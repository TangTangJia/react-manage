import React, { Component } from 'react'
import { connect } from "react-redux"
import * as Action from '../../redux/action'
import { Layout, Avatar, Badge } from 'antd';
const { Header } = Layout;
class header extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#eee' }}>
                <div>
                    <span style={{ float: "right" }}>
                        <Badge count={this.props.count}>
                            <Avatar shape="square" icon="user" />
                        </Badge>
                    </span>
                </div>
            </Header>
        )
    }
}
function mapStateToProps(state) {
    return { count: state }
}
export default connect(mapStateToProps, Action)(header);

