/**
 * Created by tony on 2019-12-16
 */
import React from 'react';
import './index.less';

var Main = function Main(props) {
  function onClick() {
    props.onChange && props.onChange();
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "main",
    onClick: onClick
  }, "Main");
};

export default Main;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW4iLCJwcm9wcyIsIm9uQ2xpY2siLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPLGNBQVA7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBRXRCLFdBQVNDLE9BQVQsR0FBbUI7QUFDakJELElBQUFBLEtBQUssQ0FBQ0UsUUFBTixJQUFrQkYsS0FBSyxDQUFDRSxRQUFOLEVBQWxCO0FBQ0Q7O0FBRUQsc0JBQU87QUFBSyxJQUFBLFNBQVMsRUFBQyxNQUFmO0FBQXNCLElBQUEsT0FBTyxFQUFFRDtBQUEvQixZQUFQO0FBQ0QsQ0FQRDs7QUFTQSxlQUFlRixJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbnkgb24gMjAxOS0xMi0xNlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4vaW5kZXgubGVzcydcblxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgcHJvcHMub25DaGFuZ2UgJiYgcHJvcHMub25DaGFuZ2UoKVxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIG9uQ2xpY2s9e29uQ2xpY2t9Pk1haW48L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIl19