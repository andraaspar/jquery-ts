declare module jQuery {
	export interface IDeferredBeforeStartFunction {
		(deferred: IDeferred): any
	}
}