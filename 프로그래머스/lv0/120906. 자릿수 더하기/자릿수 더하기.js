function solution(n) {
    return String(n).match(/[0-9]/g).reduce((a,v)=>parseInt(a)+parseInt(v),0);
}