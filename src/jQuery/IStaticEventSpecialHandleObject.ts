/// <reference path='IEventHandler.ts'/>

module jQuery {
	export interface IStaticEventSpecialHandleObject {
		type: string;
		data: any;
		namespace: string;
		handler: IEventHandler;
		guid: number;
		selector: string;
	}
}