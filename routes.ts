export const routes =  [
  {
    path: '/yicaidan',
		name: '一菜单',
		icon: 'Yicaidan',
    component: '@/pages/index',
    routes: [
      {
        path: '/erjicaidan',
        name: '二级菜单',
        component: '@/pages/index',
        routes: [
          {
            path: '/baidu',
						name: '百度',
						icon: 'Baidu',
          },
          {
						path: '/juejin',
						icon: 'Juejin',
						name: '掘金',
					},
        ],
      },
      {
				path: '/bokeyuan',
				name: '博客园',
				icon: 'Bokeyuan',
      },
    ],
  },
  {
		path: '/ercaidan',
		icon: 'Ercaidan',
		name: '二菜单',
		disabled: true
	}
];