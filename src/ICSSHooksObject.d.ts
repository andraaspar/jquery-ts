/// <reference path='ICSSHookObject.d.ts'/>

declare module jQuery {
	export interface ICSSHooksObject {
		[s: string]: ICSSHookObject
	}
}