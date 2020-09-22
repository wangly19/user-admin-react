import React, { FC, useState } from 'react';
import { history } from 'umi';
import { ReactComponent as LoginSVG } from '@/assets/icon/logo.svg';
import classes from './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import rules from '@/rules/login';
import { userLogin } from '@/api/login'
import Storage from '@/utils/storage';
const { usernameRule, passwordRule } = rules
const LoginPage: FC = () => {
  // loading 事件集
  const [loadings, setLoadings] = useState<Array<boolean>>([false])

  /**
   * 登录点击事件
   * @param status 状态 成功 | 失败
   * @param data Form表单数据
   */
  const onLoginSubmit = async (status: string, values: any) => {
    if (status === 'success') {
      setLoadings([true])
      try {
        const data: any = await userLogin(values)
        Storage.setData('token', data.token)
      } catch (error) {
      } finally {
        setLoadings([false])
      }
    } else {
      // 失败
    }
  }

  return (
    <div className={ classes.loginView }>
      <Form
        name="normal_login"
        scrollToFirstError={ true }
        className={ classes.loginForm }
        initialValues={{ remember: true }}
        onFinish={value => onLoginSubmit('success', value)}
        onFinishFailed= { value => onLoginSubmit('error', value) }
      >
      <Form.Item
        name="username"
        rules={usernameRule}
      >
        <Input
          prefix={<UserOutlined 
          className="site-form-item-icon" />}
          placeholder="请输入用户名" 
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={passwordRule}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>15天内记住账号</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          找回密码？
        </a>
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary"
          block 
          size="large" 
          htmlType="submit"
          loading={ loadings[0] }
          disabled={ loadings[0] }
        >
          登录
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};

// interface IndexPageConnect {
//   index: IndexModelState,
//   loading: Loading
// }


// export default connect(({ index, loading }: IndexPageConnect) => ({
//   index,
//   loading: loading.models.index,
// }))(
//   IndexPage
// );

export default LoginPage