function solution(n) {
    return Array(n).fill(1).map((v,i)=>v+i).filter((a)=>a%2);
}