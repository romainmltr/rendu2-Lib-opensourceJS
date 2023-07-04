const axios = require('axios');

class FestivalRegion {
    constructor() {
        this.baseURL = "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=10&facet=region&refine.region="
    }
    async getFestivals(region) {
        try {
            const response = await axios.get(`${this.baseURL}${encodeURIComponent(region)}`);
            console.log(response.data.records);
            return response.data.records;
        } catch (error) {
            console.error('Error fetching festivals:', error);
            throw error;
        }
    }
}

module.exports = FestivalRegion;