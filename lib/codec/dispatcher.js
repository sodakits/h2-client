const codecFactory = new Map([
  ['h2', require('./h2')],
  ['http', require('./http')],
  ['https', require('./https')]
]);

module.exports = {
  /**
   * @param {String} protocol
   * @param {Object=} options
   */
  createAgent: (protocol, options) => {
    if (!codecFactory.has(protocol))
      throw new Error(`Unsupported protocol: ${protocol}`);

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