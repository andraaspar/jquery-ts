/// <reference path='IEventHandler.d.ts'/>

declare module jQuery {
	export interface IStaticEventSpecialSetupFunction {
		(data: any, namespaces: string[], eventHandler: IEventHandler): any
	}
}