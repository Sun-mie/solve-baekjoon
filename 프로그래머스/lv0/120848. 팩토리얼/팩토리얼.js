function solution(n) {
    // let answer = 1;
    // let multi = 0;
    // while(answer <= n){
    //     answer *= ++multi;
    // }
    // return multi-1;
    
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}
