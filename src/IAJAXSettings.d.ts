/// <reference path='IAJAXSettingsBeforeSendFunction.d.ts'/>
/// <reference path='IAJAXSettingsCompleteFunction.d.ts'/>
/// <reference path='IAJAXSettingsContentsObject.d.ts'/>
/// <reference path='IAJAXSettingsDataFilterFunction.d.ts'/>
/// <reference path='IAJAXSettingsXHRFunction.d.ts'/>
/// <reference path='IXHRDoneFunction.d.ts'/>
/// <reference path='IXHRFailFunction.d.ts'/>

declare module jQuery {
	export interface IAJAXSettings {
		accepts?: any
		async?: boolean
		beforeSend?: IAJAXSettingsBeforeSendFunction
		cache?: boolean
		complete?: IAJAXSettingsCompleteFunction
		contents?: IAJAXSettingsContentsObject
		contentType?: string
		context?: any
		converters?: any
		crossDomain?: boolean
		data?: any
		dataFilter?: IAJAXSettingsDataFilterFunction
		dataType?: string
		error?: IXHRFailFunction
		global?: boolean
		headers?: any
		ifModified?: boolean
		isLocal?: boolean
		jsonp?: string
		jsonpCallback?: any
		method?: string
		mimeType?: string
		password?: string
		processData?: boolean
		scriptCharset?: string
		statusCode?: any
		success?: IXHRDoneFunction
		timeout?: number
		traditional?: boolean
		url?: string
		username?: string
		xhr?: IAJAXSettingsXHRFunction
		xhrFields?: any
	}
}