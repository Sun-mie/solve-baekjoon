function solution(my_string) {
    let temp_set = new Set();
    let answer = [];
    for(let a of my_string){
        temp_set.add(a);
    }
    temp_set.forEach(a => answer.push(a));
    return answer.join('');
}