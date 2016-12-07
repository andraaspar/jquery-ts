declare module jQuery {
	export interface ICallbacks {
		add(callbacks: Function): ICallbacks
		add(callbacks: Function[]): ICallbacks
		
		disable(): ICallbacks
		
		disabled(): boolean
		
		empty(): ICallbacks
		
		fire(...arguments: any[]): ICallbacks
		
		fired(): boolean
		
		fireWith(context?: any, args?: any): ICallbacks
		
		has(callback: Function): boolean
		
		lock(): ICallbacks
		
		locked(): boolean
		
		remove(callbacks: Function): ICallbacks
		remove(callbacks: Function[]): ICallbacks
	}
}