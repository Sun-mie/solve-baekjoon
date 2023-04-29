function solution(before, after) {
    let answer = [...before]
    for(let v of after){
        let chk = answer.findIndex(a => a == v)
        if (chk >= 0){
            answer.splice(chk ,1)
        }
    }
    return answer.length == 0 ? 1 : 0;
}