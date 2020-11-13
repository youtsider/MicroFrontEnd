import { Effect, Reducer } from 'umi';

const dictUrl = {

};

export interface SettingModelState {
	theme: string
	tabs: any
	collapse: boolean
	tabsSelected: string
	txtColor: string
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
		theme: 'dark',
		tabs: [{
			key: '/baidu',
			title: 'baidu'
		}],
		tabsSelected: '/baidu',
		txtColor: '#fff',
		collapse: false,
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
