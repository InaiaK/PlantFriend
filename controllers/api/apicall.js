const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
        'X-RapidAPI-Key': '73b62e3ab2msh529dbce38894e45p1cca4ejsn58c26ae03383'
    }
};
fetch('https://plant-hardiness-zone.p.rapidapi.com/zipcodes/80120', options)
    .then(response => response.json())
    .then(response => console.log(response)) //HANDLEBARS
    .catch(err => console.error(err));