const isAnagram = (s1, s2) => {
    function formatS(s){
        return s.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    }
    return formatS(s1) === formatS(s2)
}

module.exports = isAnagram