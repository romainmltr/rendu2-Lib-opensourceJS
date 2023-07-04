const axios = require('axios');
class FestivalDate {
    constructor() {
        this.baseURL = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=10&facet=date_de_debut&refine.date_de_debut="
    }
    async getFestivals(date) {
        try {
            const response = await axios.get(`${this.baseURL}${encodeURIComponent(date)}`);
            console.log(response.data.records);
            return response.data.records;
        } catch (error) {
            console.error('Error fetching festivals:', error);
            throw error;
        }
    }
}

module.exports = FestivalDate;