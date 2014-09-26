/// <reference path='IAJAXSettingsBeforeSendFunction.ts'/>
/// <reference path='IAJAXSettingsCompleteFunction.ts'/>
/// <reference path='IAJAXSettingsContentsObject.ts'/>
/// <reference path='IAJAXSettingsDataFilterFunction.ts'/>
/// <reference path='IAJAXSettingsXHRFunction.ts'/>
/// <reference path='IXHRDoneFunction.ts'/>
/// <reference path='IXHRFailFunction.ts'/>

module jQuery {
	export interface IAJAXSettings {
		accepts?: any;
		async?: boolean;
		beforeSend?: IAJAXSettingsBeforeSendFunction;
		cache?: boolean;
		complete?: IAJAXSettingsCompleteFunction;
		contents?: IAJAXSettingsContentsObject;
		contentType?: string;
		context?: any;
		converters?: any;
		crossDomain?: boolean;
		data?: any;
		dataFilter?: IAJAXSettingsDataFilterFunction;
		dataType?: string;
		error?: IXHRFailFunction;
		global?: boolean;
		headers?: any;
		ifModified?: boolean;
		isLocal?: boolean;
		jsonp?: string;
		jsonpCallback?: any;
		mimeType?: string;
		password?: string;
		processData?: boolean;
		scriptCharset?: string;
		statusCode?: any;
		success?: IXHRDoneFunction;
		timeout?: number;
		traditional?: boolean;
		type?: string;
		url?: string;
		username?: string;
		xhr?: IAJAXSettingsXHRFunction;
		xhrFields?: any;
	}
}