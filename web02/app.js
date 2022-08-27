


const person={
  firstName:"MINSU",
  lastName:"sumin",
  fullName:()=>{
    
    return `${this.firstName} ${this.lastName}`
  },
  smartName:function(){
    setTimeout(()=>{
      console.log(this);
      console.log(this.fullName);
    },3000)
  }
}