import React from 'react'
import classes from  './index.less';
import { SmileTwoTone } from '@ant-design/icons'

export default function LayoutToolBars() {
	return (
		<div className={ classes.layoutHeader }>
			<div className={ classes.logo }>
				<SmileTwoTone />
			</div>
		</div>
	)
}
