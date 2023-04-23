function solution(numbers, direction) {
    let answer = [...numbers]
    if(direction === 'right'){
        answer.unshift(answer.slice(-1)[0])
        answer.pop()
    }else{
        answer.push(answer[0])
        answer.splice(0, 1)
    }
    return answer;
}