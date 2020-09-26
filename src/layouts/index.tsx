import React, { useState, useRef } from 'react';
import { IRouteComponentProps } from 'umi';
import classes from './index.less';
import KeepAlive from './KeepAlive'

// @components 全局导航
import LayoutToolBars from './LayoutToolBar';

export default ({ children, location, route, history, match }: IRouteComponentProps) => {
	return (
		<div className={ classes.layout }>
			<div className={ classes.layoutContainer }>
				{ route.name }
				{ children }
			</div>
			<LayoutToolBars />
		</div>
	)
};