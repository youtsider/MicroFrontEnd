import React from 'react'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { createLogger } from 'redux-logger';
import { message, ConfigProvider } from 'antd';

export const dva = {
  config: {
    onAction: createLogger(),
    onError(e: Error) {
      message.error(e.message, 3);
    },
  },
}

export function rootContainer(container: any) {
  return React.createElement(ConfigProvider, { locale: zh_CN }, container);
}
