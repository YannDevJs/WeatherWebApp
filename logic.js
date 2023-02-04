var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "084b786969931bd90a16b5c5e607218d"

function convertion(val){
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=Kinshasa&APPID=084b786969931bd90a16b5c5e607218d')
    .then(res=> res.json())

    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']
        // alert('Name : ' + nameval + '<br>description : '+ descrip +'<br>Tempature : '+tempature)
        city.innerHTML=`Wheather of <span>${nameval}</span>`
        temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C (${tempature} F)</span>`
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`
        wind.innerHTML = `wind Speed: <span>${wndspd}</span>`
    })

    .catch(err => alert('You entered Wrong city name'))
})