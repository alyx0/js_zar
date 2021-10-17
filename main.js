const Player1 = {
  name: 'Sub-zero',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: 'Ice Sword',
  attack: function() {
  console.log(Player1.name + ' Fight...');
  }
};
const Player2 = {
  name: 'Scorpion',
  hp: 60,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: 'Fireball',
  attack: function() {
  console.log(Player2.name + ' Fight...');
  }
};
Player1.attack();
Player2.attack();

function createPlayer(PlayerClass, PlayerName, PlayerHP) { 
console.log('Fight!!!!!!');	
const $player1 = document.createElement('div');
$player1.classList.add(PlayerClass);
const $progressbar = document.createElement('div');
const $character = document.createElement('div');
const $life = document.createElement('div');

const $name = document.createElement('div');

const $img = document.createElement('img');
const $pl_hp = PlayerName.hp;
const $pl_name = PlayerName.name;
$img.src=PlayerName.img;
$player1.appendChild($progressbar);
$player1.appendChild($character);
$progressbar.appendChild($life);
$progressbar.appendChild($name);
$character.appendChild($img);
const $arenas = document.createElement('div');
$arenas.appendChild($player1);
const $root = document.querySelector('.root');
$root.appendChild($arenas);
}

createPlayer('Player1', Player1);
createPlayer('Player2', Player2);
