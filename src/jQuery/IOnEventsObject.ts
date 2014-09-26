/// <reference path='IEventHandler.ts'/>

module jQuery {
	export interface IOnEventsObject {
		[s: string]: IEventHandler;
	}
}