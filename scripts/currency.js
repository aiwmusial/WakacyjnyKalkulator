// defining the variables from the form to be filled in
let country = document.getElementById('country');
let currency = document.getElementById('currency');
let rate = document.getElementById('rate');
// defininga variable for the API data
// let currencyAPI = new currencyAPI();

function currencyExchange(id){
    // checking whether the map is correctly linked
    // alert('działa!' + id);

    // finding index of selected element in avgCost array
    let indexOfElement = avgCost.findIndex(function(item, i){
        if(item.index === id){
        return i;
        }
        });
    
    
    console.log(indexOfElement);

}

// //creating a function to get data from the currency API
// async function getCurrencies(){
// //loading API with the currency exchange rates 
//     fetch('http://api.nbp.pl/api/exchangerates/tables/a/').then(res => res.json()).then(res =>{
//         console.log(res);


// })
// }
// window.onload = function(){
//     alert ('Welcome!');
// }

//creating an array containing average trip cost
avgCost=[
    {index:"argentina", country:'Argentyna', code:'USD', budgetTrip:'60', midLowTrip:'80', midHighTrip:'149', topEndTrip:'150'}, 
    {index:"bolivia", country:'Boliwia', code:'BOB', budgetTrip:'199', midLowTrip:'200', midHighTrip:'649', topEndTrip:'650'}, 
    {index:"brazil", country:'Brazylia', code:'BRL', budgetTrip:'199', midLowTrip:'200', midHighTrip:'399', topEndTrip:'400'}, 
    {index:"chile", country:'Chile', code:'CLP', budgetTrip:'24999', midLowTrip:'25000', midHighTrip:'74999', topEndTrip:'75000'}, 
    {index:"colombia", country:'Kolumbia', code:'COP', budgetTrip:'99999', midLowTrip:'100000', midHighTrip:'249999', topEndTrip:'250000'}, 
    {index:"ecuador", country:'Ekwador', code:'USD', budgetTrip:'39', midLowTrip:'40', midHighTrip:'99', topEndTrip:'100'}, 
    {index:"guyana", country:'Gujana', code:'GYD', budgetTrip:'29999', midLowTrip:'30000', midHighTrip:'59999', topEndTrip:'60000'}, 
    {index:"french-guiana", country:'Gujana Francuska', code:'EUR', budgetTrip:'99', midLowTrip:'100', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"paraguay", country:'Paragwaj', code:'USD', budgetTrip:'49', midLowTrip:'50', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"peru", country:'Peru', code:'PEN', budgetTrip:'189', midLowTrip:'190', midHighTrip:'649', topEndTrip:'650'}, 
    {index:"suriname", country:'Surinam', code:'SRD', budgetTrip:'249', midLowTrip:'250', midHighTrip:'599', topEndTrip:'600'}, 
    {index:"uruguay", country:'Urugwaj', code:'USD', budgetTrip:'74', midLowTrip:'75', midHighTrip:'174', topEndTrip:'175'}, 
    {index:"venezuela", country:'Wenezuela', code:'USD', budgetTrip:'7', midLowTrip:'', midHighTrip:'', topEndTrip:''}, 
    {index:"falkland-islands", country:'Falklandy Malwiny', code:'FKP', budgetTrip:'no data available', midLowTrip:'no data available', midHighTrip:'no data available', topEndTrip:'no data available'} 
]
