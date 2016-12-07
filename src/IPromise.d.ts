declare module jQuery {
	export interface IPromise {
		always(callback: Function, ...callbacks: Function[]): IPromise
		always(callback: Function[], ...callbacks: Function[][]): IPromise
		
		done(callback: Function, ...callbacks: Function[]): IPromise
		done(callback: Function[], ...callbacks: Function[][]): IPromise
		
		fail(callback: Function, ...callbacks: Function[]): IPromise
		fail(callback: Function[], ...callbacks: Function[][]): IPromise
		
		state(): string
		
		then(doneFilter: Function, failFilter?: Function, progressFilter?: Function): IPromise
	}
}