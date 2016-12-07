declare module jQuery {
	export interface IEachPropertyFunction {
		(propertyName: string, value: any): any
	}
}