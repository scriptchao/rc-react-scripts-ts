"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _test = require("./test");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by tony on 2019-12-16
 */
console.log(_test.a);

var Main = function Main(props) {
  function onClick() {
    props.onChange && props.onChange();
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "main",
    onClick: onClick
  }, "Main");
};

var _default = Main;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYSIsIk1haW4iLCJwcm9wcyIsIm9uQ2xpY2siLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUNBOzs7O0FBTEE7OztBQU9BQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFFdEIsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQkQsSUFBQUEsS0FBSyxDQUFDRSxRQUFOLElBQWtCRixLQUFLLENBQUNFLFFBQU4sRUFBbEI7QUFDRDs7QUFFRCxzQkFBTztBQUFLLElBQUEsU0FBUyxFQUFDLE1BQWY7QUFBc0IsSUFBQSxPQUFPLEVBQUVEO0FBQS9CLFlBQVA7QUFDRCxDQVBEOztlQVNlRixJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbnkgb24gMjAxOS0xMi0xNlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBhIH0gZnJvbSAnQC9NYWluL3Rlc3QnXG5pbXBvcnQgJy4vaW5kZXgubGVzcydcblxuY29uc29sZS5sb2coYSlcblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgcHJvcHMub25DaGFuZ2UgJiYgcHJvcHMub25DaGFuZ2UoKVxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIG9uQ2xpY2s9e29uQ2xpY2t9Pk1haW48L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl19