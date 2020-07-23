import React from 'react'
import { Link, } from 'umi'
// Icon库
import * as Icon from '@ant-design/icons'

export default function header (menuItemProps: any, defaultDom: any) {
  // console.log('menuitems', menuItemProps, defaultDom)
  // console.log(menuItemProps, defaultDom)
  let icon = menuItemProps.iconName
  if (!Icon[icon]) {
    icon = 'QuestionOutlined'
  }
  return <Link to={menuItemProps.path || '/'}>
    {React.createElement(
      Icon[icon],
      {
        style: { },
      }
    )}
    {defaultDom}
  </Link>
}
