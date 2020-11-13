import React from 'react';
import { Layout } from 'antd';
import { connect, SettingModelState } from 'umi';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import MenuComponents from '@/pages/layouts/MenuComponent';
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
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
            width={36}
            height={36}
          />
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
