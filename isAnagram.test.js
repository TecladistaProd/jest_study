const isA = require('./isAnagram')

test('isAnagram function exists', () => {
    expect(typeof isA).toEqual('function')
})

test('"cinema" is an anagram of "iceman"', ()=>{
    expect(isA('cinema', 'iceman')).toBeTruthy()
})

test('"Dormitory" is an anagram of "dirty room###"', () => {
    expect(isA('Dormitory', 'dirty room###')).toBeTruthy()
})

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isA('Hello', 'Aloha')).toBeFalsy()
})
