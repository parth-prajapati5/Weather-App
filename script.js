let loc=document.querySelector("#location");
let temperature_data=document.querySelector(".temperature_data");
let search=document.querySelector("form button");
let flag=document.querySelector(".data .title");
let temprature=document.querySelector(".temp");
let main=document.querySelector(".main");
let description=document.querySelector(".description");
let  cloud=document.querySelector(".cld-per");
let Humidity=document.querySelector(".hum-per");
let pressure=document.querySelector(".pre-per");
search.addEventListener("click",(e)=>{
    e.preventDefault();
    if(loc.value != ''){
        searchweather();
    }
    else{
        alert("Please Enter Location");
    }
})

const searchweather=()=>{
    let key="74ce8039242065c4a2d3a21aea65ed7f";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=${key}`;
    fetch(url).then(Response=> Response.json()).then(result=>{
        if(result.cod === 200){
            flag.querySelector(".location_name").textContent=loc.value;
            flag.querySelector("img").src=`https://flagsapi.com/${result.sys.country}/flat/64.png`;
            temprature.textContent=`${(result.main.temp-273.15).toFixed(0)}`;
            temperature_data.querySelector("img").src=`https://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`
            description.textContent=result.weather[0].description;
            cloud.textContent=`${result.clouds.all}%`;
            Humidity.textContent=`${result.main.humidity}%`;
            pressure.textContent=`${result.main.pressure}hPa`;
            console.log(result);
            }
            else{
                main.classList.add("error");
                setTimeout(() => {
                    main.classList.remove("error");
                }, 500);
            }
    })
}
