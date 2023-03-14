// @lib: esnext
// @target: esnext

const s: symbol = Symbol('s');

const ws = new WeakSet([s]);
ws.add(s);