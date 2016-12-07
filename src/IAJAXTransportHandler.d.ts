/// <reference path='IAJAXTransportObject.d.ts'/>

declare module jQuery {
	export interface IAJAXTransportHandler {
		(options: IAJAXSettings, originalOptions: IAJAXSettings, jqXHR: IXHR): IAJAXTransportObject
	}
}