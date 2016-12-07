declare module jQuery {
	export interface IWidthFunctionString {
		(index: number, value: number): string
	}
	export interface IWidthFunctionNumber {
		(index: number, value: number): number
	}
}