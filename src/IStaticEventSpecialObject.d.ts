/// <reference path='IStaticEventSpecialSetupFunction.d.ts'/>
/// <reference path='IStaticEventSpecialTeardownFunction.d.ts'/>
/// <reference path='IStaticEventSpecialAddFunction.d.ts'/>
/// <reference path='IStaticEventSpecialAddFunction.d.ts'/>
/// <reference path='IEventHandler.d.ts'/>

declare module jQuery {
	export interface IStaticEventSpecialObject {
		setup?: IStaticEventSpecialSetupFunction
		teardown?: IStaticEventSpecialTeardownFunction
		add?: IStaticEventSpecialAddFunction
		remove?: IStaticEventSpecialAddFunction
		_default?: IEventHandler
	}
}