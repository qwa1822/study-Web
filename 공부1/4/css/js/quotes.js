const quotes=[
  {
    quote:"He who desires is always poor.",
    author:"Claudianus",
  },
  {
    quote:"What is most beautiful in virile men is something feminine; what is most beautiful in feminine women is something masculine.",
    author:"Susan Sontag",
  },
  {
    quote:"인생은 같은 얘기를 또 듣는 것과 같이 나른한 사람의 흐릿한 귀를 거슬리게 한다.",
    author:"윌리엄 셰익스피어",
  },
  {
    quote:"젊음은 경이롭다. 아이들에게 젊음을 낭비하다니 죄악이 아닐 수 없다.",
    author:"조지 버나드 쇼",
  },
  {
    quote:"자신이 어떻게 변해왔는지 알려면 변하지 않은 곳으로 돌아가는 것보다 더 좋은 방법은 없다.",
    author:"넬슨 만델라",
  },
  {
    quote:"나는 매우 일찍 인생을 무조건 받아들이기로 결정했다. 나는 인생이 나를 위해 특별한 것을 해주기를 결코 기대하지 않았으나, 나는 내가 희망했던 것보다 훨씬 더 많은 것을 성취한 것 같았다. 대부분의 경우 그런 일은 내가 찾지 않아도 저절로 일어났다.",
    author:"오드리 햅번",
  },
  {
    quote:"내가 좋아하지 않는 모든 것은 당연히 내가 좋아할 만한 것의 반대일 것이라 생각하며 삶을 만들어 갔다.",
    author:"가브리엘",
  },
  {
    quote:"진정한 여행자는 걸어서 다니는 자이며, 걸으면서도 자주 앉는다.",
    author:"콜레트",
  },
  {
    quote:"인생이란 네가 다른 계획을 세우느라 바쁠 때 너에게 일어나는 것이다.",
    author:"존 레논",
    
  },
  {
    quotes:"바삐 태어나지 않은 자는 바삐 죽는다.",
    author:"밥 딜런",
  },
];

const quote=document.querySelector("#quotes span:first-child");
const author=document.querySelector("#quotes span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;