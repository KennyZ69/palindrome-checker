/// <reference lib="dom" /> 

const checkBtn = document.getElementById("check-btn");
const userInput = document.querySelector(".input");
const resultsDiv = document.querySelector(".results");
function throwErrorAlert() {
  alert("Please input a valid value");
  return;
}
const checkForPalindrome = (input) => {
  const originalInput = input;
  let lowerCased;
  if (input === "") {
    throwErrorAlert();
  }
  resultsDiv.replaceChildren();
  if (typeof input === "string") {
    lowerCased = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  }
  lowerCased = input.toString().replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMSg = `<strong>${originalInput}</strong> ${lowerCased === [...lowerCased].reverse().join("") ? "is" : "is not"} a palindrome.`;
  const pTag = document.createElement("p");
  pTag.innerHTML = resultMSg;
  pTag.className = "user-input";
  resultsDiv?.appendChild(pTag);
  resultsDiv?.classList.remove("hidden");
};
checkBtn.addEventListener("click", () => {
  if (userInput !== null) {
    checkForPalindrome(userInput?.value);
    userInput.value = "";
  }
});
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkForPalindrome(userInput.value);
    userInput.value = "";
  }
});
