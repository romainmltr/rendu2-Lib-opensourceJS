const axios = require('axios');

class FestivalCity {
    constructor() {
        this.baseURL = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=";
    }
    async getFestivalsCity(city) {
        try {
            const response = await axios.get(`${this.baseURL}${encodeURIComponent(city)}&rows=10`);
            console.log(response.data.records);
            return response.data.records;
        } catch (error) {
            console.error('Error fetching festivals:', error);
            throw error;
        }
    }
}

module.exports = FestivalCity;
