import 'source-map-support/register';
require('dotenv').config();

// 3p
import { Config, createApp, displayServerURL } from '@foal/core';

// App
import { AppController } from './app/app.controller';
import { dataSource } from './db';
import { logger } from './app/utilities/logger';

async function main() {
  await dataSource.initialize();

  const app = await createApp(AppController);

  const port = Config.get('port', 'number', 3001);
  app.listen(port, () => displayServerURL(port));
}

main()
  .catch(err => {
    console.error(err.stack);
    logger.error(err);
    process.exit(1);
});
