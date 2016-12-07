declare module jQuery {
	export interface IPropFunction {
		(index: number, oldPropertyValue: any): any
	}
}