/// <reference path='IEvent.ts'/>

module jQuery {
	export interface IEventConstructor {
		(src: string, props?: any): IEvent;
		(src: IEvent, props?: any): IEvent;
		(src: Event, props?: any): IEvent;
	}
}