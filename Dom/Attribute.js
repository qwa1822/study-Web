// getAttribute 
// HTML자체에서 가져오는것.
/*
속성 조작 연습
DOM 요소 속성으로 작업하는 연습을 해 봅시다. 아주 기본적인 마크업을 제공했습니다.  이미지 요소를 선택하고:

소스를 다음 URL로 변경하십시오.https://devsprouthosting.com/images/chicken.jpg

대체 텍스트를 다음과 같이 변경하십시오."chicken"

*/

const img=document.querySelector("img");
img.src="https://devsprouthosting.com/images/chicken.jpg";
img.setAttribute("alt","chicken");