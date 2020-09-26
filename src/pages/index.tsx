import React from 'react'
import { Statistic, Row, Col, Card } from 'antd'

const { Countdown } = Statistic

import StaticLine from '@/components/StaticCharts'

import styles from './index.less'

export default () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  return (
    <Row>
      <Col span={24}>
        <Card
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
          <StaticLine/>
        </Card>
      </Col>
    </Row>
  )
}
