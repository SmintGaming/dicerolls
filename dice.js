console.log("▓█████▄  ██▓ ▄████▄  ▓█████ ");
console.log("▒██▀ ██▌▓██▒▒██▀ ▀█  ▓█   ▀  " );
console.log("░██   █▌▒██▒▒▓█    ▄ ▒███     "  ); 
console.log("░▓█▄   ▌░██░▒▓▓▄ ▄██▒▒▓█  ▄   ");
console.log("░▒████▓ ░██░▒ ▓███▀ ░░▒████▒");
console.log(" ▒▒▓  ▒ ░▓  ░ ░▒ ▒  ░░░ ▒░ ░   " );
console.log(" ░ ▒  ▒  ▒ ░  ░  ▒    ░ ░  ░    "    );
console.log(" ░ ░  ░  ▒ ░░           ░        "     );
console.log("   ░     ░  ░ ░         ░  ░     "      );
console.log(" ░          ░                      "       );
console.log("The Best Diceroller CLI (Made By SmintOverflow)");
console.log("");

function Dice() {
global.n = Math.random();
n = n*6;
n = Math.floor(n);
}
Dice();
if (n == 0) {
  Dice();
   if (n == 0) {
       Dice();
       if (n == 0) {
        Dice();
        if (n == 0) {
          Dice();

        } else {
          console.log("The Dice Says " + n);
        }
       } else {
         console.log("The Dice Says " + n);
       }
   } else {
       console.log("The Dice Says " + n);
   }
   
} else {
  console.log("The Dice Says " + n);
}