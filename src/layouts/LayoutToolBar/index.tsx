import React, { FC } from 'react';

import Style from './index.less';

import { Row, Col } from 'antd'
import MenuView from '../MenuView'
import { CodeSandboxOutlined } from '@ant-design/icons'

const LayoutToolBars: FC<{
}> = (props) => {
  return (
    <Row 
      className={ Style.layoutHeader } 
      justify="center" 
      align="middle"
    >
      
      <Col span={ 2 }>
        <CodeSandboxOutlined 
          className={ Style.icon }
        />
      </Col>
      <Col span={ 19 }>
        <MenuView/>
      </Col>
      <Col span={ 3 }>
      </Col>
    </Row>
  );
}

export default LayoutToolBars