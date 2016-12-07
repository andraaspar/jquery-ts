declare module jQuery {
	export interface IAddClassFunction {
		(index: number, currentClassName: string): string
	}
}