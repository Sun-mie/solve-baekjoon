function solution(my_string) {
    return my_string.replaceAll(/[^0-9]/g, '').split('').sort().map((v)=>parseInt(v));
}