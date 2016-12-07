/// <reference path='ITween.d.ts'/>

declare module jQuery {
	export interface IAnimationStepFunction {
		(now: number, tween: ITween): any
	}
}