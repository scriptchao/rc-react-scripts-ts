/**
 * Created by tony on 2019/12/30
 */
process.on('unhandledRejection', err => {
  throw err;
});

const jest = require('jest')

jest.run()
