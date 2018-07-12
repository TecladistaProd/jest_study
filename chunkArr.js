const chunkArr = (arr, n) => {
    const chunked = [[]]
    arr.forEach(el=>{
        const last = chunked[chunked.length - 1]
        if(!last || last.length === n)
            chunked.push([el])
        else
            last.push(el)
    })
    return chunked
}

module.exports = chunkArr