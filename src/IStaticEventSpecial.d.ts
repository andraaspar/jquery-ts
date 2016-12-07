/// <reference path='IStaticEventSpecialObject.d.ts'/>

declare module jQuery {
	export interface IStaticEventSpecial {
		[s: string]: IStaticEventSpecialObject
	}
}