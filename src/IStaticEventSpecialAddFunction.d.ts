/// <reference path='IStaticEventSpecialHandleObject.d.ts'/>

declare module jQuery {
	export interface IStaticEventSpecialAddFunction {
		(handleObj: IStaticEventSpecialHandleObject): any
	}
}