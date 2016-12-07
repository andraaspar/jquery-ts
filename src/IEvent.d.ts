declare module jQuery {
	export interface IEvent {
		isDefaultPrevented(): boolean
		isPropagationStopped(): boolean
		isImmediatePropagationStopped(): boolean
		
		preventDefault(): void
		stopPropagation(): void
		stopImmediatePropagation(): void
		
		target: Element
		relatedTarget: Element
		pageX: number
		pageY: number
		which: number
		metaKey: boolean
		
		altKey: boolean
		bubbles: boolean
		button: number
		cancelable: boolean
		char: string
		charCode: number
		clientX: number
		clientY: number
		ctrlKey: boolean
		currentTarget: Element
		data: any
		detail: number
		eventPhase: number
		key: string
		keyCode: number
		offsetX: number
		offsetY: number
		originalTarget: Element
		prevValue: any
		screenX: number
		screenY: number
		shiftKey: boolean
		toElement: Element
		view: Window
		
		originalEvent: Event
		delegateTarget: Element
		namespace: string
		result: any
		timeStamp: number
		type: string
	}
}
