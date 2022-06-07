// var zipcodes = document.getElementById("userzipcode")
// var user = zipcodes.value

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
//         'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
//     }
// };
// fetch(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcodes}`, options)
//     .then(response => response.json())
//     .then(response => console.log(response)) // where to display results. 
//     .catch(err => console.error(err));


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
        'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
    }
};

fetch('https://plant-hardiness-zone.p.rapidapi.com/zipcodes/80226', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        const rerender = await fetch(`/results/${response.hardiness_zone}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
    })
    .catch(err => console.error(err));