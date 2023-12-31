function convertToRoman(num) {
  let numeralsObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";

  for (let romanNumKey in numeralsObject) {
    while (num >= numeralsObject[romanNumKey]) {
      num -= numeralsObject[romanNumKey];
      roman += romanNumKey;
    }
  }
  return roman;
}

convertToRoman(36);
console.log(convertToRoman(36));
