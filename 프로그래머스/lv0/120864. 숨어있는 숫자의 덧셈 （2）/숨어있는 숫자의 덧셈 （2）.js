function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).filter(v=>v!='').reduce((a, c)=> a+=Number.parseInt(c), 0);
}