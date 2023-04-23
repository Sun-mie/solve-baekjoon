function solution(n) {
    var answer = [];
    let a = 1
    while(a <= n){
        if(n%a ==0) answer.push(a)
        a++
    }
    return answer;
}