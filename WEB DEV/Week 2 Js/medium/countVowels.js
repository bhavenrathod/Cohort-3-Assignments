// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u" ||
//       str[i] == "A" ||
//       str[i] == "E" ||
//       str[i] == "I" ||
//       str[i] == "O" ||
//       str[i] == "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// let string = "aaaaaa";
// const ans = countVowels(string);
// console.log(ans);

// --------------------------------OR METHOD-----------------------------------

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

let string = "bhaven";
const ans = countVowels(string);
console.log(ans);

module.exports = countVowels;
