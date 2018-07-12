const functions = require('./functions')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(()=> initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialize...')
// const closeDatabase = () => console.log('Database Closed...')

const nameCheck = () => console.log('Checking Names...')

describe('Checking Names', ()=>{
    beforeEach(()=> nameCheck())

    test('user is Jeff', ()=> {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })
})

test('user is Karen', () => {
    const user = 'Karen'
    expect(user).toBe('Karen')
})

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// CHECK THRUTHY OR FALSY

test('Should be null', ()=>{
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', ()=>{
    expect(functions.checkValue(NaN)).toBeFalsy()
})

test('User should be Vitor Silva object', ()=>{
    // For Objects and Array is using toEqual because, they are a memory representation and is not the same object is equal but no the same
    expect(functions.createUser()).toEqual({firstName: 'Vitor', lastName: 'Silva'})
})

// Less than and Greater than

test('Should be under 1600', ()=>{
    const load1 = 800, load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
})

// Regex

test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/)
})

// Arrays

test('Admin should be in usernames', ()=>{
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})


// Working with async data

test('User fetched name should be Leanne Graham', ()=>{
    expect.assertions(1)
    return functions.fetchUser().then(data => expect(data.name).toEqual('Leanne Graham'))
})

test('User fetched name should be Leanne Graham', async () => {
    user = await functions.fetchUser()
    expect(user.name).toEqual('Leanne Graham')
})