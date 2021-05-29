//creating a function to get data from the currency API
async function getCurrencies(){
//loading API with the currency exchange rates 
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/').then(res => res.json()).then(res =>{
        console.log(res);
        return JSON.stringify(res);
        }).catch(error => console.log('API ERROR!'))
}



