function countryInfo(){

    fetch('countrylist.json')
.then(response => response.json())
.then(datas => {

    let mainContainer = document.getElementById('main-box');
    for (let data of datas){
        let textBox = document.createElement('div');
        textBox.classList.add("Codata");
         textBox.innerHTML = `
        
         <h1 class="flags">Flag: &nbsp;<img src="${data.flags.png}" alt="country-flag"></h1>
         <h1>Country: ${data.name.common}</h1>
         <h2>Dialling_Code: ${data.idd.root}</h2>
         <h2>Capital: ${data.capital}</h2>
         <h2>Population: ${data.population}</h2>
         <h2>Country-code: ${data.cca2}</h2>
         <h2>Currency: ${data.currencies.XPF.name}</h2>
         <button class="btn">See more</button>
            
        `;
        console.log(mainContainer);
        mainContainer.appendChild(textBox);
    }
    
})
}
countryInfo();