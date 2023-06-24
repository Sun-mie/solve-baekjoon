function solution(array) {
    //return array.join('').split('').filter(v=>/7+/.test(v)).length;
    return array.join('').split('7').length-1;
}