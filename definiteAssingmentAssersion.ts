let dice! :number;
function rollDice(){
    dice=(Math.round(Math.random()*6)+1);
}
rollDice();
console.log(`roll dise is `,dice);
