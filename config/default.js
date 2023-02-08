const env = require('env-var');

module.exports = {
  port: env.get('PORT').default('3001').asPortNumber(),
  settings: {
    loggerFormat: 'tiny',
    session: {
      store: '@foal/typeorm',
    },
  },
  database: {
    type: 'mysql',
    host: env.get('DB_HOST').default('localhost').asString(),
    port: env.get('DB_PORT').default(3306).asPortNumber(),
    username: env.get('DB_USERNAME').required().asString(),
    password: env.get('DB_PASSWORD').required().asString(),
    database: env.get('DB_NAME').required().asString(),
  },
};
