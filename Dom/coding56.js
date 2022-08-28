

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const span=document.querySelectorAll('span');

let it=0;

for(let b of span){
  b.style.color=colors[it];
  it++;
}