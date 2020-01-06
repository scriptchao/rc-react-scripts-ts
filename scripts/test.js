/**
 * Created by tony on 2019/12/30
 */
process.env.NODE_ENV = 'test'

process.on('unhandledRejection', err => {
  throw err;
});

const jest = require('jest')

jest.run()
