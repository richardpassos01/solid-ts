import env from 'env-var';

import { name, version } from '../package.json';

const required = process.env.NODE_ENV !== 'test';

const application = Object.freeze({
  name,
  version,
  description: 'Solid TS',
  env: env.get('NODE_ENV').asString(),
  port: env.get('PORT').required(required).asIntPositive(),
});

export default application;
