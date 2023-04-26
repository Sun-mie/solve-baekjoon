function solution(n) {
    let arry = Array(n).fill('').filter((val, idx, arr)=>{
        let cnt = 0;
        for(let i=1; i<=arr.length; i++){
            if((idx+1)%i===0) cnt++;
            if(cnt>=3) return true;
        }
    })
    return arry.length;
}