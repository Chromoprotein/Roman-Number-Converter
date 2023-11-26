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

  return Object.entries(numeralsObject).reduce(
    (romanAccumulator, [romanNumKey, arabicValue]) => {
      while (num >= arabicValue) {
        num -= arabicValue;
        romanAccumulator += romanNumKey;
      }
      return romanAccumulator;
    },
    ""
  );
}

convertToRoman(36);
console.log(convertToRoman(36));
