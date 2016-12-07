declare module jQuery {
	export interface ISizeFunctionNumber {
		(index: number, size: number): number
	}
	export interface ISizeFunctionString {
		(index: number, size: number): string
	}
}