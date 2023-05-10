function solution(s) {
    let temp = {}
    let answer = [];
    [...s].map(v => temp[v]>0 ? temp[v] += 1 : temp[v] = 1);
    Object.keys(temp).map(v => {if(temp[v] === 1) answer.push(v)});
    return answer.sort().join('');
}