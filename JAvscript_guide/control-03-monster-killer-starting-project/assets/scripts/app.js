const ATTACK_VALUE=10;
const strong_attack_value=17;
const MONSTER_ATTACK_VALUE=14;
const HEAL_VALUE=20;


let chosenMaxLife=100;
let currentMosterHealth=chosenMaxLife;
let currentPlayerHealth=chosenMaxLife;
let hasBonusLife=true;
let isLoggedIn


adjustHealthBars(chosenMaxLife)


function endRound()
{
  const initialPlayerLife=currentPlayerHealth;
  const playerDeemage=dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth-=playerDeemage;


  if(currentPlayerHealth<=0 && hasBonusLife){
    hasBonusLife=false;
    removeBonusLife();
    currentPlayerHealth=initialPlayerLife;
    alert('You would boe dead to something')
  }

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

function attackMonster(mode){
  let maxDamage;
  if(mode==='ATTACK'){
    maxDamage=ATTACK_VALUE;
  } else if(mode==='STRONG_ATTACK'){
    maxDamage=strong_attack_value;
  }
  
 const damage=dealMonsterDamage(strong_attack_value);
 currentMosterHealth-=damage;
  endRound();
}






function attackHandler()
{
attackMonster('ATTACK');
}
function strongAttackHandler()
{
  attackMonster("STRONG_ATTACK");
}

function healPlayerHeadler()
{
  let healvalue;
  if(currentPlayerHealth>=chosenMaxLife-HEAL_VALUE){
    alert("You can't heal to more than your max initial health.")
    healvalue=chosenMaxLife-currentPlayerHealth;
  }
  else{
    healvalue=HEAL_VALUE;
  }
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth+=HEAL_VALUE;
  endRound();

}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttackHandler);
healBtn.addEventListener('click',healPlayerHeadler);