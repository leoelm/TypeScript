interface WeakKeyTypesStore {
    symbol: symbol;
}

interface WeakSet<T extends WeakKeyTypes> {}

interface WeakSetConstructor {
    new <T extends WeakKeyTypes = WeakKeyTypes>(values?: readonly T[] | null): WeakSet<T>;
}

interface WeakMap<K extends WeakKeyTypes, V> {}

interface WeakMapConstructor {
    new <K extends WeakKeyTypes = WeakKeyTypes, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
    readonly prototype: WeakMap<WeakKeyTypes, any>;
}