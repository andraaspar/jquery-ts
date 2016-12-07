declare module jQuery {
	export interface IWrapFunctionString {
		(index: number): string
	}
	export interface IWrapFunctionInstance {
		(index: number): IInstance
	}
}