import { SettingModelState, Dispatch } from 'umi';

interface IndexProps {
	setting: SettingModelState
	dispatch: Dispatch
}
declare global {
	interface Window { isFull: boolean; }
}

export {
	IndexProps
}