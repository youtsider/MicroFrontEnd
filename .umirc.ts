import { defineConfig } from 'umi';

export default defineConfig({
	title: '微前端系统',
	dva: {
    immer: true,
    hmr: false,
	},
  nodeModulesTransform: {
    type: 'none',
  },
});
