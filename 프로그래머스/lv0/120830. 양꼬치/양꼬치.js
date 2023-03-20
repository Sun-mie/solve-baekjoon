function solution(n, k) {
    var answer = 0;
    let sheep = n * 12000;
    let beverage = (k - Math.floor(n/10)) * 2000;
    answer += sheep;
    answer += beverage;
    return answer;
}