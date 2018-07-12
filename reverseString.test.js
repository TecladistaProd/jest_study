const rS = require('./reverseString')

test('reverseString function exists', () => {
    expect(rS).toBeDefined()
})

test('String reverses', () => {
    expect(rS('hello')).toEqual('olleh')
})

test('String reverses with uppercase', () => {
    expect(rS('HellO')).toEqual('olleh')
})
