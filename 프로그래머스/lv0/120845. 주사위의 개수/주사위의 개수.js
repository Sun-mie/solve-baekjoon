function solution(box, n) {
    return box.map((v)=>Math.floor(v/n)).reduce((a,c)=>a*c);
}