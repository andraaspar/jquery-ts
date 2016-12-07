/// <reference path='IAddClassFunction.d.ts'/>
/// <reference path='IAJAXCompleteFunction.d.ts'/>
/// <reference path='IAJAXErrorFunction.d.ts'/>
/// <reference path='IAJAXSuccessFunction.d.ts'/>
/// <reference path='IAnimationOptions.d.ts'/>
/// <reference path='IAppendFunction.d.ts'/>
/// <reference path='IAttrFunction.d.ts'/>
/// <reference path='IClassToggleFunction.d.ts'/>
/// <reference path='ICSSFunction.d.ts'/>
/// <reference path='ICSSObject.d.ts'/>
/// <reference path='IEachFunction.d.ts'/>
/// <reference path='IHTMLFunction.d.ts'/>
/// <reference path='IIsFunction.d.ts'/>
/// <reference path='ILoadCompleteFunction.d.ts'/>
/// <reference path='IOffsetFunction.d.ts'/>
/// <reference path='IOnEventsObject.d.ts'/>
/// <reference path='IQueueCallbackFunction.d.ts'/>
/// <reference path='IReplaceWithFunction.d.ts'/>
/// <reference path='ISizeFunction.d.ts'/>
/// <reference path='ITextFunction.d.ts'/>
/// <reference path='IValFunction.d.ts'/>
/// <reference path='IWidthFunction.d.ts'/>
/// <reference path='IWrapFunction.d.ts'/>

declare module jQuery {
	export interface IInstance {
		[s: number]: Element

		jQuery: string

		length: number



		hasClass(className: string): boolean



		addClass(className: string): IInstance
		addClass(fn: IAddClassFunction): IInstance



		removeClass(className?: string): IInstance
		removeClass(fn: IAddClassFunction): IInstance



		after(content: string, ...contents: string[]): IInstance
		after(content: Element, ...contents: Element[]): IInstance
		after(content: Element[], ...contents: Element[][]): IInstance
		after(content: IInstance, ...contents: IInstance[]): IInstance
		after(fn: IAppendFunctionString): IInstance
		after(fn: IAppendFunctionElement): IInstance
		after(fn: IAppendFunctionIInstance): IInstance

		append(content: string, ...contents: string[]): IInstance
		append(content: Element, ...contents: Element[]): IInstance
		append(content: Element[], ...contents: Element[][]): IInstance
		append(content: IInstance, ...contents: IInstance[]): IInstance
		append(fn: IAppendFunctionString): IInstance
		append(fn: IAppendFunctionElement): IInstance
		append(fn: IAppendFunctionIInstance): IInstance

		before(content: string, ...contents: string[]): IInstance
		before(content: Element, ...contents: Element[]): IInstance
		before(content: Element[], ...contents: Element[][]): IInstance
		before(content: IInstance, ...contents: IInstance[]): IInstance
		before(fn: IAppendFunctionString): IInstance
		before(fn: IAppendFunctionElement): IInstance
		before(fn: IAppendFunctionIInstance): IInstance

		prepend(content: string, ...contents: string[]): IInstance
		prepend(content: Element, ...contents: Element[]): IInstance
		prepend(content: Element[], ...contents: Element[][]): IInstance
		prepend(content: IInstance, ...contents: IInstance[]): IInstance
		prepend(fn: IAppendFunctionString): IInstance
		prepend(fn: IAppendFunctionElement): IInstance
		prepend(fn: IAppendFunctionIInstance): IInstance



		wrap(wrappingElement: string): IInstance
		wrap(wrappingElement: Element): IInstance
		wrap(wrappingElement: Element[]): IInstance
		wrap(wrappingElement: IInstance): IInstance
		wrap(fn: IWrapFunctionString): IInstance
		wrap(fn: IWrapFunctionInstance): IInstance



		wrapAll(wrappingElement: string): IInstance
		wrapAll(wrappingElement: Element): IInstance
		wrapAll(wrappingElement: Element[]): IInstance
		wrapAll(wrappingElement: IInstance): IInstance
		wrapAll(fn: IWrapFunctionString): IInstance

		wrapInner(wrappingElement: string): IInstance
		wrapInner(wrappingElement: Element): IInstance
		wrapInner(wrappingElement: Element[]): IInstance
		wrapInner(wrappingElement: IInstance): IInstance
		wrapInner(fn: IWrapFunctionString): IInstance



		appendTo(target: string): IInstance
		appendTo(target: Element): IInstance
		appendTo(target: Element[]): IInstance
		appendTo(target: IInstance): IInstance

		insertAfter(target: string): IInstance
		insertAfter(target: Element): IInstance
		insertAfter(target: Element[]): IInstance
		insertAfter(target: IInstance): IInstance

		insertBefore(target: string): IInstance
		insertBefore(target: Element): IInstance
		insertBefore(target: Element[]): IInstance
		insertBefore(target: IInstance): IInstance

		prependTo(target: string): IInstance
		prependTo(target: Element): IInstance
		prependTo(target: Element[]): IInstance
		prependTo(target: IInstance): IInstance



		css(propertyName: string): string
		css(propertyNames: string[]): ICSSObject
		css(propertyName: string, value: string): IInstance
		css(propertyName: string, value: number): IInstance
		css(propertyName: string, fn: ICSSFunctionString): IInstance
		css(propertyName: string, fn: ICSSFunctionNumber): IInstance
		css(properties: {}): IInstance



		innerWidth(value: string): IInstance
		innerWidth(value: number): IInstance
		innerWidth(fn: ISizeFunctionNumber): IInstance
		innerWidth(fn: ISizeFunctionString): IInstance
		innerWidth(): number

		innerHeight(value: string): IInstance
		innerHeight(value: number): IInstance
		innerHeight(fn: ISizeFunctionNumber): IInstance
		innerHeight(fn: ISizeFunctionString): IInstance
		innerHeight(): number



		siblings(selector: string): IInstance
		siblings(selection: Element): IInstance
		siblings(selection: Element[]): IInstance
		siblings(selection?: IInstance): IInstance

		next(selector: string): IInstance
		next(selection: Element): IInstance
		next(selection: Element[]): IInstance
		next(instance?: IInstance): IInstance

		nextAll(selector: string): IInstance
		nextAll(selection: Element): IInstance
		nextAll(selection: Element[]): IInstance
		nextAll(instance?: IInstance): IInstance

		parent(selector: string): IInstance
		parent(selection: Element): IInstance
		parent(selection: Element[]): IInstance
		parent(instance?: IInstance): IInstance

		parents(selector: string): IInstance
		parents(selection: Element): IInstance
		parents(selection: Element[]): IInstance
		parents(instance?: IInstance): IInstance

		prev(selector: string): IInstance
		prev(selection: Element): IInstance
		prev(selection: Element[]): IInstance
		prev(instance?: IInstance): IInstance

		prevAll(selector: string): IInstance
		prevAll(selection: Element): IInstance
		prevAll(selection: Element[]): IInstance
		prevAll(instance?: IInstance): IInstance

		children(selector: string): IInstance
		children(selection: Element): IInstance
		children(selection: Element[]): IInstance
		children(instance?: IInstance): IInstance

		addBack(selector: string): IInstance
		addBack(selection: Element): IInstance
		addBack(selection: Element[]): IInstance
		addBack(instance?: IInstance): IInstance

		detach(selector: string): IInstance
		detach(selection: Element): IInstance
		detach(selection: Element[]): IInstance
		detach(instance?: IInstance): IInstance

		remove(selector: string): IInstance
		remove(selection: Element): IInstance
		remove(selection: Element[]): IInstance
		remove(instance?: IInstance): IInstance

		replaceAll(selector: string): IInstance
		replaceAll(selection: Element): IInstance
		replaceAll(selection: Element[]): IInstance
		replaceAll(instance?: IInstance): IInstance



		replaceWith(newContent: string): IInstance
		replaceWith(selection: Element): IInstance
		replaceWith(selection: Element[]): IInstance
		replaceWith(instance?: IInstance): IInstance
		replaceWith(fn: IReplaceWithFunctionString): IInstance
		replaceWith(fn: IReplaceWithFunctionElement): IInstance
		replaceWith(fn: IReplaceWithFunctionElementArray): IInstance
		replaceWith(fn: IReplaceWithFunctionInstance): IInstance



		nextUntil(selector: string, filter?: string): IInstance
		nextUntil(selection: Element, filter?: string): IInstance
		nextUntil(selection: Element[], filter?: string): IInstance
		nextUntil(instance?: IInstance, filter?: string): IInstance

		parentsUntil(selector: string, filter?: string): IInstance
		parentsUntil(selection: Element, filter?: string): IInstance
		parentsUntil(selection: Element[], filter?: string): IInstance
		parentsUntil(instance?: IInstance, filter?: string): IInstance

		prevUntil(selector: string, filter?: string): IInstance
		prevUntil(selection: Element, filter?: string): IInstance
		prevUntil(selection: Element[], filter?: string): IInstance
		prevUntil(instance?: IInstance, filter?: string): IInstance



		has(selector: string): IInstance
		has(contained: Element): IInstance
		has(contained: IInstance): IInstance



		text(text: string): IInstance
		text(text: number): IInstance
		text(text: boolean): IInstance
		text(fn: ITextFunction): IInstance
		text(): string



		html(htmlString: string): IInstance
		html(fn: IHTMLFunction): IInstance
		html(): string



		data(key: string, value: any): IInstance
		data(key: string): any
		data(obj: any): IInstance
		data(): any



		on(events: string, handler: IEventHandler): IInstance
		on(events: string, data: any, handler: IEventHandler): IInstance
		on(events: string, selector: string, data: any, handler: IEventHandler): IInstance
		on(events: IOnEventsObject, selector?: any, data?: any): IInstance

		one(events: string, handler: IEventHandler): IInstance
		one(events: string, data: any, handler: IEventHandler): IInstance
		one(events: string, selector: string, data: any, handler: IEventHandler): IInstance
		one(events: IOnEventsObject, selector?: any, data?: any): IInstance



		off(events: string, handler?: IEventHandler): IInstance
		off(events: string, selector: string, handler?: IEventHandler): IInstance
		off(events?: IOnEventsObject, selector?: string): IInstance



		toggleClass(className: string, flag?: boolean): IInstance
		toggleClass(fn: IClassToggleFunction, flag?: boolean): IInstance



		position(): IPositionObject

		offset(coordinates: IPositionObject): IInstance
		offset(fn: IOffsetFunction): IInstance
		offset(): IPositionObject



		closest(selector: string, context?: Element): IInstance
		closest(selection: IInstance): IInstance
		closest(selection: Element): IInstance



		is(selector: string): boolean
		is(fn: IIsFunction): boolean
		is(selection: IInstance): boolean
		is(element: Element): boolean
		is(elements: Element[]): boolean

		filter(selector: string): IInstance
		filter(fn: IIsFunction): IInstance
		filter(selection: IInstance): IInstance
		filter(element: Element): IInstance
		filter(elements: Element[]): IInstance

		not(selector: string): IInstance
		not(fn: IIsFunction): IInstance
		not(selection: IInstance): IInstance
		not(element: Element): IInstance
		not(elements: Element[]): IInstance



		scrollLeft(value: number): IInstance
		scrollLeft(): number

		scrollTop(value: number): IInstance
		scrollTop(): number



		eq(index: number): IInstance



		attr(attributeName: string, value: string): IInstance
		attr(attributeName: string, value: number): IInstance
		attr(attributeName: string, fn: IAttrFunctionString): IInstance
		attr(attributeName: string, fn: IAttrFunctionNumber): IInstance
		attr(attributeName: string): string
		attr(attributes: any): IInstance



		prop(propertyName: string, valueOrFn: any): IInstance
		prop(propertyName: string): any
		prop(properties: any): IInstance



		removeAttr(attributeName: string): IInstance

		removeProp(propertyName: string): IInstance



		val(value: string): IInstance
		val(values: string[]): IInstance
		val(fn: IValFunction): IInstance
		val(): any



		trigger(eventType: string, extraParameters?: any): IInstance
		trigger(event: IEvent, extraParameters?: any): IInstance



		triggerHandler(eventType: string, extraParameters?: any): any
		triggerHandler(event: IEvent, extraParameters?: any): any



		find(selector: string): IInstance
		find(selection: IInstance): IInstance
		find(element: Element): IInstance



		width(value: number): IInstance
		width(fn: IWidthFunctionNumber): IInstance
		width(fn: IWidthFunctionString): IInstance
		width(): number

		height(value: number): IInstance
		height(fn: IWidthFunctionNumber): IInstance
		height(fn: IWidthFunctionString): IInstance
		height(): number



		outerWidth(includeMargin?: boolean): number

		outerHeight(includeMargin?: boolean): number



		hide(options: IAnimationOptions): IInstance
		hide(duration: number, easing?: string, complete?: Function): IInstance
		hide(duration: string, easing?: string, complete?: Function): IInstance
		hide(duration?: number, complete?: Function): IInstance
		hide(duration?: string, complete?: Function): IInstance

		show(options: IAnimationOptions): IInstance
		show(duration: number, easing?: string, complete?: Function): IInstance
		show(duration: string, easing?: string, complete?: Function): IInstance
		show(duration?: number, complete?: Function): IInstance
		show(duration?: string, complete?: Function): IInstance

		fadeIn(options: IAnimationOptions): IInstance
		fadeIn(duration: number, easing?: string, complete?: Function): IInstance
		fadeIn(duration: string, easing?: string, complete?: Function): IInstance
		fadeIn(duration?: number, complete?: Function): IInstance
		fadeIn(duration?: string, complete?: Function): IInstance

		fadeOut(options: IAnimationOptions): IInstance
		fadeOut(duration: number, easing?: string, complete?: Function): IInstance
		fadeOut(duration: string, easing?: string, complete?: Function): IInstance
		fadeOut(duration?: number, complete?: Function): IInstance
		fadeOut(duration?: string, complete?: Function): IInstance

		slideDown(options: IAnimationOptions): IInstance
		slideDown(duration: number, easing?: string, complete?: Function): IInstance
		slideDown(duration: string, easing?: string, complete?: Function): IInstance
		slideDown(duration?: number, complete?: Function): IInstance
		slideDown(duration?: string, complete?: Function): IInstance

		slideToggle(options: IAnimationOptions): IInstance
		slideToggle(duration: number, easing?: string, complete?: Function): IInstance
		slideToggle(duration: string, easing?: string, complete?: Function): IInstance
		slideToggle(duration?: number, complete?: Function): IInstance
		slideToggle(duration?: string, complete?: Function): IInstance

		slideUp(options: IAnimationOptions): IInstance
		slideUp(duration: number, easing?: string, complete?: Function): IInstance
		slideUp(duration: string, easing?: string, complete?: Function): IInstance
		slideUp(duration?: number, complete?: Function): IInstance
		slideUp(duration?: string, complete?: Function): IInstance



		toggle(options: IAnimationOptions): IInstance
		toggle(duration: number, easing?: string, complete?: Function): IInstance
		toggle(duration: string, easing?: string, complete?: Function): IInstance
		toggle(duration: number, complete?: Function): IInstance
		toggle(duration: string, complete?: Function): IInstance
		toggle(flag?: boolean): IInstance



		fadeTo(duration: number, opacity: number, easing?: string, complete?: Function): IInstance
		fadeTo(duration: string, opacity: number, easing?: string, complete?: Function): IInstance
		fadeTo(duration: number, opacity: number, complete?: Function): IInstance
		fadeTo(duration: string, opacity: number, complete?: Function): IInstance



		fadeToggle(options: IAnimationOptions): IInstance
		fadeToggle(duration?: number, easing?: string, complete?: Function): IInstance
		fadeToggle(duration?: string, easing?: string, complete?: Function): IInstance



		focus(eventData: any, handler: IEventHandler): IInstance
		focus(handler?: IEventHandler): IInstance

		blur(eventData: any, handler: IEventHandler): IInstance
		blur(handler?: IEventHandler): IInstance

		change(eventData: any, handler: IEventHandler): IInstance
		change(handler?: IEventHandler): IInstance

		click(eventData: any, handler: IEventHandler): IInstance
		click(handler?: IEventHandler): IInstance

		dblclick(eventData: any, handler: IEventHandler): IInstance
		dblclick(handler?: IEventHandler): IInstance

		keydown(eventData: any, handler: IEventHandler): IInstance
		keydown(handler?: IEventHandler): IInstance

		keypress(eventData: any, handler: IEventHandler): IInstance
		keypress(handler?: IEventHandler): IInstance

		keyup(eventData: any, handler: IEventHandler): IInstance
		keyup(handler?: IEventHandler): IInstance

		mousedown(eventData: any, handler: IEventHandler): IInstance
		mousedown(handler?: IEventHandler): IInstance

		mouseenter(eventData: any, handler: IEventHandler): IInstance
		mouseenter(handler?: IEventHandler): IInstance

		mouseleave(eventData: any, handler: IEventHandler): IInstance
		mouseleave(handler?: IEventHandler): IInstance

		mousemove(eventData: any, handler: IEventHandler): IInstance
		mousemove(handler?: IEventHandler): IInstance

		mouseout(eventData: any, handler: IEventHandler): IInstance
		mouseout(handler?: IEventHandler): IInstance

		mouseover(eventData: any, handler: IEventHandler): IInstance
		mouseover(handler?: IEventHandler): IInstance

		mouseup(eventData: any, handler: IEventHandler): IInstance
		mouseup(handler?: IEventHandler): IInstance

		resize(eventData: any, handler: IEventHandler): IInstance
		resize(handler?: IEventHandler): IInstance

		scroll(eventData: any, handler: IEventHandler): IInstance
		scroll(handler?: IEventHandler): IInstance

		select(eventData: any, handler: IEventHandler): IInstance
		select(handler?: IEventHandler): IInstance

		submit(eventData: any, handler: IEventHandler): IInstance
		submit(handler?: IEventHandler): IInstance



		focusin(eventData: any, handler: IEventHandler): IInstance
		focusin(handler: IEventHandler): IInstance

		focusout(eventData: any, handler: IEventHandler): IInstance
		focusout(handler: IEventHandler): IInstance



		hover(handlerIn: IEventHandler, handlerOut: IEventHandler): IInstance
		hover(handlerInOut: IEventHandler): IInstance



		index(selector: string): number
		index(jq: IInstance): number
		index(element?: Element): number



		stop(queue: string, clearQueue?: boolean, jumpToEnd?: boolean): IInstance
		stop(clearQueue?: boolean, jumpToEnd?: boolean): IInstance



		serializeArray(): any[]



		each(fn: IEachFunction<Element>): IInstance



		add(selectorOrHTML: string, context?: Element): IInstance
		add(selectorOrHTML: string, context?: Document): IInstance
		add(selectorOrHTML: string, context?: IInstance): IInstance
		add(element: Element): IInstance
		add(elements: Element[]): IInstance
		add(selection: IInstance): IInstance



		ajaxComplete(handler: IAJAXCompleteFunction): IInstance

		ajaxSend(handler: IAJAXCompleteFunction): IInstance



		ajaxError(handler: IAJAXErrorFunction): IInstance



		ajaxStart(handler: Function): IInstance

		ajaxStop(handler: Function): IInstance



		ajaxSuccess(handler: IAJAXSuccessFunction): IInstance



		animate(properties: any, duration?: number | string, easing?: string, complete?: Function): IInstance
		animate(properties: any, options: IAnimationOptions): IInstance



		clearQueue(queueName?: string): IInstance

		dequeue(queueName?: string): IInstance

		finish(queueName?: string): IInstance



		clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): IInstance



		promise(type?: string, target?: any): IPromise



		delay(duration: number, queueName?: string): IInstance



		contents(): IInstance

		empty(): IInstance

		end(): IInstance

		first(): IInstance

		last(): IInstance

		offsetParent(): IInstance

		unwrap(): IInstance



		get(index: number): Element
		get(): Element[]



		extend(object: any): any



		load(url: string, data?: any, complete?: ILoadCompleteFunction): IInstance



		map(callback: IMapFunctionElement): IInstance



		pushStack(elements: Element[], name?: string, args?: any[]): IInstance



		queue(newQueue: any[]): IInstance
		queue(queueName: string, newQueue: any[]): IInstance
		queue(queueName: string, callback: IQueueCallbackFunction): IInstance
		queue(queueName?: string): any[]



		ready(handler: Function): IInstance



		removeData(name: string): IInstance
		removeData(name?: string[]): IInstance



		serialize(): string



		slice(start: number, end?: number): IInstance



		toArray(): Element[]
	}
}
