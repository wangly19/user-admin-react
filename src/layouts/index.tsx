import React, { useState, useRef } from 'react';
import { IRouteComponentProps } from 'umi';
import { Card } from 'antd'
import { RedoOutlined } from '@ant-design/icons'
import classes from './index.less';

// @components 全局导航
import LayoutToolBars from './LayoutToolBar';

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
	return (
		<div className={ classes.layout }>
			<div className={ classes.layoutContainer }>
				<Card
					type="inner"
					size="small"
          title={ route.title }
          extra={
						<RedoOutlined />
					}
        >
				{ children }
				</Card>
			</div>
			<LayoutToolBars />
		</div>
	)
};