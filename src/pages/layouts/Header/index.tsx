import React from 'react';
import { Layout } from 'antd';
import { connect, SettingModelState } from 'umi';

import { HeaderProps } from './index.d';
import styles from './index.less';

const { Header } = Layout;

const HeaderComponent: React.FC<HeaderProps> = (props: HeaderProps) => {

  return (
    <Header>
      <div className={styles['header']}>
        <div className={styles['header-left']}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
            width={36}
            height={36}
          />
					<span className={styles['header-txt']}>微前端方案</span>
        </div>
      </div>
    </Header>
  );
};

const connectModel = ({ setting }: { setting: SettingModelState }) => ({
  setting,
});

export default connect(connectModel)(HeaderComponent);
