function isPalindrome(str) {
  let filteredStr = "";

  for (let char of str) {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      filteredStr += char.toLowerCase();
    }
  }

  let j = filteredStr.length - 1;
  for (let i = 0; i < filteredStr.length / 2; i++) {
    if (filteredStr[i] != filteredStr[j]) {
      return false;
    }
    j--;
  }
  return true;
}

let name = "Nan";
const ans = isPalindrome(name);
console.log(ans);

module.exports = isPalindrome;
