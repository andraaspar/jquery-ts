/// <reference path='IPromise.ts'/>

module jQuery {
	export interface IAnimationStartFunction {
		(animation: IPromise): any;
	}
}