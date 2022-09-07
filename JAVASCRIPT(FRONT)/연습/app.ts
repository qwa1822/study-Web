type MyObject={
  name:string;
  age:number;
  getFamilyName:()=>string;
  getLastName:()=>string;
  getBloodType:()=>string;
}

const obj: MyObject={
  name:'Min tag',
  age:40,
  getFamilyName:function(){
    return 'Kim';
  },
  getLastName:()=>'kim',
  getBloodType:function(){
    return 'B';
  }

};

obj.name;
obj.age;
obj.getFamilyName();
obj.getFamilyName();
delete obj.name;
obj.age=200;
obj.age=-500;

class Person{
  _bloodType:string;


  constructor(bloodType:string){
    this._bloodType=bloodType;
  }

  set bloodType(btype:string){
    if(btype==='A' || btype==='B'|| btype==='o' || btype==='AB'){
    this._bloodType=btype;
  }
}


  get bloodType()
  {
    return `${this._bloodType} 형`;
  }


}

const p1=new Person('B');
p1.bloodType;
p1.bloodType='C';

const myObj=Object.create(null,{
  name:{
    value:'kimsumin',
    writable:true,
    configurable:false,
  }
})

myObj.name="하하하";