
function sort(values = []) {

    let arr = values
    let count = arr.length - 1
    let modify = false

    while (count > 0) {
        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] < arr[i + 1]) {
                let n = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = n
                modify = true
            }
        }

        count = modify ? count - 1 : 0

        modify = false
    }

    return arr
}

console.log(sort([4, 86, 1, 44, 09, 23, 125, 45, 2444]))