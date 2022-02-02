/**
 * @description jest server
 * @author wenlong
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
