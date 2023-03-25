function solution(my_string, letter) {
    return my_string.split("").filter(w=>w!=letter).join("");
}