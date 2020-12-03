//Day 2: Password Philosophy 

const fs = require('fs');
const data = fs.readFileSync('Day2Input', 'UTF-8');
let lines = data.split(/\r?\n/);

//Part1
const validPassword1 = (input) => {
    let count=0;
    for (let i=0; i < input.length; i++) {
        let array = input[i].split(/\W/);  // Split based on character that is not a number or alphabet
        let j = array[0], k = array[1], char = array[2], pwd = array[4];
        let match = pwd.split('').filter(item => item==char); //make an array of only matching characters
        if (match.length>=j && match.length<=k) {
            count++;
        }
    }
    return count;

}

//Part 2
const validPassword2 = (input) => {
    let count=0;
    for (let i=0; i < input.length; i++) {
        let array = input[i].split(/\W/);  // Split based on character that is not a number or alphabet
        let j = array[0], k = array[1], char = array[2], pwd = array[4];
        if ((pwd[j-1] == char && pwd[k-1] != char) || //Ensure that the character is present exactly once 
            (pwd[j-1] != char && pwd[k-1] == char)) {
            count++;
        }
    }
    return count;
} 

console.log(validPassword1(lines));

console.log(validPassword2(lines));


