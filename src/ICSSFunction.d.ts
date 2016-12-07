declare module jQuery {
	export interface ICSSFunctionString {
		(index: number, value: string): string
	}
	export interface ICSSFunctionNumber {
		(index: number, value: string): number
	}
}