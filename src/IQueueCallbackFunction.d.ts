declare module jQuery {
	export interface IQueueCallbackFunction {
		(next: Function): any
	}
}