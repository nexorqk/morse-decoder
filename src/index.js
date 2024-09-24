const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arrWithSlices = [];

  for (let i = 0; i < expr.length / 10; i++) {
    arrWithSlices.push(expr.slice(i * 10, (i + 1) * 10));
  }

  const arrWithDividedByTwo = [];

  arrWithSlices.forEach((item) => {
    const itemArr = [];

    for (let i = 0; i < item.length; i += 2) {
      itemArr.push(item.slice(i, i + 2));
    }

    arrWithDividedByTwo.push(itemArr);
  });

  const encryptedArr = arrWithDividedByTwo.map((item) =>
    item.map((item) => {
      if (item === "10") {
        return ".";
      }
      if (item === "11") {
        return "-";
      }
      if (item === "**") {
        return " ";
      }
      return "";
    })
  );

  return encryptedArr
    .map((item) => item.join(""))
    .map((item) => (MORSE_TABLE[item] ? MORSE_TABLE[item] : " "))
    .join("");
}

module.exports = {
  decode,
};
