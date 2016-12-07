declare module jQuery {
	export interface IHTMLFunction {
		(index: number, oldhtml: string): string
	}
}