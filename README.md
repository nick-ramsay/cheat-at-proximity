Hello, cheaters! If you want to find today's Proximity (https://proximity.clevergoat.com/) answer, copy and run the code in the ```cheat.js``` file in your browser's DevTools.

1. Press the ```F12``` key to open DevTools
2. Open the Console tab
3. Paste the code snippet from the ```cheat.js``` file in the Console
```
let currentGameNumber = document.querySelector("body > div > app-root > div > div.px-2.md\\:px-0.pb-4.bg-white.dark\\:\\!bg-black > app-game > div > div > div > div.flex.justify-between.items-center.mt-4 > div > p > span").textContent;

let proximitySolution = JSON.parse(localStorage.getItem("game_proximity_" + currentGameNumber)).secretWord;
console.log("Greetings, cheater! Today's answer is: " + proximitySolution);
```
4. Press the ```Enter``` key

That's it, cheater!
