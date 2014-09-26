/// <reference path='IAJAXTransportObject.ts'/>

module jQuery {
	export interface IAJAXTransportHandler {
		(options: IAJAXSettings, originalOptions: IAJAXSettings, jqXHR: IXHR): IAJAXTransportObject;
	}
}