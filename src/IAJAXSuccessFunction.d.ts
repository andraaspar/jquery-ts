declare module jQuery {
	export interface IAJAXSuccessFunction {
		(event: IEvent, jqXHR: IXHR, ajaxOptions: IAJAXSettings, data: any): any
	}
}