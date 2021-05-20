// defining the variables from the form to be filled in
let country = document.getElementById('country');
let currency = document.getElementById('currency');
let rate = document.getElementById('rate');

function currencyExchange(country){

}

//loading API with the currency exchange rates 
fetch('http://api.nbp.pl/api/exchangerates/tables/a/').then(res => res.json()).then(res =>{
    console.log(res);
})