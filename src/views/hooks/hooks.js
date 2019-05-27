import React, { useState, useEffect } from 'react'
import { Menu, Dropdown, Button, Icon } from 'antd';
import $http from '../../request/api.js'

function Down() {
    const [menus, setMenu] = useState([])
    const [title, setTitle] = useState('城市列表')
    useEffect(() => {
        $http.getMenus().then(res => {
            console.log(res)
            setMenu(res.data.list)
        })
    }, []) // 第二个参数用来优化Effect
    const menu = (
        <Menu>
            {menus.map((item, index) => {
                return <Menu.Item key={index + 1} onClick={() => { setTitle(item) }}>
                    <Icon type="bank" />
                    {item}
                </Menu.Item>
            })}
        </Menu>
    )
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button>
                {title} <Icon type="down" />
            </Button>
        </Dropdown>
    )
}

export default Down