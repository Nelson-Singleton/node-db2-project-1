const knexfile = require('./knexfile')

//on heroku NODE_ENV will be 'production'
const environment = process.env.NODE_ENV || 'development';

const config = knexfile[environment]

module.export = knex(config)