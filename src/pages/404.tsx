import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'umi';

export default function () {
	return (
		<Result
			status="500"
			title="页面发生错误"
			subTitle="您访问的页面不存在或者该页面您无权限访问，请联系管理员进行情况核实和报告。"
			extra={
				<Button 
					type="primary" 
					size="large"
				>
					<Link to="/">返回首页</Link>
				</Button>
			}
		/>
	)
}