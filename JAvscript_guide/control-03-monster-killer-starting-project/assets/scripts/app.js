const ATTACK_VALUE=10;
const MONSTER_ATTACK_VALUE=14;


let chosenMaxLife=5;
let currentMosterHealth=chosenMaxLife;
let currentPlayerHealth=chosenMaxLife;

adjustHealthBars(chosenMaxLife)

function attackHandler(){
 const damage=dealMonsterDamage(ATTACK_VALUE);
  currentMosterHealth-=damage;
  const playerDeemage=dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth-=playerDeemage;
  if (currentMosterHealth<=0 && currentPlayerHealth>0){
    alert("You won!");
  }
  else if(currentPlayerHealth<=0  && currentMosterHealth>0){
    alert('You Lost!')
  }
  else if(currentMosterHealth<=0 && currentPlayerHealth<=0){
    alert("You have a draw!")
  }
}




attackBtn.addEventListener('click',attackHandler)