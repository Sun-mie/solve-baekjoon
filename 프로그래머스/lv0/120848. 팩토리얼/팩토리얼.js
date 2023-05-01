function solution(n) {
    let answer = 1;
    let multi = 0;
    while(answer <= n){
        answer *= ++multi;
    }
    return multi-1;
}