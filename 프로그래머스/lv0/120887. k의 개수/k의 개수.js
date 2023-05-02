function solution(i, j, k) {
    let cnt = i;
    let answer = 0;
    while(cnt<=j){
        answer += cnt.toString().split('').filter(v=> Number.parseInt(v) === Number.parseInt(k)).length
        cnt++
    }
    return answer;
}