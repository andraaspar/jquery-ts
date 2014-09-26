/// <reference path='IStaticEventSpecialSetupFunction.ts'/>
/// <reference path='IStaticEventSpecialTeardownFunction.ts'/>
/// <reference path='IStaticEventSpecialAddFunction.ts'/>
/// <reference path='IStaticEventSpecialAddFunction.ts'/>
/// <reference path='IEventHandler.ts'/>

module jQuery {
	export interface IStaticEventSpecialObject {
		setup?: IStaticEventSpecialSetupFunction;
		teardown?: IStaticEventSpecialTeardownFunction;
		add?: IStaticEventSpecialAddFunction;
		remove?: IStaticEventSpecialAddFunction;
		_default?: IEventHandler;
	}
}