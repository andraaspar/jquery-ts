declare module jQuery {
	export interface IXHRDoneFunction {
		(data: any, textStatus: string, jqXHR: IXHR): any
	}
}