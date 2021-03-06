"use strict";

exports.__esModule = true;
exports.storeState = storeState;

var _constants = require("./constants");

/* eslint import/prefer-default-export: 0 */
function storeState(route, state) {
  return {
    type: _constants.ROUTER_STORE_STATE,
    route: route,
    state: state
  };
}