declare module jQuery {
	export interface IClassToggleFunction {
		(index: number, className: string, flag: boolean): string
	}
}