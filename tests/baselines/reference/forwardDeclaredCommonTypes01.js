//// [forwardDeclaredCommonTypes01.ts]
interface Promise<T> {}
interface Symbol {}
interface Map<K, V> {}
interface WeakMap<K extends WeakKeyTypes, V> {}
interface Set<T> {}
interface WeakSet<T extends WeakKeyTypes> {}

(function() {
    new Promise;
    new Symbol; Symbol();
    new Map;
    new WeakMap;
    new Set;
    new WeakSet;
});


//// [forwardDeclaredCommonTypes01.js]
(function () {
    new Promise;
    new Symbol;
    Symbol();
    new Map;
    new WeakMap;
    new Set;
    new WeakSet;
});
