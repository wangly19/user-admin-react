import React from 'react';
import { Row, Col } from 'antd';
import { BugTwoTone, NotificationTwoTone, CodeTwoTone } from '@ant-design/icons';
import classes from './index.less';

function NavigAction() {
  const moduleList = [
    { key: 'BugTwoTone', icon: <BugTwoTone className={ classes.navIcon }/> },
    { key: 'NotificationTwoTone', icon: <NotificationTwoTone className={ classes.navIcon }/> },
    { key: 'CodeTwoTone', icon: <CodeTwoTone className={ classes.navIcon }/> }
  ]
  return (
    <div >
      <Row>
        {
          moduleList.map(el => {
            return <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 1 }} key={ el.key }>
              <div className={ classes.navGrid }>
                { el.icon }
                <p>1111 </p>
              </div>
            </Col>
          })
        }
      </Row>
    </div>
  )
}

export default NavigAction