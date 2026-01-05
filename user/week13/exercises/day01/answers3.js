/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise.then((value) => {
      transformer(value).then((transformedValue) => {
        resolve(transformedValue);
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
      reject(error);
    });
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then((value => {
      if (typeof value === 'number') {
        return Promise.resolve(value * value);
      } else if (typeof value === 'string' && !isNaN(Number(value))) {
        return Promise.resolve(Number(value) * Number(value));
      } else {
        return Promise.reject("Cannot convert '" + value + "' to a number");
      }
    }))
    .catch((error) => {
      return Promise.reject(error);
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
  .then((value => {
      if (typeof value === 'number') {
        return Promise.resolve(value * value);
      } else if (typeof value === 'string' && !isNaN(Number(value))) {
        return Promise.resolve(Number(value) * Number(value));
      } else {
        return Promise.reject("Cannot convert '" + value + "' to a number");
      }
    }))
    .catch(() => {
      return Promise.resolve(0);
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then((resolvedValue, rejectedValue) => {
    return Promise.reject(resolvedValue);
  }).catch((error) => {
    return Promise.resolve(error);
  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};