/// <reference path='src/index.d.ts'/>
/// <reference path='src/IStatic.d.ts'/>

import * as jQuery from 'jquery/dist/jquery'

export default jQuery

export function initJQuery(window: Window): jQuery.IStatic {
	return <any>jQuery(window)
}