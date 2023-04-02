function solution(n) {
    return Array(n+1).fill(1).map((v,i)=>{if(i%2){return i}return;}).filter((a)=>a!=undefined);
}