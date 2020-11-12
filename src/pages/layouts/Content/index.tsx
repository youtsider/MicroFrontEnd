import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect, SettingModelState } from 'umi';
import {
  getNavTemplate,
  getContentTemplate,
  getActionTemplate,
  handleBindClick,
	handleClick,
	handleDrag
} from '@/utils/comhelper';

import { ContentComponentProps } from './index.d';

import './index.less';

const { Content } = Layout;

const ContentComponent: React.FC<ContentComponentProps> = (
  props: ContentComponentProps,
) => {
  let tabs = `
		<div class='tabs'>
			<div class="nav" id="nav">
			</div>
			<div class="content" id="content">
			</div>
		</div>
	`;

  useEffect(() => {
    // 创建tabs容器节点
    let body: any = document.getElementById('content-body');
    let node = document.createElement('div');
    node.style.height = '100%';
    node.innerHTML = tabs;
    node.id = 'tempElement';
    body.appendChild(node);

    // 创建tabs
    let initTabs: any = localStorage.getItem('tabs');
    initTabs = JSON.parse(initTabs);

    initTabs.forEach((item: any) => {
      let unique = new Date().getTime();
      let nav = getNavTemplate(item, unique);
      let content = getContentTemplate(item, unique);
      document.getElementById('nav')?.appendChild(nav);
      document.getElementById('content')?.appendChild(content);
    });
  }, []);

  // 根据tabs长度变化重新生成操作按钮
  useEffect(() => {
    if (document.getElementsByClassName('nav-action-container')[0]) {
      document
        .getElementById('nav')
        ?.removeChild(
          document.getElementsByClassName('nav-action-container')[0],
        );
    }
    if (props.setting.tabs.length > 1) {
      let action = getActionTemplate();
      document.getElementById('nav')?.appendChild(action);
    }
  }, [props.setting.tabs.length]);

  // 绑定切换tab事件和删除tab事件
  useEffect(() => {
    handleBindClick(handleMenuSelected);
    // 绑定删除tabs的点击事件
    document.body.onclick = (e: any) => {
      if (e.target.className === 'yy-close') {
        let reg = /nav\-tab\-.*/g;
        let index = e.target.parentNode.className.match(reg)[0].split('-')[2];

        document
          .getElementById('nav')
          ?.removeChild(
            document.getElementsByClassName(`nav-container-${index}`)[0],
          );
        document
          .getElementById('content')
          ?.removeChild(
            document.getElementsByClassName(`content-container-${index}`)[0],
          );
        // 删除缓存中tabs 数组
        let tabs: any = localStorage.getItem('tabs');
        tabs = JSON.parse(tabs);
        let id: any = e.target.parentNode.id;
        // 找到删除项在tabs中的位置 并确定下一个选中项的位置
        let indx = tabs.findIndex((item: any) => item.id === id);
        if (indx === tabs.length - 1) {
          indx = indx - 1;
        } else {
          indx = indx + 1;
        }
        let nextSelectedId = tabs[indx].id;
        let tmpNode: any = document.getElementById(nextSelectedId);
        tmpNode.click();
        tabs = tabs.filter((item: any) => item.id !== id);
        props.dispatch({
          type: 'setting/save',
          state: {
            tabs,
          },
        });
        localStorage.setItem('tabs', JSON.stringify(tabs));
        // 只有一个tabs时 不显示close按钮
        if (tabs.length === 1) {
          tmpNode.getElementsByClassName('yy-close')[0].style.display = 'none';
        }
      }
    };
  }, []);

  // 选中默认选中项
  useEffect(() => {
    let tabs: any = localStorage.getItem('tabs');
    tabs = JSON.parse(tabs);
    let selectedId = tabs[tabs.length - 1].id;
    handleClick(selectedId, handleMenuSelected);
  }, []);

  // 删除当前和删除所有按钮
  useEffect(() => {
    if (document.getElementsByClassName('nav-action-container')[0]) {
      let action: any = document.getElementById('nav-action-icon');
      let popover: any = document.getElementById('nav-action-popover');
      let closeCurrent: any = document.getElementById(
        'nav-action-close-current',
      );
      let closeAll: any = document.getElementById('nav-action-close-all');
      action.onmouseover = () => {
        let position = action.getBoundingClientRect();
        popover.style.display = 'block';
        popover.style.top = `${position.y + 25}px`;
        popover.style.left = `${position.x}px`;
      };
      action.onmouseout = () => {
        popover.style.display = 'none';
      };
      popover.onmouseover = () => {
        popover.style.display = 'block';
      };
      popover.onmouseout = () => {
        popover.style.display = 'none';
      };
      closeCurrent.onclick = () => {
        let id = props.setting.tabsSelected.substring(1);
        let close: any = document.getElementById(id)!.children[1];
        close.click();
      };
      closeAll.onclick = () => {
        let id = props.setting.tabsSelected.substring(1);
        let tabs: any = localStorage.getItem('tabs');
        tabs = JSON.parse(tabs);
        tabs.forEach((item: any) => {
          if (item.id !== id) {
            let close: any = document.getElementById(item.id)!.children[1];
            close.click();
          }
        });
      };
    }
  }, [props.setting]);

  // 绑定拖拽事件
  useEffect(() => {
		handleDrag()
  }, []);

  const handleMenuSelected = (id: any) => {
    let key = '/' + id;
    if (props.onSelected) props.onSelected(key);
  };

  return (
    <Content>
      <div id="content-body"></div>
    </Content>
  );
};

const connectModel = ({ setting }: { setting: SettingModelState }) => ({
  setting,
});

export default connect(connectModel)(ContentComponent);
