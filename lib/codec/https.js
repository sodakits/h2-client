const https = require('https');

module.exports = {
  /**
   * @param {{timeout: number}} options
   * @returns {Object} Http agent
   */
  createAgent: options => {
    return new https.Agent({
      keepAlive: true,
      keepAliveMsecs: 1000,
      timeout: options.timeout || 1000
    });
  },

  /**
   * @param {Object} agent
   * @param {Request} request
   * @returns {Response} Response
   */
  call: (agent, request) => {

  }
};