declare module jQuery {
	export interface IXHRFailFunction {
		(jqXHR: IXHR, textStatus: string, errorThrown: any): any
	}
}