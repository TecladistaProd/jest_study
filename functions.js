const axios = require('axios')
const functions = {
    add: (n1, n2) => n1 + n2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Vitor'}
        user['lastName'] = 'Silva'
        return user
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(r=> r.data).catch(err=> 'error'),
}

module.exports = functions