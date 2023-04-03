function solution(my_string) {
    //let arr = [...my_string].filter(v => /[0-9]/.test(v)).reduce((a,v)=> a+=parseInt(v),0);
    return my_string.match(/[0-9]/g).reduce((a,v)=> parseInt(a)+parseInt(v));
}