
// setTimeout(()=>{
//   document.body.style.background="red";
//   setTimeout(()=>{
//     document.body.style.background="orange";
    
// setTimeout(()=>{
//   document.body.style.background="yellow";
// },1000)
    
// setTimeout(()=>{
//   document.body.style.background="blue";
// },1000)
//   },1000)
// },1000)



const delayedColorChange=(newColor,delay)=>{
  setTimeout(()=>{
    document.body.style.background=newColor;
    doNext && doNext();
  },delay)
}


delayedColorChange("red",3000,()=>{
  delayedColorChange('orange',1000,()=>{
    delayedColorChange('yellow',1000,()=>{

    }
     )
    })
  })
});


searchMoviesAPI('amadeus',()=>{
  saveToMyDb(movies,()=>{
      //if it works,run this:
  },()=>{
        //if it doesn't work, run this:
  })
})