const axios = require('axios');

class PigikClient {
  constructor(key = '', environment = 'live') {
    this.api_key = key;
    this.instance = axios.create();
    this.env = environment;
    this.instance.defaults.baseURL = (environment === 'live') ? 'https://api.pigik.com/v1' : 'https://dev.pigik.com/v1';
    this.instance.defaults.timeout = 15000;
    this.instance.defaults.headers = { 'Authorization': this.api_key, 'user_agent': version };
  }

  async getAllMerchants() {
    try {
      const response = await this.instance.get('/merchants');
      return response.data.data;
    } catch (error) {
      throw Exception(error.response.status, error.response.statusText, error.response.data.message);
    }
  }

  async getMerchantDiscounts(merchantId) {
    try {
      const response = await this.instance.get(`/merchants/${merchantId}`);
      return response.data.data;
    } catch (error) {
      throw Exception(error.response.status, error.response.statusText, error.response.data.message);
    }
  }

}

function Exception(statusCode, statusText, message) {
  var error = new Error(message);
  error.name = statusText;
  error.status = statusCode;
  return error;
}

module.exports = PigikClient;