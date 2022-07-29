
const searchEl = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.searchButton');

console.log(searchEl);

// const key = 'ddcfdeed8d36bd1f883aabfba2591fb4';
// fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=27.7172&lon=85.3240&appid=ddcfdeed8d36bd1f883aabfba2591fb4`)
// .then( response => console.log(response))

//Event Listeners

searchBtn.addEventListener('click',(e) =>{
    if(searchEl.value === '') alert('Please enter a valid city!');
})