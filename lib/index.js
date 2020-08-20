"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by tony on 2019-12-16
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJvbkNsaWNrIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7QUFDQTs7OztBQUpBOzs7QUFNQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFFdEIsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQkQsSUFBQUEsS0FBSyxDQUFDRSxRQUFOLElBQWtCRixLQUFLLENBQUNFLFFBQU4sRUFBbEI7QUFDRDs7QUFFRCxzQkFBTztBQUFLLElBQUEsU0FBUyxFQUFDLE1BQWY7QUFBc0IsSUFBQSxPQUFPLEVBQUVEO0FBQS9CLFlBQVA7QUFDRCxDQVBEOztlQVNlRixJIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbnkgb24gMjAxOS0xMi0xNlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vaW5kZXgubGVzcydcblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgcHJvcHMub25DaGFuZ2UgJiYgcHJvcHMub25DaGFuZ2UoKVxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIG9uQ2xpY2s9e29uQ2xpY2t9Pk1haW48L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl19