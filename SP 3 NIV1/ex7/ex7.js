"use strictly";
let objetes = ["taula", "cadira", "ordinador", "libreta"];
function position(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`L'objecte ${arr[i]} està a la posició ${i}`);
  }
}

position(["taula", "cadira", "ordinador", "libreta"]);
