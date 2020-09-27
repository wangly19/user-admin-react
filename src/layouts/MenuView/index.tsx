import React, { FC } from 'react';
import { useRouteMatch, useModel } from 'umi';

import { Menu, Dropdown, Button } from 'antd';
const { SubMenu } = Menu;

import router, { IRouterConfig } from '@/config/defineRoutes';
import { DownOutlined } from '@ant-design/icons';
import Style from './index.less';

const MenuView: FC<any> = () => {
  const { initialState } = useModel('@@initialState');
  const { newRoutes } = initialState;
  console.log(newRoutes)

  const routerSubMenu = (subRouters: Array<IRouterConfig>) => {
    return (
      <Menu defaultSelectedKeys={ ['/'] }>
        {
          subRouters.map((el: IRouterConfig) => {
             if (el.routes && el.routes.length > 0) {
               return (
                <SubMenu title={ el.title } key={ el.path }>
                  { routerSubMenu(el.routes) }
                </SubMenu>
               )
             } else {
               return (
               <Menu.Item key={ el.path }>{ el.title }</Menu.Item>
               )
             }
          })
        }
      </Menu>
    )
  };

  return (
    <div className={Style.headerMenu}>
      {newRoutes.map((router: IRouterConfig) => {
        if (!router.meta?.hideMenu) {
          return router.routes && router.routes.length > 1 ? (
            <Dropdown
              key={router.path}
              placement="topCenter"
              arrow={ true }
              overlay={() => {
                return routerSubMenu(router.routes || []);
              }}
            >
              <Button
                type="text"
                style={{ color: useRouteMatch().path === router.path ? '#40a9ff' : '#FFF' }}
              >
                {router.title} <DownOutlined />
              </Button>
            </Dropdown>
          ) : (
            <Button
              type="text"
              key={ router.path }
              style={{ color: '#FFF' }}
            >
              {router.title}
            </Button>
          );
        }
      })}
    </div>
  );
};

export default MenuView;
