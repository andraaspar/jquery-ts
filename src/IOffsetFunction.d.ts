/// <reference path='IPositionObject.d.ts'/>

declare module jQuery {
	export interface IOffsetFunction {
		(index: number, coords: IPositionObject): IPositionObject
	}
}