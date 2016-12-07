declare module jQuery {
	export interface IXHRAlwaysFunction {
		(dataOrJQXHR: any, textStatus: string, jqXHROrErrorThrown: any): any
	}
}