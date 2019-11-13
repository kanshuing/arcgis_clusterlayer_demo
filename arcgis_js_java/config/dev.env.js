"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  BASE_API: '"http://localhost:8081"',
  ARCGIS_API_URL: '"http://10.30.22.120:8080/arcgis_js_api"',
  MAP_SPATIALREFERENCE: "4490"
});
