import React from 'react'
import { Breadcrumb, } from 'antd'
import { useRouteMatch, Link, } from 'umi'

export default function breadcrumb (props: any) {
  console.log('breadcrumb', props)
  const match = useRouteMatch()
  console.log('match', JSON.stringify(match.params))
  return (
    <Breadcrumb>
      <Breadcrumb.Item>首页</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to='/page1'>页面1</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
