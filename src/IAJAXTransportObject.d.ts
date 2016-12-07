/// <reference path='IAJAXTransportCompleteFunction.d.ts'/>

declare module jQuery {
	export interface IAJAXTransportObject {
		send(headers: any, completeCallback: IAJAXTransportCompleteFunction): any
		abort(): any
	}
}