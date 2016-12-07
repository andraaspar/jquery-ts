declare module jQuery {
	export interface IAJAXTransportCompleteFunction {
		(status: number, statusText: string, responses?: any, headers?: string): any
	}
}