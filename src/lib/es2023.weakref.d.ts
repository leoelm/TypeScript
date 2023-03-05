interface WeakKeyTypesStore {
    symbol: symbol;
}

interface FinalizationRegistry<T> {
    register(target: symbol, heldValue: T, unregisterToken?: symbol): void
    unregister(unregisterToken: symbol): void;
}

interface WeakRef<T extends WeakKeyTypes> {
    /**
     * Returns the WeakRef instance's target object, or undefined if the target object has been
     * reclaimed.
     */
     deref(): T | undefined;
}

interface WeakRefConstructor {
    new<T extends WeakKeyTypes>(target: T): WeakRef<T>;
}