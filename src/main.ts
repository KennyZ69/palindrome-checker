/// <reference lib="dom" />

// ! Alright, I need to make a plan
// ! Firstly I've taken all the elements I need rn, I've made the Error function.
// ! Also I've started checking for the palindrome, starting with getting the org input and replacing the last result made.
// ! Next make it the same case to be able to check it
// ! Show the results div.
// ! Make the event listner for click on the Btn, also for the Enter key !
// ! Lets make it all work tomorrow, 4.1.24;

export function transpileThis(): void{

const checkBtn = document.getElementById('check-btn');
const userInput: any = document.querySelector('.input');
const resultsDiv = document.querySelector('.results');

function throwErrorAlert(){
  alert('Please input a valid value');
  return;
}

const checkForPalindrome = (input: string | number) => {
  const originalInput = input;
  let lowerCased;

  if (input === ''){
    throwErrorAlert();
  };

  resultsDiv?.replaceChildren();

  // ! Used this of statement from chatgtp to make the text lower case, tested it in the 'counter' file
  if (typeof input === 'string') {
    // Use a regular expression to match and convert only string parts to lowercase
   lowerCased = input.replace(/[a-zA-Z]/g, (match) => match.toLowerCase());
  }
  lowerCased = input.toString();

  let resultMSg = `<strong>${originalInput}</strong> ${lowerCased === [...lowerCased].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

  const pTag = document.createElement('p');
  pTag.innerHTML = resultMSg;
  pTag.className = 'user-input';
  resultsDiv?.appendChild(pTag);

  resultsDiv?.classList.remove('hidden');

};

checkBtn?.addEventListener('click', () => {
  if(userInput !== null){
    checkForPalindrome(userInput?.value);
    userInput.value = '';
  }
});

userInput.addEventListener('keydown', (e: any) => {
  if (e.key === 'Enter'){
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
})
};

// Headers('Content-Type: ')
// const file = Bun.file('/main.ts', { type: "typescript" })
// console.log(file);
