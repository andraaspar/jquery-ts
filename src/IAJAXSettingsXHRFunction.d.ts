declare module jQuery {
	export interface IAJAXSettingsXHRFunction {
		new (): XMLHttpRequest
	}
}