declare module jQuery {
	export interface IMapFunctionArray<T, U> {
		(elementOfArray: T, indexInArray: number): U
	}
	export interface IMapFunctionObject<T, U> {
		(propertyOfObject: T, key: string): U
	}
	export interface IMapFunctionElement {
		(index: number, domElement: Element): any
	}
}