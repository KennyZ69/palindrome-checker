// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }
function testInput(input: string | number){
  let lowerCased;
if (typeof input === 'string') {
    // Use a regular expression to match and convert only string parts to lowercase
    lowerCased = input.replace(/[a-zA-Z]/g, (match) => match.toLowerCase());
    // return lowerCased;
  }
  else{
    lowerCased = input.toString();
  };

  const testResult = lowerCased === [...lowerCased].reverse().join('') ? true : false;
  return testResult; // Return the testResult if needed  
}

const result = testInput('Ada 23 Ada');
console.log(result);

