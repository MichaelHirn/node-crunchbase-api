/* Copyright 2014 CodingHouse Winter Cohort
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var qs = require('qs');

var endpoint = 'https://api.crunchbase.com/v/3/';
var keyParam, config = {};

function init(apikey) {
  config.apikey = apikey;
  keyParam = '?user_key=' + config.apikey;
}

function getOrganizationsUrl(params) {
  return endpoint
  + 'organizations' + keyParam
  + '&' + qs.stringify(params);
}

function getOrganizationUrl(permalink) {
  return endpoint
  + 'organizations/' + permalink + keyParam;
}

function getPeopleUrl(page){
  return endpoint
  + 'people' + keyParam
  + '&' + qs.stringify(page);
}

function getPersonUrl(permalink){
  return endpoint
  + 'people/' + permalink + keyParam;
}

function getProductsUrl(params) {
  return endpoint
  + 'products' + keyParam
  + '&' + qs.stringify(params);
}

function getProductUrl(permalink) {
  return endpoint
  + 'products/' + permalink + keyParam;
}

function getFundingRoundUrl(uuid) {
  return endpoint
  + 'funding-round/' + uuid + keyParam;
}

function getAcquisitionUrl(uuid) {
  return endpoint
  + 'acquisition/' + uuid + keyParam;
}

function getIPOUrl(uuid) {
  return endpoint
  + 'ipo/' + uuid + keyParam;
}

function getFundRaiseUrl(uuid) {
  return endpoint
  + 'fund-raise/' + uuid + keyParam;
}

function getLocationsUrl(params) {
  return endpoint
  + 'locations' + keyParam
  + '&' + qs.stringify(params);
}

function getCategoriesUrl(params) {
  return endpoint
  + 'categories' + keyParam
  + '&' + qs.stringify(params);
}

module.exports = {
  init: function(apikey) {
    return init(apikey);
  },
  getOrganizationsUrl: function(params) {
    return getOrganizationsUrl(params);
  },
  getOrganizationUrl: function(permalink) {
    return getOrganizationUrl(permalink);
  },
  getPeopleUrl: function(page) {
    return getPeopleUrl(page);
  },
  getPersonUrl: function(permalink) {
    return getPersonUrl(permalink);
  },
  getProductsUrl: function(params) {
    return getProductsUrl(params);
  },
  getProductUrl: function(permalink) {
    return getProductUrl(permalink);
  },
  getFundingRoundUrl: function(uuid) {
    return getFundingRoundUrl(uuid);
  },
  getAcquisitionUrl: function(uuid) {
    return getAcquisitionUrl(uuid);
  },
  getIPOUrl: function(uuid) {
    return getIPOUrl(uuid);
  },
  getFundRaiseUrl: function(uuid) {
    return getFundRaiseUrl(uuid);
  },
  getLocationsUrl: function(params) {
    return getLocationsUrl(params);
  },
  getCatagoriesUrl: function(params) {
    return getCategoriesUrl(params);
  },
  getCategoriesUrl: function(params) {
    return getCategoriesUrl(params);
  }
}
