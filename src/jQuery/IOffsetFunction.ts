/// <reference path='IPositionObject.ts'/>

module jQuery {
	export interface IOffsetFunction {
		(index: number, coords: IPositionObject): IPositionObject;
	}
}