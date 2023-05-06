function solution(array, n) {
    array.sort((a, b)=> Math.abs(a-n) - Math.abs(b-n) || a-b)
    return array[0];
    
    // return array.reduce((a, c)=>{
    //     return Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c}) ;
}