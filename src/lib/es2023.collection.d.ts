interface WeakSet<T extends WeakKeyTypes> {

}

interface WeakSetConstructor {
    new <T extends WeakKeyTypes = WeakKeyTypes>(values?: readonly T[] | null): WeakSet<T>;
}