/* 全局布局 */
import React, { useState, useEffect, } from 'react'
import ProLayout from '@ant-design/pro-layout'
// logo文件
import Logo from '@/assets/images/logo.svg'
import { Button, } from 'antd'
// 自定义组件
import Header from './components/header'
import MenuItems from './components/menuItems'
import DefaultConfig from './components/config.layout'

const route = {
  path: '/',
  component: '@/layouts/index',
  name: '首页',
  routes: [
    { exact: false, path: 'page1', component: 'page1', name: '页面1', iconName: 'SnippetsOutlined', },
    { exact: true, path: 'page2', component: 'page2', name: '页面2', iconName: 'HighlightOutlined', },
  ],
}

export default function GlobalLayout (props: any) {
  // slider折叠状态
  const [ collapsed, setCollapsed, ] = useState(false)
  // dom初始化状态
  const [ mounted, setMounted, ] = useState(false)

  console.log('routes', props.routes)

  useEffect(() => {
    console.log('props', props)
    // 初始化默认折叠
    setTimeout(() => {
      setCollapsed(true)
      setTimeout(() => {
        // 延迟显示，fix折叠导致的图标错位
        setMounted(true)
      }, 300)
    }, 10)
  }, [])

  return (
    <ProLayout
      title='安全风控平台'
      style={{ visibility: mounted ? 'visible' : 'hidden', }}
      logo={Logo}
      collapsed={collapsed}
      headerRender={
        () => {
          return <Header collapsed={collapsed} onClick={() => { setCollapsed(!collapsed) }} />
        }
      }
      route={route}
      menuItemRender={MenuItems}
      rightContentRender={() => {
        return (
          <div>
            <Button type='primary' style={{ marginRight: '10px', }}>按钮1</Button>
            <Button style={{ marginRight: '10px', }}>按钮2</Button>
            <Button style={{ marginRight: '10px', }}>按钮3</Button>
          </div>
        )
      }}
      breakpoint='xs'
      {...DefaultConfig}
    >
      {props.children}
    </ProLayout>
  )
}
