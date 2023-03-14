//// [dissallowSymbolAsWeakType.ts]
const s: symbol = Symbol('s');

const ws = new WeakSet([s]);
ws.add(s);

//// [dissallowSymbolAsWeakType.js]
const s = Symbol('s');
const ws = new WeakSet([s]);
ws.add(s);
