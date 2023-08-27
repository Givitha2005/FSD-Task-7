// XMLHTTPREQUEST
// STEP-1: Creating an XHR Object
var request = new XMLHttpRequest();

// STEP-2: Opening a connection
request.open("GET", "https://restcountries.com/v3.1/all");
request.responseType = 'json';//Set the response type

// STEP-3: Sending a request
request.send();

//STEP-4: Receiving a response via onload
request.onload = function(){
           
    //a)  Get all the countries from Asia continent /region using Filter function
    var responseObj = request.response;
    var res = responseObj.filter((item) => {
      return item.continents == 'Asia';
    });
    console.log(res);
        
    // b)  Get all the countries with a population of less than 2 lakhs using Filter function
    var smallcountries = responseObj.filter((pop)=>{
        if(pop.population < 200000){
            return pop;
        }  
      }) 
      console.log(smallcountries);
    // c) Print the following details name, capital, flag using forEach function

    responseObj.forEach(value => {
       var output = "Name: " + value.name.common + "| Captial: " + value.capital + "| Flag: " + value.flags.svg;
       console.log(output);
       
    });

    // d) Print the total population of countries using reduce function

    let totalpopulation = responseObj.reduce ((a, b) => {
        let total = 0;
       
        if (a.population){
         
            total = a.population
        }
        else{
            total = a;
        }
        return total+b.population
    })
    console.log("The total population of the all countries" +" "+ totalpopulation);
    

   // e) Print the country which uses US Dollars as currency
    let curr = responseObj.filter((dummy) => (dummy.currencies !== undefined))
    let finalcurr = curr.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
     console.log(finalcurr);


}



