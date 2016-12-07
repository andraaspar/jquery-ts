declare module jQuery {
	export interface ICSSHookObject {
		get(elem: Element, computed: any, extra: any): any
		
		set(elem: Element, value: string): any
		set(elem: Element, value: number): any
	}
}