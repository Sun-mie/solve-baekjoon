function solution(my_string) {
    let temp = new Set();
    let answer = [];
    for(let a of my_string){
        temp.add(a)
    }
    temp.forEach(a=> answer.push(a))
    return answer.join('');
}