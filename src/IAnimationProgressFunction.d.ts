/// <reference path='IPromise.d.ts'/>

declare module jQuery {
	export interface IAnimationProgressFunction {
		(animation: IPromise, progress: number, remainingMs: number): any
	}
}