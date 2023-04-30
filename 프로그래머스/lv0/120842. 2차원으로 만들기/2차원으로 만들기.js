function solution(num_list, n) {
    // [1]
    // let answer = [];
    // for(let i=0; i<num_list.length; i+=n){
    //     answer.push(num_list.slice(i, i+n))
    // }
    // return answer;
    
    // [2]
    // return new Array(num_list.length / n).fill([]).map(()=>num_list.splice(0, n));
    
    // [3]
    let arr = []
    while(num_list.length){
        arr.push(num_list.splice(0,n))
    }
    return arr;
}