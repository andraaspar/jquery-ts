/// <reference path='IAnimationDoneFunction.d.ts'/>
/// <reference path='IAnimationProgressFunction.d.ts'/>
/// <reference path='IAnimationStartFunction.d.ts'/>
/// <reference path='IAnimationStepFunction.d.ts'/>
/// <reference path='ISpecialEasingObject.d.ts'/>

declare module jQuery {
	export interface IAnimationOptions {
		duration?: any
		easing?: string
		queue?: any
		specialEasing?: ISpecialEasingObject
		step?: IAnimationStepFunction
		progress?: IAnimationProgressFunction
		complete?: Function
		start?: IAnimationStartFunction
		done?: IAnimationDoneFunction
		fail?: IAnimationDoneFunction
		always?: IAnimationDoneFunction
	}
}