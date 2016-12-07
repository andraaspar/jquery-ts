declare module jQuery {
	export interface IAJAXSettingsCompleteFunction {
		(jqXHR: IXHR, textStatus: string): any
	}
}