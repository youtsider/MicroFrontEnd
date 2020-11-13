import { SettingModelState, Dispatch } from 'umi'

interface ContentComponentProps {
	onSelected: (x?: any) => void
	setting: SettingModelState
	dispatch: Dispatch
}

export {
	ContentComponentProps
}