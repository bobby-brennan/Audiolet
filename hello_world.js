"use strict";

// Import the DataFire library.
let datafire = require('datafire');

// Create a new Action.
module.exports = new datafire.Action({
  description: "greetfas",
  inputs: [{
    title: "name",
    type: "string"
  }],
  handler: input => {
    return "Hello, " + input.name;
  },
});
