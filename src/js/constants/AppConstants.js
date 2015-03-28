"use strict";

var keyMirror = require('react/lib/keyMirror');

var CHANGE_EVENT = 'change';

module.exports = {

  CHANGE_EVENT: CHANGE_EVENT,

  StoreSubscribePrototype: {
    subscribe: function(cb) {
      this.on(CHANGE_EVENT, cb);
    },

    unsubscribe: function(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    }
  },

  ActionTypes: keyMirror({
    CHANGE_IS_ANIMATING: null,
    CHANGE_FLIP_TREE_Y: null,
    SUBMIT_COMMAND: null,
    CHANGE_LOCALE: null,
    CHANGE_LOCALE_FROM_HEADER: null
  }),

  PayloadSources: keyMirror({
    VIEW_ACTION: null,
    URI_ACTION: null
  })
};
