/*
*
*Set the configuration file
*
*/

var envrionment = {};

//set the staging environment

envrionment.staging = {
    "httpPort":3000,
    "httpsPort":3001,
    "envName":"staging"
}

//set the production environment

envrionment.production = {
    "httpPort":5000,
    "httpsPort":5001,
    "envName":"production"
}

//Get the environment that was passed

var setEnvironment = typeof(process.env.NODE_ENV) === "string" ? process.env.NODE_ENV : "";

var defaultEnvironment  = typeof(envrionment[setEnvironment]) === "object" ? envrionment[setEnvironment]: envrionment.staging;

module.exports = defaultEnvironment;