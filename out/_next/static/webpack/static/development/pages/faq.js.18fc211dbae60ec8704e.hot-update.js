webpackHotUpdate("static/development/pages/faq.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_firebase_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/firebase.js */ "./lib/firebase.js");









var _jsxFileName = "/Users/michaeldinnall/Desktop/tryte-landing-page/components/Navbar.js";





var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Navbar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onClick", function () {
      var x = document.getElementById("topNav");
      x.classList.toggle("responsive");
    });

    _this.state = {
      userId: null,
      s: _this.props.tab
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "header",
        className: "jsx-1962891586" + " " + "row header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1962891586" + " " + "col space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1962891586" + " " + "col-xl-8 col-md-10 col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1962891586" + " " + "row nav-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1962891586" + " " + "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-1962891586" + " " + "tryte",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/img/tryte.png",
        className: "jsx-1962891586" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/img/logo.png",
        className: "jsx-1962891586" + " " + "logo word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1962891586" + " " + "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0);",
        className: "jsx-1962891586",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        onClick: function onClick() {
          _this2.onClick();
        },
        className: "jsx-1962891586" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u2630")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "topNav",
        className: "jsx-1962891586" + " " + "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-1962891586" + " " + "anchor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1962891586",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/faq",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-1962891586" + " " + "anchor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1962891586",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "FAQ"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-1962891586" + " " + "anchor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-1962891586",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Contact"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1962891586" + " " + "col space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1962891586",
        __self: this
      }, ".subscribe.jsx-1962891586{margin-left:20px;margin-bottom:5px;}.header.jsx-1962891586{position:-webkit-sticky;position:sticky;left:0;right:0;top:0px;z-index:1;height:76px;background-color:white;box-shadow:0 1px 2px 0 rgba(0,0,0,.1);}.logo.jsx-1962891586{width:65px;height:65px;margin-top:-2px;}.word.jsx-1962891586{height:80px;width:80px;margin-left:8px;margin-top:-1px;}ul.jsx-1962891586{margin-top:22px;list-style-type:none;float:right;padding:0px;}.nav-list.jsx-1962891586{margin:auto;}.anchor.jsx-1962891586{display:inline-block;font-size:15px;padding:0 9px;font-weight:300;color:#000;background-color:rgba(0,0,0,0);-webkit-transition:.3s;transition:.3s;}.anchor.jsx-1962891586:hover{font-weight:600;-webkit-text-decoration:none;text-decoration:none;}.icon.jsx-1962891586{display:none;}@media all and (max-width:900px){.tryte.jsx-1962891586{width:100%;position:fixed;margin:auto;display:block;text-align:center;left:0;right:0;margin-right:12px;}.icon.jsx-1962891586,.navigation.jsx-1962891586{position:absolute;}.navigation.jsx-1962891586{width:100%;border-bottom:3px dimgray solid;-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);-webkit-transition:all .3s linear;transition:all .3s linear;background-color:white;position:fixed;margin-top:75px!important;z-index:10;padding:0;width:100%;right:0;}.navigation.jsx-1962891586,.navigation.responsive.jsx-1962891586,.navigation.responsive.jsx-1962891586 li.jsx-1962891586{display:grid;margin:auto;}.subscribe.jsx-1962891586{margin:0;border-radius:0px;}.navigation.jsx-1962891586{float:none;text-align:center;}.icon.jsx-1962891586{display:block;font-size:25px;color:limegreen;margin-top:23px;right:0px;}ul.jsx-1962891586 a.jsx-1962891586{padding:5px 0;}.navigation.responsive.jsx-1962891586{background-color:white;position:fixed;margin-top:75px!important;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-animation:open-jsx-1962891586 .3s ease-out;animation:open-jsx-1962891586 .3s ease-out;z-index:10;padding:0;width:100%;left:0;text-align:center;-webkit-transition:all .3s linear;transition:all .3s linear;}@-webkit-keyframes open-jsx-1962891586{0%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}@keyframes open-jsx-1962891586{0%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}@-webkit-keyframes close-jsx-1962891586{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}}@keyframes close-jsx-1962891586{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}}}@media all and (max-width:780px){.space.jsx-1962891586{display:none;}.icon.jsx-1962891586{right:20px;font-size:22px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsZGlubmFsbC9EZXNrdG9wL3RyeXRlLWxhbmRpbmctcGFnZS9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RVMsQUFHc0IsQUFJRCxBQVVMLEFBS0MsQUFNSSxBQU1KLEFBR1MsQUFRTCxBQUlILEFBS0YsQUFZWixBQUVnQixBQWVFLEFBSVosQUFJVSxBQUlELEFBUWYsQUFHNEIsQUFleEIsQUFJQSxBQU1BLEFBSUEsQUFLVSxBQUdGLFNBdkRHLEVBdEVGLEFBcUNHLEFBY3FCLEFBd0JyQyxBQW1EZ0IsQ0F6SEosQUFZZixDQWVBLEFBbUNHLEFBd0RILENBN0NtQixBQU9mLEVBMUVxQixBQWlCQSxDQTFDSCxDQThEbEIsR0E1QmUsRUFuQkMsQUFLQSxBQW1GRyxFQXRCbkIsQ0E3QlksQUF5RmhCLENBeERBLEVBSUksQUFJZ0IsTUE1RnBCLENBa0NrQixDQVRGLENBMkJFLEFBbURnQixDQXhGbEMsQUFLb0IsQ0FqQlQsR0E4RDBCLEVBNEJqQixFQXpGUixFQXNCSSxDQVNJLEVBa0JFLEdBaERWLEFBZ0JaLE1BTUEsQUFtRWMsRUF4RkEsQ0FrR29CLEVBcEVuQixBQU1mLElBWVcsQ0F5Q1gsRUF4RmdCLElBOEJzQixBQWtCMUIsUUEvQ2UsQUFnREwsRUFnRWQsQUFNQSxTQVZBLEFBY0EsT0F6RVIsS0FoRDZDLEFBNkIxQiwrQkE0QmUsT0F4RGxDLEFBNEJvQixLQW1FZ0IsZ0RBdENMLHVCQUNSLGVBQ1csUUFxQ2YsV0FDRCxPQXJDQyxHQXNDQSxRQXJDRCxHQXNDSCxPQXJDSSxBQXNDTyxXQXJDVixPQXVDYixDQXRDQywyREFzQ0EiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWxkaW5uYWxsL0Rlc2t0b3AvdHJ5dGUtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi9saWIvZmlyZWJhc2UuanMnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdXNlcklkOiBudWxsLFxuICAgICAgICBzOiB0aGlzLnByb3BzLnRhYixcbiAgICB9XG4gICAgICAgIFxufVxuICAgIHN0YXRpYyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKS5zY3JvbGxJbnRvVmlldygpO1xuICAgIHRoaXMubXlSZWYuY3VycmVudC5zY3JvbGxUbygwLCAwKTtcbiAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKTtcbiAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXIubmFtZSwgIFxuICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VySWQ6IG51bGwsICBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTsgXG4gICAgfVxuICAgIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcE5hdlwiKTtcbiAgICB4LmNsYXNzTGlzdC50b2dnbGUoXCJyZXNwb25zaXZlXCIpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwicm93IGhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtOCBjb2wtbWQtMTAgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuYXYtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJ5dGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltZy90cnl0ZS5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28gd29yZFwiIHNyYz1cIi9zdGF0aWMvaW1nL2xvZ28ucG5nXCI+PC9pbWc+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPlxuICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiIG9uQ2xpY2s9eygpPT57dGhpcy5vbkNsaWNrKCl9fT4mIzk3NzY7PC9zcGFuPlxuICAgIDwvYT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJ0b3BOYXZcIiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ib21lPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmFxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RkFRPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbnRhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgc3BhY2VcIj48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2AgXG4uc3Vic2NyaWJle1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5oZWFkZXJ7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiA3NnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgLjEpO1xufVxuLmxvZ28ge1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLndvcmQge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG59XG51bCB7XG4gICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5uYXYtbGlzdHtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uYW5jaG9yIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDAgOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICB0cmFuc2l0aW9uOiAuM3Ncbn1cbi5hbmNob3I6aG92ZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaWNvbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo5MDBweCkge1xuXG4gICAgLnRyeXRle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuICAgIC5pY29uLFxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXG4gICAgfVxuLm5hdmlnYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRpbWdyYXkgc29saWQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweCFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuLm5hdmlnYXRpb24sXG4gICAgLm5hdmlnYXRpb24ucmVzcG9uc2l2ZSxcbiAgICAubmF2aWdhdGlvbi5yZXNwb25zaXZlIGxpIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgbWFyZ2luOiBhdXRvXG4gICAgfVxuLnN1YnNjcmliZXtcbm1hcmdpbjogMDtcbmJvcmRlci1yYWRpdXM6IDBweDtcbn1cbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gICAgLmljb257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiBsaW1lZ3JlZW47XG4gICAgbWFyZ2luLXRvcDogMjNweDtcbiAgICByaWdodDogMHB4O1xufVxuICAgIHVsIGEge1xuICAgICAgICBwYWRkaW5nOiA1cHggMFxuICAgIH1cblxuICAgIC5uYXZpZ2F0aW9uLnJlc3BvbnNpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBtYXJnaW4tdG9wOiA3NXB4IWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICAgIGFuaW1hdGlvbjogb3BlbiAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhclxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIG9wZW4ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBjbG9zZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApXG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgfVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo3ODBweCkge1xuICAgLnNwYWNle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4gICAgLmljb257XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxufVxuYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXX0= */\n/*@ sourceURL=/Users/michaeldinnall/Desktop/tryte-landing-page/components/Navbar.js */"));
    }
  }], [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var firebase;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document.getElementById('header').scrollIntoView();
                this.myRef.current.scrollTo(0, 0);
                firebase = Object(_lib_firebase_js__WEBPACK_IMPORTED_MODULE_12__["loadFirebase"])();
                firebase.auth().onAuthStateChanged(function (user) {
                  if (user) {
                    _this3.setState({
                      userId: user.name
                    });
                  } else {
                    _this3.setState({
                      userId: null
                    });
                  }
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=faq.js.18fc211dbae60ec8704e.hot-update.js.map