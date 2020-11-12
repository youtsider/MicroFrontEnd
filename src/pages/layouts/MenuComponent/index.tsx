import React from 'react';
import { Menu } from 'antd';
import { connect, SettingModelState } from 'umi';
import classNames from 'classnames';

import * as Icon from '@/common/icon.js';
import { layoutMenu, configs } from '@/common/configs';
import { getNavTemplate, getContentTemplate, handleBindClick, handleDrag } from '@/utils/comhelper'

import { MenuComponentsProps } from './index.d';
import styles from './index.less';
import { routes } from '../../../../routes';

const { SubMenu } = Menu;

const MyIcon = (props: any) => (
  <span className={styles['span-icon']} style={{ marginRight: props.marginRight }}>
    {Icon[props.type]({
      width: 14,
      height: 14,
      color: props.color,
    })}
  </span>
);

const getMargin = (bool: boolean) => bool ? 0 : 10

const MenuComponents: React.FC<MenuComponentsProps> = (
  props: MenuComponentsProps,
) => {
	// 增加tab
  const handleClick = (e: any) => {
    const { item: { props: { children = [] } = {} } = {}, key } = e;
    let parma: any = {
      title: children[1].props.children,
			key,
			id: key.substr(1, key.length-1),
			src: configs[key]
		};
		props.dispatch({
			type: 'setting/save',
			state: {
				tabsSelected: key
			}
		})
		// 存入缓存
		let tabs: any = localStorage.getItem('tabs')
		tabs = JSON.parse(tabs)
		// 当前界面存在此菜单时 界面选中当前菜单
		let idx = tabs.findIndex((item: any) => item.key === key)
		if (idx !== -1) {
			document.getElementById(tabs[idx].id)?.click()
			return
		}
		tabs.push(parma)
		props.dispatch({
			type: 'setting/save',
			state: {
				tabs
			}
		})
		localStorage.setItem('tabs', JSON.stringify(tabs))
		// 创建tabs-nav以及tabs-content
		let unique = new Date().getTime()
		let nav = getNavTemplate(parma, unique)
		let content = getContentTemplate(parma, unique)
		document.getElementById('nav')?.appendChild(nav);
		document.getElementById('content')?.appendChild(content);
		// 给所有的tabs-nav绑定点击事件
		handleBindClick(handleMenuSelected);
		// 绑定拖拽事件
		handleDrag();
		// 默认选中当前添加项
		document.getElementById(tabs[tabs.length - 1].id)?.click()
	};

	const handleMenuSelected = (id: any) => {
		let key = '/' + id
		props.dispatch({
      type: 'setting/save',
      state: {
        tabsSelected: key,
      },
    });
	};

  return (
    <Menu
      onClick={handleClick}
      mode={layoutMenu[props.setting.layout]}
      triggerSubMenuAction="hover"
      className={classNames(styles['sider-menu'], {
        [styles['sider-menu-collapsed']]: props.setting.collapse,
      })}
      selectedKeys={[props.setting.tabsSelected]}
    >
      {routes.map((item: any) => {
        if (item.routes && item.routes.length !== 0) {
          return (
            <SubMenu
              key={item.path}
							title={item.name}
							popupClassName={props.setting.collapse ? 'yy-sub-menu' : 'collapse-sub-menu'}
              icon={
                <MyIcon
                  type={item.icon}
									color={props.setting.txtColor}
									marginRight={getMargin(props.setting.collapse)}
                />
              }
            >
              {item.routes.map((item1: any) => {
                if (item1.routes && item1.routes.length !== 0) {
                  return (
                    <Menu.ItemGroup title={item1.name} key={item1.path}>
                      {item1.routes.map((item2: any) => (
                        <Menu.Item
                          icon={
                            <MyIcon
															type={item2.icon}
															marginRight={10}
                            />
                          }
                          key={item2.path}
                          disabled={item2.disabled}
                        >
                          {item2.name}
                        </Menu.Item>
                      ))}
                    </Menu.ItemGroup>
                  );
                }
                return (
                  <Menu.Item
                    icon={
                      <MyIcon
												type={item1.icon}
												marginRight={10}
                      />
                    }
                    key={item1.path}
										disabled={item1.disabled}
                  >
                    {item1.name}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        }
        return (
          <Menu.Item
            icon={
              <MyIcon
                type={item.icon}
								color={props.setting.txtColor}
                marginRight={getMargin(props.setting.collapse)}
              />
            }
            key={item.path}
            disabled={item.disabled}
          >
            {item.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

const connectModel = ({ setting }: { setting: SettingModelState }) => ({
  setting,
});

export default connect(connectModel)(MenuComponents);
