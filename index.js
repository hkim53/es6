

class Character {
  constructor(attackPower, health) {
    this.attackPower = attackPower;
    this.health = health;
  }

  attack (opposingPlayer) {
    if(Math.random() > 0.5) {
      opposingPlayer.health -= this.attackPower;
    }
  }
}

// const red = new Character(x,y);
// const blue = new Character(a,b);
const red = new Character(Math.random(), 5);
const blue = new Character(Math.random(), 6);


const winnerArr = ['red', 'blue', 'red', 'blue'];
let winArr = winnerArr.map((item, index) => ({winner: item}));

console.log(winArr);

while(red.health > 0 && blue.health > 0) {
  red.attack(blue);
  blue.attack(red);
}
console.log(red.health, blue.health);
