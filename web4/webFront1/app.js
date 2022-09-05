const tweetForm=document.querySelector("#tweetForm");
tweetForm.addEventListener("submit",function(e){
  // const usernameInput=document.querySelectorAll('input')[0];
  // const tweetInput=document.querySelectorAll('input')[1];
  e.preventDefault();
  const username=tweetForm.elements.username.value;
  const tweet=tweetForm.elements.tweet.value;
  const newTweet=document.createElement('li');
  const bTag=document.createElement("b");

  bTag.append(username);
  newTweet.append(bTag)
  newTweet.appoend(`-${tweet}`)
  console.log(newTweet);

})

const addTweet=(username,tweet)=>{
  const newTweet=document.createElement('li');
  const bTag=document.createElement('b');

  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(`-${tweet}`)
  
}