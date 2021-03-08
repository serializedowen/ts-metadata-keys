(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define(['require', 'exports'], factory);
  }
})(function (require, exports) {
  'use strict';
  exports.__esModule = true;
  exports.paramType = exports.type = exports.returnType = void 0;
  /**
   * returnType of reflected property
   */
  exports.returnType = 'design:returntype';
  /**
   * type of reflected property
   */
  exports.type = 'design:type';
  /**
   * intake paramTypes of reflected property
   */
  exports.paramType = 'design:paramTypes';
  exports['default'] = {
    returnType: exports.returnType,
    type: exports.type,
    paramType: exports.paramType,
  };
});
