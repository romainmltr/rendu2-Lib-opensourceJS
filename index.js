const FestivalCity = require('./FestivalCity.js');
const FestivalRegion = require('./FestivalRegion.js');
const FestivalDate = require('./FestivalDate.js');

const festivalRegion = new FestivalRegion();
const festivalCity = new FestivalCity();
const festivalDate = new FestivalDate();



festivalCity.getFestivalsCity("Marseille")
    .then(festivals => {
        //console.log(festivals);
    })
    .catch(error => {
        console.error('Error:', error);
    });

festivalRegion.getFestivals("Auvergne-Rhône-Alpes")
    .then(festivals => {
        //console.log(festivals);
    })
    .catch(error => {
        console.log('Error:', error);
    });

festivalDate.getFestivals("2021")
    .then(festivals => {
        //console.log(festivals);
    })
    .catch(error => {
        console.log('Error:', error);
    });



