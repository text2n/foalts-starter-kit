import pino from 'pino';

const logFile = 'storage/logs/combined.log';

const transport = pino.transport({
  target: 'pino/file',
  options: { destination: logFile },
});
export const logger = pino(transport);
