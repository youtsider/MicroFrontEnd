import { Effect, Reducer } from 'umi';

const dictUrl = {

};

export interface SettingModelState {
	layout: string
	theme: string
	tabs: any
	auth: any
	collapse: boolean
	tabsSelected: string
	txtColor: string
	logo: number
}

export interface SettingModelType {
  namespace: 'setting';
  state: SettingModelState;
  effects: {
  };
  reducers: {
    save: Reducer<SettingModelState>;
  };
}

const SettingModel: SettingModelType = {
  namespace: 'setting',

  state: {
		layout: 'topmenu',
		theme: 'dark',
		tabs: [{
			key: '/warehouseBoard',
			title: '仓储综合看板'
		}],
		tabsSelected: '/warehouseBoard',
		txtColor: '#fff',
		auth: {
			// adminId: 2,
			// customerId: 1
			// signature: 'irobotbox'
		},
		collapse: false,
		logo: 1
  },

  effects: {
    
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.state,
      };
    }
  }
};

export default SettingModel;
