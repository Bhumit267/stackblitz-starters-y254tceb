// Load the dotenv package
require('dotenv').config();

// Access environment variables
const config = {
  apiKey: process.env.API_KEY,
  serverSecret: process.env.SERVER_SECRET,
  isKalvian: process.env.IS_KALVIAN === 'true',
};

if(process.env.IS_KALVIAN === 'true'){
    console.log("iskalvium is true")
    console.log(config);
}
else{
    console.log("iskalvium is false")
}

// Export the config object
module.exports = config;