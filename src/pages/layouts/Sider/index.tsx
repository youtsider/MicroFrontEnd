import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { connect, SettingModelState, Loading } from 'umi';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import MenuComponents from '@/pages/layouts/MenuComponent';
import logo4 from '@/assets/logo4.png';
import logo5 from '@/assets/logo5.png';
import { SiderProps } from './index.d';
import styles from './index.less';

const { Sider } = Layout;

const SiderComponent: React.FC<SiderProps> = (props: SiderProps) => {
  const handleCollapse = () => {
    props.dispatch({
      type: 'setting/save',
      state: {
        collapse: !props.setting.collapse,
      },
    });
    let headerNode: any = document.getElementsByClassName(
      'ant-layout-header',
		)[0];
    if (!props.setting.collapse) {
			headerNode.style.display = 'none';
    } else {
			headerNode.style.display = 'block';
    }
  };

  return (
    <Sider
      collapsed={props.setting.collapse}
      trigger={null}
      className={classNames(styles['sider'], {
        [styles['sider-collapsed']]: props.setting.collapse,
      })}
    >
      {props.setting.collapse && (
        <div style={{ textAlign: 'center', padding: 10 }}>
          <img src={props.setting.logo === 1 ? logo4 : logo5} />
        </div>
      )}
      <MenuComponents />
      {props.setting.collapse ? (
        <MenuUnfoldOutlined
          style={{ color: '#666666' }}
          className={styles['sider-icon']}
          onClick={handleCollapse}
        />
      ) : (
        <MenuFoldOutlined
          style={{ color: '#666666' }}
          className={styles['sider-icon']}
          onClick={handleCollapse}
        />
      )}
    </Sider>
  );
};

const connectModel = ({ setting }: { setting: SettingModelState }) => ({
  setting,
});

export default connect(connectModel)(SiderComponent);
