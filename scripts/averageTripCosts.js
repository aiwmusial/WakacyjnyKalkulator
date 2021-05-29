// defining the variables from the form to be filled in
let country = document.getElementById('country');
let currency = document.getElementById('currency');
let rate = document.getElementById('rate');
let currencyUsed = document.getElementsByClassName('currencyUsed');

// defininga variable for the API data
// let currencyAPI = new currencyAPI();

function currencyExchange(id){
    // checking whether the map is correctly linked
    // alert('działa!' + id);

    // finding index of selected element in avgCost array
    let indexOfElement = avgCost.findIndex(item => item.index === id);

    // adding to the HTML the name of the country selected on the map 
        country.innerHTML = avgCost[indexOfElement]['country'];

    // adding to the HTML the currency of the country selected on the map 
        currency.innerHTML = avgCost[indexOfElement]['currency'];

    // adding the currency used in calculations to the output
    // several class elements in HTML document can be accessed via an array, hence
        currencyUsed[0].innerHTML = avgCost[indexOfElement]['code'];
        currencyUsed[1].innerHTML = avgCost[indexOfElement]['code'];
        currencyUsed[2].innerHTML = avgCost[indexOfElement]['code'];
        currencyUsed[3].innerHTML = avgCost[indexOfElement]['code'];

    // adding average daily costs for selected country
        document.getElementById('budgetTrip').innerHTML = avgCost[indexOfElement]['budgetTrip'];
        document.getElementById('midLowTrip').innerHTML = avgCost[indexOfElement]['midLowTrip'];
        document.getElementById('midHighTrip').innerHTML = avgCost[indexOfElement]['midHighTrip'];
        document.getElementById('topEndTrip').innerHTML = avgCost[indexOfElement]['topEndTrip'];
    console.log(avgCost[indexOfElement]['code']);

}
//creating an array containing average trip cost
avgCost=[
    {index:"argentina", country:'Argentyna', currency: 'Peso argentyńskie (ARS)', code:'USD', budgetTrip:'60', midLowTrip:'80', midHighTrip:'149', topEndTrip:'150'}, 
    {index:"bolivia", country:'Boliwia', currency: 'Boliviano (BOB)', code:'BOB', budgetTrip:'199', midLowTrip:'200', midHighTrip:'649', topEndTrip:'650'}, 
    {index:"brazil", country:'Brazylia', currency: 'Real brazylijski (BRL)', code:'BRL', budgetTrip:'199', midLowTrip:'200', midHighTrip:'399', topEndTrip:'400'}, 
    {index:"chile", country:'Chile', currency: 'Peso chilijskie (CLP)', code:'CLP', budgetTrip:'24999', midLowTrip:'25000', midHighTrip:'74999', topEndTrip:'75000'}, 
    {index:"colombia", country:'Kolumbia', currency: 'Peso kolumbijskie (COP)', code:'COP', budgetTrip:'99999', midLowTrip:'100000', midHighTrip:'249999', topEndTrip:'250000'}, 
    {index:"ecuador", country:'Ekwador', currency: 'Dolar amerykański (USD)', code:'USD', budgetTrip:'39', midLowTrip:'40', midHighTrip:'99', topEndTrip:'100'}, 
    {index:"guyana", country:'Gujana', currency: 'Dolar gujański (GYD)', code:'GYD', budgetTrip:'29999', midLowTrip:'30000', midHighTrip:'59999', topEndTrip:'60000'}, 
    {index:"french-guiana", country:'Gujana Francuska', currency: 'Euro (EUR)', code:'EUR', budgetTrip:'99', midLowTrip:'100', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"paraguay", country:'Paragwaj', currency: 'Guaraní (PYG)', code:'USD', budgetTrip:'49', midLowTrip:'50', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"peru", country:'Peru', currency: 'Sol (PEN)', code:'PEN', budgetTrip:'189', midLowTrip:'190', midHighTrip:'649', topEndTrip:'650'}, 
    {index:"suriname", country:'Surinam', currency: 'Dolar surinamski (SRD)', code:'SRD', budgetTrip:'249', midLowTrip:'250', midHighTrip:'599', topEndTrip:'600'}, 
    {index:"uruguay", country:'Urugwaj', currency: 'Peso urugwajskie (UYU)', code:'USD', budgetTrip:'74', midLowTrip:'75', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"venezuela", country:'Wenezuela', currency: 'Boliwar (VES)', code:'USD', budgetTrip:'7', midLowTrip:'', midHighTrip:'', topEndTrip:''}, 
    {index:"falkland-islands", country:'Falklandy Malwiny', currency: 'Funt falklandzki (FKP)', code:'FKP', budgetTrip:'no data available', midLowTrip:'no data available', midHighTrip:'no data available', topEndTrip:'no data available'} 
]
