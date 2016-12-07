/// <reference path='IPromise.d.ts'/>

declare module jQuery {
	export interface IAnimationDoneFunction {
		(animation: IPromise, jumpedToEnd: boolean): any
	}
}