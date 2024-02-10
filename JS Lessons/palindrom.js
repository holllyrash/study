let originalText = "racecar";

function isPalindrome() {
  let reversedText = originalText.split("").reverse().join("");
  return originalText == reversedText;
}

console.log(isPalindrome());

originalText = "something";

console.log(isPalindrome());
