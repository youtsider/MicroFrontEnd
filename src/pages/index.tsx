import React, { useEffect, useState } from 'react';
import { Layout, Modal } from 'antd';
import { connect, SettingModelState } from 'umi';

import Header from '@/pages/layouts/Header';
import Sider from '@/pages/layouts/Sider';
import Content from '@/pages/layouts/Content/index';

import { filterUrlParam, clearUrlParam } from '@/utils/comhelper';

import { IndexProps } from './index.d';

const layoutStyle = {
  background: '#fff',
  height: '100vh',
};

const connectModel = ({ setting }: { setting: SettingModelState }) => ({
  setting,
});

export default connect(connectModel)((props: IndexProps) => {
	const [init, setInit] = useState(false)
  useEffect(() => {
    let params = filterUrlParam(); // 获取地址栏参数
    params = params ? params : {};
    const { adminId, customerId, signature } = params;
    if (adminId && customerId && signature) {
      handleSave(params);
      localStorage.setItem('user', JSON.stringify(params));
      clearUrlParam(); // 清空地址栏参数
    } else {
      let user: any = localStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        handleSave(user);
      } else {
        Modal.error({
          title: '参数错误',
          content: '请检查参数',
        });
      }
    }
	}, []);

	useEffect(() => {
		let tabs: any = localStorage.getItem('tabs')
		tabs = tabs ? JSON.parse(tabs) : []
		if (tabs.length === 0) {
			tabs.push({
				key: '/warehouseBoard',
				title: '仓储综合看板',
				id: 'warehouseBoard',
				src: 'http://warehouseanalysis.irobotbox.com/'
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

  useEffect(() => {
    window.addEventListener('message', receiveMessage, false);
  }, []);

  const receiveMessage = (event: any) => {
    if (Object.keys(event.data).length !== 0) {
			let navNode: any = document.getElementById('nav');
			let contentNode: any = document.getElementById('content');
      let headerNode: any = document.getElementsByClassName(
        'ant-layout-header',
      )[0];
      let siderNode: any = document.getElementsByClassName(
        'ant-layout-sider',
      )[0];
      if (event.data.isFull) {
        navNode.style.display = 'none';
				headerNode.style.display = 'none';
				contentNode.style.height = '100vh';
        if (siderNode) {
          siderNode.style.display = 'none';
				}
      } else {
				props.dispatch({
					type: 'setting/save',
					state: {
						collapse: false
					}
				})
				navNode.style.display = 'flex';
				headerNode.style.display = 'block';
				contentNode.style.height = 'calc(100% - 40px)';
        if (siderNode) {
          siderNode.style.display = 'block';
        }
      }
    }
  };

  const handleSave = (auth: any) => {
    props.dispatch({
      type: 'setting/save',
      state: {
        auth: auth,
      },
    });
	};

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
        {props.setting.layout === 'sidemenu' && <Sider />}
        <Content onSelected={handleSelected} />
      </Layout>
    </Layout>
  );
});
