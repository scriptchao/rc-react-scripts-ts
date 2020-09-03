/**
 * Created by tony on 2019-12-16
 */
import React from 'react';
import { a } from "./test";
import "./index.less";
console.log(a);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsImEiLCJjb25zb2xlIiwibG9nIiwiTWFpbiIsInByb3BzIiwib25DbGljayIsIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLENBQVQ7QUFDQTtBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjs7QUFFQSxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFFdEIsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQkQsSUFBQUEsS0FBSyxDQUFDRSxRQUFOLElBQWtCRixLQUFLLENBQUNFLFFBQU4sRUFBbEI7QUFDRDs7QUFFRCxzQkFBTztBQUFLLElBQUEsU0FBUyxFQUFDLE1BQWY7QUFBc0IsSUFBQSxPQUFPLEVBQUVEO0FBQS9CLFlBQVA7QUFDRCxDQVBEOztBQVNBLGVBQWVGLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdG9ueSBvbiAyMDE5LTEyLTE2XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGEgfSBmcm9tICdAL01haW4vdGVzdCdcbmltcG9ydCAnLi9pbmRleC5sZXNzJ1xuXG5jb25zb2xlLmxvZyhhKVxuXG5jb25zdCBNYWluID0gKHByb3BzKSA9PiB7XG5cbiAgZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICBwcm9wcy5vbkNoYW5nZSAmJiBwcm9wcy5vbkNoYW5nZSgpXG4gIH1cblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgb25DbGljaz17b25DbGlja30+TWFpbjwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iXX0=