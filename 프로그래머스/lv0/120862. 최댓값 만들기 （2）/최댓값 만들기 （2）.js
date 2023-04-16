function solution(numbers) {
    let arr = [];
    for(let i=0; i<numbers.length; i++){
        for(let v=i+1; v<numbers.length; v++){
            arr.push(numbers[i] * numbers[v]);
        }
    }
    return arr.sort((a, b)=>b-a)[0];
}