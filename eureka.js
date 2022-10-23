'use strict';
const Eureka = require('eureka-js-client').Eureka;
const client = new Eureka({
instance: {
    app: 'jqservice',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      '$': 5000,
      '@enabled': 'true',
    },
  vipAddress: 'jq.test.something.com',
  statusPageUrl: 'http://localhost:5000/auth/',
  dataCenterInfo: {
    '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
    name: 'MyOwn',
    },
  },
})