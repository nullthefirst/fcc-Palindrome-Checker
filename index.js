function palindrome(str) {
  let cleanedString = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
  let reversedString = '';

  for (let i = cleanedString.length - 1; i >= 0; i--) {
    reversedString += cleanedString[i];
  }

  const stringInfo = [cleanedString, reversedString];
  // console.log(stringInfo);

  return stringInfo[0] === stringInfo[1] ? true: false;
}



palindrome("eye");