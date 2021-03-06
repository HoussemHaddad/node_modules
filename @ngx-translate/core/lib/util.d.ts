/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param o1 Object or value to compare.
 * @param o2 Object or value to compare.
 * @returns true if arguments are equal.
 */
export declare function equals(o1: any, o2: any): boolean;
export declare function isDefined(value: any): boolean;
export declare function isObject(item: any): boolean;
export declare function mergeDeep(target: any, source: any): any;
