(self["webpackChunkngx_fast_icon_demo"] = self["webpackChunkngx_fast_icon_demo"] || []).push([["main"],{

/***/ 1748:
/*!**************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/app.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);







function AppComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("ngClass", link_r1)("routerLink", link_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1);
  }
}

class AppComponent {
  constructor(router) {
    this.router = router;
    this.links = ['description', 'fast-svg', 'material', 'ionic', 'font-awesome', 'angular', 'ant'];
    this.navClass$ = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.startWith)({
      urlAfterRedirects: this.router.url
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(e => this.getClassFromUrl(e.urlAfterRedirects)));
  }

  getClassFromUrl(url) {
    if (url.includes('angular')) {
      return 'angular';
    }

    if (url.includes('material')) {
      return 'material';
    }

    if (url.includes('ant')) {
      return 'ant';
    }

    if (url.includes('fast-svg')) {
      return 'fast-svg';
    }

    if (url.includes('font-awesome')) {
      return 'font-awesome';
    }

    if (url.includes('ionic')) {
      return 'ionic';
    }

    if (url.includes('description')) {
      return 'description';
    }

    return '';
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["ngx-fast-icon-root"]],
  decls: 8,
  vars: 4,
  consts: [[1, "root", 3, "ngClass"], [1, "row"], [1, "sidebar"], [1, "header"], ["class", "link", 3, "routerLinkActive", "ngClass", "routerLink", 4, "ngFor", "ngForOf"], [1, "content"], [1, "link", 3, "routerLinkActive", "ngClass", "routerLink"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.navClass$) || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHrefDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1090;\n  border-right: 3px solid;\n  height: 100%;\n  transition: border-color 0.2s ease-in-out;\n}\n\n.link[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: block;\n  transition: background-color 0.2s ease-in-out;\n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n  text-transform: uppercase;\n  background: none !important;\n}\n\n.link.active.description[_ngcontent-%COMP%] {\n  background-color: var(--description-border-color) !important;\n}\n\n.link.active.angular[_ngcontent-%COMP%] {\n  background-color: var(--angular-border-color) !important;\n}\n\n.link.active.ant[_ngcontent-%COMP%] {\n  background-color: var(--ant-border-color) !important;\n}\n\n.link.active.ionic[_ngcontent-%COMP%] {\n  background-color: var(--ionic-border-color) !important;\n}\n\n.link.active.font-awesome[_ngcontent-%COMP%] {\n  background-color: var(--font-awesome-border-color) !important;\n}\n\n.link.active.fast-svg[_ngcontent-%COMP%] {\n  background-color: var(--pb-border-color) !important;\n}\n\n.link.active.material[_ngcontent-%COMP%] {\n  background-color: var(--material-border-color) !important;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: calc(100% - 320px);\n  height: 100%;\n  overflow: auto;\n  padding: 0 16px;\n}\n\n[_nghost-%COMP%]  .angular {\n  background-color: var(--angular-color);\n}\n\n[_nghost-%COMP%]  .angular button {\n  background-color: var(--angular-border-color);\n}\n\n[_nghost-%COMP%]  .angular button.active {\n  background: transparent;\n  border: 2px solid var(--angular-border-color);\n}\n\n[_nghost-%COMP%]  .description {\n  background-color: var(--description-color);\n}\n\n[_nghost-%COMP%]  .ant {\n  background-color: var(--ant-color);\n}\n\n[_nghost-%COMP%]  .ant button {\n  background-color: var(--ant-border-color);\n}\n\n[_nghost-%COMP%]  .ant button.active {\n  background: transparent;\n  border: 2px solid var(--ant-border-color);\n}\n\n[_nghost-%COMP%]  .ionic {\n  background-color: var(--ionic-color);\n}\n\n[_nghost-%COMP%]  .ionic button {\n  background-color: var(--ionic-border-color);\n}\n\n[_nghost-%COMP%]  .ionic button.active {\n  background: transparent;\n  border: 2px solid var(--ionic-border-color);\n}\n\n[_nghost-%COMP%]  .font-awesome {\n  background-color: var(--font-awesome-color);\n}\n\n[_nghost-%COMP%]  .font-awesome button {\n  background-color: var(--font-awesome-border-color);\n}\n\n[_nghost-%COMP%]  .font-awesome button.active {\n  background: transparent;\n  border: 2px solid var(--font-awesome-border-color);\n}\n\n[_nghost-%COMP%]  .fast-svg {\n  background-color: var(--pb-color);\n}\n\n[_nghost-%COMP%]  .fast-svg button {\n  background-color: var(--pb-border-color);\n}\n\n[_nghost-%COMP%]  .fast-svg button.active {\n  background: transparent;\n  border: 2px solid var(--pb-border-color);\n}\n\n[_nghost-%COMP%]  .material {\n  background-color: var(--material-color);\n}\n\n[_nghost-%COMP%]  .material button {\n  background-color: var(--material-border-color);\n}\n\n[_nghost-%COMP%]  .material button.active {\n  background: transparent;\n  border: 2px solid var(--material-border-color);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 2px solid transparent;\n}\n\n[_nghost-%COMP%]  .root {\n  height: 100%;\n  overflow: auto;\n  width: 100%;\n  transition: background-color 0.2s ease-in-out;\n}\n\n[_nghost-%COMP%]  .root.angular .header {\n  border-right-color: var(--angular-border-color);\n}\n\n[_nghost-%COMP%]  .root.description .header {\n  border-right-color: var(--description-border-color);\n}\n\n[_nghost-%COMP%]  .root.ant .header {\n  border-right-color: var(--ant-border-color);\n}\n\n[_nghost-%COMP%]  .root.ionic .header {\n  border-right-color: var(--ionic-border-color);\n}\n\n[_nghost-%COMP%]  .root.font-awesome .header {\n  border-right-color: var(--font-awesome-border-color);\n}\n\n[_nghost-%COMP%]  .root.fast-svg .header {\n  border-right-color: var(--pb-border-color);\n}\n\n[_nghost-%COMP%]  .root.material .header {\n  border-right-color: var(--material-border-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUk7RUFDRSw0REFBQTtBQUFOOztBQUVJO0VBQ0Usd0RBQUE7QUFBTjs7QUFFSTtFQUNFLG9EQUFBO0FBQU47O0FBRUk7RUFDRSxzREFBQTtBQUFOOztBQUVJO0VBQ0UsNkRBQUE7QUFBTjs7QUFFSTtFQUNFLG1EQUFBO0FBQU47O0FBRUk7RUFDRSx5REFBQTtBQUFOOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRkY7O0FBTUU7RUFDRSxzQ0FBQTtBQUhKOztBQUtJO0VBQ0UsNkNBQUE7QUFITjs7QUFLTTtFQUNFLHVCQUFBO0VBQ0EsNkNBQUE7QUFIUjs7QUFPRTtFQUNFLDBDQUFBO0FBTEo7O0FBT0U7RUFDRSxrQ0FBQTtBQUxKOztBQU9JO0VBQ0UseUNBQUE7QUFMTjs7QUFPTTtFQUNFLHVCQUFBO0VBQ0EseUNBQUE7QUFMUjs7QUFTRTtFQUNFLG9DQUFBO0FBUEo7O0FBU0k7RUFDRSwyQ0FBQTtBQVBOOztBQVNNO0VBQ0UsdUJBQUE7RUFDQSwyQ0FBQTtBQVBSOztBQVdFO0VBQ0UsMkNBQUE7QUFUSjs7QUFXSTtFQUNFLGtEQUFBO0FBVE47O0FBV007RUFDRSx1QkFBQTtFQUNBLGtEQUFBO0FBVFI7O0FBYUU7RUFDRSxpQ0FBQTtBQVhKOztBQWFJO0VBQ0Usd0NBQUE7QUFYTjs7QUFhTTtFQUNFLHVCQUFBO0VBQ0Esd0NBQUE7QUFYUjs7QUFlRTtFQUNFLHVDQUFBO0FBYko7O0FBZUk7RUFDRSw4Q0FBQTtBQWJOOztBQWVNO0VBQ0UsdUJBQUE7RUFDQSw4Q0FBQTtBQWJSOztBQW1CQTtFQUNFLDZCQUFBO0FBaEJGOztBQW1CQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0FBaEJGOztBQW1CSTtFQUNFLCtDQUFBO0FBakJOOztBQXFCSTtFQUNFLG1EQUFBO0FBbkJOOztBQXVCSTtFQUNFLDJDQUFBO0FBckJOOztBQXlCSTtFQUNFLDZDQUFBO0FBdkJOOztBQTJCSTtFQUNFLG9EQUFBO0FBekJOOztBQTZCSTtFQUNFLDBDQUFBO0FBM0JOOztBQStCSTtFQUNFLGdEQUFBO0FBN0JOIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDkwO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgJi5kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlc2NyaXB0aW9uLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYuYW5ndWxhciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFuZ3VsYXItYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJi5hbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbnQtYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJi5pb25pYyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbmljLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYuZm9udC1hd2Vzb21lIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1hd2Vzb21lLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICYuZmFzdC1zdmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYi1ib3JkZXItY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmLm1hdGVyaWFsIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMjBweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAge1xyXG4gIC5hbmd1bGFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFuZ3VsYXItY29sb3IpO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFuZ3VsYXItYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hbmd1bGFyLWJvcmRlci1jb2xvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlc2NyaXB0aW9uLWNvbG9yKTtcclxuICB9XHJcbiAgLmFudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbnQtY29sb3IpO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFudC1ib3JkZXItY29sb3IpO1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFudC1ib3JkZXItY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pb25pYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb25pYy1jb2xvcik7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uaWMtYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb25pYy1ib3JkZXItY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb250LWF3ZXNvbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1hd2Vzb21lLWNvbG9yKTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWF3ZXNvbWUtYm9yZGVyLWNvbG9yKTtcclxuXHJcbiAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWF3ZXNvbWUtYm9yZGVyLWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZmFzdC1zdmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGItY29sb3IpO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBiLWJvcmRlci1jb2xvcik7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGItYm9yZGVyLWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWF0ZXJpYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtY29sb3IpO1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWJvcmRlci1jb2xvcik7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWF0ZXJpYWwtYm9yZGVyLWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLnJvb3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICYuYW5ndWxhciB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS1hbmd1bGFyLWJvcmRlci1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuZGVzY3JpcHRpb24ge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tZGVzY3JpcHRpb24tYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5hbnQge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tYW50LWJvcmRlci1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuaW9uaWMge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0taW9uaWMtYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5mb250LWF3ZXNvbWUge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tZm9udC1hd2Vzb21lLWJvcmRlci1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuZmFzdC1zdmcge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tcGItYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgJi5tYXRlcmlhbCB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1ib3JkZXItY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 9327:
/*!***********************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/app.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 1748);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _routes_description_description_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/description/description.component */ 7472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nguniversal/common */ 29);
/* harmony import */ var _push_based_ngx_fast_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @push-based/ngx-fast-svg */ 9221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_fast_lib_src_lib_fast_svg_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngx-fast-lib/src/lib/fast-svg.module */ 9503);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule.withServerTransition({ appId: 'ngx-fast-icon-demo' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _nguniversal_common__WEBPACK_IMPORTED_MODULE_2__.TransferHttpCacheModule,
            _push_based_ngx_fast_svg__WEBPACK_IMPORTED_MODULE_3__.FastSvgModule.forRoot({
                url: (name) => `assets/svg-icons/${name}.svg`,
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot([
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'description',
                },
                {
                    path: 'ngx-fast-icon',
                    loadChildren: () => __webpack_require__.e(/*! import() */ "packages_ngx-fast-icon-demo_src_app_misc_ngx-fast-svg_fast-svg-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./misc/ngx-fast-svg/fast-svg-list.module */ 2509)).then((m) => m.FastSvgListModule),
                },
                {
                    path: 'icon',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-packages_ngx-fast-icon-demo_src_app_icon-data_ts-node_modules_angular-svg-icon_fesm20-82e11f"), __webpack_require__.e("packages_ngx-fast-icon-demo_src_app_misc_angular-svg-icon_angular-svg-icon-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./misc/angular-svg-icon/angular-svg-icon-list.module */ 8950)).then((m) => m.AngularSvgIconListModule),
                },
                {
                    path: 'description',
                    component: _routes_description_description_component__WEBPACK_IMPORTED_MODULE_1__.DescriptionComponent,
                },
                {
                    path: 'angular',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-packages_ngx-fast-icon-demo_src_app_icon-data_ts-node_modules_angular-svg-icon_fesm20-82e11f"), __webpack_require__.e("common"), __webpack_require__.e("packages_ngx-fast-icon-demo_src_app_comparison_angular_angular_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comparison/angular/angular.module */ 4342)).then((m) => m.AngularModule),
                },
                {
                    path: 'material',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("packages_ngx-fast-icon-demo_src_app_comparison_material_material_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comparison/material/material.module */ 7668)).then((m) => m.MaterialComponentModule),
                },
                {
                    path: 'ant',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("packages_ngx-fast-icon-demo_src_app_comparison_ant_ant_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comparison/ant/ant.module */ 9525)).then((m) => m.AntModule),
                },
                {
                    path: 'ionic',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("packages_ngx-fast-icon-demo_src_app_comparison_ionic_ionic_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comparison/ionic/ionic.module */ 1642)).then((m) => m.IonicComponentModule),
                },
                {
                    path: 'font-awesome',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("packages_ngx-fast-icon-demo_src_app_comparison_font-awesome_font-awesome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comparison/font-awesome/font-awesome.module */ 7941)).then((m) => m.FontAwesomeRouteModule),
                },
                {
                    path: 'fast-svg',
                    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("packages_ngx-fast-icon-demo_src_app_comparison_fast-icon_fast-icon_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./comparison/fast-icon/fast-icon.module */ 4755)).then((m) => m.FastIconRouteModule),
                },
                /* {
                path:'angular-material-icon',
                loadChildren: () => import('./angular-material-icons-list/angular-material-icons-list.module').then(m => m.AngularMaterialIconListModule)
              },*/
            ], { initialNavigation: 'enabledBlocking' }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _nguniversal_common__WEBPACK_IMPORTED_MODULE_2__.TransferHttpCacheModule, _ngx_fast_lib_src_lib_fast_svg_module__WEBPACK_IMPORTED_MODULE_4__.FastSvgModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 7472:
/*!*****************************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/routes/description/description.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionComponent": () => (/* binding */ DescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DescriptionComponent {
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) { return new (t || DescriptionComponent)(); };
DescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionComponent, selectors: [["ng-component"]], decls: 9, vars: 0, template: function DescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Performance comparison of different svg-icons solutions in Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol")(3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select library on the left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start performance recording");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Click \"Add\" button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7954:
/*!*********************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/environments/environment.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 9402:
/*!*************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/main.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 9327);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 7954);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch((err) => console.log(err));
});
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));


/***/ }),

/***/ 9221:
/*!********************************************!*\
  !*** ./packages/ngx-fast-lib/src/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastSvgComponent": () => (/* reexport safe */ _lib_fast_svg_component__WEBPACK_IMPORTED_MODULE_5__.FastSvgComponent),
/* harmony export */   "FastSvgModule": () => (/* reexport safe */ _lib_fast_svg_module__WEBPACK_IMPORTED_MODULE_6__.FastSvgModule),
/* harmony export */   "SvgLoadStrategy": () => (/* reexport safe */ _lib_token_svg_load_strategy_model__WEBPACK_IMPORTED_MODULE_2__.SvgLoadStrategy),
/* harmony export */   "SvgLoadStrategyImpl": () => (/* reexport safe */ _lib_token_svg_load_strategy__WEBPACK_IMPORTED_MODULE_3__.SvgLoadStrategyImpl),
/* harmony export */   "SvgOptionsToken": () => (/* reexport safe */ _lib_token_svg_options_token__WEBPACK_IMPORTED_MODULE_1__.SvgOptionsToken),
/* harmony export */   "SvgRegistry": () => (/* reexport safe */ _lib_svg_registry_service__WEBPACK_IMPORTED_MODULE_4__.SvgRegistry)
/* harmony export */ });
/* harmony import */ var _lib_token_svg_options_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/token/svg-options.model */ 8480);
/* harmony import */ var _lib_token_svg_options_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/token/svg-options.token */ 8752);
/* harmony import */ var _lib_token_svg_load_strategy_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/token/svg-load.strategy.model */ 9876);
/* harmony import */ var _lib_token_svg_load_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/token/svg-load.strategy */ 918);
/* harmony import */ var _lib_svg_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/svg-registry.service */ 7490);
/* harmony import */ var _lib_fast_svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/fast-svg.component */ 4221);
/* harmony import */ var _lib_fast_svg_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/fast-svg.module */ 9503);
// tokens




// service

// component

// module



/***/ }),

/***/ 4221:
/*!*************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/fast-svg.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastSvgComponent": () => (/* binding */ FastSvgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _svg_registry_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg-registry.service */ 7490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _internal_get_zone_unpatched_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/get-zone-unpatched-api */ 5079);
/* eslint-disable @typescript-eslint/ban-types */







/**
 * getZoneUnPatchedApi
 *
 * @description
 *
 * This function returns the zone un-patched API for the a specific Browser API.
 * If no element is passed the window is used instead
 *
 * @param name {string} - The name of the API to check.
 * @param elem {any} - The elem to get un-patched API from.
 * @return {Function} - The zone un-patched API in question.
 *
 */
const addEventListener = (elem, name, listener) => (0,_internal_get_zone_unpatched_api__WEBPACK_IMPORTED_MODULE_1__.getZoneUnPatchedApi)('addEventListener', elem).bind(elem)(name, listener);
let element = undefined;
function createGetImgFn(renderer) {
    if (element === undefined) {
        element = renderer.createElement('img');
        element.setAttribute('style', 'display: none; contain: content; content-visibility: auto;');
        element.setAttribute('loading', 'lazy');
        element.setAttribute('width', '0');
        element.setAttribute('height', '0');
    }
    return (src) => {
        const e = element.cloneNode(true);
        e.setAttribute('src', src);
        return e;
    };
}
/**
 * ngx-fast-svg enables lazy loading features of the browser for SVG.
 * It also manages the caching of SVG's in the DOM for multiple usage and different stylings
 * This component also Supports lazy loading with SSR and http transfer cache
 * */
class FastSvgComponent {
    constructor(platform, renderer, registry, element) {
        this.platform = platform;
        this.renderer = renderer;
        this.registry = registry;
        this.element = element;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
        this.getImg = createGetImgFn(this.renderer);
        this.name = '';
        this.size = this.registry.defaultSize;
        this.width = '';
        this.height = '';
        // When the browser loaded the svg resource we trigger the caching mechanism
        // re-fetch -> cache-hit -> get SVG -> cache in DOM
        this.loadedListener = () => {
            this.registry.fetchSvg(this.name);
        };
    }
    ngAfterViewInit() {
        if (!this.name) {
            throw new Error('svg component needs a name to operate');
        }
        // Setup view refs and init them
        const elem = this.element.nativeElement;
        const svg = elem.querySelector('svg');
        // apply size
        if (this.size && svg) {
            // We apply fixed dimensions
            // Additionally to SEO rules, to avoid any scroll flicker caused by `content-visibility:auto` defined in component styles
            svg.setAttribute('width', this.width || this.size);
            svg.setAttribute('height', this.height || this.width || this.size);
        }
        let img = null;
        // if svg is not in cache we append
        if (!this.registry.isSvgCached(this.name)) {
            /**
             CSR - Browser native lazy loading hack
      
             We use an img element here to leverage the browsers native features:
             - lazy loading (loading="lazy") to only load the svg that are actually visible
             - priority hints to down prioritize the fetch to avoid delaying the LCP
      
             While the SVG is loading we display a fallback SVG.
             After the image is loaded we remove it from the DOM. (IMG load event)
             When the new svg arrives we append it to the template.
      
             Note:
             - the image is styled with display none. this prevents any loading of the resource ever.
             on component bootstrap we decide what we want to do. when we remove display none it performs the browser native behavior
             - the image has 0 height and with and containment as well as contnet-visibility to recuce any performance impact
      
      
             Edge cases:
             - only resources that are not loaded in the current session of the browser will get lazy loaded (same URL to trigger loading is not possible)
             - already loaded resources will get emitted from the cache immediately, even if loading is set to lazy :o
             - the image needs to have display other than none
      
             */
            const i = this.getImg(this.registry.url(this.name));
            this.renderer.appendChild(this.element.nativeElement, i);
            // get img
            img = elem.querySelector('img');
            addEventListener(img, 'load', this.loadedListener);
        }
        // Listen to svg changes
        // This potentially could already receive the svg from the cache and drop the img from the DOM before it gets activated for lazy loading.
        // NOTICE:
        // If the svg is already cached the following code will execute synchronously. This gives us the chance to add
        this.sub = this.registry.svgCache$(this.name).subscribe((cache) => {
            // The first child is the `use` tag. The value of href gets displayed as SVG
            svg.children[0].setAttribute('href', cache.name);
            svg.setAttribute('viewBox', cache.viewBox);
            // early exvit no image
            if (!img)
                return;
            // If the img is present
            // and the name in included in the href (svg is fully loaded, not only the suspense svg)
            // Remove the element from the DOM as it is no longer needed
            if (cache.name.includes(this.name)) {
                img.removeEventListener('load', this.loadedListener);
                // removeEventListener.bind(img, 'load', this.loadedListener);
                img.remove();
            }
        });
        // SSR
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformServer)(this.platform)) {
            // if SSR load svgs on server => ends up in DOM cache and ships to the client
            this.registry.fetchSvg(this.name);
        }
        // CSR
        else {
            // Activate the lazy loading hack
            // Loading is triggered in the template over loading="lazy" and onload
            // Than the same image is fetched over fromFetch and rendered as SVG. (This will result in a cache hit for this svg)
            //
            // If the img is present activate it
            img && img.style.setProperty('display', 'block');
        }
    }
    ngOnDestroy() {
        var _a;
        this.sub.unsubscribe();
        (_a = this.element.nativeElement
            .querySelector('img')) === null || _a === void 0 ? void 0 : _a.removeEventListener('load', this.loadedListener);
    }
}
FastSvgComponent.ɵfac = function FastSvgComponent_Factory(t) { return new (t || FastSvgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_svg_registry_service__WEBPACK_IMPORTED_MODULE_0__.SvgRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef)); };
FastSvgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FastSvgComponent, selectors: [["fast-svg"]], inputs: { name: "name", size: "size", width: "width", height: "height" }, decls: 2, vars: 0, consts: [[1, "fast-svg"]], template: function FastSvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\n\n.fast-svg[_ngcontent-%COMP%] {\n  margin: 3px;\n  \n  contain: content;\n  \n  content-visibility: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhc3Qtc3ZnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGlCQUFBO0FBQVI7O0FBR007RUFDRSxXQUFBO0VBQ0Esb0ZBQUE7RUFDQSxnQkFBQTtFQUNBLG1HQUFBO0VBQ0Esd0JBQUE7QUFBUiIsImZpbGUiOiJmYXN0LXN2Zy5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XG4gICAgICB9XG5cbiAgICAgIC5mYXN0LXN2ZyB7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICAvKiBsZXZlcmFnZSBjc3MgcGVyZiBmZWF0dXJlcyBmb3Igb2xkZXIgYnJvd3NlcnMgbm90IHN1cHBvcnRpbmcgY29udGVudC12aXNpYmlsaXR5ICovXG4gICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgIC8qIGxldmVyYWdlIGNvbnRhaW46Y29udGVudCBpbXByb3ZlbWVudHMsIGV4Y2x1ZGUgbm9kZSBjb21wbGV0ZWx5IGZyb20gcmVjYWxjIHN0eWxlcyBpZiBvZmZzY3JlZW4gKi9cbiAgICAgICAgY29udGVudC12aXNpYmlsaXR5OiBhdXRvO1xuICAgICAgfVxuICAgICJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 9503:
/*!**********************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/fast-svg.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastSvgModule": () => (/* binding */ FastSvgModule)
/* harmony export */ });
/* harmony import */ var _fast_svg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fast-svg.component */ 4221);
/* harmony import */ var _svg_registry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-registry.service */ 7490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _token_svg_load_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token/svg-load.strategy */ 918);
/* harmony import */ var _token_svg_load_strategy_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token/svg-load.strategy.model */ 9876);
/* harmony import */ var _token_svg_options_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token/svg-options.token */ 8752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class FastSvgModule {
    static forRoot(providers) {
        const svgOptions = {
            url: providers.url,
        };
        (providers === null || providers === void 0 ? void 0 : providers.suspenseSvgString) &&
            (svgOptions.suspenseSvgString = providers.suspenseSvgString);
        (providers === null || providers === void 0 ? void 0 : providers.defaultSize) && (svgOptions.defaultSize = providers.defaultSize);
        return {
            ngModule: FastSvgModule,
            providers: [
                {
                    provide: _token_svg_load_strategy_model__WEBPACK_IMPORTED_MODULE_3__.SvgLoadStrategy,
                    useClass: providers.svgLoadStrategy || _token_svg_load_strategy__WEBPACK_IMPORTED_MODULE_2__.SvgLoadStrategyImpl,
                },
                {
                    provide: _token_svg_options_token__WEBPACK_IMPORTED_MODULE_4__.SvgOptionsToken,
                    useValue: svgOptions,
                },
                _svg_registry_service__WEBPACK_IMPORTED_MODULE_1__.SvgRegistry,
            ],
        };
    }
    static forChild() {
        return {
            ngModule: FastSvgModule,
            providers: [],
        };
    }
}
FastSvgModule.ɵfac = function FastSvgModule_Factory(t) { return new (t || FastSvgModule)(); };
FastSvgModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FastSvgModule });
FastSvgModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FastSvgModule, { declarations: [_fast_svg_component__WEBPACK_IMPORTED_MODULE_0__.FastSvgComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule], exports: [_fast_svg_component__WEBPACK_IMPORTED_MODULE_0__.FastSvgComponent] }); })();


/***/ }),

/***/ 5079:
/*!**************************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/internal/get-zone-unpatched-api.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getZoneUnPatchedApi": () => (/* binding */ getZoneUnPatchedApi)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/ban-types
function getZoneUnPatchedApi(name, elem) {
    return elem['__zone_symbol__' + name] !== undefined
        ? elem['__zone_symbol__' + name]
        : elem[name];
}


/***/ }),

/***/ 7490:
/*!***************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/svg-registry.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgRegistry": () => (/* binding */ SvgRegistry)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _token_svg_options_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token/svg-options.token */ 8752);
/* harmony import */ var _token_default_token_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token/default-token-values */ 8808);
/* harmony import */ var _token_svg_load_strategy_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token/svg-load.strategy.model */ 9876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







// @TODO compose svgs in 1 sprite and fetch by id as before
const element = undefined;
function createDomParser(document) {
    const e = element || document.createElement('DIV');
    return (s) => {
        e && (e.innerHTML = s);
        return e.firstChild;
    };
}
function styleDomCacheForPerformance(el) {
    /**
     * reduce paint area with with/height 0 and overflow hidden
     * fixed position of -2000px to always have it offscreen and outside of any native trigger (viewport observer in content visibilities)
     * contain:content to leverage css perf features for older browsers not supporting content-visibility
     * content-visibility: auto to exclude it completely from styles recalculation
     */
    el.setAttribute('style', `
    overflow: hidden;
    width: 0px;
    height: 0px;
    position: fixed;
    bottom: -2000px;
    contain: content;
    content-visibility: auto;
  `);
    return el;
}
class SvgRegistry {
    constructor(document, svgLoadStrategy, svgOptions) {
        var _a;
        this.document = document;
        this.svgLoadStrategy = svgLoadStrategy;
        this.svgOptions = svgOptions;
        this.domParser = createDomParser(this.document);
        this.svgDomCache = (() => {
            // The DOM cache could be already created on SSR or due to multiple instances of the registry
            const domCache = this.document.getElementById('svg-cache') ||
                this.domParser('<div id="svg-cache"></div>');
            styleDomCacheForPerformance(domCache);
            this.document.body.appendChild(domCache);
            return domCache;
        })();
        this._svgHrefCache = new Map();
        this._cachedSvgs = new Set();
        this.defaultSize = ((_a = this.svgOptions) === null || _a === void 0 ? void 0 : _a.defaultSize) || '24';
        this._defaultViewBox = `0 0 ${this.defaultSize} ${this.defaultSize}`;
        this.url = this.svgOptions.url;
        this.fetchSvg = (svgName) => {
            const svgId = this.svgId(svgName);
            // if the svg is already fetched we return early
            if (this._cachedSvgs.has(svgId)) {
                return;
            }
            this._cachedSvgs.add(svgId);
            // trigger fetch
            this.svgLoadStrategy
                .load(this.svgOptions.url(svgName))
                .subscribe((body) => this.cacheSvgInDOM(svgId, body), console.error);
        };
        // configure suspense svg
        const suspenseSvgId = this.svgId('suspense');
        !this._cachedSvgs.has(suspenseSvgId) &&
            this.cacheSvgInDOM(suspenseSvgId, this.svgOptions.suspenseSvgString || _token_default_token_values__WEBPACK_IMPORTED_MODULE_1__.suspenseSvg);
        this.hydrateFromDom();
    }
    hydrateFromDom() {
        // hydrate DOM cache
        Array.from(this.svgDomCache.children).forEach((i) => {
            // add to fetchedSvgs
            this._cachedSvgs.add(i.id);
            // i.
            // publish to components and render it
            this.getSvgSubject(i.id).next({
                name: i.id,
                viewBox: i.getAttribute('viewBox') || this._defaultViewBox,
            });
        });
    }
    isSvgCached(name) {
        return this._cachedSvgs.has(this.svgId(name));
    }
    svgCache$(name) {
        // start by displaying the suspense svg immediately
        return this.getSvgSubject(this.svgId(name)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((svg) => ({ name: `#${svg.name}`, viewBox: svg.viewBox })));
    }
    cacheSvgInDOM(svgId, svgString) {
        // create HTML
        const svgElem = this.domParser(svgString);
        // parse the svg string and get a viewBox
        const viewBox = svgString.match(/viewBox="([^"]*)"/);
        // the SVG element needs to be accessible over a href and end with a specific anchor to select the element by id
        (svgElem === null || svgElem === void 0 ? void 0 : svgElem.setAttribute) && svgElem.setAttribute('id', svgId);
        this.svgDomCache.appendChild(svgElem);
        // notify subscribers about change
        this.getSvgSubject(svgId).next({
            name: svgId,
            viewBox: (viewBox === null || viewBox === void 0 ? void 0 : viewBox[1]) || this._defaultViewBox,
        });
    }
    /*
    private removeSvgInDOM(svgId: string): void {
      this.svgDomCache.querySelector(`#${svgId}`)?.remove();
    }*/
    getSvgSubject(svgId) {
        if (!this._svgHrefCache.has(svgId)) {
            this._svgHrefCache.set(svgId, new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({
                name: this.svgId('suspense'),
                viewBox: this._defaultViewBox,
            }));
        }
        return this._svgHrefCache.get(svgId);
    }
    // pattern has to be `<svgName>`
    svgId(name) {
        return `${name}`;
    }
}
SvgRegistry.ɵfac = function SvgRegistry_Factory(t) { return new (t || SvgRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_token_svg_load_strategy_model__WEBPACK_IMPORTED_MODULE_2__.SvgLoadStrategy, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_token_svg_options_token__WEBPACK_IMPORTED_MODULE_0__.SvgOptionsToken, 8)); };
SvgRegistry.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SvgRegistry, factory: SvgRegistry.ɵfac });


/***/ }),

/***/ 8808:
/*!*********************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/token/default-token-values.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "suspenseSvg": () => (/* binding */ suspenseSvg)
/* harmony export */ });
const suspenseSvg = `<svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <circle cx="15.5" cy="9.5" r="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path
        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"
      />
    </svg>`;


/***/ }),

/***/ 9876:
/*!************************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/token/svg-load.strategy.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgLoadStrategy": () => (/* binding */ SvgLoadStrategy)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SvgLoadStrategy {
}
SvgLoadStrategy.ɵfac = function SvgLoadStrategy_Factory(t) { return new (t || SvgLoadStrategy)(); };
SvgLoadStrategy.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SvgLoadStrategy, factory: SvgLoadStrategy.ɵfac });


/***/ }),

/***/ 918:
/*!******************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/token/svg-load.strategy.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgLoadStrategyImpl": () => (/* binding */ SvgLoadStrategyImpl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _internal_get_zone_unpatched_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/get-zone-unpatched-api */ 5079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class SvgLoadStrategyImpl {
    constructor() {
        this.fetch = (0,_internal_get_zone_unpatched_api__WEBPACK_IMPORTED_MODULE_0__.getZoneUnPatchedApi)('fetch', window);
    }
    load(url) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(fetch(url).then((res) => (!res.ok ? '' : res.text())));
    }
}
SvgLoadStrategyImpl.ɵfac = function SvgLoadStrategyImpl_Factory(t) { return new (t || SvgLoadStrategyImpl)(); };
SvgLoadStrategyImpl.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SvgLoadStrategyImpl, factory: SvgLoadStrategyImpl.ɵfac });


/***/ }),

/***/ 8480:
/*!******************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/token/svg-options.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8752:
/*!******************************************************************!*\
  !*** ./packages/ngx-fast-lib/src/lib/token/svg-options.token.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvgOptionsToken": () => (/* binding */ SvgOptionsToken)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const SvgOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('__SvgOptionsToken__');


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9402)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map