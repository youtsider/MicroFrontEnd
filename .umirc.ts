import { defineConfig } from 'umi';

export default defineConfig({
	title: '鲸鱼系统-赛盒ERP',
	dva: {
    immer: true,
    hmr: false,
	},
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: routes
});
