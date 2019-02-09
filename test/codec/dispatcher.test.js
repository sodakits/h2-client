const assert = require('assert');
const dispatcher = require('../../lib/codec/dispatcher');

describe('codec/dispatcher.js', () => {
  it('unsupported protocol', () => {
    assert.throws(() => {
      dispatcher.createAgent('web');
    }, {
      name: 'ReferenceError'
    });
  });

  it('createAgent', () => {
    const agent = dispatcher.createAgent('http', {hello: 'soda'});
    console.log(agent);
  });
});