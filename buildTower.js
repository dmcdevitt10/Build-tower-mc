function tower(num){
    let arr = []
    let star = '*'
    for(let i = 0; i < num; i++){
        arr.push(star)
        star += '**'
        for(let k = 0; k < arr.length - 1; k++){
            arr[k] = ' ' + arr[k] + ' '
        }
    }
    return arr
}

console.log(tower(13))