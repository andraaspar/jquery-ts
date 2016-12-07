declare module jQuery {
	export interface IAJAXErrorFunction {
		(event: IEvent, jqXHR: IXHR, ajaxOptions: IAJAXSettings, thrownError: string): any
	}
}