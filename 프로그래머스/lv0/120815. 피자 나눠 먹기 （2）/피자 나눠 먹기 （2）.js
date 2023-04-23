function solution(n) {
    let pizza = 1;
    while(!Number.isInteger((6*pizza)/n)){
        pizza++;
    }
    return pizza;
}