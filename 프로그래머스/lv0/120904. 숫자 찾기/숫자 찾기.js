function solution(num, k) {
    let answer = String(num).split('').indexOf(String(k))
    return answer === -1 ? answer : answer+1 ;
}