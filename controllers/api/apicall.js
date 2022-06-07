const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
        'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
    }
};
fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcodes}`, options)
    .then(response => response.json())
    .then(response => console.log("./results.handlebars")) // where to display results. 
    .catch(err => console.error(err));


    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
    //         'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
    //     }
    // };
    
    // fetch('https://plant-hardiness-zone.p.rapidapi.com/zipcodes/80226', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

//     // // api url
// const api_url =
// "https://plant-hardiness-zone.p.rapidapi.com/zipcodes/";

// // Defining async function
// async function getapi(https://plant-hardiness-zone.p.rapidapi.com/zipcodes/) {
// // Storing response
// const response = await fetch(https://plant-hardiness-zone.p.rapidapi.com/zipcodes/);

// // Storing data in form of JSON
// var data = await response.json();
// console.log(data);
// if (response) {
//     hideloader();
// }
// show(data);
// }