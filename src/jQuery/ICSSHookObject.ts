module jQuery {
	export interface ICSSHookObject {
		get(elem: Element, computed, extra);
		
		set(elem: Element, value: string);
		set(elem: Element, value: number);
	}
}