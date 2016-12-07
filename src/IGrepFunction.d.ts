declare module jQuery {
	export interface IGrepFunction<T> {
		(elementOfArray: T, indexInArray: number): boolean
	}
}