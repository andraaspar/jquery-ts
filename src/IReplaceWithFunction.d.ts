declare module jQuery {
	export interface IReplaceWithFunctionString {
		(): string
	}
	export interface IReplaceWithFunctionElement {
		(): Element
	}
	export interface IReplaceWithFunctionElementArray {
		(): Element[]
	}
	export interface IReplaceWithFunctionInstance {
		(): IInstance
	}
}