'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(attackPower, health) {
    _classCallCheck(this, Character);

    this.attackPower = attackPower;
    this.health = health;
  }

  _createClass(Character, [{
    key: 'attack',
    value: function attack(opposingPlayer) {
      if (Math.random() > 0.5) {
        opposingPlayer.health -= this.attackPower;
      }
    }
  }]);

  return Character;
}();

// const red = new Character(x,y);
// const blue = new Character(a,b);


var red = new Character(2, 5);
var blue = new Character(3, 6);

var winnerArr = ['red', 'blue', 'red', 'blue', 'yellow'];
var winArr = winnerArr.map(function (item, index) {
  return { winner: item };
});

console.log(winArr);

while (red.health > 0 && blue.health > 0) {
  red.attack(blue);
  blue.attack(red);
}
console.log(red.health, blue.health);
