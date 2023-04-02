function solution(my_string) {
    let except = ['a', 'e', 'i', 'o', 'u'];
    return my_string.split('').filter(a=>!except.includes(a)).join('');
}