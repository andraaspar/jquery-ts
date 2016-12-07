declare module jQuery {
	export interface ITextFunction {
		(index: number, text: string): string
	}
}