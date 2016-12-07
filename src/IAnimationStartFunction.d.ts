/// <reference path='IPromise.d.ts'/>

declare module jQuery {
	export interface IAnimationStartFunction {
		(animation: IPromise): any
	}
}