const assert = require('assert');
const dispatcher = require('../../lib/codec/dispatcher');

describe('codec/dispatcher.js', () => {
  it('+ createAgent', () => {
    const agent = dispatcher.createAgent('http', {hello: 'soda'});
    console.log(agent);
  });
});