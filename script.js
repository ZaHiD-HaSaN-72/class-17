function countryInfo(){

    fetch('country.json')
.then(response => response.json())
.then(datas => {

    let mainContainer = document.getElementById('main-box');
    for (let data of datas){
        let textBox = document.createElement('div');
        textBox.classList.add("Codata");
         textBox.innerHTML = `
        
         <img src="${data.flag}" alt="country-flag">
        <h1>country: ${data.name}</h1>
        <h2>countryCode: ${data.code}</h2>
        <h2>capital: ${data.capital}</h2>
        <h2>language: ${data.language.name}</h2>
        <h2>cellCode: ${data.dialling_code}</h2>
            
        `;
        console.log(mainContainer);
        mainContainer.appendChild(textBox);
    }
    
})
}
countryInfo();