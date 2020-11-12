export const routes =  [
  {
    path: '/cxc',
		name: '数字化运营',
		icon: 'Shuzihuayunying',
    component: '@/pages/index',
    routes: [
      {
        path: '/zc',
        name: '供应链能力分析',
        component: '@/pages/index',
        routes: [
          {
            path: '/warehouseBoard',
						name: '仓储综合看板',
						icon: 'Cangkuguanlikufangguanli',
          },
          {
						path: '/yanfa',
						icon: 'Xinchanpinyanfa',
						name: '产品研发综合看板',
						disabled: true
					},
					{
						path: '/kucunfenxi',
						icon: 'KuncunFenxi',
						name: '库存分析',
						disabled: true
          },
        ],
      },
      {
        path: '/vvb',
        name: 'Amazon运营能力分析',
        component: '@/pages/index',
        routes: [
          {
						path: '/amazonSalesStatistics',
						icon: 'Xiaoshoufenxi',
            name: '即时销售分析',
          },
          {
						path: '/axshare',
						icon: 'Chanpinbiaoxian',
						name: '产品即时表现',
						disabled: true
          },
          {
						path: '/as',
						icon: 'Dianpuyunyingshuju',
						name: '店铺运营数据分析',
						disabled: true
          },
          {
						path: '/zx',
						icon: 'ZongheKanban',
						name: '店铺综合看板指标',
						disabled: true
          },
        ],
      },
      {
        path: '/sdfs',
        name: '销售能力分析',
        component: '@/pages/index',
        routes: [
          {
						path: '/salesAnalysis',
						icon: 'Xiaoshoudingdan',
						name: '销售分析',
					},
					{
						path: '/qqqqqqq',
						icon: 'SkuFenxi',
						name: 'SKU分析',
						disabled: true
          },
        ],
      },
      {
        path: '/bb',
        name: '经营数据分析',
        component: '@/pages/index',
        routes: [
          {
            path: '/rf',
						name: '订单利润',
						icon: 'Dingdanlirun',
						disabled: true
          },
          {
            path: '/vf',
						name: '产品利润',
						icon: 'Chanpinlirunfenxi',
						disabled: true
          },
        ],
      },
      {
        path: '/tr',
        name: '运营风控',
        component: '@/pages/index',
        routes: [
          {
						path: '/vbg',
						icon: 'Fengkong',
						name: '风控策略',
						disabled: true
          },
        ],
      },
      {
				path: '/nh',
				name: '预留二级菜单',
				icon: 'Fengkong',
				disabled: true
      },
    ],
  },
  {
		path: '/xxxxx',
		icon: 'Zhinengxuanpin',
		name: '智能选品',
		disabled: true
		// routes: [
		// 	{
		// 		path: '/xxxxx',
		// 		name: '测试',
		// 	},
		// ],
	},
	// {
	// 	path: '/3333',
	// 	icon: 'Zhinengxuanpin',
	// 	name: '鲸鱼智能选品',
	// 	routes: [
	// 		{
	// 			path: '/xxxxx',
	// 			name: '测试',
	// 			icon: 'Zhinengxuanpin',
	// 		},
	// 	],
	// },
];

export const routeCollapsed =  [
  {
    path: '/cxc',
		name: '运营',
		icon: 'Shuzihuayunying',
    component: '@/pages/index',
    routes: [
      {
        path: '/zc',
        name: '供应链能力分析',
        component: '@/pages/index',
        routes: [
          {
            path: '/warehouseBoard',
						name: '仓储综合看板',
						icon: 'Cangkuguanlikufangguanli',
          },
          {
						path: '/yanfa',
						icon: 'Xinchanpinyanfa',
						name: '产品研发综合看板',
						disabled: true
					},
					{
						path: '/kucunfenxi',
						icon: 'KuncunFenxi',
						name: '库存分析',
						disabled: true
          },
        ],
      },
      {
        path: '/vvb',
        name: 'Amazon运营能力分析',
        component: '@/pages/index',
        routes: [
          {
						path: '/amazonSalesStatistics',
						icon: 'Xiaoshoufenxi',
            name: '即时销售分析',
          },
          {
						path: '/axshare',
						icon: 'Chanpinbiaoxian',
						name: '产品即时表现',
						disabled: true
          },
          {
						path: '/as',
						icon: 'Dianpuyunyingshuju',
						name: '店铺运营数据分析',
						disabled: true
          },
          {
						path: '/zx',
						icon: 'ZongheKanban',
						name: '店铺综合看板指标',
						disabled: true
          },
        ],
      },
      {
        path: '/sdfs',
        name: '销售能力分析',
        component: '@/pages/index',
        routes: [
          {
						path: '/salesAnalysis',
						icon: 'Xiaoshoudingdan',
						name: '销售分析',
					},
					{
						path: '/qqqqqqq',
						icon: 'SkuFenxi',
						name: 'SKU分析',
						disabled: true
          },
        ],
      },
      {
        path: '/bb',
        name: '经营数据分析',
        component: '@/pages/index',
        routes: [
          {
            path: '/rf',
						name: '订单利润',
						icon: 'Dingdanlirun',
						disabled: true
          },
          {
            path: '/vf',
						name: '产品利润',
						icon: 'Chanpinlirunfenxi',
						disabled: true
          },
        ],
      },
      {
        path: '/tr',
        name: '运营风控',
        component: '@/pages/index',
        routes: [
          {
						path: '/vbg',
						icon: 'Fengkong',
						name: '风控策略',
						disabled: true
          },
        ],
      },
      {
				path: '/nh',
				name: '预留二级菜单',
				icon: 'Fengkong',
				disabled: true
      },
    ],
  },
  {
		path: '/xxxxx',
		icon: 'Zhinengxuanpin',
		name: '选品',
		disabled: true
		// routes: [
		// 	{
		// 		path: '/xxxxx',
		// 		name: '测试',
		// 	},
		// ],
	},
	// {
	// 	path: '/3333',
	// 	icon: 'Zhinengxuanpin',
	// 	name: '鲸鱼智能选品',
	// 	routes: [
	// 		{
	// 			path: '/xxxxx',
	// 			name: '测试',
	// 			icon: 'Zhinengxuanpin',
	// 		},
	// 	],
	// },
];

