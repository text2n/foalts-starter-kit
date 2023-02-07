const env = require('env-var');

module.exports =  {
  'port': env.get('PORT').default('3001').asPortNumber(),
    'settings': {
    'loggerFormat': 'tiny',
      'session': {
      'store': '@foal/typeorm'
    }
  },
  'database': {
    'type': 'better-sqlite3',
      'database': './db.sqlite3'
  }
}
