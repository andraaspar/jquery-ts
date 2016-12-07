/// <reference path='IEventHandler.d.ts'/>

declare module jQuery {
	export interface IOnEventsObject {
		[s: string]: IEventHandler
	}
}