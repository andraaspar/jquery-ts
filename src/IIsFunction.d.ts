declare module jQuery {
	export interface IIsFunction {
		(index: number, element: Element): boolean
	}
}