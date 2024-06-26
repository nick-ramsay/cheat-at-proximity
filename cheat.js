let currentGameNumber = document.querySelector("body > div > app-root > div > div.px-2.md\\:px-0.pb-4.bg-white.dark\\:\\!bg-black > app-game > div > div > div > div.flex.justify-between.items-center.mt-4 > div > p > span").textContent;

let proximitySolution = JSON.parse(localStorage.getItem("game_proximity_" + currentGameNumber)).secretWord;
console.log("Greetings, cheater! Today's answer is: " + proximitySolution);
