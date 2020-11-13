import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { connect, SettingModelState } from 'umi';

import Header from '@/pages/layouts/Header';
import Sider from '@/pages/layouts/Sider';
import Content from '@/pages/layouts/Content/index';

import { IndexProps } from './index.d';
import './index.less'

const layoutStyle = {
  height: '100vh',
};

const connectModel = ({ setting }: { setting: SettingModelState }) => ({
  setting
});

export default connect(connectModel)((props: IndexProps) => {
	const [init, setInit] = useState(false)

	useEffect(() => {
		let tabs: any = localStorage.getItem('tabs')
		tabs = tabs ? JSON.parse(tabs) : []
		if (tabs.length === 0) {
			tabs.push({
				key: '/baidu',
				title: '百度',
				id: 'baidu',
				src: 'http://baidu.com/'
			})
			localStorage.setItem('tabs', JSON.stringify(tabs))
		}
		props.dispatch({
			type: 'setting/save',
			state: {
				tabs
			}
		})
		setInit(true)
	}, []);

	const handleSelected = (key: string) => {
		props.dispatch({
      type: 'setting/save',
      state: {
        tabsSelected: key,
      },
    });
	}

	if (!init) return <p></p>

  return (
    <Layout style={layoutStyle}>
      <Header />
      <Layout>
			  <Sider />
        <Content onSelected={handleSelected} />
      </Layout>
    </Layout>
  );
});
