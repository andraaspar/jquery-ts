/// <reference path='IXHRAlwaysFunction.ts'/>
/// <reference path='IXHRDoneFunction.ts'/>
/// <reference path='IXHRFailFunction.ts'/>

module jQuery {
	export interface IXHR extends XMLHttpRequest, IPromise {
		overrideMimeType(value: string);



		always(callback: IXHRAlwaysFunction, ...callbacks: IXHRAlwaysFunction[]): IXHR;
		always(callback: IXHRAlwaysFunction[], ...callbacks: IXHRAlwaysFunction[][]): IXHR;



		done(callback: IXHRDoneFunction, ...callbacks: IXHRDoneFunction[]): IXHR;
		done(callback: IXHRDoneFunction[], ...callbacks: IXHRDoneFunction[][]): IXHR;



		fail(callback: IXHRFailFunction, ...callbacks: IXHRFailFunction[]): IXHR;
		fail(callback: IXHRFailFunction[], ...callbacks: IXHRFailFunction[][]): IXHR;



		then(doneFilter: IXHRDoneFunction, failFilter?: IXHRFailFunction, progressFilter?: Function): IPromise;
	}
}