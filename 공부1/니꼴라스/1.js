

function sayHello(nameofPerson,age)
{
  console.log(`Hello my Name is ${nameofPerson} my Age ${age}`);
}


sayHello("Nico",10);
sayHello("dal",23);
sayHello("sumin",27);


function plus(a,b){
  console.log(a,b);
}

plus(8,60);


function divde(a,b){
  console.log(a/b);
}


divde(98,20);

const player={
  name:"Nico",
  sayHello:function(divde){
    console.log(`hello ${divde}`)
  },
};


console.log(player.name);

player.sayHello("sumin")