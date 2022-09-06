// async function hello(){
//   return 'Hey GUy!';
// }
// hello();


// const login=async(username,password)=>{
//   if(!username || !password) throw 'Missing Credenttials'
//   if(password===='corgifeetarecute') return true'WELCOME'
//   throw 'Invalid Password'
// }

// login('akjsdasdas')
// .then(msg=>{
//   console.log("Loggin !");
//   console.log(msg);
// })
// .catch(err=>{
// //   console.log("ERROR");
// //   console.log(err);
// })


async function rainbow(){
  await delayedColorChange('red',1000)
  await delayedColorChange('orange',1000)
  await delayedColorChange('yellow',1000)
  await delayedColorChange('green',1000)
  await delayedColorChange('blue',1000)
  await delayedColorChange('indigo',1000)
  await delayedColorChange('violet',1000)
  return "ALL DONE!"
}

