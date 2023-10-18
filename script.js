let ApiUrl = ('countrylist.json');

function countryInfo(){

 fetch(ApiUrl)
.then(response => response.json())
.then(datas => {
      
    function Data(countryName){
        let allContinentsData = datas.filter((country) => country.continents == countryName);
        return allContinentsData;
    };
    
    let mainContainer = document.getElementById('main-box');
    function continentsData(allData){
        for (let data of allData){
            
            let textBox = document.createElement('div');
            textBox.classList.add("Codata");
             textBox.innerHTML = `
             <h1 class="flags">Flag: &nbsp;<img src="${data.flags.png}" alt="country-flag"></h1>
             <h1>Country: ${data.name.common}</h1>
             <h2>Dialling_Code: ${data.idd.root}</h2>
             <h2>Capital: ${data.capital}</h2>
             <h2>Population: ${data.population}</h2>
             <h2>Country-code: ${data.cca2}</h2>
             <button class="btn">See more</button>  
            `;
            mainContainer.appendChild(textBox);
        };
        
    };
   
     function work(id,cty){
        let backBtn = document.getElementById('backBtn');
        let btnBox = document.querySelector(".btnBox");
        let myId = document.getElementById(id);
        myId.addEventListener("click", function(){
            continentsData(cty);
            btnBox.style.display="none";
            backBtn.style.display="block";
        }) 
     };
 
      work('asia',Data("Asia"));
      work('oceania',Data("Oceania"));
      work('africa',Data("Africa"));
      work('northAmerica',Data("North America"));
      work('southAmerica',Data("South America"));
      work('europe',Data("Europe"));
      work('antarctica',Data("Antarctica"));
});
};

countryInfo();