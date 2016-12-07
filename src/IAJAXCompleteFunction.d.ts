declare module jQuery {
	export interface IAJAXCompleteFunction {
		(event: IEvent, jqXHR: IXHR, ajaxOptions: IAJAXSettings): any
	}
}