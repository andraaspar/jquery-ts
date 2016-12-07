declare module jQuery {
	export interface IEachFunction<T> {
		(index: number, element: T): any
	}
}