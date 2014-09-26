/// <reference path='IAnimationOptions.ts'/>

module jQuery {
	export interface ITween {
		elem: Element;
		prop: string;
		easing: any;
		options: IAnimationOptions;
		start: number;
		end: number;
		unit: string;
	}
}