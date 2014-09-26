/// <reference path='IStaticEventSpecialObject.ts'/>

module jQuery {
	export interface IStaticEventSpecial {
		[s: string]: IStaticEventSpecialObject;
	}
}