"use strictly";
let str = "Tinc un cotxe de color blau";
function replace(str) {
  //replace word
  let rWord = str.replace("blau", "verd");
  console.log(rWord);
}

function replaceVowel(str) {
  //replace vowel
  let rVowel = str.replaceAll("o", "u");
  console.log(rVowel);
}

replace("Tinc un cotxe de color blau");
replaceVowel("Tinc un cotxe de color blau");
