const authResolver = require("./auth");
const eventsResolver = require("./events");
const bookingresolver = require("./booking");

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingresolver
};
module.exports = rootResolver;
