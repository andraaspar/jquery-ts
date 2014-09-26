/// <reference path='ITween.ts'/>

module jQuery {
	export interface IAnimationStepFunction {
		(now: number, tween: ITween): any;
	}
}