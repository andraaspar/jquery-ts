/// <reference path='IEvent.d.ts'/>

declare module jQuery {
	export interface IEventHandler {
		(event: IEvent, ...rest: any[]): any
	}
}