declare module jQuery {
	export interface ILoadCompleteFunction {
		(responseText: string, textStatus: string, jqXHR: IXHR): any
	}
}