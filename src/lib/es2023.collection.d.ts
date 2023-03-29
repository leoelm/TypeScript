interface WeakKeyTypes {
    symbol: symbol;
}

interface WeakSet<T extends WeakKey> {}

interface WeakSetConstructor {
    new <T extends WeakKey = WeakKey>(values?: readonly T[] | null): WeakSet<T>;
}

interface WeakMap<K extends WeakKey, V> {}

interface WeakMapConstructor {
    new <K extends WeakKey = WeakKey, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
    readonly prototype: WeakMap<WeakKey, any>;
}