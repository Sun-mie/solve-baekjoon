function solution(s) {
    // return s.split(' ').filter((v, i, arr)=> arr[i+1]==='Z' | v==='Z' ? false : true).reduce((a, c)=>a+=Number(c), 0);
    
    // let answer = 0;
    // s.split(' ').reduce((a, c)=>{
    //     c === 'Z' ? answer -= Number(a) : answer += Number(c);
    //     return c;
    // }, 0)
    // return answer;
    
    // return s.split(' ').filter((v, i)=> a[i+1]!=='Z' && !isNaN(v)).reduce((a, c)=> a+=Number(c), 0)
    
    return s.split(' ').reduce((a, v, i, arr)=> arr[i+1]!=='Z' && !isNaN(v) ? a+=Number(v) : a, 0)
}