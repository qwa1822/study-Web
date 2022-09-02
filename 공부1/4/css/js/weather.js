


const API_KEY="0745f24b1765880096faaf57e569678a";


function onGeoOk(position)
{ 
  const lat=position.coords.latitude;
  const lon=position.coords.longitude;
  console.log("You live it",lat,lon);
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url).then(response =>response.json()).then(data=>{
    const weatherConatainer=document.querySelector("#weather span:first-child");
    const city=document.querySelector("#weather span:last-child");
    city.innerText=data.name;
   weatherConatainer.innerText=`${data.weather[0].main}/ ${data.main.temp}`;
  });
}
function onGeoError()
{
  alert("Can't find you. No Weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
