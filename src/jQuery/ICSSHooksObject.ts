/// <reference path='ICSSHookObject.ts'/>

module jQuery {
	export interface ICSSHooksObject {
		[s: string]: ICSSHookObject;
	}
}