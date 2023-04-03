function solution(my_string) {
    return [...my_string].filter(v => /[0-9]/.test(v)).reduce((a,v)=> a+=parseInt(v),0);
}