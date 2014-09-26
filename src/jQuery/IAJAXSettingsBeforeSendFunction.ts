module jQuery {
	export interface IAJAXSettingsBeforeSendFunction {
		(jqXHR: IXHR, settings: any);
	}
}