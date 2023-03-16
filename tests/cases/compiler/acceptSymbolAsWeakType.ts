// @lib: esnext
// @target: esnext

const s: symbol = Symbol('s');

const ws = new WeakSet([s]);
ws.add(s);
ws.has(s);
ws.delete(s);

const wm = new WeakMap([[s, false]]);
wm.set(s, true);
wm.has(s);
wm.get(s);
wm.delete(s);