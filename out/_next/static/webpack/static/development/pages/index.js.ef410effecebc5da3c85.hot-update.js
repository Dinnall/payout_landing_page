webpackHotUpdate("static/development/pages/index.js",{

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
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "/static/img/tryte.png",
        className: "jsx-1962891586" + " " + "logo",
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
      }, ".subscribe.jsx-1962891586{margin-left:20px;margin-bottom:5px;}.header.jsx-1962891586{position:-webkit-sticky;position:sticky;left:0;right:0;top:0px;z-index:1;height:76px;background-color:white;box-shadow:0 1px 2px 0 rgba(0,0,0,.1);}.logo.jsx-1962891586{width:65px;height:65px;margin-top:-2px;}.word.jsx-1962891586{height:80px;width:80px;margin-left:8px;margin-top:-1px;}ul.jsx-1962891586{margin-top:22px;list-style-type:none;float:right;padding:0px;}.nav-list.jsx-1962891586{margin:auto;}.anchor.jsx-1962891586{display:inline-block;font-size:15px;padding:0 9px;font-weight:300;color:#000;background-color:rgba(0,0,0,0);-webkit-transition:.3s;transition:.3s;}.anchor.jsx-1962891586:hover{font-weight:600;-webkit-text-decoration:none;text-decoration:none;}.icon.jsx-1962891586{display:none;}@media all and (max-width:900px){.tryte.jsx-1962891586{width:100%;position:fixed;margin:auto;display:block;text-align:center;left:0;right:0;margin-right:12px;}.icon.jsx-1962891586,.navigation.jsx-1962891586{position:absolute;}.navigation.jsx-1962891586{width:100%;border-bottom:3px dimgray solid;-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);-webkit-transition:all .3s linear;transition:all .3s linear;background-color:white;position:fixed;margin-top:75px!important;z-index:10;padding:0;width:100%;right:0;}.navigation.jsx-1962891586,.navigation.responsive.jsx-1962891586,.navigation.responsive.jsx-1962891586 li.jsx-1962891586{display:grid;margin:auto;}.subscribe.jsx-1962891586{margin:0;border-radius:0px;}.navigation.jsx-1962891586{float:none;text-align:center;}.icon.jsx-1962891586{display:block;font-size:25px;color:limegreen;margin-top:23px;right:0px;}ul.jsx-1962891586 a.jsx-1962891586{padding:5px 0;}.navigation.responsive.jsx-1962891586{background-color:white;position:fixed;margin-top:75px!important;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);-webkit-animation:open-jsx-1962891586 .3s ease-out;animation:open-jsx-1962891586 .3s ease-out;z-index:10;padding:0;width:100%;left:0;text-align:center;-webkit-transition:all .3s linear;transition:all .3s linear;}@-webkit-keyframes open-jsx-1962891586{0%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}@keyframes open-jsx-1962891586{0%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}100%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}}@-webkit-keyframes close-jsx-1962891586{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}}@keyframes close-jsx-1962891586{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(100%,0);-ms-transform:translate(100%,0);transform:translate(100%,0);}}}@media all and (max-width:780px){.space.jsx-1962891586{display:none;}.icon.jsx-1962891586{right:20px;font-size:22px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsZGlubmFsbC9EZXNrdG9wL3RyeXRlLWxhbmRpbmctcGFnZS9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RVMsQUFHc0IsQUFJRCxBQVVMLEFBS0MsQUFNSSxBQU1KLEFBR1MsQUFRTCxBQUlILEFBS0YsQUFZWixBQUVnQixBQWVFLEFBSVosQUFJVSxBQUlELEFBUWYsQUFHNEIsQUFleEIsQUFJQSxBQU1BLEFBSUEsQUFLVSxBQUdGLFNBdkRHLEVBdEVGLEFBcUNHLEFBY3FCLEFBd0JyQyxBQW1EZ0IsQ0F6SEosQUFZZixDQWVBLEFBbUNHLEFBd0RILENBN0NtQixBQU9mLEVBMUVxQixBQWlCQSxDQTFDSCxDQThEbEIsR0E1QmUsRUFuQkMsQUFLQSxBQW1GRyxFQXRCbkIsQ0E3QlksQUF5RmhCLENBeERBLEVBSUksQUFJZ0IsTUE1RnBCLENBa0NrQixDQVRGLENBMkJFLEFBbURnQixDQXhGbEMsQUFLb0IsQ0FqQlQsR0E4RDBCLEVBNEJqQixFQXpGUixFQXNCSSxDQVNJLEVBa0JFLEdBaERWLEFBZ0JaLE1BTUEsQUFtRWMsRUF4RkEsQ0FrR29CLEVBcEVuQixBQU1mLElBWVcsQ0F5Q1gsRUF4RmdCLElBOEJzQixBQWtCMUIsUUEvQ2UsQUFnREwsRUFnRWQsQUFNQSxTQVZBLEFBY0EsT0F6RVIsS0FoRDZDLEFBNkIxQiwrQkE0QmUsT0F4RGxDLEFBNEJvQixLQW1FZ0IsZ0RBdENMLHVCQUNSLGVBQ1csUUFxQ2YsV0FDRCxPQXJDQyxHQXNDQSxRQXJDRCxHQXNDSCxPQXJDSSxBQXNDTyxXQXJDVixPQXVDYixDQXRDQywyREFzQ0EiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWxkaW5uYWxsL0Rlc2t0b3AvdHJ5dGUtbGFuZGluZy1wYWdlL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi9saWIvZmlyZWJhc2UuanMnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdXNlcklkOiBudWxsLFxuICAgICAgICBzOiB0aGlzLnByb3BzLnRhYixcbiAgICB9XG4gICAgICAgIFxufVxuICAgIHN0YXRpYyBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKS5zY3JvbGxJbnRvVmlldygpO1xuICAgIHRoaXMubXlSZWYuY3VycmVudC5zY3JvbGxUbygwLCAwKTtcbiAgICBsZXQgZmlyZWJhc2UgPSBsb2FkRmlyZWJhc2UoKTtcbiAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VySWQ6IHVzZXIubmFtZSwgIFxuICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VySWQ6IG51bGwsICBcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KTsgXG4gICAgfVxuICAgIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcE5hdlwiKTtcbiAgICB4LmNsYXNzTGlzdC50b2dnbGUoXCJyZXNwb25zaXZlXCIpO1xuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcblxuICAgICAgICByZXR1cm4oXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwicm93IGhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtOCBjb2wtbWQtMTAgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuYXYtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHJ5dGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28gd29yZFwiIHNyYz1cIi9zdGF0aWMvaW1nL2xvZ28yLnBuZ1wiPjwvaW1nPiBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltZy90cnl0ZS5wbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIj5cbiAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIiBvbkNsaWNrPXsoKT0+e3RoaXMub25DbGljaygpfX0+JiM5Nzc2Ozwvc3Bhbj5cbiAgICA8L2E+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwidG9wTmF2XCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbmNob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SG9tZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW5jaG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkZBUTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImFuY2hvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHNwYWNlXCI+PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgIFxuLnN1YnNjcmliZXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaGVhZGVye1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogNzZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIC4xKTtcbn1cbi5sb2dvIHtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi53b3JkIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xufVxudWwge1xuICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4ubmF2LWxpc3R7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmFuY2hvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAwIDlweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgdHJhbnNpdGlvbjogLjNzXG59XG4uYW5jaG9yOmhvdmVye1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmljb257XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6OTAwcHgpIHtcblxuICAgIC50cnl0ZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbiAgICAuaWNvbixcbiAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIH1cbi5uYXZpZ2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBkaW1ncmF5IHNvbGlkO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDc1cHghaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbi5uYXZpZ2F0aW9uLFxuICAgIC5uYXZpZ2F0aW9uLnJlc3BvbnNpdmUsXG4gICAgLm5hdmlnYXRpb24ucmVzcG9uc2l2ZSBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIG1hcmdpbjogYXV0b1xuICAgIH1cbi5zdWJzY3JpYmV7XG5tYXJnaW46IDA7XG5ib3JkZXItcmFkaXVzOiAwcHg7XG59XG4gICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG4gICAgfVxuICAgIC5pY29ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogbGltZWdyZWVuO1xuICAgIG1hcmdpbi10b3A6IDIzcHg7XG4gICAgcmlnaHQ6IDBweDtcbn1cbiAgICB1bCBhIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBcbiAgICB9XG5cbiAgICAubmF2aWdhdGlvbi5yZXNwb25zaXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbWFyZ2luLXRvcDogNzVweCFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICBhbmltYXRpb246IG9wZW4gLjNzIGVhc2Utb3V0O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXJcbiAgICB9XG4gICAgQGtleWZyYW1lcyBvcGVuIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgY2xvc2Uge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKVxuICAgICAgICB9XG4gICAgfVxuICAgIH1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6NzgwcHgpIHtcbiAgIC5zcGFjZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuICAgIC5pY29ue1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbn1cbmB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il19 */\n/*@ sourceURL=/Users/michaeldinnall/Desktop/tryte-landing-page/components/Navbar.js */"));
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
//# sourceMappingURL=index.js.ef410effecebc5da3c85.hot-update.js.map