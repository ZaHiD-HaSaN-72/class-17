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
             <button  class="btn">See more</button>  
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


//  Modal here
// Add an event listener to each "See more" button
document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('btn')) {
      // Get the modal and modal content elements
      const modal = document.getElementById('myModal');
      const modalContent = document.getElementById('modal-content'); 
      fetch(ApiUrl)
        .then(response => response.json())
        .then(data => {
          // Add the additional data to the modal
          const country = data.find((c) => c.continents);
          
          modalContent.innerHTML = `
          <h1 class="flags">${country.name.common}: &nbsp;<img src="${country.flags.png}" alt="country-flag"></h1>
            <h2>Status: ${country.status}</h2>
            <h2>Area: ${country.area} square kilometers</h2>
            <h2>Officilal Name: ${country.name.official}</h2>
            <h2>Region: ${country.region}</h2>
            <h2>Subregion: ${country.subregion}</h2>
            <h2>Language: ${country.languages[0]}</h2>
            <h2>Car:- Side-${country.car.side}, Sign-${country.car.signs}</h2>
            <h2>Time Zone: ${country.timezones[0]}</h2>
            <h2>Week Start: ${country.startOfWeek}</h2>
            <h2>PostalCode: ${country.postalCode.format}</h2>
           
          `;
        });
      // Show the modal
      modal.style.display = 'block';
      // Add an event listener to close the modal when the close button is clicked
      const closeBtn = document.getElementsByClassName('close')[0];
      closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
      });
    }
  });
// Mosal end

});
};

countryInfo();