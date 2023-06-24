function solution(array) {
    return array.join('').split('').filter(v=>/7+/.test(v)).length;
}