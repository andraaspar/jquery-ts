/// <reference path='../../src/jQuery.d.ts'/>
/// <reference path='../../src/$.d.ts'/>

module test1 {
	export class Main {
		
		private static instance = new Main();
		
		constructor() {
			$($.proxy(this.onDomLoaded, this));
		}
		
		onDomLoaded() {
			jQuery('body').html('<h1>DOM loaded.</h1>');
		}
	}
}