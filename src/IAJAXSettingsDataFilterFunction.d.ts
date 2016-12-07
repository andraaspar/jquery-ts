declare module jQuery {
	export interface IAJAXSettingsDataFilterFunction {
		(data: string, t: string): any
	}
}