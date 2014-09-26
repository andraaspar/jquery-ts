/// <reference path='IAJAXTransportCompleteFunction.ts'/>

module jQuery {
	export interface IAJAXTransportObject {
		send(headers: any, completeCallback: IAJAXTransportCompleteFunction);
		abort();
	}
}