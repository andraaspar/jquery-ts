declare module jQuery {
	export interface IAppendFunctionString {
		(index: number, html: string): string
	}
	export interface IAppendFunctionElement {
		(index: number, html: string): Element
	}
	export interface IAppendFunctionIInstance {
		(index: number, html: string): IInstance
	}
}