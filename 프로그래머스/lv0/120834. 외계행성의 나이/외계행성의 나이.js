function solution(age) {
    return (''+age).split('').map((v)=>'abcdefghij'[v]).join('');
}