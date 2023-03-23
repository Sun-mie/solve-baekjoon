function solution(strlist) {
    for(let inx in strlist){
        strlist.splice(inx, 1, strlist[inx].length);
    }
    return strlist;
}