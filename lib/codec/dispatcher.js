const codecFactory = new Map()
  .set('h2', require('./h2'))
  .set('http', require('./http'))
  .set('https', require('./https'));

module.exports = {
  /**
   * @param {string} protocol
   * @param {Object=} options
   */
  createAgent: (protocol, options) => {
    if (!codecFactory.has(protocol))
      throw new ReferenceError(`Unsupported protocol: ${protocol}`);

    return codecFactory.get(protocol).createAgent(options);
  },

  /**
   * @param {Client} client
   * @param {Request} request
   */
  call: async (client, request) => {
    return codecFactory.get(client.protocol).call(client.agent, request);
  }
};