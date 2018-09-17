const {SimpleLoader} = require("nightharbor/loader");
const {SimpleReporter} = require("nightharbor/reporter");

module.exports = {
  loaders: [
    new SimpleLoader([
      { url: "https://google.com" }
    ])
  ],
  reporters: [
    new SimpleReporter()
  ]
}