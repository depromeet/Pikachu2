const _ = require('lodash');
const camel = require('to-camel-case');

const convertToCamel = (result) => {
  const camalResult = {};
  _.each(result, (v, k) => {
    if (!_.isArray(result)) {
      camalResult[camel(k)] = _.isObject(v) ? convertToCamel(v) : result[k];
    } else {
      camalResult[k] = convertToCamel(result[k]);
    }
  });

  return camalResult;
};

exports.convertToCamel = convertToCamel;
