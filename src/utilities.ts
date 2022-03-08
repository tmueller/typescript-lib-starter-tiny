export type IfAny<T, Y, N> = 0 extends (1 & T) ? Y : N;
export type NoAny<T> = IfAny<T, unknown, T>;

type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]];

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

export const stringUnionToArray = <T>() => <
    U extends NonEmptyArray<T>
>(...elements: MustInclude<T, U>) => elements;

export const isDefined = <T>(
    x: T
): x is NonNullable<T> =>
    // eslint-disable-next-line eqeqeq
    x != undefined;

export const isNotDefined = <T>(
    x: T | undefined
): x is undefined =>
    // eslint-disable-next-line eqeqeq
    x == undefined;

export const isNull = <T>(
    x: T
): x is NonNullable<T> =>
    // eslint-disable-next-line eqeqeq
    x != null;

export const isNotNull = <T>(
    x: T | null
): x is null =>
    // eslint-disable-next-line eqeqeq
    x == null;

export const noAny = <P>(p: P): NoAny<P> => p as any;
