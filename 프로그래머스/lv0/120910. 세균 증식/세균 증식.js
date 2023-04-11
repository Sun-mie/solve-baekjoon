function solution(n, t) {
    let answer = n;
    for(let re; t>0; t--){
        answer = answer*2
    }
    return answer;
}