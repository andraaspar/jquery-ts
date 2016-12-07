declare module jQuery {
	export interface IStaticEventSpecialTeardownFunction {
		(namespaces: string[]): any
	}
}