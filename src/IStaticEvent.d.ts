/// <reference path='IStaticEventSpecial.d.ts'/>

declare module jQuery {
	export interface IStaticEvent {
		special: IStaticEventSpecial
	}
}