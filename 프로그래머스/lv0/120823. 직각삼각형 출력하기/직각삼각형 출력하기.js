const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
        let star = '*'
        for(let a=1; a<=Number(input[0]); a++){
            console.log(star)
            star+='*'
         };
});