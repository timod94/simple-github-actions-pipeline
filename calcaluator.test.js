const { default: test } = require('node:test');
const add = require('./calculator');

test('addiert 1 + 2 und gibt 3 zurück', () => { 
    expect(add(1,2)).toBe(3);
})

const sub = require('./calculator');

test('subtrahiert 2 - 1 und gibt 1 zurück', () => {
    expect(sub(2,1)).toBe(1);
})