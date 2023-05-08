function solution(my_string) {
    
    // parseInt()와 Number()의 차이
    console.log(parseInt('')) // NaN
    console.log(Number('')) // 0
    console.log(parseInt('2023년')) // 2023
    console.log(Number('2023년')) // NaN
    console.log(parseInt('제1회')) // NaN
    console.log(Number('제1회')) // NaN
    console.log(parseInt('10.1234')) // 10
    console.log(Number('10.1234')) // 10.1234
    
    return my_string.split(/[a-zA-Z]/).reduce((a, c)=> a+=Number(c), 0);
}