const Player1 = {
  name: 'Sub-zero',
  hp: 100,
  img: '',
  weapon: 'Ice Sword',
  attack: function() {
  console.log(Player1.name + ' Fight...');
  }
};
const Player2 = {
  name: 'Scorpion',
  hp: 100,
  img: '',
  weapon: 'Fireball',
  attack: function() {
  console.log(Player2.name + ' Fight...');
  }
};
Player1.attack();
Player2.attack();