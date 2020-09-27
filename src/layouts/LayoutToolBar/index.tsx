import React, { FC } from 'react';

import Style from './index.less';

import { Row, Col } from 'antd'
import MenuView from '../MenuView'
import { 
  CodeSandboxOutlined, 
  BellOutlined, 
  UpSquareOutlined,
  SlackOutlined,
  DropboxOutlined,
  DribbbleOutlined,
  ExpandOutlined
} from '@ant-design/icons'

const LayoutToolBars: FC<{
}> = (props) => {
  return (
    <Row 
      className={ Style.layoutHeader } 
      justify="center" 
      align="middle"
    >
      
      <Col span={ 4 }>
        <CodeSandboxOutlined 
          className={ Style.icon }
        />
      </Col>
      <Col span={ 16 }>
        <MenuView/>
      </Col>
      <Col span={ 4 } className={ Style.rightIcons }>
        <SlackOutlined className={ ` ${Style.icon} ${ Style.rightIconSpace } ` } />
        <UpSquareOutlined className={ ` ${Style.icon} ${ Style.rightIconSpace } ` } />
        <ExpandOutlined className={ ` ${Style.icon} ${ Style.rightIconSpace } ` } />
        <BellOutlined className={ ` ${Style.icon} ${ Style.rightIconSpace } ` } />
        <DropboxOutlined className={ ` ${Style.icon} ${ Style.rightIconSpace } ` } />
        <DribbbleOutlined className={ ` ${Style.icon} ${ Style.rightIconSpace } ` } />
      </Col>
    </Row>
  );
}

export default LayoutToolBars