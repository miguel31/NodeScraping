'use strict';

const store = require('../index');
const assert = require('chai').assert;
const assertValidUrl = require('./common').assertValidUrl;

function assertValid (review) {
  assert.isString(review.id);
  assert(review.id);
  assert(review.date);
  assert.instanceOf(review.date, Date);
  assert.isString(review.userName);
  assert(review.userName);
  assert.isString(review.title);
  assert.isString(review.text);
  assert.isNumber(review.score);
  assert(review.score > 0);
  assert(review.score <= 5);
  assertValidUrl(review.url);
}

describe('Reviews method', () => {
  it('should retrieve the reviews of an app', () => {
    return store.reviews({id: '553834731'})
    .then((reviews) => {
      reviews.map(assertValid);
    });
  });

  it('should validate the sort', () => {
    return store.reviews({
      id: '553834731',
      sort: 'invalid'
    })
    .then(assert.fail)
    .catch((e) => assert.equal(e.message, 'Invalid sort invalid'));
  });

  it('should validate the page', () => {
    return store.reviews({
      id: '553834731',
      page: 10
    })
    .then(assert.fail)
    .catch((e) => assert.equal(e.message, 'Page cannot be greater than 9'));
  });
});
