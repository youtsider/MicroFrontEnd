import { SettingModelState, Dispatch } from 'umi'

interface ContentProps {
  setting: SettingModelState
	dispatch: Dispatch
}

interface ContentComponentProps {
	onSelected: (x?: any) => void
	setting: SettingModelState
	dispatch: Dispatch
}

export {
	ContentProps,
	ContentComponentProps
}