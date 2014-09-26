module jQuery {
	export interface IDeferred extends IPromise {
		always(callback: Function, ...callbacks: Function[]): IDeferred;
		always(callback: Function[], ...callbacks: Function[][]): IDeferred;
		
		done(callback: Function, ...callbacks: Function[]): IDeferred;
		done(callback: Function[], ...callbacks: Function[][]): IDeferred;
		
		fail(callback: Function, ...callbacks: Function[]): IDeferred;
		fail(callback: Function[], ...callbacks: Function[][]): IDeferred;
		
		
		
		notify(...args): IDeferred;
		
		reject(...args): IDeferred;
		
		resolve(...args): IDeferred;
		
		
		
		notifyWith(context: any, args: any[]): IDeferred;
		
		rejectWith(context: any, args: any[]): IDeferred;
		
		resolveWith(context: any, args: any[]): IDeferred;
		
		
		
		progress(callback: Function): IDeferred;
		progress(callbacks: Function[]): IDeferred;
		
		
		
		promise(target?: any): IPromise;
	}
}