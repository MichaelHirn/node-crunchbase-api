# Node.js wrapper for CrunchBase API V3

Based on [crunchbase2](https://github.com/Coding-House/crunchbase2) (now out of date and incompatible with API V3).

## Examples

```javascript
var crunchbase = require('crunchbase-api');

// Init the object with your API key
crunchbase.init(apikey);

// Lookup all organizations with keyword "airbnb"
//Accepts title search query
crunchbase.organizations( {query: "airbnb" } , function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

// Lookup a single organization with the permalink "airbnb"
//accepts permalink (airbnb's happens to be airbnb)
crunchbase.organization( "airbnb", function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get pages of people
//accepts page number
crunchbase.people( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get a single person
//accepts user permalink
crunchbase.person( "richard-czechowski" , function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get pages of products
//accepts a page number
crunchbase.products( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get a single product
//accepts a permalink
crunchbase.product( {query: "airbnb" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//get funding round for a specific product. A uuid can be gotten from product endpoint
//accepts a uuid
crunchbase.fundingRound( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//This operation returns the properties and relationships of the Acquisition.
//accepts a uuid
crunchbase.acquisition( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//This operation returns the properties and relationships of the IPO.
//accepts a uuid
crunchbase.ipo( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//This operation returns the properties and relationships of the Fund Raise.
//accepts a uuid
crunchbase.fundRaise( {query: "0f74285df822ece685d63aa562f8c280" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//Returns a paginated list of all active Locations in CrunchBase.
//accepts a page
crunchbase.locations( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});

//Returns a paginated list of all active Categories in CrunchBase.
//accepts a page
crunchbase.categories( {query: "1" }, function(error, results) {
  if (!error) {
    console.log(results) // Print the search results
  }
});
```

## Redis support
You can pass an object of options that [node_redis](https://github.com/NodeRedis/node_redis) recognizes as the second argument to init to enable caching of results in Redis.
node_redis needs to be installed (`npm install redis`) for this to work.
Here's an example configuration that will use the Redis URL in the `REDIS_URL` environment variable, falling back to localhost Redis if not set:

```javascript
var crunchbase = require('crunchbase-api');

crunchbase.init(apikey, {url: process.env.REDIS_URL || 'redis://127.0.0.1:6379'});
```

## Contributing
Fork, make your changes, add yourself to contributors in package.json, bump version in package.json as needed, submit pull request, done!

## License
Apache 2.0