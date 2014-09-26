/// <reference path='IEventHandler.ts'/>

module jQuery {
	export interface IStaticEventSpecialSetupFunction {
		(data: any, namespaces: string[], eventHandler: IEventHandler): any;
	}
}