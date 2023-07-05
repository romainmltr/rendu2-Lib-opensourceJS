const assert = require('assert');

const FestivalCity = require('../FestivalCity.js');
const FestivalRegion = require('../FestivalRegion.js');
const FestivalDate = require('../FestivalDate.js');

// eslint-disable-next-line no-undef
describe('FestivalCity', () => {
    const festivalCity = new FestivalCity();

    // eslint-disable-next-line no-undef
    it('should return festivals for a city', async () => {
        const festivals = await festivalCity.getFestivalsCity("Marseille");
        assert.ok(Array.isArray(festivals));
    });
});

// eslint-disable-next-line no-undef
describe('FestivalRegion', () => {
    const festivalRegion = new FestivalRegion();

    // eslint-disable-next-line no-undef
    it('should return festivals for a region', async () => {
        const festivals = await festivalRegion.getFestivals("Auvergne-Rhône-Alpes");
        assert.ok(Array.isArray(festivals));
    });
});

// eslint-disable-next-line no-undef
describe('FestivalDate', () => {
    const festivalDate = new FestivalDate();

    // eslint-disable-next-line no-undef
    it('should return festivals for a date', async () => {
        const festivals = await festivalDate.getFestivals("2021");
        assert.ok(Array.isArray(festivals));
    });
});
