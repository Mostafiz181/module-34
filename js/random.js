const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}


const displayUser = user =>{

    const genderTag = document.getElementById('gender');
    const nameTag = document.getElementById('name');
    const cityTag = document.getElementById('city');
    const imgTag = document.getElementById('img');
    imgTag.innerHTML=  `
    
    <img src ='${user.results[0].picture.large}'> </img>
    
    `
    cityTag.innerHTML = user.results[0].location.city;
    nameTag.innerHTML = user.results[0].name.first + ' ' + user.results[0].name.last;
    genderTag.innerHTML = user.results[0].gender;

   
}


loadUser();