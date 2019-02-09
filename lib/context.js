const _path = require('path');
const _url = require('url');
const codecDispatcher = require('./codec/dispatcher');

class Client {
  /**
   * @param {String} url https://example.com
   * @param {Object=} baseHeaders
   * @param {Object=} options
   */
  constructor(url, baseHeaders, options) {
    if (!url) throw new Error('Must not be empty: url');

    this.url = new _url.URL(url);
    this.headers = baseHeaders || {};
    this.options = options || {};
    this.protocol = this.url.protocol.slice(0, -1);
    this.agent = codecDispatcher.createAgent(this.protocol, this.options);
  }

  /**
   * Call api
   *
   * @param {('GET'|'POST'|'PUT'|'DELETE'|'PATCH'|'HEAD'|'TRACE'|'OPTIONS')=} method
   * @param {String=} path
   * @param {Object=} headers
   * @param {Object=} body
   * @param {Object=} query
   * @returns {Promise<Response>} Response
   */
  async call({method, path, headers, body, query}) {
    const request = new Request(this, method, headers, body, query);
    return codecDispatcher.call(this, request);
  }
}

class Request {
  /**
   * @param {Client} client
   * @param {('GET'|'POST'|'PUT'|'DELETE'|'PATCH'|'HEAD'|'TRACE'|'OPTIONS')=} method
   * @param {String=} path
   * @param {Object=} headers
   * @param {Object=} body
   * @param {Object=} query
   */
  constructor(client, method, path, headers, body, query) {
    this.method = method ? method.toUpperCase() : 'GET';
    this.path = _url.resolve(client.url, path || '/');
    this.headers = Object.assign({}, client.headers, headers);
    this.data = body || {};
    this.query = query || {};
    this.agent = client.agent;
  }
}

class Response {
  /**
   * @param {number} status
   * @param {Object} headers
   * @param {Object} data
   */
  constructor(status, headers, data) {
    this.status = status;
    this.headers = headers;
    this.data = data;
  }
}

module.exports = {
  Request,
  Response,
  Client
};