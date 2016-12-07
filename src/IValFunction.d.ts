declare module jQuery {
	export interface IValFunction {
		(index: number, value: string): string
	}
}