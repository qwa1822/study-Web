const user={
  email:'haver@gmail.com',
  password:'sumin',
  firstName:'Harvey',
  lastName:'Milk',
  born:1930,
  died:1978,
  bio:'Harvey Bernard Milk was an Americal policatica',
  city:'San Francisco',
  state:'California'
}


// const firstName=user.firstName;
// const lastName=user.lastName;
// const email=user.email;


const {email,firstName,lastName,city,bio}=user;



function fullName(user){
  const {firstName,lastName}=user;
  return `${user.firstName} ${user.lastName}`
}


function fullName({firstName,lastName}){
  return `${firstName} ${lastName}`
}