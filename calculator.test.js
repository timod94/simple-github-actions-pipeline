const add = require('./calculator');

test('addiert 2 + 2 und gibt 4 zurück', () => { 
    expect(add(2,2)).toBe(4);
})