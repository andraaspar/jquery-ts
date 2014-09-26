/// <reference path='IPromise.ts'/>

module jQuery {
	export interface IAnimationProgressFunction {
		(animation: IPromise, progress: number, remainingMs: number): any;
	}
}