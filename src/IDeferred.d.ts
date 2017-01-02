declare module jQuery {
	export interface IDeferred extends IPromise {
		always(callback: Function, ...callbacks: Function[]): IDeferred
		always(callback: Function[], ...callbacks: Function[][]): IDeferred
		
		catch(failFilter: Function): IPromise
		
		done(callback: Function, ...callbacks: Function[]): IDeferred
		done(callback: Function[], ...callbacks: Function[][]): IDeferred
		
		fail(callback: Function, ...callbacks: Function[]): IDeferred
		fail(callback: Function[], ...callbacks: Function[][]): IDeferred
		
		
		
		notify(...args: any[]): IDeferred
		
		reject(...args: any[]): IDeferred
		
		resolve(...args: any[]): IDeferred
		
		
		
		notifyWith(context: any, args: any[]): IDeferred
		
		rejectWith(context: any, args: any[]): IDeferred
		
		resolveWith(context: any, args: any[]): IDeferred
		
		
		
		progress(callback: Function): IDeferred
		progress(callbacks: Function[]): IDeferred
		
		
		
		promise(target?: any): IPromise
	}
}