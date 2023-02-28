function split(str, pattern){
    
    let arr = []
    let index = 0
    
    do {
        index = str.search(pattern)
        if(index != 0 && index != -1) {
            arr.push(str.slice(0, index))
        }
        str = str.slice(index + 1)
    } while(index != -1)
    
    if(str.length > 0) {
        arr.push(str)
    }
    
    return arr
}

console.log(split('Maria Helena Conçalves', ' '))