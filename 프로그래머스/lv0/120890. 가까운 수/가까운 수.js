function solution(array, n) {
    console.log(array.sort((a, b)=>{
        if(Math.abs(a-n) === Math.abs(b-n)) return a-b;
        else return Math.abs(a-n)-Math.abs(b-n);
    }))
    return array[0];
}