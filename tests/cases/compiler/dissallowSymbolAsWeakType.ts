// @lib: es2022
// @target: es2022

const s: symbol = Symbol('s');

const ws = new WeakSet([s]);
ws.add(s);