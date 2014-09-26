/// <reference path='IPromise.ts'/>

module jQuery {
	export interface IAnimationDoneFunction {
		(animation: IPromise, jumpedToEnd: boolean): any;
	}
}