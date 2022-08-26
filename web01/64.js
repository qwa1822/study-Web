


/*

Egg Laying Exercise
Define an object called hen.  It should have three properties:

name should be set to 'Helen'

eggCount should be set to 0

layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

hen.name // "Helen"
hen.eggCount // 0
hen.layAnEgg() // "EGG"
hen.layAnEgg() // "EGG"
hen.eggCount // 2

알 낳기 운동
라는 개체를 정의합니다 hen. 세 가지 속성이 있어야 합니다.

name'헬렌'으로 설정해야 합니다.

eggCount0으로 설정해야 합니다

layAnEggeggCount값을 1씩 증가시키고 문자열 "EGG"를 반환 하는 메서드여야 합니다 . 를 사용해야 this합니다.

암탉 . 이름 // "헬렌"
암탉 . 계란 개수 // 0
암탉 . layAnEgg () // "EGG" 
암탉 . layAnEgg () // "EGG" 
암탉 . 달걀 개수 // 2
*/
const hen={
  name:"Helen",
  eggCount:0,
  layAnEgg(){
   this.eggCount++;
   return "EGG";
  }
 
 }