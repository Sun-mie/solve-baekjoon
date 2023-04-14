function solution(n) {
    return Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n ? 1 : 2;
}