function solution(array) {
    let arr = array.join('').split('').filter(v=>/7+/.test(v))
    return arr.length;
}