interface WeakKeyTypesStore {
    symbol: symbol;
}

interface FinalizationRegistry<T> {
    readonly [Symbol.toStringTag]: "FinalizationRegistry";

    /**
     * Registers an object with the registry.
     * @param target The target object to register.
     * @param heldValue The value to pass to the finalizer for this object. This cannot be the
     * target object.
     * @param unregisterToken The token to pass to the unregister method to unregister the target
     * object. If provided (and not undefined), this must be an object. If not provided, the target
     * cannot be unregistered.
     */
    registerSymbol(target: symbol, heldValue: T, unregisterToken?: symbol): void;

    /**
     * Unregisters an object from the registry.
     * @param unregisterToken The token that was used as the unregisterToken argument when calling
     * register to register the target object.
     */
    unregisterSymbol(unregisterToken: symbol): void;
}

interface FinalizationRegistryConstructor {
    readonly prototype: FinalizationRegistry<any>;

    /**
     * Creates a finalization registry with an associated cleanup callback
     * @param cleanupCallback The callback to call after an object in the registry has been reclaimed.
     */
    new<T>(cleanupCallback: (heldValue: T) => void): FinalizationRegistry<T>;
}

declare var FinalizationRegistry: FinalizationRegistryConstructor;

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