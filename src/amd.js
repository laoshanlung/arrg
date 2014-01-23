(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  }
}(this, function (_, Backbone) {

  // @include arrg.core.js  
  return arrg;

}));