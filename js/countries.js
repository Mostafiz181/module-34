const country = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}



const displayCountries = countries => {
    const countryContainer = document.getElementById('all-countries');
    //    for(const country of countries){
    //     console.log(country)
    //    }
    countries.forEach(country => {
        // console.log(country.capital ? country.capital[0]:'No Capital')
        // console.log(country)

        const countryDiv =document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        
        <h3>name: ${country.name}</h3>
        <p>capital : ${country.capital ? country.capital :'No Capital'}</p>
        <h6>independent : ${country.independent} </h6>
        <button onclick="loadCountryDetails('${country.alpha2Code}')">Details</button>
        
        
        `;

       countryContainer.appendChild(countryDiv)
    });


}

const loadCountryDetails  = code  => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]));
}

const showCountryDetails = country =>{
    const detailsContainer = document.getElementById('country-details')
    detailsContainer.innerHTML = `
    
    <h3>Name : ${country.name.common}</h3>
    <img src= "${country.flags.png}">
    
    
    `;
}

country();