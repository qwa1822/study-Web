

/*
필터 연습
필터 방법을 사용하여 몇 가지 연습을 해 봅시다. validUserNames사용자 이름(문자열)의 배열을 허용하는  라는 함수를 작성하십시오 . 10자 미만의 사용자 이름만 포함하는 새 배열을 반환해야 합니다. 예를 들어:

유효한 사용자 이름 ([ 'mark' , 'staceysmom1978' , 'q29832128238983' , 'carrie98' , 'MoanaFan' ]);    
// => ["마크", "캐리98", "모아나팬"]
*/


function validUserNames(usernames)
{
  let bb=usernames.filter(function(username){
    return username.length<10;
  })

  return bb;
}