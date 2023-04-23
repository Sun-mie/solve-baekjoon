function solution(n) {
    let ave = 6;
    let answer = 0;
    for(let pizza=1; !Number.isInteger((6*pizza)/n); pizza ++){
        answer = pizza
    }
    return answer+1;
}