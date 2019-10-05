webpackHotUpdate("static/development/pages/signup.js",{

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
        src: "/static/img/logo2.png",
        className: "jsx-1962891586" + " " + "logo word",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
      }, "FAQ"))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-1962891586" + " " + "col space",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1962891586",
        __self: this
      }, ".subscribe.jsx-1962891586{margin-left:20px;margin-bottom:5px;}.header.jsx-1962891586{position:-webkit-sticky;position:sticky;left:0;right:0;top:0px;z-index:1;height:76px;background-color:white;box-shadow:0 1px 2px 0 rgba(0,0,0,.1);}.logo.jsx-1962891586{width:65px;height:65px;margin-top:-2px;}.word.jsx-1962891586{height:80px;width:80px;margin-left:8px;margin-top:-1px;}ul.jsx-1962891586{margin-top:22px;list-style-type:none;float:right;padding:0px;}.nav-list.jsx-1962891586{margin:auto;}.anchor.jsx-1962891586{display:inline-block;font-size:15px;padding:0 9px;font-weight:300;color:#000;background-color:rgba(0,0,0,0);-webkit-transition:.3s;transition:.3s;}.anchor.jsx-1962891586:hover{font-weight:600;-webkit-text-decoration:none;text-decoration:none;}.icon.jsx-1962891586{display:none;}@media all and (max-width:900px){.tryte.jsx-1962891586{width:100%;position:fixed;margin:auto;display:block;text-align:center;left:0;right:0;margin-right:12px;}.icon.jsx-1962891586,.navigation.jsx-1962891586{position:absolute;}.navigation.jsx-1962891586{width:100%;border-bottom:3px dimgray solid;-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);-webkit-transition:all .3s linear;transition:all .3s linear;background-color:white;position:fixed;margin-top:75px!important;z-index:10;padding:0;width:100%;right:0;}.navigation.jsx-1962891586,.navigation.responsive.jsx-1962891586,.navigation.responsive.jsx-1962891586 li.jsx-1962891586{display:grid;margin:auto;}.subscribe.jsx-1962891586{margin:0;border-radius:0px;}.navigation.jsx-1962891586{float:none;text-align:center;}.icon.jsx-1962891586{display:block;font-size:25px;color:limegreen;margin-top:23px;right:0px;}ul.jsx-1962891586 a.jsx-1962891586{padding:5px 0;}.navigation.responsive.jsx-1962891586{background-color:white;position:fixed;margin-top:75px!important;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-animation:open-jsx-1962891586 .3s ease-out;animation:open-jsx-1962891586 .3s ease-out;z-index:10;padding:0;width:100%;left:0;text-align:center;-webkit-transition:all .3s linear;transition:all .3s linear;}@-webkit-keyframes open-jsx-1962891586{0%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}@keyframes open-jsx-1962891586{0%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}@-webkit-keyframes close-jsx-1962891586{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}}@keyframes close-jsx-1962891586{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}}}@media all and (max-width:780px){.space.jsx-1962891586{display:none;}.icon.jsx-1962891586{right:20px;font-size:22px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsZGlubmFsbC9EZXNrdG9wL3RyeXRlLWxhbmRpbmctcGFnZS9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RVMsQUFHc0IsQUFJRCxBQVVMLEFBS0MsQUFNSSxBQU1KLEFBR1MsQUFRTCxBQUlILEFBS0YsQUFZWixBQUVnQixBQWVFLEFBSVosQUFJVSxBQUlELEFBUWYsQUFHNEIsQUFleEIsQUFJQSxBQU1BLEFBSUEsQUFLVSxBQUdGLFNBdkRHLEVBdEVGLEFBcUNHLEFBY3FCLEFBd0JyQyxBQW1EZ0IsQ0F6SEosQUFZZixDQWVBLEFBbUNHLEFBd0RILENBN0NtQixBQU9mLEVBMUVxQixBQWlCQSxDQTFDSCxDQThEbEIsR0E1QmUsRUFuQkMsQUFLQSxBQW1GRyxFQXRCbkIsQ0E3QlksQUF5RmhCLENBeERBLEVBSUksQUFJZ0IsTUE1RnBCLENBa0NrQixDQVRGLENBMkJFLEFBbURnQixDQXhGbEMsQUFLb0IsQ0FqQlQsR0E4RDBCLEVBNEJqQixFQXpGUixFQXNCSSxDQVNJLEVBa0JFLEdBaERWLEFBZ0JaLE1BTUEsQUFtRWMsRUF4RkEsQ0FrR29CLEVBcEVuQixBQU1mLElBWVcsQ0F5Q1gsRUF4RmdCLElBOEJzQixBQWtCMUIsUUEvQ2UsQUFnREwsRUFnRWQsQUFNQSxTQVZBLEFBY0EsT0F6RVIsS0FoRDZDLEFBNkIxQiwrQkE0QmUsT0F4RGxDLEFBNEJvQixLQW1FZ0IsZ0RBdENMLHVCQUNSLGVBQ1csUUFxQ2YsV0FDRCxPQXJDQyxHQXNDQSxRQXJDRCxHQXNDSCxPQXJDSSxBQXNDTyxXQXJDVixPQXVDYixDQXRDQywyREFzQ0EiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWxkaW5uYWxsL0Rlc2t0b3AvdHJ5dGUtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi9saWIvZmlyZWJhc2UuanMnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdXNlcklkOiBudWxsLFxuICAgICAgICBzOiB0aGlzLnByb3BzLnRhYixcbiAgICB9XG4gICAgICAgIFxufVxuICAgIHN0YXRpYyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKS5zY3JvbGxJbnRvVmlldygpO1xuICAgIHRoaXMubXlSZWYuY3VycmVudC5zY3JvbGxUbygwLCAwKTtcbiAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKTtcbiAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXIubmFtZSwgIFxuICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VySWQ6IG51bGwsICBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTsgXG4gICAgfVxuICAgIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcE5hdlwiKTtcbiAgICB4LmNsYXNzTGlzdC50b2dnbGUoXCJyZXNwb25zaXZlXCIpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwicm93IGhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtOCBjb2wtbWQtMTAgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuYXYtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJ5dGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28gd29yZFwiIHNyYz1cIi9zdGF0aWMvaW1nL2xvZ28yLnBuZ1wiPjwvaW1nPiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIiBvbkNsaWNrPXsoKT0+e3RoaXMub25DbGljaygpfX0+JiM5Nzc2Ozwvc3Bhbj5cbiAgICA8L2E+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwidG9wTmF2XCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SG9tZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZBUTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiPjwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YCBcbi5zdWJzY3JpYmV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmhlYWRlcntcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6IDc2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XG59XG4ubG9nbyB7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG59XG4ud29yZCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbn1cbnVsIHtcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLm5hdi1saXN0e1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5hbmNob3Ige1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMCA5cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIHRyYW5zaXRpb246IC4zc1xufVxuLmFuY2hvcjpob3ZlcntcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5pY29ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjkwMHB4KSB7XG5cbiAgICAudHJ5dGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4gICAgLmljb24sXG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICB9XG4ubmF2aWdhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggZGltZ3JheSBzb2xpZDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBtYXJnaW4tdG9wOiA3NXB4IWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4ubmF2aWdhdGlvbixcbiAgICAubmF2aWdhdGlvbi5yZXNwb25zaXZlLFxuICAgIC5uYXZpZ2F0aW9uLnJlc3BvbnNpdmUgbGkge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBtYXJnaW46IGF1dG9cbiAgICB9XG4uc3Vic2NyaWJle1xubWFyZ2luOiAwO1xuYm9yZGVyLXJhZGl1czogMHB4O1xufVxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIH1cbiAgICAuaWNvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6IGxpbWVncmVlbjtcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG4gICAgdWwgYSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwXG4gICAgfVxuXG4gICAgLm5hdmlnYXRpb24ucmVzcG9uc2l2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHghaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgYW5pbWF0aW9uOiBvcGVuIC4zcyBlYXNlLW91dDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyXG4gICAgfVxuICAgIEBrZXlmcmFtZXMgb3BlbiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApXG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGNsb3NlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMClcbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjc4MHB4KSB7XG4gICAuc3BhY2V7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiAgICAuaWNvbntcbiAgICByaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG59XG59XG5gfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdfQ== */\n/*@ sourceURL=/Users/michaeldinnall/Desktop/tryte-landing-page/components/Navbar.js */"));
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
//# sourceMappingURL=signup.js.758032f9de06ca010b08.hot-update.js.map