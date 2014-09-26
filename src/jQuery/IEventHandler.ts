/// <reference path='IEvent.ts'/>

module jQuery {
	export interface IEventHandler {
		(event: IEvent, ...rest): any;
	}
}