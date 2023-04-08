function solution(hp) {
    let antA = Math.floor(hp/5);
    let antB = Math.floor((hp-(antA * 5))/3);
    let antC = hp - (antA * 5) - (antB * 3);
    return antA + antB + antC;
}