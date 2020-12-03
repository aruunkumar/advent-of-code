//Day 3: Toboggan Trajectory

const fs = require('fs');
const data = fs.readFileSync('Day3Input','UTF-8');
let lines = data.split(/\r?\n/);

const tragectory1 = (lines, right, down) => {
    let j=right, count=0;
    for (let i=down; i< lines.length; i+=down) {
        if (lines[i][j] == "#") count++;
        j+=right;
        if (j > lines[i].length-1) j = j - lines[i].length;
    }
    return count;
}  

console.log(tragectory1(lines,3,1));
console.log(tragectory1(lines,1,1)*tragectory1(lines,3,1)*tragectory1(lines,5,1)*tragectory1(lines,7,1)*tragectory1(lines,1,2));