/// <reference path='IAJAXSettings.d.ts'/>
/// <reference path='IAJAXPrefilterFunction.d.ts'/>
/// <reference path='IAJAXTransportHandler.d.ts'/>
/// <reference path='ICallbacks.d.ts'/>
/// <reference path='ICSSHooksObject.d.ts'/>
/// <reference path='IDeferred.d.ts'/>
/// <reference path='IDeferredBeforeStartFunction.d.ts'/>
/// <reference path='IEachFunction.d.ts'/>
/// <reference path='IEachPropertyFunction.d.ts'/>
/// <reference path='IEventConstructor.d.ts'/>
/// <reference path='IFXObject.d.ts'/>
/// <reference path='IGetSuccessFunction.d.ts'/>
/// <reference path='IGrepFunction.d.ts'/>
/// <reference path='IInstance.d.ts'/>
/// <reference path='IMapFunction.d.ts'/>
/// <reference path='IStaticEvent.d.ts'/>
/// <reference path='IXHR.d.ts'/>

declare module jQuery {
	export interface IStatic {
		(selectorOrHTML: string, contextOrAttributesOrOwnerDocument?: any): IInstance
		(selectionOrElementOrArrayOrObjectOrCallback?: any): IInstance
		
		
		
		holdReady(hold: boolean): void
		
		
		
		noConflict(removeAll?: boolean): IStatic
		
		
		
		event: IStaticEvent
		
		
		
		Event: IEventConstructor
		
		
		
		ajax(url: string, settings?: IAJAXSettings): IXHR
		ajax(settings?: IAJAXSettings): IXHR
		
		
		
		ajaxPrefilter(dataTypes: string, handler: IAJAXPrefilterFunction): any
		ajaxPrefilter(handler: IAJAXPrefilterFunction): any
		
		
		
		ajaxTransport(dataType: string, handler: IAJAXTransportHandler): any
		
		
		
		ajaxSetup(options: IAJAXSettings): any
		
		
		
		each<T>(array: T[], callback: IEachFunction<T>): T[]
		each<T>(object: T, callback: IEachPropertyFunction): T
		
		
		
		Callbacks(): ICallbacks
		
		
		
		Deferred(beforeStart?: IDeferredBeforeStartFunction): IDeferred
		
		
		
		fn: IInstance
		
		
		
		contains(container: Element, contained: Element): boolean
		
		
		
		cssHooks: ICSSHooksObject
		
		
		
		data<T>(element: Element, key: string, value: T): T
		data(element: Element, key: string): any
		data(element: Element): any
		
		
		
		dequeue(element: Element, queueName?: string): any
		
		
		
		error(message: string): any
		
		
		
		escapeSelector(selector: string): string
		
		
		
		extend(deep: boolean, target: any, object1: any, ...objectN: any[]): any
		extend(target: any, ...objectN: any[]): any
		
		
		
		fx: IFXObject
		
		
		
		get(url: string, data?: any, success?: IGetSuccessFunction, dataType?: string): IXHR
		get(settings?: IAJAXSettings): IXHR
		
		
		
		getJSON(url: string, data?: any, success?: IGetSuccessFunction): IXHR
		
		
		
		getScript(url: string, success?: IGetSuccessFunction): IXHR
		
		
		
		globalEval(code: string): any
		
		
		
		grep<T>(array: T[], fn: IGrepFunction<T>, invert?: boolean): T[]
		
		
		
		hasData(element: Element): boolean
		
		
		
		inArray<T>(value: T, array: T[], fromIndex?: number): number
		
		
		
		isArray(obj: any): boolean
		
		isEmptyObject(obj: any): boolean
		
		isFunction(obj: any): boolean
		
		isNumeric(obj: any): boolean
		
		isPlainObject(obj: any): boolean
		
		isWindow(obj: any): boolean
		
		isXMLDoc(obj: any): boolean
		
		
		
		makeArray(obj: any): any[]
		
		
		
		map<T, U>(array: T[], callback: IMapFunctionArray<T, U>): U[]
		map<T, U>(object: { [s: string]: T }, callback: IMapFunctionObject<T, U>): U[]
		
		
		
		merge<T>(first: T[], second: T[]): T[]
		
		
		
		noop(): any
		
		
		
		now(): number
		
		
		
		param(obj: any, traditional?: boolean): string
		
		
		
		parseHTML(data: string, context?: Element, keepScripts?: boolean): any
		
		
		
		parseXML(data: string): XMLDocument
		
		
		
		post(url: string, data?: any, success?: IGetSuccessFunction, dataType?: string): IXHR
		post(settings?: IAJAXSettings): IXHR
		
		
		
		proxy<T extends Function>(fn: T, context: any): T
		proxy(fn: Function, context: any, ...additionalArguments: any[]): Function
		proxy(context: any, name: string, ...additionalArguments: any[]): Function
		
		
		
		queue(element: Element, queueName: string, newQueue: any[]): IInstance
		queue(element: Element, queueName: string, callback: Function): IInstance
		queue(element: Element, queueName?: string): any[]
		
		
		
		readyException(error: any): any
		
		
		
		removeData(element: Element, name?: string): IInstance
		
		
		
		support: any
		
		
		
		trim(str: string): string
		
		
		
		type(obj: any): string
		
		
		
		uniqueSort<T extends any[]>(arr: T): T
		
		
		
		when(...deferreds: IPromise[]): IPromise
	}
}
