function solution(array, n) {
    var answer = 0;
    answer = array.filter(v => n == v).length
    return answer;
}