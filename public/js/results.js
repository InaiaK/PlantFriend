// // const res = require("express/lib/response")

// // const options = {
// //     method: 'GET',
// //     headers: {
// //         'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
// //         'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
// //     }
// // };
// // fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcodes}`, options)
// //     .then(response => response.json())
// //     .then(response => console.log(response)) // where to display results. 
// //     .catch(err => console.error(err));

// //og api
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
//         'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
//     }}

// //to return the zone code
// // const zipcode = document.getElementById("userzipcode").value
// const zipcode = 80120
// fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcode}`, options)

//     .then(response => response.json())
//     .then(response => {
//         console.log(response.hardiness_zone)
//         fetch("/api/plant/zone/2a").then(res=>res.json()).then(res=>{
//             Handlebars.registerHelper("resultsArray", () => {
//                 res.map(resObj=>resObj.name)
//             })
//         })
//     })
//     .catch(err => console.error(err))
    

   