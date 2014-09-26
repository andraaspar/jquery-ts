/// <reference path='IAnimationDoneFunction.ts'/>
/// <reference path='IAnimationProgressFunction.ts'/>
/// <reference path='IAnimationStartFunction.ts'/>
/// <reference path='IAnimationStepFunction.ts'/>
/// <reference path='ISpecialEasingObject.ts'/>

module jQuery {
	export interface IAnimationOptions {
		duration?: any;
		easing?: string;
		queue?: any;
		specialEasing?: ISpecialEasingObject;
		step?: IAnimationStepFunction;
		progress?: IAnimationProgressFunction;
		complete?: Function;
		start?: IAnimationStartFunction;
		done?: IAnimationDoneFunction;
		fail?: IAnimationDoneFunction;
		always?: IAnimationDoneFunction;
	}
}