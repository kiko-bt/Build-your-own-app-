let text = document.getElementById('search');
let button = document.getElementById('btn');
let result = document.getElementById('result');
let loader = document.getElementById('loader');




const getCountries = (country) => {
    const baseUrl = `https://restcountries.eu/rest/v2/name/${country}`;
    toggleLoader(true)
    fetch(baseUrl)
    .then(res => res.json())
    .then(countries => {
        console.log("The request succeeded!", countries);
        displayCountries(countries);
        toggleLoader(false);    
    })
    .catch(error => console.log(error));
}


function printLanguages(data) {
    let result = '';
    for(let i = 0; i < data.length; i++) {
        if (i === data.length -1) {
            result += data[i].name;
        } else {
            result += data[i].name + ', ';
        }
    }
    return result;
}



function printCurrencies(data) {
    let result = '';
    for(let i = 0; i < data.length; i++) {
        if (i === data.length -1) {
            result += data[i].name;
        } else {
            result += data[i].name + ', ';
        }
    }
    return result;
}


const displayCountries =  function(countries) {
    if (countries !== null) {
        result.innerHTML = "";
        result.innerHTML += `
<div class="row">
    <div class="col-md-1">Name</div>
    <div class="col-md-1">Flag</div>
    <div class="col-md-1">Population</div>
    <div class="col-md-1">Capital</div>
    <div class="col-md-1">Area</div>
    <div class="col-md-1">Language Names</div>
    <div class="col-md-1">Currency Names</div>
</div>
<hr color="green">`;
        for (const country of countries) {
            result.innerHTML += `
    <div class="row">
    <div class="col-md-1">${country.name}</div>
    <div class="col-md-1"><img src = "${country.flag}" width = 80px></div>
    <div class="col-md-1">${country.population}</div>
    <div class="col-md-1">${country.capital}</div>
    <div class="col-md-1">${country.area}</div>
    <div class="col-md-1">${printLanguages(country.languages)}</div>
    <div class="col-md-1">${printLanguages(country.currencies)}</div>
</div>
<hr color="red">`
        }
    } else {
        result.innerHTML += `<h2>There is something wrong with data</h2>`;
    }
}


const toggleLoader = toggle => {
    if(toggle)
    loader.style.display = 'flex';
    else 
    loader.style.display = 'none';
}   




button.addEventListener('click', function(){
    if (text.value === "") {
        result.style.display = 'none';
        error.innerHTML = `ERROR: Invalid entry!`
     } else if (Number(text.value)) {
         result.style.display = 'none';
         error.innerHTML = `ERROR: Invalid entry! Please don't use numbers!`;
     } else {
         getCountries(text.value);
     }
})