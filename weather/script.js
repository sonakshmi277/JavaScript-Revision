let btn=document.getElementById('buttons')
let cityName=document.getElementById('city-input')
let city=document.getElementById('name')
let tempe=document.getElementById('temp')
let timee=document.getElementById('time')

async function getData(city){
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=8a274eb86f19400fad6164937251708&q=${city}&aqi=yes`);
    return await promise.json();
}
btn.addEventListener('click',async ()=>{
    const val=cityName.value;
    const res=await getData(val);
    city.innerText=`${res.location.name}`
    tempe.innerText=`${res.current.temp_c}`
    timee.innerText=`${res.location.localtime}`
})