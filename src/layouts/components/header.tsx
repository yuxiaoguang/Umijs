import React from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined, } from '@ant-design/icons'
import Breadcrumb from './breadcrumb'

export default function header (props: any) {
  console.log('header', props)
  return (
    <div className='ant-pro-global-header'>
      <span className='ant-pro-global-header-trigger' onClick={props.onClick}>
        {React.createElement(
          props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
          }
        )}
      </span>
      {/* {'<<= 自定义渲染折叠按钮'} */}
      <Breadcrumb {...props} />
    </div>
  )
}
