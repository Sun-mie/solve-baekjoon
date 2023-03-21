function solution(n) {
    let pizza = 7;
    return n % pizza == 0 ? Math.floor(n/pizza) : Math.ceil(n/pizza);
}