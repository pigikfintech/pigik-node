const PigikClient = require('../submodules/client');
var instance = undefined;

function setCredentials(key = '', environment = 'live') {
  if (instance !== undefined) return;
  instance = new PigikClient(key, environment);
}

async function getMerchants() {
  return await instance.getAllMerchants();
}

async function getMerchantDiscounts(merchantId) {
  return await instance.getMerchantDiscounts(merchantId);
}

module.exports = {
  setCredentials: setCredentials,
  getMerchants: getMerchants,
  getMerchantDiscounts: getMerchantDiscounts
};