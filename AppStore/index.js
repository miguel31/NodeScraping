'use strict';

const R = require('ramda');
const memoizee = require('memoizee');
const constants = require('./lib/constants');

const methods = {
  app: require('./lib/app'),
  list: require('./lib/list'),
  search: require('./lib/search'),
  suggest: require('./lib/suggest'),
  similar: require('./lib/similar'),
  reviews: require('./lib/reviews')
};

function memoized (opts) {
  const cacheOpts = Object.assign({
    primitive: true,
    normalizer: JSON.stringify,
    maxAge: 1000 * 60 * 5, // cache for 5 minutes
    max: 1000 // save up to 1k results to avoid memory issues
  }, opts);
  const doMemoize = (fn) => memoizee(fn, cacheOpts);
  return Object.assign({}, constants, R.map(doMemoize, methods));
}

module.exports = Object.assign({memoized}, constants, methods);


var store = require('app-store-scraper');

store.reviews({
  appId: 'com.cencosud.jumbochile',
  sort: store.sort.HELPFUL,
  country : 'cl'
 //page: 2
})
.then(console.log)
.catch(console.log);

/*var store = require('app-store-scraper');

store.search({
  term: 'jumbo',
  num: 2,
  device: store.device.IPAD,
  country : 'cl'
})
.then(console.log)
.catch(console.log);*/