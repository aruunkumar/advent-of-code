const fs = require('fs');
const readline = require('readline');

// const readInterface = readline.createInterface({
//     input: fs.createReadStream('TestInput'),
//     output: process.stdout,
//     console: false
// });


const data = fs.readFileSync('Day1Input', 'UTF-8');
let lines = data.split(/\r?\n/);

// Two numbers equalling 2020
const reportRepair1 = (lines) => {
    let list = new Set(); 
    for (let i=0; i < lines.length; i++) {
        let val = parseInt(lines[i]);
        if (list.has(2020 - val)) {  // If the difference is found in the list then we got a match
            console.log('match found', val, 2020-val);
            return (val * (2020 - val));
        }
        else {
            list.add(val); //Else add this number to the list for easy lookup
        }
    }
}

// Three numbers equalling 2020
const reportRepair2 = (lines) => {
    for (let i=0; i < lines.length; i++) { 
        let list = new Set();
        let val1 = parseInt(lines[i]);
        let sum = 2020-val1;
//Breakdown to a sub problem to get the two numbers that add up to yield 2020 when added to the first number        
        for (let j = i+1; j < lines.length; j++) { 
            let val2 = parseInt(lines[j]);
            if (list.has(sum - val2)) {
                console.log('match found', val1, val2, sum-val2);
                return (val1 * val2 * (sum - val2));
            }
            else {
                list.add(val2);
            }
        }
    
    }
}

console.log(reportRepair1(lines));
console.log(reportRepair2(lines));