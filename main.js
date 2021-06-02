
let names = ["akhil", "anand", "john", "amanda", "larry"];
let searchChar = "a";
let maxOcurrence = 1;
let result = "";
for (let i = 0; i < names.length; i++) {
    let res = countOccurrences(names[i], searchChar, maxOcurrence);
    if (res) {
        if (!result) {
            result = "Expected Result : " + res;
        } else {
            result += ", " + res;
        }
    }
}
console.log(result);

function countOccurrences(str, character, maxOcurrence) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === character) {
            res++;
        }
    }
    if (res > maxOcurrence) {
        return str;
    }
}