declare module jQuery {
	export interface IGetSuccessFunction {
		(data: any, textStatus: string, jqXHR: IXHR): any
	}
}