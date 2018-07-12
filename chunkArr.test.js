const chunkArr = require('./chunkArr')

test('chunkArray function exists', () =>{
    expect(chunkArr).toBeDefined()
})

test('Chunk an array of 10 values with length of 2', ()=>{
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    const len = 2
    const chunked = chunkArr(numbers, len)

    expect(chunked).toEqual([[1,2],[3,4],[5,6],[7,8],[9,0]])
})