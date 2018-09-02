const _ = require('lodash');
const assert = require('assert');
const {URL} = require('url');

describe('base', () => {
  it('+ default', () => {
    assert.ok(true);
  });

  it('+ url protocol', () => {
    let url = new URL('h2://apis.sodakits.io');
    assert.strictEqual('h2:', url.protocol);
    url = new URL('https://test.com');
    assert.strictEqual('https:', url.protocol);
    url = new URL('http://test.com');
    assert.strictEqual('http:', url.protocol);
  });

  it('+ slice last character', () => {
    const text = 'abcd';
    assert.strictEqual('abc', text.slice(0, -1));
  });

  it('+ bind', () => {
    const func = text => {
      return text;
    };
    const bind = _.bind(func, this, _);
    const result = bind('hello soda');
    assert.strictEqual('hello soda', result);
  });

  it('+ bindKey', () => {
    const funcFactory = {
      a: () => {return 'a'},
      b: () => {return 'b'}
    };
    const bindKey = _.bindKey(funcFactory, 'a');
    const result = bindKey();
    assert.strictEqual('a', result);
  });
});