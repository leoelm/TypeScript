interface WeakMapConstructor {
    new <K extends symbol = symbol, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;
}

interface WeakSetConstructor {
    new <T extends symbol = symbol>(values?: readonly T[] | null): WeakSet<T>;
}