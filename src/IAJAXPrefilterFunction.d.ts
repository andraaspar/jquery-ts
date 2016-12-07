declare module jQuery {
	export interface IAJAXPrefilterFunction {
		(options: IAJAXSettings, originalOptions: IAJAXSettings, jqXHR: IXHR): any
	}
}