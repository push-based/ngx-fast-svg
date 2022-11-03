"use strict";
(self["webpackChunkngx_fast_icon_demo"] = self["webpackChunkngx_fast_icon_demo"] || []).push([["packages_ngx-fast-icon-demo_src_app_comparison_ant_ant_module_ts"],{

/***/ 9608:
/*!*****************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/comparison/ant/ant.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AntComponent": () => (/* binding */ AntComponent)
/* harmony export */ });
/* harmony import */ var _icon_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icon-data */ 374);
/* harmony import */ var _misc_icons_tester_icon_tester_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/icons-tester/icon-tester.service */ 5969);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ 3660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons-angular */ 3816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = function (a0) { return { active: a0 }; };
function AntComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AntComponent_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const button_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.tester.setLayout(button_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, button_r2 === ctx_r0.tester.setting));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", button_r2, " ");
} }
function AntComponent_div_15_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", icon_r8);
} }
function AntComponent_div_15_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AntComponent_div_15_ul_1_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", list_r6);
} }
function AntComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AntComponent_div_15_ul_1_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.tester.lists);
} }
class AntComponent {
    constructor(_iconService, tester) {
        this._iconService = _iconService;
        this.tester = tester;
        this.tester.defineSet(_icon_data__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_ICONS);
        this._iconService.addIcon(..._icons__WEBPACK_IMPORTED_MODULE_2__.AllIcons);
    }
}
AntComponent.ɵfac = function AntComponent_Factory(t) { return new (t || AntComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_4__.IconService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_misc_icons_tester_icon_tester_service__WEBPACK_IMPORTED_MODULE_1__.IconTester)); };
AntComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AntComponent, selectors: [["ng-component"]], decls: 16, vars: 2, consts: [[1, "buttons-wrapper"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "row icons", 4, "ngIf"], [3, "ngClass", "click"], [1, "row", "icons"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "group"], [4, "ngFor", "ngForOf"], ["antIcon", "", "theme", "fill", 3, "type"]], template: function AntComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Ant design icon demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Layout setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AntComponent_button_5_Template, 2, 4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Content controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 0)(9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AntComponent_Template_button_click_9_listener() { return ctx.tester.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AntComponent_Template_button_click_11_listener() { return ctx.tester.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AntComponent_Template_button_click_13_listener() { return ctx.tester.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Reload page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AntComponent_div_15_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tester.buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tester.showContainer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_4__.IconDirective], styles: [".group[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9525:
/*!**************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/comparison/ant/ant.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AntModule": () => (/* binding */ AntModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ant.component */ 9608);
/* harmony import */ var _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-angular */ 3816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class AntModule {
}
AntModule.ɵfac = function AntModule_Factory(t) { return new (t || AntModule)(); };
AntModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AntModule });
AntModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_3__.IconModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
                {
                    path: '',
                    component: _ant_component__WEBPACK_IMPORTED_MODULE_0__.AntComponent,
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AntModule, { declarations: [_ant_component__WEBPACK_IMPORTED_MODULE_0__.AntComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ant_design_icons_angular__WEBPACK_IMPORTED_MODULE_3__.IconModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 3660:
/*!*********************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/comparison/ant/icons.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllIcons": () => (/* binding */ AllIcons),
/* harmony export */   "account": () => (/* binding */ account),
/* harmony export */   "back": () => (/* binding */ back),
/* harmony export */   "consulting": () => (/* binding */ consulting),
/* harmony export */   "custom_workshops": () => (/* binding */ custom_workshops),
/* harmony export */   "custom_workshops_1": () => (/* binding */ custom_workshops_1),
/* harmony export */   "custom_workshops_2": () => (/* binding */ custom_workshops_2),
/* harmony export */   "custom_workshops_3": () => (/* binding */ custom_workshops_3),
/* harmony export */   "deleteIcon": () => (/* binding */ deleteIcon),
/* harmony export */   "engineering": () => (/* binding */ engineering),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "genre": () => (/* binding */ genre),
/* harmony export */   "imdb": () => (/* binding */ imdb),
/* harmony export */   "play": () => (/* binding */ play),
/* harmony export */   "popular": () => (/* binding */ popular),
/* harmony export */   "sad": () => (/* binding */ sad),
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "top_rated": () => (/* binding */ top_rated),
/* harmony export */   "upcoming": () => (/* binding */ upcoming),
/* harmony export */   "website": () => (/* binding */ website),
/* harmony export */   "who_we_are": () => (/* binding */ who_we_are),
/* harmony export */   "workshops": () => (/* binding */ workshops)
/* harmony export */ });
const account = {
    icon: `<svg id="account" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path
  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"></path></svg>
`,
    name: 'account',
    theme: 'fill',
};
const back = {
    icon: `<svg id="back" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path
  d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
`,
    name: 'back',
    theme: 'fill',
};
const consulting = {
    icon: `<svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
.st0{fill:#E5E5E5;}
.st1{fill:none;stroke:#E5E5E5;stroke-width:0.25;stroke-miterlimit:10;}
.st2{fill:#F4F4F4;}
.st3{fill:#EAEAEA;}
.st4{fill:#EDBCDA;}
.st5{fill:#9B84C1;}
.st6{fill:#EDEDED;}
.st7{fill:#DBDBDB;}
.st8{fill:#EFEFEF;}
.st9{fill:#FFFFFF;}
.st10{fill:#99CFF8;}
.st11{fill:#D0E7F4;}
.st12{fill:#F2F2F2;}
.st13{fill:#EFD1C7;}
.st14{fill:#363636;}
.st15{fill:#E01D85;}
.st16{fill:#50208F;}
.st17{opacity:0.2;fill:#3D3D75;}
</style>
<path class="st0" d="M138.8,385.8c1.2-18.8,14.5-49.8,5.6-49.8c-3.5,0-5.5,18.5-5.9,12.8s5.9-45.2-3.2-44.6
c-4,0.2-0.4,22.8-3.3,22.1c-4-1-1.4-7.2-4.7-8.3c-9.5-3.1,1.7,40.8,0,40.9c-1.4,0.1-4.3-16.8-10.6-11.9c-5.8,4.6,7.5,17.3,7.6,36.8
C124.5,389.8,138.7,387.7,138.8,385.8z"/>
<rect x="447.5" y="210.1" class="st1" width="69.5" height="69.5"/>
<path class="st2" d="M217.2,192.8l17.4-38.6c0,0,1,5.3,2.4,4.8c1.4-0.6,4-4.6,5.9-4.8s16.5-5.9,16.5-5.9s2,3.1,2.3,3.5
c0.3,0.4,2.1,1.6,2.1,1.6l1.4,2.8c0,0,2,2.5,2,3c0,0.5,0,16.3,0,16.3s-18.2,0.6-22.5,0.6C240.5,176.2,217.2,192.8,217.2,192.8z
M291.4,186.2c0,0,2.5-16.2,2-16.4c-0.5-0.1-4.5,8.6-5.2,9.6s-1.8,5-2,6.8c-0.3,1.7-3,5.6-3,5.6L291.4,186.2z M305.2,165.5
c-0.4,0.6,7.1,13.2,7.1,13.2l7.9,1.3l5.2-17.3c0,0,0.3-8.1,0-9.3c-0.3-1.3,0-1.4-1.8-3c-0.4-0.4-1.3-2.7-1.3-2.7s-1.1-0.3-1.5,0
c-0.4,0.3-1.4,2.9-1.5,3.6c-0.1,0.8-1,5.2-1.4,6.2c-0.4,1-1.8-2-1.8-2.4s-1-5.3-2-6.7c-1-1.4-5.3-0.4-5.3-0.4
S305.6,164.8,305.2,165.5z M336.5,179c-0.3,1.5,4.7,5.7,5.2,6.4c0.5,0.8,19.3,6.4,19.3,6.4s-0.4-1.7-0.9-1.7c-0.4,0-2.8-1.4-2.8-1.4
s-1.9-6.4-2.4-7.1c-0.5-0.8-2.3-3-2.6-3.8c-0.4-0.8-2.1-2.1-2.1-2.1s-0.6-5.3-0.8-6.3c-0.1-1-1.6-1.9-2.5-3.4
c-0.9-1.5-1.9-10.3-1.9-10.3s-1.5-1.9-1.9-2.2c-0.4-0.3-2.1-5.1-2.1-5.1s-4-0.3-5.1,0s-1.8,14-1.8,14.7
C334,163.1,336.8,177.4,336.5,179z M380.7,187.9c-0.1,0.5,7.2,2.3,7.2,2.3l0.8-3.9c0,0-2.3-0.5-3.5-1.4c-1.3-0.9-1.3-2.9-1.4-3.5
c-0.1-0.6-0.8-12.5-0.9-13.9s-1-9.1-1.3-9.8s-0.7-0.1-1.3,0c-0.6,0.1-1,3-1.1,3.5c-0.1,0.5-0.8,6.2-0.9,7.1c-0.1,0.9-1.5,2-1.6,2.3
s-0.5,5.5-0.5,5.5S380.8,187.4,380.7,187.9z M217.2,231l17.4-17.3c0,0,1,2.4,2.4,2.1s4-2.1,5.9-2.1s16.5-2.7,16.5-2.7s2,1.4,2.3,1.6
c0.3,0.2,2.1,0.7,2.1,0.7l1.4,1.2c0,0,2,1.1,2,1.4s0,7.3,0,7.3s-18.2,0.3-22.5,0.3C240.5,223.6,217.2,231,217.2,231z M291.4,228.1
c0,0,2.5-7.3,2-7.3c-0.5-0.1-4.5,3.8-5.2,4.3s-1.8,2.3-2,3c-0.3,0.8-3,2.5-3,2.5L291.4,228.1z M305.2,218.8
c-0.4,0.3,7.1,5.9,7.1,5.9l7.9,0.6l5.2-7.7c0,0,0.3-3.6,0-4.2c-0.3-0.6,0-0.6-1.8-1.4c-0.4-0.2-1.3-1.2-1.3-1.2s-1.1-0.1-1.5,0
c-0.4,0.1-1.4,1.3-1.5,1.6c-0.1,0.3-1,2.3-1.4,2.8c-0.4,0.5-1.8-0.9-1.8-1.1s-1-2.4-2-3c-1-0.6-5.3-0.2-5.3-0.2
S305.6,218.5,305.2,218.8z M336.5,224.8c-0.3,0.7,4.7,2.5,5.2,2.9c0.5,0.3,19.3,2.9,19.3,2.9s-0.4-0.8-0.9-0.7
c-0.4,0-2.8-0.6-2.8-0.6s-1.9-2.9-2.4-3.2c-0.5-0.3-2.3-1.4-2.6-1.7c-0.4-0.3-2.1-1-2.1-1s-0.6-2.4-0.8-2.8
c-0.1-0.5-1.6-0.8-2.5-1.5c-0.9-0.7-1.9-4.6-1.9-4.6s-1.5-0.9-1.9-1c-0.4-0.1-2.1-2.3-2.1-2.3s-4-0.1-5.1,0
c-1.1,0.1-1.8,6.3-1.8,6.6C334,217.7,336.8,224.1,336.5,224.8z M380.7,228.8c-0.1,0.2,7.2,1,7.2,1l0.8-1.8c0,0-2.3-0.2-3.5-0.6
c-1.3-0.4-1.3-1.3-1.4-1.6c-0.1-0.3-0.8-5.6-0.9-6.2s-1-4.1-1.3-4.4s-0.7-0.1-1.3,0s-1,1.4-1.1,1.6s-0.8,2.8-0.9,3.2
c-0.1,0.4-1.5,0.9-1.6,1.1s-0.5,2.5-0.5,2.5S380.8,228.6,380.7,228.8z"/>
<path class="st2" d="M457.2,256.3h-2.9v-3.7h2.9V256.3z M467.3,216.9h-7.5v3.7h7.5V216.9z M467.3,225.8h-7.5v3.7h7.5V225.8z
M466.5,243.7h-3v3.7h3V243.7z M462.8,261.6h-2.2v3.7h2.2V261.6z M465.8,271.1h-0.9v3.7h0.9V271.1z M478.6,252.4H471v3.7h7.5V252.4z
M505.6,243.4h-22.1v3.7h22.1V243.4z M509.9,225.8h-1.4v3.7h1.4V225.8z"/>
<path class="st3" d="M388.9,193.3v-4.5c0,0-3.6-0.4-5.3-0.4s-1.5-7.6-2.1-10.6c-0.6-3-1.3-5.9-2.1-6.2s-3.8,3.2-4.2,4.4
c-0.4,1.1-1.1,12.1-1.5,14c-0.4,1.9-4.9,0-7.2,0s-6.2,0.9-8.3,0.8c-2.1-0.2-5.9-6.1-7.4-8.1s-3.4-8.5-3.4-10.2s-3-7.9-4-10
s-2.1-7.8-2.3-9.1s-2.3-2.5-4.2-2.3c-1.9,0.2-2.1,5.3-2.5,7c-0.4,1.7-1.9,5.9-2.5,7.4c-0.6,1.5-1.5,9.8-1.5,12.3s-0.6,13.2-1.5,13.8
c-0.9,0.6-1.5-9.3-2.1-11s0-16.8,0-18.4c0-1.5-1.9-1.7-2.8-2.5c-0.9-0.8-2.3-5.5-2.6-6.4c-0.4-0.9-1.7,3.8-1.7,8.3
s-1.3,14.8-1.9,15.1s-2.3-12.3-2.3-14s-3.2-6.1-3.2-6.1l-1.5-8.1l-4.7-0.2c0,0-1.7,1.3-2.3,1.5c-0.6,0.2-2.5-1.1-2.5-1.1
s-4-0.6-5.1-0.2c-1.1,0.4-1.9,3.2-2.3,4.4s-3.2,7.8-3.4,9.7c-0.2,1.9-1.1,22-2.3,24.8c-1.1,2.8-7,4.2-7,4.2s-2.8-1.7-3.4-1.9
c-0.6-0.2-4.2-1.3-4.9-1.1c-0.8,0.2-3.4,2.3-3.4,2.3s-1.9-15.5-1.9-18.7s-6.1-5.9-6.8-6.4c-0.8-0.6-0.9-15.9-1.7-17.4
c-0.8-1.5-15.1,0-15.1,0l-1.3,1.3l-2.3,1.1l-3.2,12.7c0,0-1.7-3.4-1.9-4.4c-0.2-0.9-2.1-10.8-2.1-10.8h-2.5l-3,2.1V148H218l-1.7,6.6
l-1.5,1.3c0,0-1.1,3.2-1.1,4s-2.1,25.2-2.1,25.2h-1.7l-3,3c0,0-3.4,1.7-4,1.9c-0.6,0.2-2.6,3.2-2.6,3.2H388.9z M200.2,231.5
c0,0,2.1-1.1,2.6-1.1c0.6-0.1,4-0.7,4-0.7l3-1.1h1.7c0,0,2.1-8.5,2.1-8.7c0-0.3,1.1-1.4,1.1-1.4l1.5-0.5l1.7-2.3h9.8v0.7l3-0.7h2.5
c0,0,1.9,3.4,2.1,3.7c0.2,0.3,1.9,1.5,1.9,1.5l3.2-4.4l2.3-0.4l1.3-0.5c0,0,14.4-0.5,15.1,0c0.8,0.5,0.9,5.8,1.7,6
c0.8,0.2,6.8,1.1,6.8,2.2s1.9,6.5,1.9,6.5s2.6-0.7,3.4-0.8c0.8-0.1,4.4,0.3,4.9,0.4c0.6,0.1,3.4,0.7,3.4,0.7s5.9-0.5,7-1.4
c1.1-1,2.1-7.9,2.3-8.6s3-3,3.4-3.4c0.4-0.4,1.1-1.4,2.3-1.5c1.1-0.1,5.1,0.1,5.1,0.1s1.9,0.5,2.5,0.4c0.6-0.1,2.3-0.5,2.3-0.5
l4.7,0.1l1.5,2.8c0,0,3.2,1.5,3.2,2.1s1.7,5,2.3,4.9c0.6-0.1,1.9-3.7,1.9-5.3c0-1.6,1.3-3.2,1.7-2.9c0.4,0.3,1.7,2,2.6,2.2
c0.9,0.3,2.8,0.3,2.8,0.9s-0.6,5.8,0,6.4s1.1,4,2.1,3.8c0.9-0.2,1.5-3.9,1.5-4.8s0.9-3.7,1.5-4.3c0.6-0.5,2.1-2,2.5-2.6
c0.4-0.6,0.6-2.4,2.5-2.4s4,0.3,4.2,0.8c0.2,0.5,1.3,2.4,2.3,3.2s4,2.9,4,3.5s1.9,2.8,3.4,3.5s5.3,2.8,7.4,2.8
c2.1,0.1,6.1-0.3,8.3-0.3s6.8,0.7,7.2,0c0.4-0.7,1.1-4.5,1.5-4.9c0.4-0.4,3.4-1.6,4.2-1.5s1.5,1.1,2.1,2.2c0.6,1.1,0.4,3.7,2.1,3.7
s5.3,0.1,5.3,0.1v1.6H200.2z M457.5,220.8h-3.6v-3.7h3.6V220.8z M457.5,226.1h-3.6v3.7h3.6V226.1z M457.5,261.9h-2.1v3.7h2.1V261.9z
M467.6,235h-7.5v3.7h7.5V235z M467.2,252.9h-3v3.7h3V252.9z M466.8,261.9h-2.2v3.7h2.2V261.9z M463.5,244h-3v3.7h3V244z
M462.5,271.4h-0.9v3.7h0.9V271.4z M479.3,217.2h-7.5v3.7h7.5V217.2z M479.3,235h-7.5v3.7h7.5V235z M479.3,243.7h-7.5v3.7h7.5V243.7
z M479.3,261.6h-7.5v3.7h7.5V261.6z M506.3,226.1h-22.1v3.7h22.1V226.1z M510.6,217.2h-1.4v3.7h1.4V217.2z M510.6,252.7h-1.4v3.7
h1.4V252.7z M510.6,269.5h-0.5v3.7h0.5V269.5z"/>
<path id="path4823_5_"  class="st4" d="M492.5,289.6c-0.4-0.2-0.9,0-1.1,0.4l-1.2,2.2
c-1.2-0.3-1.9-0.4-3.2-0.2l-1-2.3c-0.2-0.4-0.6-0.7-1.1-0.5l-2.5,0.9c-0.4,0.2-0.7,0.6-0.5,1.1l0.7,2.5c-1.1,0.7-1.6,1.2-2.4,2.1
l-2.3-1c-0.4-0.2-0.9,0-1.1,0.4l-1.1,2.4c-0.2,0.4,0,0.9,0.4,1.1l2.2,1.2c-0.3,1.2-0.4,1.9-0.2,3.2l-2.3,1c-0.4,0.2-0.7,0.6-0.5,1.1
l0.9,2.5c0.2,0.4,0.6,0.6,1.1,0.5l2.5-0.7c0.7,1.1,1.2,1.6,2.1,2.4l-1,2.3c-0.2,0.4,0,0.9,0.4,1.1l2.4,1.1c0.4,0.2,0.9,0,1.1-0.4
l1.2-2.2c1.2,0.3,1.9,0.4,3.2,0.2l1,2.3c0.2,0.4,0.6,0.7,1.1,0.5l2.5-0.9c0.4-0.2,0.7-0.6,0.5-1.1l-0.7-2.5c1.1-0.7,1.6-1.2,2.4-2.1
l2.3,1c0.4,0.2,0.9,0,1.1-0.4l1.1-2.4c0.2-0.4,0-0.9-0.4-1.1l-2.2-1.2c0.3-1.2,0.4-1.9,0.2-3.2l2.3-1c0.4-0.2,0.7-0.6,0.5-1.1
l-0.9-2.5c-0.2-0.4-0.6-0.7-1.1-0.5l-2.5,0.7c-0.7-1.1-1.2-1.6-2.1-2.4l1-2.3c0.2-0.4,0-0.9-0.4-1.1L492.5,289.6z M490.9,296
c3.3,1.6,4.8,5.6,3.2,9c-1.6,3.3-5.6,4.8-9,3.2c-3.3-1.6-4.8-5.6-3.2-9c0,0,0,0,0,0C483.5,295.8,487.5,294.4,490.9,296z"/>
<path id="path4823_4_"  class="st5" d="M504.2,312.9c-0.3-0.2-0.7,0-0.9,0.3l-0.9,1.7
c-0.9-0.2-1.5-0.3-2.4-0.2l-0.8-1.8c-0.1-0.3-0.5-0.5-0.8-0.4l-1.9,0.7c-0.3,0.1-0.5,0.5-0.4,0.8l0.5,1.9c-0.8,0.5-1.2,0.9-1.8,1.6
l-1.8-0.7c-0.3-0.1-0.7,0-0.9,0.3l-0.9,1.8c-0.2,0.3,0,0.7,0.3,0.9l1.7,0.9c-0.2,0.9-0.3,1.5-0.2,2.4l-1.8,0.8
c-0.3,0.1-0.5,0.5-0.4,0.8l0.7,1.9c0.1,0.3,0.5,0.5,0.8,0.4l1.9-0.5c0.5,0.8,0.9,1.2,1.6,1.8l-0.7,1.8c-0.1,0.3,0,0.7,0.3,0.9
l1.8,0.9c0.3,0.2,0.7,0,0.9-0.3l0.9-1.7c0.9,0.2,1.5,0.3,2.4,0.2l0.8,1.8c0.1,0.3,0.5,0.5,0.8,0.4l1.9-0.7c0.3-0.1,0.5-0.5,0.4-0.8
l-0.5-1.9c0.8-0.5,1.2-0.9,1.8-1.6l1.8,0.7c0.3,0.1,0.7,0,0.9-0.3l0.9-1.8c0.2-0.3,0-0.7-0.3-0.9l-1.7-0.9c0.2-0.9,0.3-1.5,0.2-2.4
l1.8-0.8c0.3-0.1,0.5-0.5,0.4-0.8l-0.7-1.9c-0.1-0.3-0.5-0.5-0.8-0.4l-1.9,0.5c-0.5-0.8-0.9-1.2-1.6-1.8l0.7-1.8
c0.1-0.3,0-0.7-0.3-0.9L504.2,312.9z M503,317.7c2.5,1.2,3.6,4.2,2.4,6.8c-1.2,2.5-4.2,3.6-6.8,2.4s-3.6-4.2-2.4-6.8c0,0,0,0,0,0
C497.5,317.5,500.5,316.5,503,317.7z"/>
<path class="st6" d="M397.5,112.1c-0.1,0-0.1-0.1-0.1-0.1h-206c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0.1-0.2,0.2-0.3,0.3
c-0.7,0.4-1,1.1-1.4,1.8V125h210.2v-11.1C399,113.2,398.4,112.5,397.5,112.1z"/>
<path class="st1" d="M399.7,188.2v-73.3c0-1.6-1.3-2.9-2.9-2.9H192.4c-1.6,0-2.9,1.3-2.9,2.9v135.6h210.2V188.2z"/>
<circle class="st7" cx="374.1" cy="118.5" r="1.8"/>
<circle class="st7" cx="382.9" cy="118.5" r="1.8"/>
<circle class="st7" cx="391.7" cy="118.5" r="1.8"/>
<path class="st7" d="M232,231.5c0,0,1.9-1.8,2.3-3.2s2.4-7.8,3.4-7.3s3.2,9.3,4.4,9.5c1.3,0.2,6.3,1,6.3,1H232z M269.5,231.5
c0,0-2.3-4-3.9-5.2s-1.4-4.2-2-5.2c-0.6-1-1.8,3-2.3,5.2c-0.5,2.2-2.1,5.2-2.1,5.2H269.5z M293.4,231.5c0,0-2-4.8-2.4-5.3
c-0.4-0.5-1.6,1.7-2.6,2c-1,0.3-2.8,3.3-2.8,3.3H293.4z M361,231.5c0,0-3.9-2.3-5.2-2.7c-1.3-0.4-3.2-0.8-4.5,0s-6.7-2.5-6.7-2.5
l-3.2,2.5c0,0-5.7-0.1-7.8,0c-2.1,0.1-3.8,1-4.8,1.5c-1,0.5-3-0.7-4.9-1.5s-3.3-1.9-4.7-2.7s-3-2.7-3.7-3.2s-2.9,3.8-3.3,5.1
c-0.4,1.3-1.6,3.5-1.6,3.5H361z M388.6,231.5v-2.7h-12l-2.3,2.7H388.6z M457.5,238.7h-3.6V235h3.6V238.7z M457.5,244h-2.9v3.7h2.9
V244z M463.5,252.9h-3v3.7h3V252.9z M479.3,226.1h-7.5v3.7h7.5V226.1z M506.3,217.2h-22.1v3.7h22.1V217.2z M506.3,235h-22.1v3.7
h22.1V235z M506.3,252.7h-22.1v3.7h22.1V252.7z M506.3,261.6h-22.1v3.7h22.1V261.6z M510.6,235h-1.4v3.7h1.4V235z M510.6,243.7h-1.4
v3.7h1.4V243.7z M510.6,261.6h-1.4v3.7h1.4V261.6z M232,193.3c0,0,1.9-1.4,2.3-2.4s2.4-5.9,3.4-5.6s3.2,7.1,4.4,7.2
c1.3,0.1,6.3,0.8,6.3,0.8H232z M269.5,193.3c0,0-2.3-3-3.9-4c-1.6-1-1.4-3.2-2-4s-1.8,2.3-2.3,4c-0.5,1.7-2.1,4-2.1,4H269.5z
M293.4,193.3c0,0-2-3.7-2.4-4c-0.4-0.4-1.6,1.3-2.6,1.5c-1,0.3-2.8,2.5-2.8,2.5H293.4z M361,193.3c0,0-3.9-1.8-5.2-2.1
c-1.3-0.3-3.2-0.6-4.5,0s-6.7-1.9-6.7-1.9l-3.2,1.9c0,0-5.7-0.1-7.8,0c-2.1,0.1-3.8,0.8-4.8,1.2c-1,0.4-3-0.5-4.9-1.2
s-3.3-1.5-4.7-2.1c-1.4-0.6-3-2.1-3.7-2.5s-2.9,2.9-3.3,3.9c-0.4,1-1.6,2.6-1.6,2.6H361z M388.6,193.3v-2.1h-12l-2.3,2.1H388.6z"/>
<ellipse class="st3" cx="295.1" cy="406.1" rx="233.9" ry="19.9"/>
<path class="st0" d="M460,373.6c0,0,10.6-32,5.1-36.8c-3.7-3.3-1.7,3.1-4.5,2c-3.1-1.2,2.8-37.5-4-37.5c-4.9,0-3.1,18.5-4.7,17
c-1.7-1.6-0.4-10.9-3.5-7.3c-3.4,4,0.4,24.7-1.7,24.8c-1.7,0.1-3-19.8-5.6-14.4s-1.5,44.5,3.5,49.6S460,373.6,460,373.6z"/>
<path class="st7" d="M437.8,357.2h28.9c0,0,4.8,17.6,4.6,26.2c-0.2,8.7-3.2,16-16.6,16.5c-23.4,0.8-23.4-8.6-23.4-16
C431.2,372,437.8,357.2,437.8,357.2z"/>
<path class="st7" d="M118.2,379.3h27c0,0,8,4,8.1,13.5c0,7.5-14.9,8.6-19.6,8.6c-10.3,0-24.8-0.6-24.7-8.5
C108.9,381.7,118.2,379.3,118.2,379.3z"/>
<path class="st8" d="M64.7,374.7h56.6c0,0,0,29.6-28.3,29.6S64.7,374.7,64.7,374.7z"/>
<path class="st8" d="M98.1,384.2c12.6-6.6,32.8-33.6,24.5-37.7c-8.3-4-14,5-15.5-0.2s13.8-14.9,7.3-20.8c-5.6-5.1-8.9,3-10.5,1.7
c-4.8-4.2,11-30-2.2-35s-21.9,3.2-21.4,14.5c0.4,7.6,2.9,19.3-0.8,19c-2.4-0.2-3.7-10.5-9.8-10.4c-7.9,0.2-13.3,14-1.8,22.4
c9,6.7,13.1,18.4,9.2,15.7c-4.1-2.9-9.4-4.3-12.1-0.5c-2.7,3.7,4.4,16.2,12.4,25.4S93.3,386.7,98.1,384.2z"/>
<path class="st9" d="M102.6,367.9c1.4-1.8,5.6-9.8,5.6-9.8s-6.9,6.1-8.9,7.8c-1.4,1.2-4,6.2-5.4,8.9c0-4.8-0.2-12.9-0.1-19.5
c1.5-2.6,4.2-6.9,4.9-7.9c1.1-1.6,4.5-12.7,4.5-12.7s-6.6,10.6-7.3,12.1c-0.3,0.7-1.6,4.6-2.2,6.8c0.1-3.9,0.4-33.3,0.4-33.3
s1.6-4.4,1.7-6.6c0-1.8-0.8-12.2-0.8-12.2s-1.7,8.7-2.2,11.7c-0.8,4.8,0.7,6.9,0.7,6.9c-0.3,8.3-0.7,24.2-0.6,28.4
c0,1.4,0.1,3.4,0.1,5.6c0,0-2.6-9-4.7-10.9c-2.2-1.9-12.3-13.8-12.3-13.8l6.6,11.2l10.5,13.5c0.1,6.9,0.3,16.5,0.3,21.3
c-2.5-3.4-6.2-8.3-8.1-10c-3-2.8-8.7-7-8.7-7s6.6,6.3,7.4,7.8c0.5,1,6.1,6.8,9.5,10.2c0,1.2,0,2,0,2l1,0.2c0,0,0-0.5,0-1.2
c0.9,0.9,1.4,1.4,1.4,1.4s-0.6-0.8-1.4-2c0-0.4,0-0.9,0-1.4L102.6,367.9z"/>
<path class="st8" d="M508.8,364.5c-2.4-6.3-7.8,7.4-10.2,7.3c-2.4,0-0.4-2.8,1.6-5.5c2-2.8,3.8-8.6,1.4-12.2
c-4.2-6.5-3.8,4.1-6.9,6.3c-1.8,1.3-3.4,4.6-3.5,0.4c-0.1-4.1,7.2-7.5,4.8-13.6c-2.5-6.1-4-8-5.5-6.4c-1.4,1.6,0,11.8-4.1,10.1
c-2.4-0.9,2.2-14.2-0.3-13.4c-2.5,0.8-6.2,5.2-6.9,9.7c-0.6,4.5,1.7,8.6-0.7,8.6c-2.4,0-1.9-6.5-1.7-8.7c0.3-2.2,2.6-6.2-0.4-4.4
c-3,1.8-5.3,3.6-4.3,11.3c1,7.7,4.9,7.8,5.4,11.5c0.3,2.2-2.1,1.7-4.9-1.9c-1.7-2.2-1.4-3.3-3.1-5.2c-1.2-1.3-8.5-2-3.5,18.3
c4.2,16.9,21.2,28,21.2,28c3.7-0.1,13.8-15.9,13.8-15.9C501.5,388.3,511.2,370.8,508.8,364.5z M474.1,354.1
c-0.4-0.3-1.5-5.8-0.1-4.9C475.4,350.1,476.3,356.1,474.1,354.1z M476,376.3c-5,3.7-7.8-13.1-2.3-7.6C473.7,368.6,479,374,476,376.3
z M483.1,346.5c2.1,4.8,1.5,13,0.3,10c-1.2-3-1.1-5.2-1.1-5.2S481,341.7,483.1,346.5z M484,370.5c-2.2-4.7-0.6-10.3,0.5-7.6
C485.2,364.7,486.1,375.2,484,370.5z M492.5,348c1.1,2.9-1.6,10.5-3.1,6.6C489.5,354.7,491.5,345.2,492.5,348z M488.5,378.3
c0.1-2.4,4.7-11.4,5.5-7.6C494.8,374.5,488.4,381.2,488.5,378.3z M496,362.4c0,0,3.9-8.7,3.8-3.6C499.5,363.9,495.4,367.5,496,362.4
z M503.8,375.8c-0.7,1.2-1.3,3-4,3.5c-2.8,0.5,3.5-9,6.2-10.6C508.6,367,504,375.5,503.8,375.8z"/>
<polygon class="st5" points="191.6,352.8 225.2,352.8 316.6,202 285,202 "/>
<polygon class="st4" points="361.2,285.6 327.6,285.6 285,202 316.6,202 "/>
<polygon class="st5" points="438.3,171.8 423.7,129.4 373.6,171.8 390.5,171.8 327.7,285.6 361.3,285.6 422.7,171.8 "/>
<path class="st10" d="M276.6,403.5h-31.9v-79.5h31.9V403.5z M220.9,345.2H189v58.4h31.9V345.2z M329.8,298.3h-31.9v105.2h31.9V298.3
z M383,264.4H351v139.2H383V264.4z M436.1,231.5h-31.9v172h31.9V231.5z M168.4,370h-31.9v33.5h31.9V370z"/>
<path class="st11" d="M165.5,171c-1.8-0.5-3.4-0.3-4.5,0c-0.2-0.9-0.6-1.9-1.6-2.8c-4.6-4-11.5-0.4-11.5-0.4s0.4-5.2-4.7-6.2
c-4.1-0.8-5.8,1.5-5.8,1.5s1.2-6.7-4.3-9.1c-5.6-2.5-10.1,1.9-10.1,1.9c1.1-9.5-10.7-19.6-21.2-12.5c-10.5,7.2-4.3,24-4.3,24
s-6.4-5.7-13-3c-3.7,1.5-4.8,4.5-5.2,6.8c-0.9-0.3-2-0.5-3.5-0.3c-4.9,0.6-9.9,3.5-9.9,3.5h13.4h1.4h72.1h8.1h10.7
C171.4,174.4,168.9,172,165.5,171z"/>
<path class="st11" d="M511,146.9c4.9-1.6,9.7,3.6,9.7,3.6H443c9.8-5.7,15.4-3.1,15.4-3.1s0.9-5.5,6.9-7.3c7.1-2,9.2,3.8,9.2,3.8
s1.9-10.7,12-11.8c10.1-1.1,12.3,9.5,12.4,9.2c0.1-0.4,3.1-3,6.8-2.6C513.2,139.5,511,146.9,511,146.9z"/>
<path class="st11" d="M467,192.5h-45.3c0,0,7.3-7,15-7.5s9.6,3.8,9.6,3.8s1.5-7.9,11.2-7.9s9.6,9.1,9.6,9.1s6.2-0.8,8.4,2.6H467z"/>
<path id="path4817"  class="st4" d="M145.9,216.3c-0.6,0.1-1,0.7-1,1.4l0.4,3.5
c-1.6,0.7-2.5,1.2-3.8,2.4l-3.1-1.8c-0.5-0.4-1.3-0.2-1.6,0.3l-2.1,3c-0.4,0.5-0.2,1.3,0.3,1.6l2.8,2.2c-0.7,1.7-0.9,2.6-0.9,4.4
l-3.5,0.8c-0.6,0.2-1.1,0.7-1,1.4l0.7,3.6c0.1,0.6,0.7,1,1.4,1l3.5-0.4c0.7,1.6,1.2,2.5,2.4,3.8l-1.8,3.1c-0.4,0.5-0.2,1.3,0.3,1.6
l3,2.1c0.5,0.4,1.2,0.2,1.6-0.3l2.2-2.8c1.7,0.7,2.6,0.9,4.4,0.9l0.8,3.5c0.2,0.6,0.7,1.1,1.4,1l3.6-0.7c0.6-0.1,1-0.7,1-1.4
l-0.4-3.5c1.6-0.7,2.5-1.2,3.8-2.4l3.1,1.8c0.5,0.4,1.3,0.2,1.6-0.3l2.1-3c0.4-0.5,0.2-1.3-0.3-1.6l-2.8-2.2
c0.7-1.7,0.9-2.6,0.9-4.4l3.5-0.8c0.6-0.2,1.1-0.7,1-1.4l-0.7-3.6c-0.1-0.6-0.7-1-1.4-1l-3.5,0.4c-0.7-1.6-1.2-2.5-2.4-3.8l1.8-3.1
c0.4-0.5,0.2-1.3-0.3-1.6l-3-2.1c-0.5-0.4-1.3-0.2-1.6,0.3l-2.2,2.8c-1.7-0.7-2.6-0.9-4.4-0.9l-0.8-3.5c-0.2-0.6-0.7-1.1-1.4-1
L145.9,216.3z M149.4,224.8c5.1-0.9,10,2.5,10.9,7.6c0.9,5.1-2.5,10-7.6,10.9c-5.1,0.9-10-2.5-10.9-7.6c0,0,0,0,0,0
C140.9,230.6,144.2,225.8,149.4,224.8z"/>
<path id="rect4764"  class="st4" d="M130.5,245.2c-0.8-0.1-1.4,0.5-1.6,1.2l-0.7,4.2
c-2.1,0.2-3.2,0.5-5.1,1.4l-2.8-3.1c-0.5-0.6-1.4-0.7-2-0.2l-3.4,2.7c-0.6,0.5-0.7,1.4-0.2,2l2.4,3.5c-1.3,1.6-1.9,2.7-2.6,4.6
l-4.2-0.3c-0.8-0.1-1.5,0.5-1.6,1.2l-0.5,4.3c-0.1,0.8,0.5,1.4,1.2,1.6l4.2,0.7c0.2,2.1,0.5,3.2,1.4,5.1l-3.1,2.8
c-0.6,0.5-0.7,1.4-0.2,2l2.7,3.4c0.5,0.6,1.3,0.7,2,0.2l3.5-2.4c1.6,1.3,2.7,1.9,4.6,2.6l-0.3,4.2c-0.1,0.8,0.5,1.5,1.2,1.6l4.3,0.5
c0.8,0.1,1.4-0.5,1.6-1.2l0.7-4.2c2.1-0.2,3.2-0.5,5.1-1.4l2.8,3.1c0.5,0.6,1.4,0.7,2,0.2l3.4-2.7c0.6-0.5,0.7-1.4,0.2-2l-2.4-3.5
c1.3-1.6,1.9-2.7,2.6-4.6l4.2,0.3c0.8,0.1,1.5-0.5,1.6-1.2l0.5-4.3c0.1-0.8-0.5-1.4-1.2-1.6l-4.2-0.7c-0.2-2.1-0.5-3.2-1.4-5.1
l3.1-2.8c0.6-0.5,0.7-1.4,0.2-2l-2.7-3.4c-0.5-0.6-1.4-0.7-2-0.2l-3.5,2.4c-1.6-1.3-2.7-1.9-4.6-2.6l0.3-4.2
c0.1-0.8-0.5-1.5-1.2-1.6L130.5,245.2z M131.4,256c6.1,0.7,10.5,6.3,9.8,12.4c-0.7,6.1-6.3,10.5-12.4,9.8
c-6.1-0.7-10.5-6.3-9.8-12.4c0,0,0,0,0,0C119.8,259.7,125.3,255.3,131.4,256z"/>
<path id="path4823"  class="st5" d="M124.7,208.3c-0.5-0.2-1.1,0-1.4,0.5l-1.5,2.7
c-1.5-0.4-2.3-0.4-3.9-0.3l-1.2-2.8c-0.2-0.5-0.8-0.8-1.3-0.6l-3,1.1c-0.5,0.2-0.8,0.8-0.6,1.3l0.8,3c-1.3,0.8-2,1.4-2.9,2.6
l-2.9-1.2c-0.5-0.2-1.1,0-1.4,0.5L104,218c-0.2,0.5,0,1.1,0.5,1.4l2.7,1.5c-0.4,1.5-0.4,2.3-0.3,3.9l-2.8,1.2
c-0.5,0.2-0.8,0.8-0.6,1.3l1.1,3c0.2,0.5,0.8,0.8,1.3,0.6l3-0.8c0.8,1.3,1.4,2,2.6,2.9l-1.2,2.9c-0.2,0.5,0,1.1,0.5,1.4l2.9,1.4
c0.5,0.2,1.1,0,1.4-0.5l1.5-2.7c1.5,0.4,2.3,0.4,3.9,0.3l1.2,2.8c0.2,0.5,0.8,0.8,1.3,0.6l3-1.1c0.5-0.2,0.8-0.8,0.6-1.3l-0.8-3
c1.3-0.8,2-1.4,2.9-2.6l2.9,1.2c0.5,0.2,1.1,0,1.4-0.5l1.4-2.9c0.2-0.5,0-1.1-0.5-1.4l-2.7-1.5c0.4-1.5,0.4-2.3,0.3-3.9l2.8-1.2
c0.5-0.2,0.8-0.8,0.6-1.3l-1.1-3c-0.2-0.5-0.8-0.8-1.3-0.6l-3,0.8c-0.8-1.3-1.4-2-2.6-2.9l1.2-2.9c0.2-0.5,0-1.1-0.5-1.4
L124.7,208.3z M122.7,216.1c4.1,2,5.8,6.9,3.8,10.9c-2,4.1-6.9,5.8-10.9,3.8c-4.1-2-5.8-6.9-3.8-10.9c0,0,0,0,0,0
C113.8,215.8,118.6,214.1,122.7,216.1z"/>
<path class="st12" d="M467.7,382.9h37.2c0,0,11.1,5.3,11.2,18c0,10-20.6,11.4-27.1,11.4c-14.2,0-34.2-0.8-34.2-11.4
C454.9,386.1,467.7,382.9,467.7,382.9z"/>
<path class="st13" d="M286.9,165.8c0,0-0.2-0.7-1-1.2c-0.8-0.4-1.4-0.1-1.4-0.1s-0.1-0.7-1.3-1c-1.2-0.3-1.5,0.3-1.5,0.3
s-0.6-0.6-1.7-0.1c-0.7,0.3-1.9,4.4-1.9,4.4s-0.8,0.6-1,2.4c-0.2,1.8,0.4,3,0.4,3s0,0.2-0.1,0.4v0l0,0c-1-0.4-1.6-0.5-1.6-0.5
s0,0,0,0c-0.4,0.8-6.4,13.6-11.6,19.7c0,0-5.4-4.8-7.5-9.1c-3.6-7.3-3.7-10.8-10.1-14.5c-0.5-0.3-0.8-0.4-0.8-0.4
c-0.3-0.2-0.6-0.3-0.9-0.5l2.6-5.7c0,0,3,1.5,4.7,0.5c5-2.9,4.3-18,4.3-18s4.8-4,2.9-7.6c-1.9-3.6-7.2-0.6-11,0.3
c-3.8,0.9-9.4-1.2-12.4,1.8c-3,3-0.7,7.1-0.6,7.5c0.1,0.4-0.7,6.2-0.1,8.8c0.7,2.9,3.3,3.5,3.3,3.5s-3,5.9-5.6,6.4
c-3.6,1-10.4,3.4-16.8,5.9c-6.4,2.5-15.6,5.2-17.2,6.9c-4.1,4.1-5.2,23.5-6.9,31.7c0,0,0.3,0.1,0.8,0.2c0,0.1-0.1,0.1-0.1,0.2
c-0.6,0.8-1.2,1.4-1.6,1.9c-1,1.3-2.4,4.4-2.6,6.5c-0.3,2.9,1.3,2.5,1.3,2.5s0.3,0.7,1.2,1c0.9,0.3,1.5-0.4,1.5-0.4s0.3,0.6,1.5,0.7
c1.2,0.1,1.4-0.5,1.4-0.5s0.7,0.5,1.7-0.2c0.6-0.5,1.1-4.4,1.1-4.6c0,0,0.7-0.7,0.6-2.5c-0.1-1.8-1-2.8-1-2.8s0-0.4,0.1-0.8
c0.5,0,0.8,0,1-0.1c0,0,5.3-23.2,6.6-24c0.8-0.5,11.6-2.5,17.4-4.1c-0.1,9.4-3.3,18.9-5.3,22.9c-0.1,0.1-0.1,0.3-0.1,0.5l0.5,0.4
c-1.3,2.3-5.1,7.8-5.7,14.2c-4.3,9.9-11,27.2-14.4,44.4c0,0-7.3,9.9-9.9,22.4c-2.5,12.5,0.1,38.3,0.1,38.3h1.7v0.1
c0,0-0.1,0.1-0.2,0.3c0,0,0,0-0.1,0.1c-0.7,1.2-2.8,4.4-2.9,5c-0.6,2.5,6.9,13.3,6.9,13.3h12.8c0-3.9-7.1-5.3-7.1-5.3l-1.6-7.7
l-1.2-5.8h0.6c0,0-0.7-12.9,4.8-34.4c1-4,6.3-14.3,8.4-18.7c5.3-11.7,13.5-27.2,17.9-34.8c6.7,4.3,20.5,13.5,26.7,18.7
c0,0-5.8,7.3-6,24.1c-0.3,20.6-0.1,33.1-0.1,33.1l0.7,0c0,0.4,0,0.8,0,1.4c-0.1,3-0.2,8.2,0,8.2c0.3,0,22.8,0,22.8,0
s0.8-3.3-8.2-5.5c-6-1.6-8.2-2.4-8.2-2.4l-0.1-1.3v-0.1l1,0c0,0,0.3-15.4,5.9-34.4c4.8-16.3,8.4-24.1,8.1-27
c-0.3-2.9-29.1-28.9-31.7-36.5l0.1-1.5l-0.9-2.6c0.1-0.3,0.5-0.5,1.1-1.7c0.8-1.4-0.2-4.6,0.9-6c2.1-2.6,8.2-6,9.8-8.4c0,0,0,0,0,0
c0.1-0.2,0.3-0.4,0.3-0.6c0,0,9.4,10.7,13.7,10.2c4.3-0.5,13.3-17.8,18.3-29.5c-0.2-0.2-0.5-0.4-0.7-0.5c1-1.5,1.8-1.6,2.5-2.1
c1.2-1.1,2.8-3.4,3.4-5.4C288.4,166,286.9,165.8,286.9,165.8z"/>
<path class="st14" d="M256.5,145.4c0,0-2.1,0.3-4-0.5c-1.9-0.7-2.6,0.5-4.7,2.1c-2.1,1.6-1.8,1.9-2.6,3c-0.7,1.2-1.1,2.4-1.1,2.4
s-0.3-3.2-1.7-2.9c-1.4,0.3-2.3,2.4-1.8,3.8c0.5,1.4,2.3,1.1,2.3,1.1s-1.4,5.9-4.3,5.2c0,0-2.6-0.6-3.3-3.5
c-0.6-2.6,0.1-8.4,0.1-8.8c-0.1-0.4-2.3-4.4,0.6-7.5c3-3,8.6-0.9,12.4-1.8c3.8-0.9,9.1-3.9,11-0.3
C261.3,141.4,256.5,145.4,256.5,145.4z"/>
<path class="st15" d="M262.5,280.3c-5.5,19-5.9,34.4-5.9,34.4l-1,0v0.1l-6.4-0.3l-0.7,0c0,0-0.3-12.5,0.1-33.1
c0.3-16.9,6-24.1,6-24.1c-11.9-8.1-20-14-26.7-18.3c-4.4,7.5-12.6,22.6-17.9,34.3c-2,4.5-7.3,14.8-8.4,18.7
c-5.5,21.5-4.8,34.4-4.8,34.4h-8.9c0,0-2.6-25.9-0.1-38.3c2.6-12.5,9.9-22.4,9.9-22.4c3.4-17.2,10.1-34.4,14.4-44.4
c0.6-6.4,3.3-11.4,5.7-14.2l1.2-0.8l0.5-0.1c0.1-0.1,0.1-0.7,0.2-0.8c1.2-1.2-0.2-1.2,0.2-1.4c1.2-0.4,14.9,6.5,19.3,9
c-0.6,1.2-0.2,1.5-0.3,1.8l0,0.6l-0.3,1.3c2.9,3.4,31.4,33.5,31.7,36.5C270.9,256.3,267.3,264.1,262.5,280.3z"/>
<path class="st16" d="M282.4,176.8c-5,11.7-14,29-18.3,29.5c-4.3,0.5-13.7-10.2-13.7-10.2c-0.1,0.5-2.5,5.5-6.1,11
c-1,1.5-2.8,5.1-3.7,6.6c-0.6,1.2-1.6,3.9-1.7,4.2c0,0-12.3-5-16.9-7.4c-3.8-2-5.2-2.7-5.1-2.8c1.9-4.4,4.3-14.7,5.9-24.3
c-5.8,1.6-16.6,3.6-17.4,4.1c-1.3,0.8-6.6,24-6.6,24s-3.5,0-6.2-0.5c0.1,0,0.1-0.1,0.1-0.2c-0.5-0.1-0.8-0.2-0.8-0.2
c1.7-8.2,2.8-27.6,6.9-31.7c3.3-3.3,27-10.7,34.1-12.8c0,0,2.6-0.9,4.4,0.7c1.2,1.1,3.9,5.4,5.5,5c0.9-0.2,1.9-3.3,1.9-3.3
c8.2,4.1,8,7.6,11.8,15.4c2.1,4.3,7.5,9.1,7.5,9.1c5.2-6.1,11.3-18.9,11.6-19.7c0,0,0,0,0,0s0.6,0.1,1.6,0.5h0v0
c1.1,0.4,2.6,1.2,4.3,2.4C282,176.4,282.2,176.6,282.4,176.8z"/>
<path class="st14" d="M206.2,345.2h-13c0,0-7.3-10.8-6.7-13.3c0.2-0.6,2.2-3.9,2.9-5c0.1,0,0.3-0.4,0.3-0.4s1.6,2.6,5.2,3.9
c1.6,0.6,1.8-1.6,1.8-2.2l2.4,11.8C199.1,339.9,206.2,341.3,206.2,345.2z"/>
<path class="st14" d="M272.1,324c0,0-22.5,0-22.8,0c-0.2,0-0.1-5.2,0-8.2c0.5,0.3,4.3,2.9,5.9,2.7c1.6-0.3,0.6-2.5,0.6-2.5
s2.1,0.9,8.2,2.4C272.9,320.8,272.1,324,272.1,324z"/>
<path class="st17" d="M272.1,324c0,0-22.5,0-22.8,0c-0.2,0-0.1-5.2,0-8.2c0-0.6,0-1,0-1.4l-0.7,0c0,0-0.3-12.5,0.1-33.1
c0.3-16.9,6-24.1,6-24.1c-9.5-6.3-20-14-26.7-18.3c1.5-2.6,8.6-17.4,10.5-21.2l0.5,0.2l0.3-0.7c6.4,7.2,31.1,33.2,31.4,36.1
c0.3,3-3.3,10.8-8.1,27c-5.5,19-5.9,34.4-5.9,34.4l-1,0v0.1l0.1,1.3c0,0,2.1,0.9,8.2,2.4C272.9,320.8,272.1,324,272.1,324z"/>
<path class="st17" d="M287.6,168.8c-0.6,2-2.2,4.3-3.4,5.4c-0.6,0.6-1.5,0.6-2.5,2.1c0.2,0.2,0.5,0.3,0.7,0.5
c-5,11.7-14,29-18.3,29.5c-4.3,0.5-13.7-10.2-13.7-10.2c-0.1,0.2,3.7-8.9,2.2-15.1c-2-8.2-3.5-8.8-6.1-11.5
c6.5,3.7,6.6,7.2,10.1,14.5c2.1,4.3,7.5,9.1,7.5,9.1c5.2-6.1,11.3-18.9,11.6-19.7c0,0,0,0,0,0s0.6,0.1,1.6,0.5l0,0v0
c0.1-0.2,0.1-0.4,0.1-0.4s-0.6-1.2-0.4-3c0.2-1.7,1-2.4,1-2.4s1.2-4,1.9-4.4c1.1-0.5,1.7,0.1,1.7,0.1s0.3-0.6,1.5-0.3
c1.2,0.3,1.3,1,1.3,1s0.6-0.3,1.4,0.1c0.8,0.5,1,1.2,1,1.2S288.4,166,287.6,168.8z"/>
</svg>
`,
    name: 'consulting',
    theme: 'fill',
};
const custom_workshops_1 = {
    icon: `<svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#9B84C1;}
 .st1{fill:#A691CE;}
 .st2{fill:#A390D1;}
 .st3{fill:#50208F;}
 .st4{fill:#B39AE2;}
 .st5{fill:#AB93D8;}
 .st6{fill:#E01D85;}
 .st7{opacity:0.2;fill:#3D3D75;}
 .st8{fill:#EFD1C7;}
 .st9{fill:#99CFF8;}
 .st10{fill:#EFEFEF;}
 .st11{fill:#F5C85C;}
 .st12{fill:#363636;}
 .st13{fill:#F4F4F4;}
 .st14{fill:#EDBCDA;}
 .st15{fill:#FFFFFF;}
 .st16{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;}
 .st17{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0016,1.0016;}
 .st18{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0039,1.0039;}
 .st19{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.9948,0.9948;}
 .st20{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.994,0.994;}
 .st21{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0046,1.0046;}
 .st22{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0083,1.0083;}
 .st23{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0062,1.0062;}
 .st24{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0041,1.0041;}
</style>
<ellipse class="st0" cx="306.5" cy="419.7" rx="234.5" ry="26.6"/>
<path class="st1" d="M169.5,360.2c1.3-16.5,16-43.8,6.2-43.8c-3.8,0-6.1,16.3-6.5,11.3c-0.5-5,6.5-39.7-3.5-39.2
 c-4.4,0.2-0.4,20-3.6,19.4c-4.4-0.8-1.5-6.3-5.2-7.3c-10.5-2.7,1.8,35.9,0,36c-1.6,0.1-4.8-14.8-11.6-10.5c-6.4,4,8.2,15.2,8.4,32.3
 C153.7,363.7,169.3,361.8,169.5,360.2z"/>
<path class="st2" d="M150.6,349.6h23.7c0,0,8.7,25.5,8.4,37.9c-0.2,12.6-3.4,23.1-17.7,23.8c-25,1.2-25-12.5-25-23.2
 C139.9,370.9,150.6,349.6,150.6,349.6z"/>
<path class="st1" d="M464.1,357.6c-0.4-1.7-0.5-11.7-0.5-13.2c-3.3,2.1-5.2,5.7-6.5,2.1c-1-2.8,0.8-8.7,2.3-14
 c1.4-5,2.5-9.5,0.4-10.2c-4.2-1.4-7.3,5.8-8.4,4c-1.1-1.8,4.4-34.9-7.3-37.7c-11.7-2.7-16.9,12-15.4,20.2c1.5,8.2,5.5,20.9,2.4,20.9
 s-5.2-12.4-9.7-9.3c-6,4.1-6.4,19.3,2,24.8c8.4,5.5,13.7,17.3,10.1,15.2c-3.8-2.3-8.4-2.7-10.1,1.9c-1.6,4.6,6.3,16.8,14.3,25
 c7.7,7.8,13.8,6.1,17.4,2.8c0-0.2-0.1-0.5-0.1-0.7c-3.3-3-8.8-8.1-9.5-9.1c-0.8-1.4-4.6-5.8-5.1-6.4c0.4,0.4,3.3,3,6,5.2
 c1.9,1.5,5.7,6.1,8.3,9.2c-0.8-5.2-2.4-15.6-3.7-23.1L440.3,353l-7.2-10.8c0,0,10.3,10.8,12.4,12.4c2,1.6,5.4,10.3,5.6,10.9
 c-0.4-2.4-0.7-4.5-1-6c-0.4-2.3-0.9-6.3-1.5-10.9c-0.6-4.6-1.2-9.8-1.7-14.3c0,0-2-9.8-2.4-13.2s0-13.2,0-13.2s2.8,13,3.3,15
 c0.3,1.2-0.1,5.5-0.5,8.5c1.7,9.1,4,21.8,3.9,23.4c-0.1,0.7,0.3,3.9,0.8,8.1c0.1-2.5,0.3-5,0.5-5.9c0.2-0.9,1.4-5.1,2.4-8.7
 c0.1,2.1,0.1,4.2,0.1,6c0,0.7,0,1.5,0,2.5c0,0,0,0,0,0c0,0.1,0,0.1-0.1,0.2c-0.4,1.3-1.7,6-2.5,9.2c0.7,5.2,1.6,11.2,2.3,16.2v0
 c0.1,3,0.4,5.6,0.8,7.6l0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0,0,0,0c2.4-2.5,4.9-6.6,7.3-11.2c1-4.3,2-9.2,2.7-12.2
 C465.2,363.2,464.4,358.8,464.1,357.6z"/>
<path class="st1" d="M466.9,365.8l2.3-2.2c-1.2,3.7-2.7,7.5-4.4,11.2C465.5,371.7,466.2,368.5,466.9,365.8z"/>
<path class="st1" d="M466.3,357.9c-0.2-1.5-2.4-12-2.7-13.5c1.7-1.1,3.8-1.7,6.3-0.8c0.3,0.1,0.6,0.3,0.8,0.5
 c-1.7,7.8-4.1,18.4-4.5,20.7C466.2,362.6,466.4,358.6,466.3,357.9z"/>
<path class="st1" d="M470.5,359.3c-1.7,2.6-3.4,6.2-3.6,6.5c0.5-2.1,0.9-4,1.3-5.3c0.7-2.6,2-9,3.3-15.4
 C472.8,347.7,472.2,353,470.5,359.3z"/>
<path class="st3" d="M455,354.1c0-1.8-0.1-3.9-0.1-6v0c0.9-3.2,1.7-6,1.7-6s-1,12-1.6,14.5C454.9,355.7,455,354.8,455,354.1z"/>
<path class="st3" d="M461.3,378.3l-5.8,10c0.1,0.5,0.1,0.8,0.2,1.2c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3c0.8,1,1.4,1.7,1.5,1.8
 c-0.1-0.1-0.6-0.6-1.4-1.3c0.1,0.8,0.2,1.3,0.2,1.3h-0.9c0,0-0.1-0.5-0.2-1.4c0.2-0.2,0.4-0.3,0.5-0.5c-0.4-2-0.7-4.6-0.8-7.6
 c0.3,1.8,0.5,3.5,0.7,4.9c0.7-3.2,2-8.7,2.9-10.3c1.3-2.2,5.8-9.7,6.1-10.3C464.2,367.1,462.2,376.1,461.3,378.3z"/>
<path class="st4" d="M141,369.6c-3.4-7.9-5.6,3.1-7.8,0.7c-2.3-2.5-1.1-14.5,0.4-21.6c2.6-12,3.2-18.3,1.2-24
 c-3-8.5-5.3,4.5-9.2,3.2c-4.1-1.3,0.6-25.4-10-17.5c-11.7,8.7,2.5,51.6,0,55.5c-4.3,6.8-2.2-29.2-8.9-27.1
 c-6.7,2.1-7.1,10.3-5.9,19.2c1.1,7.8,7.4,17.1,6.9,18.5c-1.5,4.3-10.5-9.7-13.9-2.9c-6,12.1,10.3,26.7,13.5,28.3
 c3.2,1.6,27.7,0,27.7,0S146.5,382.5,141,369.6z M103.4,353c-0.6-1.5-1.4-4.5,0-6.5c1.3-2,2.9,2,2.9,2s2.5,5.2,1.9,7.4
 C107.7,358.2,104,354.5,103.4,353z M105.5,388.2c-0.9-1.3-3.2-5-2.2-7c0.9-2,3.3,2,5.1,1.2c1.7-0.7,0.9-1.6,3.8-1
 c2.9,0.6,3.4,6.4,3.3,7.3C115.2,392.8,106.5,389.5,105.5,388.2z M118.2,344.2c1.1-6.2,2.3-8,4.7-9.3c2.4-1.3,5.2,7.1,4.4,9.8
 c-0.5,1.8-4,16.3-5.7,17.1C119.8,362.5,117.7,346.8,118.2,344.2z M129.9,388.5c-2.5-0.3-0.7-3.5,0.8-5.4c1.5-1.9,6.7-2,6.8-0.8
 C137.9,385,132.4,388.7,129.9,388.5z"/>
<path class="st1" d="M478.4,369.3c-3.4,1.5-3.5-5.6,6-12.5c4.1-3,10.8-15.6,5.7-19.9c-3.8-3.3-4.8,5.7-7.6,5.3
 c-2.8-0.4,2-11.1,3.5-18.4c2.3-11.1-2.1-23.2-12.4-19.8c-13.4,4.5-8,31.3-9,32.8c-0.8,1.3-2.6-3.1-5.3-4.3c-0.6-0.3-1.3-0.4-2-0.2
 c-3,0.6-2.8,8.5-2.5,15.7v0c0.1,2.1,0.1,4.2,0.1,6c0,0.7,0,1.5,0,2.5c0,0,0,0,0,0c-0.1,6.3-0.7,17.1-0.3,25.5v0
 c0.1,3,0.4,5.6,0.8,7.6c0.2,0.7,0.4,1.4,0.6,1.9c0.2,0.5,0.4,0.9,0.6,1.2c2.8,3.7,8.5,6.5,16.2,0c7.8-6.5,15.6-16.4,14.4-20.7
 C486.1,367.9,482,367.8,478.4,369.3z M471,379.8c-0.6,0.8-5.9,4.8-9,7c-0.3,1.2-0.4,1.9-0.4,1.9l-0.8-0.1c0,0,0.1-0.4,0.3-1.1
 c-0.7,0.5-1.2,0.9-1.3,0.9c0.1-0.1,0.7-0.7,1.4-1.5c0.1-0.2,0.9-4.1,2-8.7c1-4.3,2-9.2,2.7-12.2c-0.5-2.9-1.4-7.3-1.6-8.4
 c-0.4-1.7-0.5-11.7-0.5-13.2c0,0,0,0,0,0c0.3,1.4,2.5,11.9,2.7,13.5c0.1,0.7-0.1,4.7-0.1,7c0.5-2.3,2.8-13,4.5-20.7
 c1.1-4.8,1.9-8.5,1.9-8.5c-0.1-2.7-0.2-6.5,0.1-7.6c0.5-1.7,3.9-13,3.9-13s-0.6,8.8-0.9,11.8c-0.6,7.2-2.5,9.3-2.5,9.3
 c-0.5,2.7-1.1,5.8-1.8,9c-1.3,6.4-2.6,12.8-3.3,15.4c-0.3,1.3-0.8,3.2-1.3,5.3c0.1-0.3,1.9-3.9,3.6-6.5c0.8-1.2,1.6-2.2,2.2-2.6
 c2-1.2,11.8-9.7,11.8-9.7l-7.1,8.9l-8.2,7.8l-2.3,2.2c-0.7,2.7-1.4,5.9-2.1,9c-1,4.4-2,8.6-2.6,11.2c2.5-2.5,6.3-6.1,8-7.3
 c2.7-1.7,7.4-4,7.8-4.2C477.5,374.8,471.8,378.6,471,379.8z"/>
<path class="st3" d="M463.5,344.5C463.5,344.5,463.5,344.5,463.5,344.5c0-0.1,0-0.2,0-0.2S463.5,344.4,463.5,344.5z"/>
<path class="st2" d="M490.2,386.3h-67.1c0,0,0,27.3,33.5,27.3S490.2,386.3,490.2,386.3z"/>
<path class="st4" d="M511.8,397.9c1.2-16.5,14.6-43.9,5.7-43.9c-3.5,0-5.6,16.3-6,11.3s7.3-38.4-1.8-38c-4,0.2-1.7,18.7-4.6,18.1
 c-4-0.8-1.4-6.3-4.7-7.3c-9.6-2.7,1.7,35.9,0,36.1c-1.4,0.1-3.3-13.2-6.5-8.9c-4.2,5.7,3.4,13.6,3.6,30.8
 C497.4,401.4,511.7,399.5,511.8,397.9z"/>
<path class="st5" d="M491.9,388.8h25.4c0,0,6.8,5.7,7.6,19.1c0.8,13.4-14.8,16.4-19.3,16.4c-9.7,0-23.4-1.8-22.5-16.4
 C484.1,392.2,491.9,388.8,491.9,388.8z"/>
<path class="st5" d="M101.8,398.1h35.7c0,0,10.7,5.1,10.7,17.2c0,9.6-19.7,10.9-26,10.9c-13.6,0-32.8-0.7-32.7-10.9
 C89.5,401.1,101.8,398.1,101.8,398.1z"/>
<path class="st6" d="M361.7,379.2c0,0-2.4-12.9-12.6-13.4c-10.2-0.4-62.7,0.3-68.6,1s-18.5,4.5-19.7,6.8s27,20.2,28.5,21.8
 c1.5,1.6,14.6,7.6,20.2,6.7c5.6-0.9,22.9-10,25.9-10.7S361.7,379.2,361.7,379.2z"/>
<path class="st7" d="M361.7,379.2c0,0-2.4-12.9-12.6-13.4c-10.2-0.4-62.7,0.3-68.6,1s-18.5,4.5-19.7,6.8s27,20.2,28.5,21.8
 c1.5,1.6,14.6,7.6,20.2,6.7c5.6-0.9,22.9-10,25.9-10.7S361.7,379.2,361.7,379.2z"/>
<path class="st8" d="M381.6,428.2c-5,5-12.7,5.2-24.3,2.2c-11-2.9-14.9-5.8-14.9-5.8l-7-3l1-10.6c0,0,2.8-1.6,3.2-0.5
 c0.4,1,6.7,2,6.7,2s0,0,0.1,0c1.6,0,18.8,0.1,27.7,4.3C383.4,421.2,383,426.7,381.6,428.2z"/>
<path class="st6" d="M284.6,364.5l-13.5-1.3c0,0-14-4.8-24.8-2c-10.8,2.8-14.9,14.9,0.2,28.5s62.6,30.1,90.3,34.4
 c0,0,4.8-5.1,5.2-13.3L274,371.3L284.6,364.5z"/>
<path class="st8" d="M408,288c0,0,5.5-7.6,7.7-10.1c2.2-2.5,6.4-6.3,7.9-8.1c3.5-4.1,4-10.8,3.5-11.1c-0.5-0.3-4.7,0.8-5.9,3.1
 s-2.5,5.3-5.7,7c-3.3,1.7-6,4.2-7.6,4c-1.6-0.2-3.5-2.3-3.6-3.5c-0.1-1.2,0.5-4.5-0.5-5.9s-1.6-0.9-1.8-0.4
 c-0.2,0.4-2.1,3.8-1.7,6.5s-0.3,7.2-0.1,8.3c0.2,1.1,1,5.4,0,7.9C399.2,287.8,408,288,408,288z"/>
<path class="st8" d="M216.6,288c0,0-5.5-7.6-7.7-10.1c-2.2-2.5-6.4-6.3-7.9-8.1c-3.5-4.1-4-10.8-3.5-11.1c0.5-0.3,4.7,0.8,5.9,3.1
 s2.5,5.3,5.7,7c3.3,1.7,6,4.2,7.6,4c1.6-0.2,3.5-2.3,3.6-3.5s-0.5-4.5,0.5-5.9s1.6-0.9,1.8-0.4c0.2,0.4,2.1,3.8,1.7,6.5
 c-0.4,2.7,0.3,7.2,0.1,8.3c-0.2,1.1-1,5.4,0,7.9C225.3,287.8,216.6,288,216.6,288z"/>
<path class="st9" d="M412.4,286.6c0,0-14.5,29.2-20.5,39.3c-5.9,10.1-11.8,16.7-14.8,16c-6.6-1.5-33.1-27.2-33.7-26.7
 c-0.5,0.5-3,5.6-2.8,5.8c0.1,0.2-21.4,0.1-28.4,0c-7,0.1-28.5,0.2-28.4,0c0.1-0.3-2.3-5.3-2.8-5.8c-0.5-0.5-27,25.2-33.7,26.7
 c-3,0.6-8.8-6-14.8-16c-6-10.1-20.5-39.3-20.5-39.3c6.1-5.1,13.6-5.2,13.6-5.2c5.7,8.3,23.2,36.3,23.2,36.3s20.6-26.2,28.4-30.3
 c7.8-4.1,22.9-4.6,26.1-5.9l3-11.7c0,0,5,2.4,5.8,2.6c0.8-0.2,5.8-2.6,5.8-2.6l3,11.7c3.2,1.3,18.3,1.8,26.1,5.9
 c7.8,4.1,28.4,30.3,28.4,30.3s17.5-28,23.2-36.3C398.8,281.4,406.3,281.5,412.4,286.6z"/>
<path class="st8" d="M289.2,421.5l-7,3c0,0,0,0,0,0c-0.5,0.3-4.5,3.1-14.9,5.8c-11.6,3-19.3,2.8-24.3-2.2c-1.4-1.4-1.8-7,7.4-11.3
 c9.4-4.4,27.8-4.3,27.8-4.3s6.3-1,6.7-2c0.5-1.2,3.2,0.5,3.2,0.5L289.2,421.5z"/>
<path class="st6" d="M378.1,389.7c-11.3,10.2-40.3,21.9-65.8,28.9c-3.1,0.9-6.2,1.7-9.2,2.4c-5.5,1.3-10.6,2.4-15.2,3.1
 c0,0-4.8-5.1-5.2-13.3v0l2-1.2l65.9-38.3l-10.6-6.8l13.5-1.3c0,0,14-4.8,24.8-2C389.2,364,393.3,376.1,378.1,389.7z"/>
<path class="st10" d="M363.5,321.7L352,369.9c0,0.8-0.6,1.4-1.4,1.4h-76.9c-0.3,0-0.6-0.1-0.8-0.2c-0.4-0.3-0.6-0.7-0.6-1.2
 l-11.5-48.2c0-0.8,0.7-1.4,1.4-1.4h99.9c0.4,0,0.8,0.2,1.1,0.5C363.3,321,363.5,321.3,363.5,321.7z"/>
<circle class="st7" cx="312.7" cy="347.1" r="3.9"/>
<path class="st8" d="M329.2,259.8c-1.1,2.5-4.1,2.3-4.1,2.3l-0.5,2.1v0c-1.5,4.7-5.1,7.7-7.5,8.5c-2.2,0.8-4.8,0.7-5.6,0.6
 c-0.9,0.1-3.4,0.2-5.6-0.6c-2.5-0.9-6.5-4.3-7.8-9.6c-0.1-0.3-0.1-0.6-0.1-0.7c0-0.1,0-0.2-0.1-0.4c0,0-2.9,0.2-4-2.3
 c-1.1-2.5-1-5.5,1.6-5.6c0,0,0,0,0-0.1c-0.2-1-2.6-9.7-1.8-14c0.9-4.7,3.4-7.1,3.4-7.1s-1.1-2.5-0.4-4.2c0.7-1.7,3-3.2,3-3.2
 c5-2.6,11-2,16-0.5c4.1,1.1,5.5,4,5.5,4s4,1.3,6.2,5.7c3,5.8,0.2,19.5,0.2,19.5C330.2,254.3,330.3,257.2,329.2,259.8z"/>
<path class="st8" d="M321.1,281.5c0,0-2,6.1-8.4,6.5c-6.3,0.4-9.2-6.5-9.2-6.5l3-11.7c0,0,5,2.4,5.8,2.6c0.8-0.2,5.8-2.6,5.8-2.6
 L321.1,281.5z"/>
<path class="st11" d="M327.5,234.7c-2.2-4.5-6.2-5.7-6.2-5.7s-1.5-2.8-5.5-4c-5.1-1.5-11.1-2.1-16,0.5c0,0-2.3,1.5-3,3.2
 c-0.7,1.7,0.4,4.2,0.4,4.2s-2.5,2.4-3.4,7.1c-0.8,4.3,1.5,13.1,1.8,14c0,0,0,0.1,0,0.1s1.9,6,2.5,7.9c0,0.1,0,0.2,0.1,0.4
 c0,0.1,0.1,0.4,0.1,0.7c1.3,5.3,5.3,8.7,7.8,9.6c2.2,0.8,4.7,0.7,5.6,0.6c0.9,0.1,3.4,0.2,5.6-0.6c2.3-0.8,5.9-3.8,7.5-8.5v0
 l0.5-2.1c0,0,1.6-6.6,2.5-7.9C327.7,254.2,330.4,240.5,327.5,234.7z M324.9,258c-0.3,2.9-0.8,7.6-3.6,7.1c-2.7-0.5-3.9-2.7-5.3-3.7
 c-1.4-1-3.8-1-3.8-1c-1.9-0.2-4.4,1.5-5.9,3.1c-1.5,1.5-5.1,0.9-6.3-0.4c-1.2-1.2-2-6.2-2-6.2s1.6-2.7,1.9-4.9
 c0.3-2.2-1.2-8.3,1.3-9.9c2.4-1.6,6-2.6,8.7-2.3s-1.2,1.9-1.7,3.9c-0.4,1.9,5.3,3.1,8.9,2.8c3.7-0.2,6-2.2,7.9-2.1
 C326.9,244.3,325.3,255.2,324.9,258z"/>
<path class="st7" d="M312.3,418.7c-3.1,0.9-6.2,1.7-9.2,2.4c-8-3.9-17.5-8.6-20.5-10.2v0l2-1.2C284.7,409.7,310.7,417.8,312.3,418.7
 z"/>
<path class="st12" d="M282.2,424.6C282.2,424.6,282.2,424.6,282.2,424.6c-0.5,0.4-4.5,3.2-14.9,5.8c-11.6,3-19.3,2.8-24.3-2.2
 c-1.4-1.4-1.8-7,7.4-11.3c9.4-4.4,27.8-4.3,27.8-4.3s-5.8,1.2-6,6.2C272,423.7,282.2,424.6,282.2,424.6z"/>
<path class="st12" d="M381.6,428.2c-5,5-12.7,5.2-24.3,2.2c-11-2.9-14.9-5.8-14.9-5.8s7.5-0.8,8.9-5c1.3-4.2-4.9-7-4.9-7s0,0,0.1,0
 c1.6,0,18.8,0.1,27.7,4.3C383.4,421.2,383,426.7,381.6,428.2z"/>
<path class="st13" d="M227.1,386.1c-0.5,2.2-1,6.6,0.9,13.1c1.3,4.4,15.7,22.4,10.8,30.2c2.1,4.4-3.7,11.3-15.2,10.2
 c-11.2-1.1-20.1-2.2-23.7,0c-6.1,3.7-3.5,8.1-7.2,8.1c-6.7,0-4.9-9.5-0.7-12.7c5.8-4.3,15.4-3.1,15.4-3.1
 c-8.2-3.1-0.7-27.4-0.7-27.4s1.4-8.6,4.6-16.5c2.3-5.7,5-10.4,7.5-12.3c-1.1-4.6,0.1-9,3.5-10.9c0.7-0.4,1.5-0.6,2.4-0.7l-0.1,0
 c0,0,10.7-4.2,9-1.2l-2.1,3.1c1.7,1.2,3.4,3,4.6,5.1c1.4,2.5,2,5.1,1.9,7.5c1.6,0,3.9,0.2,3.7,0.8c-0.2,1-4.2,4.3-6.3,5.7
 c0,0,0,0-0.1,0c-0.4,0.4-0.8,0.7-1.2,0.9C232,387.2,229.5,387.1,227.1,386.1z"/>
<path class="st7" d="M218.9,375.7c0,0,2.8,7.1,8.2,10.3c0,0-3,4.2-5.7,1.8C218.7,385.6,218.9,375.7,218.9,375.7z"/>
<path class="st14" d="M231.9,375.3c0,0-1.7-3.6-2.3-2.5c-0.5,0.9-0.7,2.5,0,2.7S232.7,376.5,231.9,375.3z"/>
<path class="st12" d="M233.7,362.9l-2.1,3.1c0,0-3-1.8-6.9-1.9C224.7,364.1,235.4,359.9,233.7,362.9z"/>
<path class="st12" d="M241.7,379.4c-0.2,1-4.2,4.3-6.3,5.7c0,0,0,0-0.1,0c2.3-2.4,2.6-6.6,2.6-6.6
 C239.7,378.6,241.9,378.8,241.7,379.4z"/>
<path class="st12" d="M223.6,439.6c-11.2-1.1-20.1-2.2-23.7,0c-6.1,3.7-3.5,8.1-7.2,8.1c-6.7,0-4.9-9.5-0.7-12.7
 c5.8-4.3,15.4-3.1,15.4-3.1c2.1,0.5,10,3.6,20.6,1.5c10.6-2,10.6-4,10.6-4.1C240.9,433.8,235.1,440.7,223.6,439.6z"/>
<path class="st15" d="M116.2,203.8c0.5-0.7,0.8-1.1,2.3-1.3c1.5-0.3,2.1-0.7,4-2.5c2-1.8,5.1-2.5,8.3-2.3s5.6,1.4,5.6,1.4
 c-0.6-2.1,1.5-3.1,2-3.6c0.4-0.4,0.6-1.3,0.6-1.3c3.4,1.5,4.6,5,3.3,8.2c-1.4,3.2-5,3.4-5,3.4s2.1,1,4.8-0.3c2.7-1.3,3.1-4.5,3.1-5
 c0,0,2.5,1.5,4.1,6.9c1.6,5.4,0,11-2,13.4c0,0,0.2-2.7-0.5-4.4c0,0-0.1,5.9-5.7,9.7c0,0,1.6-2.5,2-5.4c0,0-3.3,6.4-11,7
 c0,0,3.1-1.2,5.1-4.4c0,0-0.9,0.9-4.2,1.1c0,0,2.6-1.4,3.4-4.4c0.7-2.8,0.3-4.6,0.3-4.6s-0.7,4.5-4.4,6.2s-7.4,0.5-8.2-0.3l1.4,0
 c0,0-1.6-1.1-1.8-2.9c-0.3-2.1,1.1-3.2,2.4-3c1.3,0.2,0.4,1.7,0.4,1.7s-0.2,1.7,2.4,1.8c0,0,0.1-0.1,0.4-0.7
 c0.3-0.5,0.6-1.5,0.6-1.5l0.1,1.7c0,0,1.1-0.9,1.2-1.3c0.1-0.4,0.3-0.8,0.5-0.8c0.8,0,1.5,1.1,1.5,1.1c-0.2-2.7-1.4-5-4.3-7.3
 c-3.2-2.5-8.1-1.5-8.1-1.5l-1.2,1.4l0-1.5l-0.7,1l-0.2-1.3c-1.4-0.4-1.5-1.8-1.5-1.8C115.7,205.8,115.6,204.7,116.2,203.8z
  M136.2,195.1c-0.2,0.8-1,2.2-0.4,3.1c0,0,0-1.9,1.9-2.8c0,0,0.3-1.7-2.3-1.6C135.4,193.7,136.4,194.3,136.2,195.1z"/>
<path class="st15" d="M212.4,92.5L212.4,92.5L212.4,92.5l-10.2,23h3.9l2-5.1h4.9v0l3.7,0l2,5.1h3.9L212.4,92.5L212.4,92.5
 L212.4,92.5z M215.3,107.2l-3.6,0h-2.3l2.9-7.2L215.3,107.2z M228.9,94l-16.2-5.9c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0
 c0,0,0,0-0.1,0L196,94c-0.2,0.1-0.4,0.3-0.4,0.6l2.4,21.6c0,0.2,0.1,0.3,0.3,0.4l13.8,7.7c0,0,0,0,0,0l0,0c0.1,0,0.2,0.1,0.3,0.1
 c0.1,0,0.2,0,0.3-0.1l0,0c0,0,0,0,0,0l13.8-7.7c0.2-0.1,0.3-0.2,0.3-0.4l2.4-21.6C229.3,94.3,229.1,94.1,228.9,94z M225.7,115.8
 l-13.3,7.4l-13.3-7.4l-2.4-20.9l15.7-5.7l15.6,5.6L225.7,115.8z"/>
<path class="st15" d="M281.5,108.6c0,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1c0,0,0,0,0,0
 c0.1,0,0.1-0.1,0.2-0.2c0,0,0,0,0,0l17.5-30.4c0.1-0.2,0.1-0.3,0-0.5c-0.1-0.2-0.2-0.2-0.4-0.2h-7h-6.6c-0.2,0-0.3,0.1-0.4,0.3
 l-3.5,6.4l-3.5-6.4c-0.1-0.2-0.3-0.3-0.4-0.3h-6.6h-7c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.2-0.1,0.3,0,0.5L281.5,108.6
 C281.5,108.6,281.5,108.6,281.5,108.6z M271.1,78.5l10.4,17.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0.1
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l10.4-17.8h5.9l-16.7,28.9l-16.7-28.9
 H271.1z"/>
<path class="st15" d="M360.2,84.2c1.1-4.4,0.7-7.9-1.4-9.1c-1.7-1-4.2-0.3-7.1,2c-0.5,0.4-1,0.9-1.5,1.3c-3.3-3.1-6.5-4.5-8.6-3.3
 c-2.1,1.2-2.5,4.7-1.4,9.1c-4.4,1.3-7.1,3.4-7.1,5.8c0,2.4,2.8,4.5,7.1,5.8c-1.1,4.4-0.7,7.9,1.4,9.1c0.5,0.3,1.1,0.4,1.7,0.4
 c1.9,0,4.4-1.4,6.9-3.7c0.5,0.5,1,0.9,1.5,1.3c2,1.6,3.8,2.4,5.3,2.4c0.6,0,1.2-0.1,1.7-0.4c2.1-1.2,2.5-4.7,1.4-9.1
 c4.4-1.3,7.1-3.4,7.1-5.8C367.3,87.5,364.5,85.5,360.2,84.2z M352.5,78c1.7-1.4,3.3-2.1,4.5-2.1c0.4,0,0.8,0.1,1.1,0.3
 c1.5,0.8,1.8,3.7,0.9,7.7c-1.5-0.4-3.1-0.6-4.8-0.8c-1-1.4-2-2.7-3.1-3.8C351.5,78.8,352,78.4,352.5,78z M355.2,92.9
 c-0.6,1-1.2,1.9-1.8,2.8c-1,0.1-2.1,0.1-3.3,0.1c-1.1,0-2.2,0-3.3-0.1c-0.6-0.9-1.2-1.8-1.8-2.8c-0.6-1-1.1-2-1.5-2.9
 c0.5-0.9,1-1.9,1.5-2.9c0.6-1,1.1-1.9,1.8-2.8c1-0.1,2.1-0.1,3.3-0.1c1.1,0,2.2,0,3.3,0.1c0.6,0.9,1.2,1.8,1.8,2.8
 c0.6,1,1.1,2,1.5,2.9C356.3,90.9,355.8,91.9,355.2,92.9z M357.4,91.4c0.5,1.2,0.9,2.4,1.3,3.5c-1.1,0.3-2.3,0.5-3.6,0.6
 c0.4-0.6,0.8-1.3,1.2-2C356.7,92.8,357.1,92.1,357.4,91.4z M350.2,99.7c-0.8-0.8-1.6-1.8-2.4-2.8c0.8,0,1.6,0.1,2.4,0.1
 c0.8,0,1.6,0,2.4-0.1C351.8,98,351,98.9,350.2,99.7z M345.3,95.5c-1.3-0.2-2.5-0.4-3.6-0.6c0.3-1.1,0.7-2.2,1.3-3.5
 c0.3,0.7,0.7,1.4,1.1,2.1C344.5,94.2,344.9,94.8,345.3,95.5z M343,88.5c-0.5-1.2-0.9-2.4-1.3-3.5c1.1-0.3,2.3-0.5,3.6-0.6
 c-0.4,0.7-0.8,1.3-1.2,2C343.7,87.1,343.3,87.8,343,88.5z M352.5,83c-0.8,0-1.5-0.1-2.3-0.1c-0.8,0-1.6,0-2.4,0.1
 c0.8-1,1.6-2,2.4-2.8C351,81,351.8,81.9,352.5,83z M356.3,86.4c-0.4-0.7-0.8-1.4-1.2-2c1.3,0.2,2.5,0.4,3.6,0.6
 c-0.3,1.1-0.7,2.2-1.3,3.5C357.1,87.8,356.7,87.1,356.3,86.4z M342.3,76.2c0.3-0.2,0.7-0.3,1.1-0.3c1.5,0,3.7,1.2,6,3.4
 c-1.1,1.1-2.1,2.4-3.1,3.8c-1.7,0.2-3.4,0.4-4.8,0.8C340.4,79.9,340.8,77,342.3,76.2z M334.3,89.9c0-1.7,2.3-3.4,6.2-4.6
 c0.4,1.5,1,3,1.7,4.6c-0.7,1.6-1.3,3.1-1.7,4.6C336.6,93.4,334.3,91.6,334.3,89.9z M342.3,103.7c-1.5-0.8-1.8-3.7-0.9-7.7
 c1.5,0.4,3.1,0.6,4.8,0.8c1,1.4,2,2.7,3.1,3.8C346.4,103.4,343.7,104.6,342.3,103.7z M358.1,103.7c-1.2,0.7-3.3,0-5.7-1.9
 c-0.5-0.4-0.9-0.8-1.4-1.3c1-1.1,2.1-2.4,3.1-3.8c1.7-0.2,3.4-0.4,4.8-0.8C360,100,359.6,102.9,358.1,103.7z M359.9,94.5
 c-0.4-1.5-1-3-1.7-4.6c0.7-1.6,1.3-3.1,1.7-4.6c3.9,1.1,6.2,2.9,6.2,4.6C366.1,91.6,363.8,93.4,359.9,94.5z M353.4,89.9
 c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2S353.4,88.2,353.4,89.9z"/>
<path class="st15" d="M432.4,92h-29.2c-2,0-3.6,1.6-3.6,3.6v29.2c0,2,1.6,3.6,3.6,3.6h29.2c2,0,3.6-1.6,3.6-3.6V95.5
 C436,93.6,434.4,92,432.4,92z M434.9,124.7c0,1.3-1.1,2.4-2.4,2.4h-29.2c-1.3,0-2.4-1.1-2.4-2.4V95.5c0-1.3,1.1-2.4,2.4-2.4h29.2
 c1.3,0,2.4,1.1,2.4,2.4V124.7z M432,118.1c0.5,0.8,0.8,2.8-0.1,4.4c-0.6,1.1-2.1,2.1-5,2.3c-3.1,0.1-4.9-0.8-4.9-0.8v-3.4
 c0.9,0.8,2.5,1.5,4.3,1.5c1.5,0,2.3-0.5,2.5-1.4c0.1-0.6-0.2-1-0.5-1.3c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0
 c-0.3-0.2-0.7-0.5-1.2-0.7c-1.1-0.5-1.9-0.7-3.3-1.7c-1.3-0.9-2.1-2.9-1.4-4.8c0.7-1.9,2.4-2.9,5.4-3.1c2.9-0.1,4.3,0.6,4.3,0.6v3.3
 c0,0-1.4-1.1-3.7-1.1c-2.1,0-2.9,1-2.5,2C426.4,115.2,430.7,115.6,432,118.1C432,118,432,118,432,118.1C432,118,432,118.1,432,118.1
 C432,118.1,432,118.1,432,118.1z M415.2,109.2h5.4v2.8h-4.4v12.6h-1.1h-1.4h-1.1v-12.6h-4.4v-2.8h5.4H415.2z"/>
<path class="st15" d="M471.4,160.6c0,3.9-3.1,7-7,7c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7C468.2,153.6,471.4,156.7,471.4,160.6z
  M478.3,150.1c2.2,2.9,3.6,6.6,3.6,10.5c0,9.7-7.9,17.5-17.5,17.5s-17.5-7.9-17.5-17.5s7.9-17.5,17.5-17.5c4,0,7.7,1.4,10.6,3.6
 c0.4-0.3,0.9-0.5,1.5-0.5c1.3,0,2.4,1.1,2.4,2.4C478.9,149.1,478.7,149.7,478.3,150.1z M481.2,160.6c0-3.8-1.3-7.2-3.4-10
 c-0.4,0.3-0.8,0.4-1.3,0.4c-1.3,0-2.4-1.1-2.4-2.4c0-0.5,0.1-1,0.4-1.3c-2.8-2.1-6.3-3.4-10.1-3.4c-9.2,0-16.8,7.5-16.8,16.8
 c0,9.3,7.5,16.8,16.8,16.8C473.6,177.4,481.2,169.8,481.2,160.6z"/>
<path class="st15" d="M146.3,151.5c-0.6,2.8-0.4,5.3-0.2,7c-0.6-0.6-1.5-1.8-1.4-2.6c0.2-1.2,1.2-1.5,1-2.8c-0.2-1.3-1-2.3-0.7-3.6
 c0.3-1.2,1.7-2.1,2.3-2.8c0.7-0.7,0.4-2,0.5-2.9c0.1-0.9,0.8-2.1,2.1-2.2c1.3-0.2,2.2-0.2,3.2-1c1-0.8,1.3-2.5,3.6-2.6
 c1.6-0.1,3,0.8,3.8,1.4c-1.8,0.1-4.6,0.5-7,2C149.9,143.6,147.1,147.4,146.3,151.5z M177.5,159.3c2-3.9,1-6.6,1-6.6
 s-1.1,3.3-3.4,4.9c0,0,2.2-3.1,1.9-6.3c-0.3-3.2-1.8-4.4-1.8-4.4s1.1,2.5,0.2,6.4c-1,3.9-4.2,7.2-5.8,8c0,0,3,0.5,5.4-1.3
 c-0.4,0.5-4.1,4.4-9.5,4.6c0,0,1.6,2.2,5.1,2.2c0,0-3.1,0.9-7.2-0.7c-4-1.6-6.1-4.7-6.2-4.7c0,0.1,0.4,3,2.5,4.8
 c-0.6-0.3-4.9-2.4-5.5-6.6c-0.6-4.1,0-6.2,2.2-8.4c1.6-1.5,3.5-2.1,4.5-2.3c-4.6-2.3-8.2-1.9-11,1c-3.1,3.2-3.1,7.6-2.9,9.8
 c0,0,0,0,0,0c0.2,0.6,1.5,4.7,5.2,7.6c4,3.1,8.2,5.3,16,3.7c7.1-1.5,10.1-9,10.2-9.4c-0.2,0.2-3.3,2.9-6.2,2.9
 C172.2,164.3,175.5,163.2,177.5,159.3z M149.5,149.4c-2.1,2.1-2.8,4.8-3,7.1c-0.1-1.4,0-3.1,0.4-4.8c0.8-4,3.4-7.7,7-9.8
 c2.6-1.6,5.6-1.9,7.4-1.9c7.2,0.9,10.3,3.9,12.1,6.5c1.5,2.1,1.5,4.6-2.6,4.6c-3.2,0-7-1.5-8.5-2.1
 C156.9,145.9,152.7,146,149.5,149.4z M165,145.5c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7
 C165.3,144.8,165,145.1,165,145.5z M153.9,143.8c0,0.8,0.6,2.1,1.3,2.2h0.2c1,0,4.4-0.2,4.8-0.3c0.1,0,0.2-0.1,0.2-0.3
 c0-0.1-0.1-0.2-0.3-0.2c0,0,0,0,0,0c-1.2,0.1-4.5,0.3-5,0.3c-0.3,0-0.8-1-0.9-1.7c0-0.5,1.1-1.1,1.9-1.3c0.4-0.1,3,0.7,4.6,1.4
 c0.1,0.1,0.3,0,0.3-0.2c0.1-0.1,0-0.3-0.1-0.3c-0.7-0.3-4.2-1.6-4.9-1.4C155.5,142.2,153.8,142.9,153.9,143.8z"/>
<path class="st15" d="M483.8,220.6l-5.3,8.4l-8.9-14.4v15.1h-6.3v-25.6h6.3l9,15.2v-6.8L483.8,220.6z M484.9,210.7v-6.6h-6.3v6.6
 H484.9z M495,211.3c-5.3,0.1-7.5,4.1-7.5,4.1l-2.6-4.1h-6.2l5.9,9.3l-5.8,9.1h6.1l2.6-4.1l2.7,4.1h6.1l-5.6-8.9
 c-0.2-1,0.2-2.1,1-3.3c0.7-1,2-1.7,3.8-1.6c1.8,0.1,2.5,0.9,3.1,2c0.6,1,1.6,1.3,2.2,1.4c0.5,0.1,1.3,0.6,1.3,1.5
 c0,0.8,0.7,1.2,1,1.2c0.3,0,1.2,0.2,1.4-1.2c0.2-1.3-0.6-3.9-1.4-5.1C502.5,215,500.2,211.2,495,211.3z M499.6,219.3
 c-0.8-0.3-1.2-0.9-1.7-1.7c-0.7-1-2-1.5-3.7-1.2c-2.1,0.5-2.9,2.4-2.9,2.4c0.7-1,2.3-1.8,4-1.5c1.7,0.4,2.4,1.5,2.8,2.3
 c0.4,0.7,1.1,0.5,1.6,0.6c0.5,0,0.5,0.2,0.8,0.4c0.2,0.3,1,0.6,1,0.4c0-0.1,0.1-0.7-0.3-1C501.1,219.8,500.4,219.6,499.6,219.3z
  M493.7,217.9c-1.6,0.3-2.4,2-2.4,2s0.8-1.1,2.3-1.2c1.5-0.1,2.1,0.4,2.7,0.6c0.7,0.2,1.1,0,1.1,0
 C496.6,218.3,495.3,217.6,493.7,217.9z"/>
<g>
 <g>
   <path class="st16" d="M281.9,115.5c0,0,0,0.2-0.1,0.5"/>
   <path class="st17" d="M281.7,117c-0.5,5-1.7,21.7,3.8,39.4c9.9,32,35,28.4,33,58.9"/>
   <path class="st16" d="M318.5,215.9c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st16" d="M350.2,109.2c0,0,0,0.2-0.1,0.5"/>
   <path class="st18" d="M349.9,110.7c-1,4.6-3.9,19.7-2,34.1c2.3,17.3,15.6,53.3-21.1,73.5"/>
   <path class="st16" d="M326.3,218.6c-0.1,0.1-0.3,0.2-0.4,0.2"/>
 </g>
</g>
<g>
 <g>
   <path class="st16" d="M419.2,134.1c0.1,0.1,0.1,0.2,0.2,0.5"/>
   <path class="st19" d="M419.4,135.6c-0.3,5.9-7,27.7-31.2,34.3c-27.1,7.5-78.4,1.1-83,45.4"/>
   <path class="st16" d="M305.2,215.9c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st16" d="M452.6,178.1c0,0,0,0.2-0.1,0.5"/>
   <path class="st20" d="M452.2,179.5c-2.5,7.5-15.9,42.3-51.3,48.2c-32.1,5.3-49.3,0-64.5,3.5"/>
   <path class="st16" d="M335.8,231.3c-0.2,0-0.3,0.1-0.5,0.1"/>
 </g>
</g>
<g>
 <g>
   <path class="st16" d="M455,223.1c0,0-0.2-0.1-0.5-0.2"/>
   <path class="st21" d="M453.6,222.6c-3.8-1.3-15.2-5.2-36.8-11.3c-26.8-7.6-53.2-6.3-84.1,11.9"/>
   <path class="st16" d="M332.3,223.4c-0.1,0.1-0.3,0.2-0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st16" d="M222.7,127.1c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st22" d="M223.7,128.2c3.5,3.5,14.8,15.5,25,34.9c15.4,29.5,10.8,39.3,39.7,60.1"/>
   <path class="st16" d="M288.8,223.4c0.1,0.1,0.3,0.2,0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st16" d="M176.8,174.7c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st23" d="M178,175.6c3.5,2.2,15.1,8,44.6,9.8c21.2,1.3,58.7-10.5,75,30"/>
   <path class="st16" d="M297.9,215.9c0.1,0.2,0.1,0.3,0.2,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st16" d="M155.7,215.3c0,0,0.1-0.1,0.4-0.3"/>
   <path class="st24" d="M157,214.5c5.5-3.3,27.9-15.1,53.9-7.1c22.4,6.9,47.7,25.6,73.6,23.9"/>
   <path class="st16" d="M285,231.3c0.2,0,0.3,0,0.5,0"/>
 </g>
</g>
</svg>
`,
    name: 'custom_workshops_1',
    theme: 'fill',
};
const custom_workshops_2 = {
    icon: `<svg version="1.1" id="Layer_6_copy" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
  y="0px" viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#9B84C1;}
 .st1{fill:#E01D85;}
 .st2{opacity:0.2;fill:#3D3D75;}
 .st3{fill:#EFD1C7;}
 .st4{fill:#99CFF8;}
 .st5{fill:#EFEFEF;}
 .st6{fill:#F5C85C;}
 .st7{fill:#363636;}
 .st8{fill:#F4F4F4;}
 .st9{fill:#EDBCDA;}
 .st10{fill:#FFFFFF;}
 .st11{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;}
 .st12{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0016,1.0016;}
 .st13{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0039,1.0039;}
 .st14{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.9948,0.9948;}
 .st15{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.994,0.994;}
 .st16{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0046,1.0046;}
 .st17{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0083,1.0083;}
 .st18{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0062,1.0062;}
 .st19{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0041,1.0041;}
</style>
<ellipse class="st0" cx="311" cy="416.7" rx="166" ry="32.7"/>
<path class="st1" d="M361.7,379.2c0,0-2.4-12.9-12.6-13.4c-10.2-0.4-62.7,0.3-68.6,1s-18.5,4.5-19.7,6.8s27,20.2,28.5,21.8
 c1.5,1.6,14.6,7.6,20.2,6.7c5.6-0.9,22.9-10,25.9-10.7S361.7,379.2,361.7,379.2z"/>
<path class="st2" d="M361.7,379.2c0,0-2.4-12.9-12.6-13.4c-10.2-0.4-62.7,0.3-68.6,1s-18.5,4.5-19.7,6.8s27,20.2,28.5,21.8
 c1.5,1.6,14.6,7.6,20.2,6.7c5.6-0.9,22.9-10,25.9-10.7S361.7,379.2,361.7,379.2z"/>
<path class="st3" d="M381.6,428.2c-5,5-12.7,5.2-24.3,2.2c-11-2.9-14.9-5.8-14.9-5.8l-7-3l1-10.6c0,0,2.8-1.6,3.2-0.5
 c0.4,1,6.7,2,6.7,2s0,0,0.1,0c1.6,0,18.8,0.1,27.7,4.3C383.4,421.2,383,426.7,381.6,428.2z"/>
<path class="st1" d="M284.6,364.5l-13.5-1.3c0,0-14-4.8-24.8-2c-10.8,2.8-14.9,14.9,0.2,28.5s62.6,30.1,90.3,34.4
 c0,0,4.8-5.1,5.2-13.3L274,371.3L284.6,364.5z"/>
<path class="st3" d="M408,288c0,0,5.5-7.6,7.7-10.1c2.2-2.5,6.4-6.3,7.9-8.1c3.5-4.1,4-10.8,3.5-11.1c-0.5-0.3-4.7,0.8-5.9,3.1
 s-2.5,5.3-5.7,7c-3.3,1.7-6,4.2-7.6,4c-1.6-0.2-3.5-2.3-3.6-3.5c-0.1-1.2,0.5-4.5-0.5-5.9s-1.6-0.9-1.8-0.4
 c-0.2,0.4-2.1,3.8-1.7,6.5s-0.3,7.2-0.1,8.3c0.2,1.1,1,5.4,0,7.9C399.2,287.8,408,288,408,288z"/>
<path class="st3" d="M216.6,288c0,0-5.5-7.6-7.7-10.1c-2.2-2.5-6.4-6.3-7.9-8.1c-3.5-4.1-4-10.8-3.5-11.1c0.5-0.3,4.7,0.8,5.9,3.1
 s2.5,5.3,5.7,7c3.3,1.7,6,4.2,7.6,4c1.6-0.2,3.5-2.3,3.6-3.5s-0.5-4.5,0.5-5.9s1.6-0.9,1.8-0.4c0.2,0.4,2.1,3.8,1.7,6.5
 c-0.4,2.7,0.3,7.2,0.1,8.3c-0.2,1.1-1,5.4,0,7.9C225.3,287.8,216.6,288,216.6,288z"/>
<path class="st4" d="M412.4,286.6c0,0-14.5,29.2-20.5,39.3c-5.9,10.1-11.8,16.7-14.8,16c-6.6-1.5-33.1-27.2-33.7-26.7
 c-0.5,0.5-3,5.6-2.8,5.8c0.1,0.2-21.4,0.1-28.4,0c-7,0.1-28.5,0.2-28.4,0c0.1-0.3-2.3-5.3-2.8-5.8c-0.5-0.5-27,25.2-33.7,26.7
 c-3,0.6-8.8-6-14.8-16c-6-10.1-20.5-39.3-20.5-39.3c6.1-5.1,13.6-5.2,13.6-5.2c5.7,8.3,23.2,36.3,23.2,36.3s20.6-26.2,28.4-30.3
 c7.8-4.1,22.9-4.6,26.1-5.9l3-11.7c0,0,5,2.4,5.8,2.6c0.8-0.2,5.8-2.6,5.8-2.6l3,11.7c3.2,1.3,18.3,1.8,26.1,5.9
 c7.8,4.1,28.4,30.3,28.4,30.3s17.5-28,23.2-36.3C398.8,281.4,406.3,281.5,412.4,286.6z"/>
<path class="st3" d="M289.2,421.5l-7,3c0,0,0,0,0,0c-0.5,0.3-4.5,3.1-14.9,5.8c-11.6,3-19.3,2.8-24.3-2.2c-1.4-1.4-1.8-7,7.4-11.3
 c9.4-4.4,27.8-4.3,27.8-4.3s6.3-1,6.7-2c0.5-1.2,3.2,0.5,3.2,0.5L289.2,421.5z"/>
<path class="st1" d="M378.1,389.7c-11.3,10.2-40.3,21.9-65.8,28.9c-3.1,0.9-6.2,1.7-9.2,2.4c-5.5,1.3-10.6,2.4-15.2,3.1
 c0,0-4.8-5.1-5.2-13.3v0l2-1.2l65.9-38.3l-10.6-6.8l13.5-1.3c0,0,14-4.8,24.8-2C389.2,364,393.3,376.1,378.1,389.7z"/>
<path class="st5" d="M363.5,321.7L352,369.9c0,0.8-0.6,1.4-1.4,1.4h-76.9c-0.3,0-0.6-0.1-0.8-0.2c-0.4-0.3-0.6-0.7-0.6-1.2
 l-11.5-48.2c0-0.8,0.7-1.4,1.4-1.4h99.9c0.4,0,0.8,0.2,1.1,0.5C363.3,321,363.5,321.3,363.5,321.7z"/>
<circle class="st2" cx="312.7" cy="347.1" r="3.9"/>
<path class="st3" d="M329.2,259.8c-1.1,2.5-4.1,2.3-4.1,2.3l-0.5,2.1v0c-1.5,4.7-5.1,7.7-7.5,8.5c-2.2,0.8-4.8,0.7-5.6,0.6
 c-0.9,0.1-3.4,0.2-5.6-0.6c-2.5-0.9-6.5-4.3-7.8-9.6c-0.1-0.3-0.1-0.6-0.1-0.7c0-0.1,0-0.2-0.1-0.4c0,0-2.9,0.2-4-2.3
 c-1.1-2.5-1-5.5,1.6-5.6c0,0,0,0,0-0.1c-0.2-1-2.6-9.7-1.8-14c0.9-4.7,3.4-7.1,3.4-7.1s-1.1-2.5-0.4-4.2c0.7-1.7,3-3.2,3-3.2
 c5-2.6,11-2,16-0.5c4.1,1.1,5.5,4,5.5,4s4,1.3,6.2,5.7c3,5.8,0.2,19.5,0.2,19.5C330.2,254.3,330.3,257.2,329.2,259.8z"/>
<path class="st3" d="M321.1,281.5c0,0-2,6.1-8.4,6.5c-6.3,0.4-9.2-6.5-9.2-6.5l3-11.7c0,0,5,2.4,5.8,2.6c0.8-0.2,5.8-2.6,5.8-2.6
 L321.1,281.5z"/>
<path class="st6" d="M327.5,234.7c-2.2-4.5-6.2-5.7-6.2-5.7s-1.5-2.8-5.5-4c-5.1-1.5-11.1-2.1-16,0.5c0,0-2.3,1.5-3,3.2
 c-0.7,1.7,0.4,4.2,0.4,4.2s-2.5,2.4-3.4,7.1c-0.8,4.3,1.5,13.1,1.8,14c0,0,0,0.1,0,0.1s1.9,6,2.5,7.9c0,0.1,0,0.2,0.1,0.4
 c0,0.1,0.1,0.4,0.1,0.7c1.3,5.3,5.3,8.7,7.8,9.6c2.2,0.8,4.7,0.7,5.6,0.6c0.9,0.1,3.4,0.2,5.6-0.6c2.3-0.8,5.9-3.8,7.5-8.5v0
 l0.5-2.1c0,0,1.6-6.6,2.5-7.9C327.7,254.2,330.4,240.5,327.5,234.7z M324.9,258c-0.3,2.9-0.8,7.6-3.6,7.1c-2.7-0.5-3.9-2.7-5.3-3.7
 c-1.4-1-3.8-1-3.8-1c-1.9-0.2-4.4,1.5-5.9,3.1c-1.5,1.5-5.1,0.9-6.3-0.4c-1.2-1.2-2-6.2-2-6.2s1.6-2.7,1.9-4.9
 c0.3-2.2-1.2-8.3,1.3-9.9c2.4-1.6,6-2.6,8.7-2.3s-1.2,1.9-1.7,3.9c-0.4,1.9,5.3,3.1,8.9,2.8c3.7-0.2,6-2.2,7.9-2.1
 C326.9,244.3,325.3,255.2,324.9,258z"/>
<path class="st2" d="M312.3,418.7c-3.1,0.9-6.2,1.7-9.2,2.4c-8-3.9-17.5-8.6-20.5-10.2v0l2-1.2C284.7,409.7,310.7,417.8,312.3,418.7
 z"/>
<path class="st7" d="M282.2,424.6C282.2,424.6,282.2,424.6,282.2,424.6c-0.5,0.4-4.5,3.2-14.9,5.8c-11.6,3-19.3,2.8-24.3-2.2
 c-1.4-1.4-1.8-7,7.4-11.3c9.4-4.4,27.8-4.3,27.8-4.3s-5.8,1.2-6,6.2C272,423.7,282.2,424.6,282.2,424.6z"/>
<path class="st7" d="M381.6,428.2c-5,5-12.7,5.2-24.3,2.2c-11-2.9-14.9-5.8-14.9-5.8s7.5-0.8,8.9-5c1.3-4.2-4.9-7-4.9-7s0,0,0.1,0
 c1.6,0,18.8,0.1,27.7,4.3C383.4,421.2,383,426.7,381.6,428.2z"/>
<path class="st8" d="M227.1,386.1c-0.5,2.2-1,6.6,0.9,13.1c1.3,4.4,15.7,22.4,10.8,30.2c2.1,4.4-3.7,11.3-15.2,10.2
 c-11.2-1.1-20.1-2.2-23.7,0c-6.1,3.7-3.5,8.1-7.2,8.1c-6.7,0-4.9-9.5-0.7-12.7c5.8-4.3,15.4-3.1,15.4-3.1
 c-8.2-3.1-0.7-27.4-0.7-27.4s1.4-8.6,4.6-16.5c2.3-5.7,5-10.4,7.5-12.3c-1.1-4.6,0.1-9,3.5-10.9c0.7-0.4,1.5-0.6,2.4-0.7l-0.1,0
 c0,0,10.7-4.2,9-1.2l-2.1,3.1c1.7,1.2,3.4,3,4.6,5.1c1.4,2.5,2,5.1,1.9,7.5c1.6,0,3.9,0.2,3.7,0.8c-0.2,1-4.2,4.3-6.3,5.7
 c0,0,0,0-0.1,0c-0.4,0.4-0.8,0.7-1.2,0.9C232,387.2,229.5,387.1,227.1,386.1z"/>
<path class="st2" d="M218.9,375.7c0,0,2.8,7.1,8.2,10.3c0,0-3,4.2-5.7,1.8C218.7,385.6,218.9,375.7,218.9,375.7z"/>
<path class="st9" d="M231.9,375.3c0,0-1.7-3.6-2.3-2.5c-0.5,0.9-0.7,2.5,0,2.7S232.7,376.5,231.9,375.3z"/>
<path class="st7" d="M233.7,362.9l-2.1,3.1c0,0-3-1.8-6.9-1.9C224.7,364.1,235.4,359.9,233.7,362.9z"/>
<path class="st7" d="M241.7,379.4c-0.2,1-4.2,4.3-6.3,5.7c0,0,0,0-0.1,0c2.3-2.4,2.6-6.6,2.6-6.6
 C239.7,378.6,241.9,378.8,241.7,379.4z"/>
<path class="st7" d="M223.6,439.6c-11.2-1.1-20.1-2.2-23.7,0c-6.1,3.7-3.5,8.1-7.2,8.1c-6.7,0-4.9-9.5-0.7-12.7
 c5.8-4.3,15.4-3.1,15.4-3.1c2.1,0.5,10,3.6,20.6,1.5c10.6-2,10.6-4,10.6-4.1C240.9,433.8,235.1,440.7,223.6,439.6z"/>
<path class="st10" d="M116.2,203.8c0.5-0.7,0.8-1.1,2.3-1.3c1.5-0.3,2.1-0.7,4-2.5c2-1.8,5.1-2.5,8.3-2.3s5.6,1.4,5.6,1.4
 c-0.6-2.1,1.5-3.1,2-3.6c0.4-0.4,0.6-1.3,0.6-1.3c3.4,1.5,4.6,5,3.3,8.2c-1.4,3.2-5,3.4-5,3.4s2.1,1,4.8-0.3c2.7-1.3,3.1-4.5,3.1-5
 c0,0,2.5,1.5,4.1,6.9c1.6,5.4,0,11-2,13.4c0,0,0.2-2.7-0.5-4.4c0,0-0.1,5.9-5.7,9.7c0,0,1.6-2.5,2-5.4c0,0-3.3,6.4-11,7
 c0,0,3.1-1.2,5.1-4.4c0,0-0.9,0.9-4.2,1.1c0,0,2.6-1.4,3.4-4.4c0.7-2.8,0.3-4.6,0.3-4.6s-0.7,4.5-4.4,6.2s-7.4,0.5-8.2-0.3l1.4,0
 c0,0-1.6-1.1-1.8-2.9c-0.3-2.1,1.1-3.2,2.4-3c1.3,0.2,0.4,1.7,0.4,1.7s-0.2,1.7,2.4,1.8c0,0,0.1-0.1,0.4-0.7
 c0.3-0.5,0.6-1.5,0.6-1.5l0.1,1.7c0,0,1.1-0.9,1.2-1.3c0.1-0.4,0.3-0.8,0.5-0.8c0.8,0,1.5,1.1,1.5,1.1c-0.2-2.7-1.4-5-4.3-7.3
 c-3.2-2.5-8.1-1.5-8.1-1.5l-1.2,1.4l0-1.5l-0.7,1l-0.2-1.3c-1.4-0.4-1.5-1.8-1.5-1.8C115.7,205.8,115.6,204.7,116.2,203.8z
  M136.2,195.1c-0.2,0.8-1,2.2-0.4,3.1c0,0,0-1.9,1.9-2.8c0,0,0.3-1.7-2.3-1.6C135.4,193.7,136.4,194.3,136.2,195.1z"/>
<path class="st10" d="M212.4,92.5L212.4,92.5L212.4,92.5l-10.2,23h3.9l2-5.1h4.9v0l3.7,0l2,5.1h3.9L212.4,92.5L212.4,92.5
 L212.4,92.5z M215.3,107.2l-3.6,0h-2.3l2.9-7.2L215.3,107.2z M228.9,94l-16.2-5.9c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0
 c0,0,0,0-0.1,0L196,94c-0.2,0.1-0.4,0.3-0.4,0.6l2.4,21.6c0,0.2,0.1,0.3,0.3,0.4l13.8,7.7c0,0,0,0,0,0l0,0c0.1,0,0.2,0.1,0.3,0.1
 c0.1,0,0.2,0,0.3-0.1l0,0c0,0,0,0,0,0l13.8-7.7c0.2-0.1,0.3-0.2,0.3-0.4l2.4-21.6C229.3,94.3,229.1,94.1,228.9,94z M225.7,115.8
 l-13.3,7.4l-13.3-7.4l-2.4-20.9l15.7-5.7l15.6,5.6L225.7,115.8z"/>
<path class="st10" d="M281.5,108.6c0,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1c0,0,0,0,0,0
 c0.1,0,0.1-0.1,0.2-0.2c0,0,0,0,0,0l17.5-30.4c0.1-0.2,0.1-0.3,0-0.5c-0.1-0.2-0.2-0.2-0.4-0.2h-7h-6.6c-0.2,0-0.3,0.1-0.4,0.3
 l-3.5,6.4l-3.5-6.4c-0.1-0.2-0.3-0.3-0.4-0.3h-6.6h-7c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.2-0.1,0.3,0,0.5L281.5,108.6
 C281.5,108.6,281.5,108.6,281.5,108.6z M271.1,78.5l10.4,17.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0.1
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l10.4-17.8h5.9l-16.7,28.9l-16.7-28.9
 H271.1z"/>
<path class="st10" d="M360.2,84.2c1.1-4.4,0.7-7.9-1.4-9.1c-1.7-1-4.2-0.3-7.1,2c-0.5,0.4-1,0.9-1.5,1.3c-3.3-3.1-6.5-4.5-8.6-3.3
 c-2.1,1.2-2.5,4.7-1.4,9.1c-4.4,1.3-7.1,3.4-7.1,5.8c0,2.4,2.8,4.5,7.1,5.8c-1.1,4.4-0.7,7.9,1.4,9.1c0.5,0.3,1.1,0.4,1.7,0.4
 c1.9,0,4.4-1.4,6.9-3.7c0.5,0.5,1,0.9,1.5,1.3c2,1.6,3.8,2.4,5.3,2.4c0.6,0,1.2-0.1,1.7-0.4c2.1-1.2,2.5-4.7,1.4-9.1
 c4.4-1.3,7.1-3.4,7.1-5.8C367.3,87.5,364.5,85.5,360.2,84.2z M352.5,78c1.7-1.4,3.3-2.1,4.5-2.1c0.4,0,0.8,0.1,1.1,0.3
 c1.5,0.8,1.8,3.7,0.9,7.7c-1.5-0.4-3.1-0.6-4.8-0.8c-1-1.4-2-2.7-3.1-3.8C351.5,78.8,352,78.4,352.5,78z M355.2,92.9
 c-0.6,1-1.2,1.9-1.8,2.8c-1,0.1-2.1,0.1-3.3,0.1c-1.1,0-2.2,0-3.3-0.1c-0.6-0.9-1.2-1.8-1.8-2.8c-0.6-1-1.1-2-1.5-2.9
 c0.5-0.9,1-1.9,1.5-2.9c0.6-1,1.1-1.9,1.8-2.8c1-0.1,2.1-0.1,3.3-0.1c1.1,0,2.2,0,3.3,0.1c0.6,0.9,1.2,1.8,1.8,2.8
 c0.6,1,1.1,2,1.5,2.9C356.3,90.9,355.8,91.9,355.2,92.9z M357.4,91.4c0.5,1.2,0.9,2.4,1.3,3.5c-1.1,0.3-2.3,0.5-3.6,0.6
 c0.4-0.6,0.8-1.3,1.2-2C356.7,92.8,357.1,92.1,357.4,91.4z M350.2,99.7c-0.8-0.8-1.6-1.8-2.4-2.8c0.8,0,1.6,0.1,2.4,0.1
 c0.8,0,1.6,0,2.4-0.1C351.8,98,351,98.9,350.2,99.7z M345.3,95.5c-1.3-0.2-2.5-0.4-3.6-0.6c0.3-1.1,0.7-2.2,1.3-3.5
 c0.3,0.7,0.7,1.4,1.1,2.1C344.5,94.2,344.9,94.8,345.3,95.5z M343,88.5c-0.5-1.2-0.9-2.4-1.3-3.5c1.1-0.3,2.3-0.5,3.6-0.6
 c-0.4,0.7-0.8,1.3-1.2,2C343.7,87.1,343.3,87.8,343,88.5z M352.5,83c-0.8,0-1.5-0.1-2.3-0.1c-0.8,0-1.6,0-2.4,0.1
 c0.8-1,1.6-2,2.4-2.8C351,81,351.8,81.9,352.5,83z M356.3,86.4c-0.4-0.7-0.8-1.4-1.2-2c1.3,0.2,2.5,0.4,3.6,0.6
 c-0.3,1.1-0.7,2.2-1.3,3.5C357.1,87.8,356.7,87.1,356.3,86.4z M342.3,76.2c0.3-0.2,0.7-0.3,1.1-0.3c1.5,0,3.7,1.2,6,3.4
 c-1.1,1.1-2.1,2.4-3.1,3.8c-1.7,0.2-3.4,0.4-4.8,0.8C340.4,79.9,340.8,77,342.3,76.2z M334.3,89.9c0-1.7,2.3-3.4,6.2-4.6
 c0.4,1.5,1,3,1.7,4.6c-0.7,1.6-1.3,3.1-1.7,4.6C336.6,93.4,334.3,91.6,334.3,89.9z M342.3,103.7c-1.5-0.8-1.8-3.7-0.9-7.7
 c1.5,0.4,3.1,0.6,4.8,0.8c1,1.4,2,2.7,3.1,3.8C346.4,103.4,343.7,104.6,342.3,103.7z M358.1,103.7c-1.2,0.7-3.3,0-5.7-1.9
 c-0.5-0.4-0.9-0.8-1.4-1.3c1-1.1,2.1-2.4,3.1-3.8c1.7-0.2,3.4-0.4,4.8-0.8C360,100,359.6,102.9,358.1,103.7z M359.9,94.5
 c-0.4-1.5-1-3-1.7-4.6c0.7-1.6,1.3-3.1,1.7-4.6c3.9,1.1,6.2,2.9,6.2,4.6C366.1,91.6,363.8,93.4,359.9,94.5z M353.4,89.9
 c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2S353.4,88.2,353.4,89.9z"/>
<path class="st10" d="M432.4,92h-29.2c-2,0-3.6,1.6-3.6,3.6v29.2c0,2,1.6,3.6,3.6,3.6h29.2c2,0,3.6-1.6,3.6-3.6V95.5
 C436,93.6,434.4,92,432.4,92z M434.9,124.7c0,1.3-1.1,2.4-2.4,2.4h-29.2c-1.3,0-2.4-1.1-2.4-2.4V95.5c0-1.3,1.1-2.4,2.4-2.4h29.2
 c1.3,0,2.4,1.1,2.4,2.4V124.7z M432,118.1c0.5,0.8,0.8,2.8-0.1,4.4c-0.6,1.1-2.1,2.1-5,2.3c-3.1,0.1-4.9-0.8-4.9-0.8v-3.4
 c0.9,0.8,2.5,1.5,4.3,1.5c1.5,0,2.3-0.5,2.5-1.4c0.1-0.6-0.2-1-0.5-1.3c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0
 c-0.3-0.2-0.7-0.5-1.2-0.7c-1.1-0.5-1.9-0.7-3.3-1.7c-1.3-0.9-2.1-2.9-1.4-4.8c0.7-1.9,2.4-2.9,5.4-3.1c2.9-0.1,4.3,0.6,4.3,0.6v3.3
 c0,0-1.4-1.1-3.7-1.1c-2.1,0-2.9,1-2.5,2C426.4,115.2,430.7,115.6,432,118.1C432,118,432,118,432,118.1C432,118,432,118.1,432,118.1
 C432,118.1,432,118.1,432,118.1z M415.2,109.2h5.4v2.8h-4.4v12.6h-1.1h-1.4h-1.1v-12.6h-4.4v-2.8h5.4H415.2z"/>
<path class="st10" d="M471.4,160.6c0,3.9-3.1,7-7,7c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7C468.2,153.6,471.4,156.7,471.4,160.6z
  M478.3,150.1c2.2,2.9,3.6,6.6,3.6,10.5c0,9.7-7.9,17.5-17.5,17.5s-17.5-7.9-17.5-17.5s7.9-17.5,17.5-17.5c4,0,7.7,1.4,10.6,3.6
 c0.4-0.3,0.9-0.5,1.5-0.5c1.3,0,2.4,1.1,2.4,2.4C478.9,149.1,478.7,149.7,478.3,150.1z M481.2,160.6c0-3.8-1.3-7.2-3.4-10
 c-0.4,0.3-0.8,0.4-1.3,0.4c-1.3,0-2.4-1.1-2.4-2.4c0-0.5,0.1-1,0.4-1.3c-2.8-2.1-6.3-3.4-10.1-3.4c-9.2,0-16.8,7.5-16.8,16.8
 c0,9.3,7.5,16.8,16.8,16.8C473.6,177.4,481.2,169.8,481.2,160.6z"/>
<path class="st10" d="M146.3,151.5c-0.6,2.8-0.4,5.3-0.2,7c-0.6-0.6-1.5-1.8-1.4-2.6c0.2-1.2,1.2-1.5,1-2.8c-0.2-1.3-1-2.3-0.7-3.6
 c0.3-1.2,1.7-2.1,2.3-2.8c0.7-0.7,0.4-2,0.5-2.9c0.1-0.9,0.8-2.1,2.1-2.2c1.3-0.2,2.2-0.2,3.2-1c1-0.8,1.3-2.5,3.6-2.6
 c1.6-0.1,3,0.8,3.8,1.4c-1.8,0.1-4.6,0.5-7,2C149.9,143.6,147.1,147.4,146.3,151.5z M177.5,159.3c2-3.9,1-6.6,1-6.6
 s-1.1,3.3-3.4,4.9c0,0,2.2-3.1,1.9-6.3c-0.3-3.2-1.8-4.4-1.8-4.4s1.1,2.5,0.2,6.4c-1,3.9-4.2,7.2-5.8,8c0,0,3,0.5,5.4-1.3
 c-0.4,0.5-4.1,4.4-9.5,4.6c0,0,1.6,2.2,5.1,2.2c0,0-3.1,0.9-7.2-0.7c-4-1.6-6.1-4.7-6.2-4.7c0,0.1,0.4,3,2.5,4.8
 c-0.6-0.3-4.9-2.4-5.5-6.6c-0.6-4.1,0-6.2,2.2-8.4c1.6-1.5,3.5-2.1,4.5-2.3c-4.6-2.3-8.2-1.9-11,1c-3.1,3.2-3.1,7.6-2.9,9.8
 c0,0,0,0,0,0c0.2,0.6,1.5,4.7,5.2,7.6c4,3.1,8.2,5.3,16,3.7c7.1-1.5,10.1-9,10.2-9.4c-0.2,0.2-3.3,2.9-6.2,2.9
 C172.2,164.3,175.5,163.2,177.5,159.3z M149.5,149.4c-2.1,2.1-2.8,4.8-3,7.1c-0.1-1.4,0-3.1,0.4-4.8c0.8-4,3.4-7.7,7-9.8
 c2.6-1.6,5.6-1.9,7.4-1.9c7.2,0.9,10.3,3.9,12.1,6.5c1.5,2.1,1.5,4.6-2.6,4.6c-3.2,0-7-1.5-8.5-2.1
 C156.9,145.9,152.7,146,149.5,149.4z M165,145.5c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7
 C165.3,144.8,165,145.1,165,145.5z M153.9,143.8c0,0.8,0.6,2.1,1.3,2.2h0.2c1,0,4.4-0.2,4.8-0.3c0.1,0,0.2-0.1,0.2-0.3
 c0-0.1-0.1-0.2-0.3-0.2c0,0,0,0,0,0c-1.2,0.1-4.5,0.3-5,0.3c-0.3,0-0.8-1-0.9-1.7c0-0.5,1.1-1.1,1.9-1.3c0.4-0.1,3,0.7,4.6,1.4
 c0.1,0.1,0.3,0,0.3-0.2c0.1-0.1,0-0.3-0.1-0.3c-0.7-0.3-4.2-1.6-4.9-1.4C155.5,142.2,153.8,142.9,153.9,143.8z"/>
<path class="st10" d="M483.8,220.6l-5.3,8.4l-8.9-14.4v15.1h-6.3v-25.6h6.3l9,15.2v-6.8L483.8,220.6z M484.9,210.7v-6.6h-6.3v6.6
 H484.9z M495,211.3c-5.3,0.1-7.5,4.1-7.5,4.1l-2.6-4.1h-6.2l5.9,9.3l-5.8,9.1h6.1l2.6-4.1l2.7,4.1h6.1l-5.6-8.9
 c-0.2-1,0.2-2.1,1-3.3c0.7-1,2-1.7,3.8-1.6c1.8,0.1,2.5,0.9,3.1,2c0.6,1,1.6,1.3,2.2,1.4c0.5,0.1,1.3,0.6,1.3,1.5
 c0,0.8,0.7,1.2,1,1.2c0.3,0,1.2,0.2,1.4-1.2c0.2-1.3-0.6-3.9-1.4-5.1C502.5,215,500.2,211.2,495,211.3z M499.6,219.3
 c-0.8-0.3-1.2-0.9-1.7-1.7c-0.7-1-2-1.5-3.7-1.2c-2.1,0.5-2.9,2.4-2.9,2.4c0.7-1,2.3-1.8,4-1.5c1.7,0.4,2.4,1.5,2.8,2.3
 c0.4,0.7,1.1,0.5,1.6,0.6c0.5,0,0.5,0.2,0.8,0.4c0.2,0.3,1,0.6,1,0.4c0-0.1,0.1-0.7-0.3-1C501.1,219.8,500.4,219.6,499.6,219.3z
  M493.7,217.9c-1.6,0.3-2.4,2-2.4,2s0.8-1.1,2.3-1.2c1.5-0.1,2.1,0.4,2.7,0.6c0.7,0.2,1.1,0,1.1,0
 C496.6,218.3,495.3,217.6,493.7,217.9z"/>
<g>
 <g>
   <path class="st11" d="M281.9,115.5c0,0,0,0.2-0.1,0.5"/>
   <path class="st12" d="M281.7,117c-0.5,5-1.7,21.7,3.8,39.4c9.9,32,35,28.4,33,58.9"/>
   <path class="st11" d="M318.5,215.9c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st11" d="M350.2,109.2c0,0,0,0.2-0.1,0.5"/>
   <path class="st13" d="M349.9,110.7c-1,4.6-3.9,19.7-2,34.1c2.3,17.3,15.6,53.3-21.1,73.5"/>
   <path class="st11" d="M326.3,218.6c-0.1,0.1-0.3,0.2-0.4,0.2"/>
 </g>
</g>
<g>
 <g>
   <path class="st11" d="M419.2,134.1c0.1,0.1,0.1,0.2,0.2,0.5"/>
   <path class="st14" d="M419.4,135.6c-0.3,5.9-7,27.7-31.2,34.3c-27.1,7.5-78.4,1.1-83,45.4"/>
   <path class="st11" d="M305.2,215.9c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st11" d="M452.6,178.1c0,0,0,0.2-0.1,0.5"/>
   <path class="st15" d="M452.2,179.5c-2.5,7.5-15.9,42.3-51.3,48.2c-32.1,5.3-49.3,0-64.5,3.5"/>
   <path class="st11" d="M335.8,231.3c-0.2,0-0.3,0.1-0.5,0.1"/>
 </g>
</g>
<g>
 <g>
   <path class="st11" d="M455,223.1c0,0-0.2-0.1-0.5-0.2"/>
   <path class="st16" d="M453.6,222.6c-3.8-1.3-15.2-5.2-36.8-11.3c-26.8-7.6-53.2-6.3-84.1,11.9"/>
   <path class="st11" d="M332.3,223.4c-0.1,0.1-0.3,0.2-0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st11" d="M222.7,127.1c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st17" d="M223.7,128.2c3.5,3.5,14.8,15.5,25,34.9c15.4,29.5,10.8,39.3,39.7,60.1"/>
   <path class="st11" d="M288.8,223.4c0.1,0.1,0.3,0.2,0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st11" d="M176.8,174.7c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st18" d="M178,175.6c3.5,2.2,15.1,8,44.6,9.8c21.2,1.3,58.7-10.5,75,30"/>
   <path class="st11" d="M297.9,215.9c0.1,0.2,0.1,0.3,0.2,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st11" d="M155.7,215.3c0,0,0.1-0.1,0.4-0.3"/>
   <path class="st19" d="M157,214.5c5.5-3.3,27.9-15.1,53.9-7.1c22.4,6.9,47.7,25.6,73.6,23.9"/>
   <path class="st11" d="M285,231.3c0.2,0,0.3,0,0.5,0"/>
 </g>
</g>
</svg>
`,
    name: 'custom_workshops_2',
    theme: 'fill',
};
const custom_workshops_3 = {
    icon: `<svg version="1.1" id="Layer_6_copy_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
  y="0px" viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#E01D85;}
 .st1{opacity:0.2;fill:#3D3D75;}
 .st2{fill:#EFD1C7;}
 .st3{fill:#99CFF8;}
 .st4{fill:#EFEFEF;}
 .st5{fill:#F5C85C;}
 .st6{fill:#363636;}
 .st7{fill:#F4F4F4;}
 .st8{fill:#EDBCDA;}
 .st9{fill:#FFFFFF;}
 .st10{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;}
 .st11{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0016,1.0016;}
 .st12{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0039,1.0039;}
 .st13{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.9948,0.9948;}
 .st14{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.994,0.994;}
 .st15{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0046,1.0046;}
 .st16{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0083,1.0083;}
 .st17{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0062,1.0062;}
 .st18{fill:none;stroke:#FFFFFF;stroke-width:0.35;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0041,1.0041;}
</style>
<path class="st0" d="M361.7,379.2c0,0-2.4-12.9-12.6-13.4c-10.2-0.4-62.7,0.3-68.6,1s-18.5,4.5-19.7,6.8s27,20.2,28.5,21.8
 c1.5,1.6,14.6,7.6,20.2,6.7c5.6-0.9,22.9-10,25.9-10.7S361.7,379.2,361.7,379.2z"/>
<path class="st1" d="M361.7,379.2c0,0-2.4-12.9-12.6-13.4c-10.2-0.4-62.7,0.3-68.6,1s-18.5,4.5-19.7,6.8s27,20.2,28.5,21.8
 c1.5,1.6,14.6,7.6,20.2,6.7c5.6-0.9,22.9-10,25.9-10.7S361.7,379.2,361.7,379.2z"/>
<path class="st2" d="M381.6,428.2c-5,5-12.7,5.2-24.3,2.2c-11-2.9-14.9-5.8-14.9-5.8l-7-3l1-10.6c0,0,2.8-1.6,3.2-0.5
 c0.4,1,6.7,2,6.7,2s0,0,0.1,0c1.6,0,18.8,0.1,27.7,4.3C383.4,421.2,383,426.7,381.6,428.2z"/>
<path class="st0" d="M284.6,364.5l-13.5-1.3c0,0-14-4.8-24.8-2c-10.8,2.8-14.9,14.9,0.2,28.5s62.6,30.1,90.3,34.4
 c0,0,4.8-5.1,5.2-13.3L274,371.3L284.6,364.5z"/>
<path class="st2" d="M408,288c0,0,5.5-7.6,7.7-10.1c2.2-2.5,6.4-6.3,7.9-8.1c3.5-4.1,4-10.8,3.5-11.1c-0.5-0.3-4.7,0.8-5.9,3.1
 s-2.5,5.3-5.7,7c-3.3,1.7-6,4.2-7.6,4c-1.6-0.2-3.5-2.3-3.6-3.5c-0.1-1.2,0.5-4.5-0.5-5.9s-1.6-0.9-1.8-0.4
 c-0.2,0.4-2.1,3.8-1.7,6.5s-0.3,7.2-0.1,8.3c0.2,1.1,1,5.4,0,7.9C399.2,287.8,408,288,408,288z"/>
<path class="st2" d="M216.6,288c0,0-5.5-7.6-7.7-10.1c-2.2-2.5-6.4-6.3-7.9-8.1c-3.5-4.1-4-10.8-3.5-11.1c0.5-0.3,4.7,0.8,5.9,3.1
 s2.5,5.3,5.7,7c3.3,1.7,6,4.2,7.6,4c1.6-0.2,3.5-2.3,3.6-3.5s-0.5-4.5,0.5-5.9s1.6-0.9,1.8-0.4c0.2,0.4,2.1,3.8,1.7,6.5
 c-0.4,2.7,0.3,7.2,0.1,8.3c-0.2,1.1-1,5.4,0,7.9C225.3,287.8,216.6,288,216.6,288z"/>
<path class="st3" d="M412.4,286.6c0,0-14.5,29.2-20.5,39.3c-5.9,10.1-11.8,16.7-14.8,16c-6.6-1.5-33.1-27.2-33.7-26.7
 c-0.5,0.5-3,5.6-2.8,5.8c0.1,0.2-21.4,0.1-28.4,0c-7,0.1-28.5,0.2-28.4,0c0.1-0.3-2.3-5.3-2.8-5.8c-0.5-0.5-27,25.2-33.7,26.7
 c-3,0.6-8.8-6-14.8-16c-6-10.1-20.5-39.3-20.5-39.3c6.1-5.1,13.6-5.2,13.6-5.2c5.7,8.3,23.2,36.3,23.2,36.3s20.6-26.2,28.4-30.3
 c7.8-4.1,22.9-4.6,26.1-5.9l3-11.7c0,0,5,2.4,5.8,2.6c0.8-0.2,5.8-2.6,5.8-2.6l3,11.7c3.2,1.3,18.3,1.8,26.1,5.9
 c7.8,4.1,28.4,30.3,28.4,30.3s17.5-28,23.2-36.3C398.8,281.4,406.3,281.5,412.4,286.6z"/>
<path class="st2" d="M289.2,421.5l-7,3c0,0,0,0,0,0c-0.5,0.3-4.5,3.1-14.9,5.8c-11.6,3-19.3,2.8-24.3-2.2c-1.4-1.4-1.8-7,7.4-11.3
 c9.4-4.4,27.8-4.3,27.8-4.3s6.3-1,6.7-2c0.5-1.2,3.2,0.5,3.2,0.5L289.2,421.5z"/>
<path class="st0" d="M378.1,389.7c-11.3,10.2-40.3,21.9-65.8,28.9c-3.1,0.9-6.2,1.7-9.2,2.4c-5.5,1.3-10.6,2.4-15.2,3.1
 c0,0-4.8-5.1-5.2-13.3v0l2-1.2l65.9-38.3l-10.6-6.8l13.5-1.3c0,0,14-4.8,24.8-2C389.2,364,393.3,376.1,378.1,389.7z"/>
<path class="st4" d="M363.5,321.7L352,369.9c0,0.8-0.6,1.4-1.4,1.4h-76.9c-0.3,0-0.6-0.1-0.8-0.2c-0.4-0.3-0.6-0.7-0.6-1.2
 l-11.5-48.2c0-0.8,0.7-1.4,1.4-1.4h99.9c0.4,0,0.8,0.2,1.1,0.5C363.3,321,363.5,321.3,363.5,321.7z"/>
<circle class="st1" cx="312.7" cy="347.1" r="3.9"/>
<path class="st2" d="M329.2,259.8c-1.1,2.5-4.1,2.3-4.1,2.3l-0.5,2.1v0c-1.5,4.7-5.1,7.7-7.5,8.5c-2.2,0.8-4.8,0.7-5.6,0.6
 c-0.9,0.1-3.4,0.2-5.6-0.6c-2.5-0.9-6.5-4.3-7.8-9.6c-0.1-0.3-0.1-0.6-0.1-0.7c0-0.1,0-0.2-0.1-0.4c0,0-2.9,0.2-4-2.3
 c-1.1-2.5-1-5.5,1.6-5.6c0,0,0,0,0-0.1c-0.2-1-2.6-9.7-1.8-14c0.9-4.7,3.4-7.1,3.4-7.1s-1.1-2.5-0.4-4.2c0.7-1.7,3-3.2,3-3.2
 c5-2.6,11-2,16-0.5c4.1,1.1,5.5,4,5.5,4s4,1.3,6.2,5.7c3,5.8,0.2,19.5,0.2,19.5C330.2,254.3,330.3,257.2,329.2,259.8z"/>
<path class="st2" d="M321.1,281.5c0,0-2,6.1-8.4,6.5c-6.3,0.4-9.2-6.5-9.2-6.5l3-11.7c0,0,5,2.4,5.8,2.6c0.8-0.2,5.8-2.6,5.8-2.6
 L321.1,281.5z"/>
<path class="st5" d="M327.5,234.7c-2.2-4.5-6.2-5.7-6.2-5.7s-1.5-2.8-5.5-4c-5.1-1.5-11.1-2.1-16,0.5c0,0-2.3,1.5-3,3.2
 c-0.7,1.7,0.4,4.2,0.4,4.2s-2.5,2.4-3.4,7.1c-0.8,4.3,1.5,13.1,1.8,14c0,0,0,0.1,0,0.1s1.9,6,2.5,7.9c0,0.1,0,0.2,0.1,0.4
 c0,0.1,0.1,0.4,0.1,0.7c1.3,5.3,5.3,8.7,7.8,9.6c2.2,0.8,4.7,0.7,5.6,0.6c0.9,0.1,3.4,0.2,5.6-0.6c2.3-0.8,5.9-3.8,7.5-8.5v0
 l0.5-2.1c0,0,1.6-6.6,2.5-7.9C327.7,254.2,330.4,240.5,327.5,234.7z M324.9,258c-0.3,2.9-0.8,7.6-3.6,7.1c-2.7-0.5-3.9-2.7-5.3-3.7
 c-1.4-1-3.8-1-3.8-1c-1.9-0.2-4.4,1.5-5.9,3.1c-1.5,1.5-5.1,0.9-6.3-0.4c-1.2-1.2-2-6.2-2-6.2s1.6-2.7,1.9-4.9
 c0.3-2.2-1.2-8.3,1.3-9.9c2.4-1.6,6-2.6,8.7-2.3s-1.2,1.9-1.7,3.9c-0.4,1.9,5.3,3.1,8.9,2.8c3.7-0.2,6-2.2,7.9-2.1
 C326.9,244.3,325.3,255.2,324.9,258z"/>
<path class="st1" d="M312.3,418.7c-3.1,0.9-6.2,1.7-9.2,2.4c-8-3.9-17.5-8.6-20.5-10.2v0l2-1.2C284.7,409.7,310.7,417.8,312.3,418.7
 z"/>
<path class="st6" d="M282.2,424.6C282.2,424.6,282.2,424.6,282.2,424.6c-0.5,0.4-4.5,3.2-14.9,5.8c-11.6,3-19.3,2.8-24.3-2.2
 c-1.4-1.4-1.8-7,7.4-11.3c9.4-4.4,27.8-4.3,27.8-4.3s-5.8,1.2-6,6.2C272,423.7,282.2,424.6,282.2,424.6z"/>
<path class="st6" d="M381.6,428.2c-5,5-12.7,5.2-24.3,2.2c-11-2.9-14.9-5.8-14.9-5.8s7.5-0.8,8.9-5c1.3-4.2-4.9-7-4.9-7s0,0,0.1,0
 c1.6,0,18.8,0.1,27.7,4.3C383.4,421.2,383,426.7,381.6,428.2z"/>
<path class="st7" d="M227.1,386.1c-0.5,2.2-1,6.6,0.9,13.1c1.3,4.4,15.7,22.4,10.8,30.2c2.1,4.4-3.7,11.3-15.2,10.2
 c-11.2-1.1-20.1-2.2-23.7,0c-6.1,3.7-3.5,8.1-7.2,8.1c-6.7,0-4.9-9.5-0.7-12.7c5.8-4.3,15.4-3.1,15.4-3.1
 c-8.2-3.1-0.7-27.4-0.7-27.4s1.4-8.6,4.6-16.5c2.3-5.7,5-10.4,7.5-12.3c-1.1-4.6,0.1-9,3.5-10.9c0.7-0.4,1.5-0.6,2.4-0.7l-0.1,0
 c0,0,10.7-4.2,9-1.2l-2.1,3.1c1.7,1.2,3.4,3,4.6,5.1c1.4,2.5,2,5.1,1.9,7.5c1.6,0,3.9,0.2,3.7,0.8c-0.2,1-4.2,4.3-6.3,5.7
 c0,0,0,0-0.1,0c-0.4,0.4-0.8,0.7-1.2,0.9C232,387.2,229.5,387.1,227.1,386.1z"/>
<path class="st1" d="M218.9,375.7c0,0,2.8,7.1,8.2,10.3c0,0-3,4.2-5.7,1.8C218.7,385.6,218.9,375.7,218.9,375.7z"/>
<path class="st8" d="M231.9,375.3c0,0-1.7-3.6-2.3-2.5c-0.5,0.9-0.7,2.5,0,2.7S232.7,376.5,231.9,375.3z"/>
<path class="st6" d="M233.7,362.9l-2.1,3.1c0,0-3-1.8-6.9-1.9C224.7,364.1,235.4,359.9,233.7,362.9z"/>
<path class="st6" d="M241.7,379.4c-0.2,1-4.2,4.3-6.3,5.7c0,0,0,0-0.1,0c2.3-2.4,2.6-6.6,2.6-6.6
 C239.7,378.6,241.9,378.8,241.7,379.4z"/>
<path class="st6" d="M223.6,439.6c-11.2-1.1-20.1-2.2-23.7,0c-6.1,3.7-3.5,8.1-7.2,8.1c-6.7,0-4.9-9.5-0.7-12.7
 c5.8-4.3,15.4-3.1,15.4-3.1c2.1,0.5,10,3.6,20.6,1.5c10.6-2,10.6-4,10.6-4.1C240.9,433.8,235.1,440.7,223.6,439.6z"/>
<path class="st9" d="M116.2,203.8c0.5-0.7,0.8-1.1,2.3-1.3c1.5-0.3,2.1-0.7,4-2.5c2-1.8,5.1-2.5,8.3-2.3s5.6,1.4,5.6,1.4
 c-0.6-2.1,1.5-3.1,2-3.6c0.4-0.4,0.6-1.3,0.6-1.3c3.4,1.5,4.6,5,3.3,8.2c-1.4,3.2-5,3.4-5,3.4s2.1,1,4.8-0.3c2.7-1.3,3.1-4.5,3.1-5
 c0,0,2.5,1.5,4.1,6.9c1.6,5.4,0,11-2,13.4c0,0,0.2-2.7-0.5-4.4c0,0-0.1,5.9-5.7,9.7c0,0,1.6-2.5,2-5.4c0,0-3.3,6.4-11,7
 c0,0,3.1-1.2,5.1-4.4c0,0-0.9,0.9-4.2,1.1c0,0,2.6-1.4,3.4-4.4c0.7-2.8,0.3-4.6,0.3-4.6s-0.7,4.5-4.4,6.2s-7.4,0.5-8.2-0.3l1.4,0
 c0,0-1.6-1.1-1.8-2.9c-0.3-2.1,1.1-3.2,2.4-3c1.3,0.2,0.4,1.7,0.4,1.7s-0.2,1.7,2.4,1.8c0,0,0.1-0.1,0.4-0.7
 c0.3-0.5,0.6-1.5,0.6-1.5l0.1,1.7c0,0,1.1-0.9,1.2-1.3c0.1-0.4,0.3-0.8,0.5-0.8c0.8,0,1.5,1.1,1.5,1.1c-0.2-2.7-1.4-5-4.3-7.3
 c-3.2-2.5-8.1-1.5-8.1-1.5l-1.2,1.4l0-1.5l-0.7,1l-0.2-1.3c-1.4-0.4-1.5-1.8-1.5-1.8C115.7,205.8,115.6,204.7,116.2,203.8z
  M136.2,195.1c-0.2,0.8-1,2.2-0.4,3.1c0,0,0-1.9,1.9-2.8c0,0,0.3-1.7-2.3-1.6C135.4,193.7,136.4,194.3,136.2,195.1z"/>
<path class="st9" d="M212.4,92.5L212.4,92.5L212.4,92.5l-10.2,23h3.9l2-5.1h4.9v0l3.7,0l2,5.1h3.9L212.4,92.5L212.4,92.5L212.4,92.5
 z M215.3,107.2l-3.6,0h-2.3l2.9-7.2L215.3,107.2z M228.9,94l-16.2-5.9c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0
 L196,94c-0.2,0.1-0.4,0.3-0.4,0.6l2.4,21.6c0,0.2,0.1,0.3,0.3,0.4l13.8,7.7c0,0,0,0,0,0l0,0c0.1,0,0.2,0.1,0.3,0.1
 c0.1,0,0.2,0,0.3-0.1l0,0c0,0,0,0,0,0l13.8-7.7c0.2-0.1,0.3-0.2,0.3-0.4l2.4-21.6C229.3,94.3,229.1,94.1,228.9,94z M225.7,115.8
 l-13.3,7.4l-13.3-7.4l-2.4-20.9l15.7-5.7l15.6,5.6L225.7,115.8z"/>
<path class="st9" d="M281.5,108.6c0,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1c0,0,0,0,0,0
 c0.1,0,0.1-0.1,0.2-0.2c0,0,0,0,0,0l17.5-30.4c0.1-0.2,0.1-0.3,0-0.5c-0.1-0.2-0.2-0.2-0.4-0.2h-7h-6.6c-0.2,0-0.3,0.1-0.4,0.3
 l-3.5,6.4l-3.5-6.4c-0.1-0.2-0.3-0.3-0.4-0.3h-6.6h-7c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.2-0.1,0.3,0,0.5L281.5,108.6
 C281.5,108.6,281.5,108.6,281.5,108.6z M271.1,78.5l10.4,17.8c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0.1
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0,0
 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l10.4-17.8h5.9l-16.7,28.9l-16.7-28.9
 H271.1z"/>
<path class="st9" d="M360.2,84.2c1.1-4.4,0.7-7.9-1.4-9.1c-1.7-1-4.2-0.3-7.1,2c-0.5,0.4-1,0.9-1.5,1.3c-3.3-3.1-6.5-4.5-8.6-3.3
 c-2.1,1.2-2.5,4.7-1.4,9.1c-4.4,1.3-7.1,3.4-7.1,5.8c0,2.4,2.8,4.5,7.1,5.8c-1.1,4.4-0.7,7.9,1.4,9.1c0.5,0.3,1.1,0.4,1.7,0.4
 c1.9,0,4.4-1.4,6.9-3.7c0.5,0.5,1,0.9,1.5,1.3c2,1.6,3.8,2.4,5.3,2.4c0.6,0,1.2-0.1,1.7-0.4c2.1-1.2,2.5-4.7,1.4-9.1
 c4.4-1.3,7.1-3.4,7.1-5.8C367.3,87.5,364.5,85.5,360.2,84.2z M352.5,78c1.7-1.4,3.3-2.1,4.5-2.1c0.4,0,0.8,0.1,1.1,0.3
 c1.5,0.8,1.8,3.7,0.9,7.7c-1.5-0.4-3.1-0.6-4.8-0.8c-1-1.4-2-2.7-3.1-3.8C351.5,78.8,352,78.4,352.5,78z M355.2,92.9
 c-0.6,1-1.2,1.9-1.8,2.8c-1,0.1-2.1,0.1-3.3,0.1c-1.1,0-2.2,0-3.3-0.1c-0.6-0.9-1.2-1.8-1.8-2.8c-0.6-1-1.1-2-1.5-2.9
 c0.5-0.9,1-1.9,1.5-2.9c0.6-1,1.1-1.9,1.8-2.8c1-0.1,2.1-0.1,3.3-0.1c1.1,0,2.2,0,3.3,0.1c0.6,0.9,1.2,1.8,1.8,2.8
 c0.6,1,1.1,2,1.5,2.9C356.3,90.9,355.8,91.9,355.2,92.9z M357.4,91.4c0.5,1.2,0.9,2.4,1.3,3.5c-1.1,0.3-2.3,0.5-3.6,0.6
 c0.4-0.6,0.8-1.3,1.2-2C356.7,92.8,357.1,92.1,357.4,91.4z M350.2,99.7c-0.8-0.8-1.6-1.8-2.4-2.8c0.8,0,1.6,0.1,2.4,0.1
 c0.8,0,1.6,0,2.4-0.1C351.8,98,351,98.9,350.2,99.7z M345.3,95.5c-1.3-0.2-2.5-0.4-3.6-0.6c0.3-1.1,0.7-2.2,1.3-3.5
 c0.3,0.7,0.7,1.4,1.1,2.1C344.5,94.2,344.9,94.8,345.3,95.5z M343,88.5c-0.5-1.2-0.9-2.4-1.3-3.5c1.1-0.3,2.3-0.5,3.6-0.6
 c-0.4,0.7-0.8,1.3-1.2,2C343.7,87.1,343.3,87.8,343,88.5z M352.5,83c-0.8,0-1.5-0.1-2.3-0.1c-0.8,0-1.6,0-2.4,0.1
 c0.8-1,1.6-2,2.4-2.8C351,81,351.8,81.9,352.5,83z M356.3,86.4c-0.4-0.7-0.8-1.4-1.2-2c1.3,0.2,2.5,0.4,3.6,0.6
 c-0.3,1.1-0.7,2.2-1.3,3.5C357.1,87.8,356.7,87.1,356.3,86.4z M342.3,76.2c0.3-0.2,0.7-0.3,1.1-0.3c1.5,0,3.7,1.2,6,3.4
 c-1.1,1.1-2.1,2.4-3.1,3.8c-1.7,0.2-3.4,0.4-4.8,0.8C340.4,79.9,340.8,77,342.3,76.2z M334.3,89.9c0-1.7,2.3-3.4,6.2-4.6
 c0.4,1.5,1,3,1.7,4.6c-0.7,1.6-1.3,3.1-1.7,4.6C336.6,93.4,334.3,91.6,334.3,89.9z M342.3,103.7c-1.5-0.8-1.8-3.7-0.9-7.7
 c1.5,0.4,3.1,0.6,4.8,0.8c1,1.4,2,2.7,3.1,3.8C346.4,103.4,343.7,104.6,342.3,103.7z M358.1,103.7c-1.2,0.7-3.3,0-5.7-1.9
 c-0.5-0.4-0.9-0.8-1.4-1.3c1-1.1,2.1-2.4,3.1-3.8c1.7-0.2,3.4-0.4,4.8-0.8C360,100,359.6,102.9,358.1,103.7z M359.9,94.5
 c-0.4-1.5-1-3-1.7-4.6c0.7-1.6,1.3-3.1,1.7-4.6c3.9,1.1,6.2,2.9,6.2,4.6C366.1,91.6,363.8,93.4,359.9,94.5z M353.4,89.9
 c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2c0-1.8,1.4-3.2,3.2-3.2S353.4,88.2,353.4,89.9z"/>
<path class="st9" d="M432.4,92h-29.2c-2,0-3.6,1.6-3.6,3.6v29.2c0,2,1.6,3.6,3.6,3.6h29.2c2,0,3.6-1.6,3.6-3.6V95.5
 C436,93.6,434.4,92,432.4,92z M434.9,124.7c0,1.3-1.1,2.4-2.4,2.4h-29.2c-1.3,0-2.4-1.1-2.4-2.4V95.5c0-1.3,1.1-2.4,2.4-2.4h29.2
 c1.3,0,2.4,1.1,2.4,2.4V124.7z M432,118.1c0.5,0.8,0.8,2.8-0.1,4.4c-0.6,1.1-2.1,2.1-5,2.3c-3.1,0.1-4.9-0.8-4.9-0.8v-3.4
 c0.9,0.8,2.5,1.5,4.3,1.5c1.5,0,2.3-0.5,2.5-1.4c0.1-0.6-0.2-1-0.5-1.3c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0
 c-0.3-0.2-0.7-0.5-1.2-0.7c-1.1-0.5-1.9-0.7-3.3-1.7c-1.3-0.9-2.1-2.9-1.4-4.8c0.7-1.9,2.4-2.9,5.4-3.1c2.9-0.1,4.3,0.6,4.3,0.6v3.3
 c0,0-1.4-1.1-3.7-1.1c-2.1,0-2.9,1-2.5,2C426.4,115.2,430.7,115.6,432,118.1C432,118,432,118,432,118.1C432,118,432,118.1,432,118.1
 C432,118.1,432,118.1,432,118.1z M415.2,109.2h5.4v2.8h-4.4v12.6h-1.1h-1.4h-1.1v-12.6h-4.4v-2.8h5.4H415.2z"/>
<path class="st9" d="M471.4,160.6c0,3.9-3.1,7-7,7c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7C468.2,153.6,471.4,156.7,471.4,160.6z
  M478.3,150.1c2.2,2.9,3.6,6.6,3.6,10.5c0,9.7-7.9,17.5-17.5,17.5s-17.5-7.9-17.5-17.5s7.9-17.5,17.5-17.5c4,0,7.7,1.4,10.6,3.6
 c0.4-0.3,0.9-0.5,1.5-0.5c1.3,0,2.4,1.1,2.4,2.4C478.9,149.1,478.7,149.7,478.3,150.1z M481.2,160.6c0-3.8-1.3-7.2-3.4-10
 c-0.4,0.3-0.8,0.4-1.3,0.4c-1.3,0-2.4-1.1-2.4-2.4c0-0.5,0.1-1,0.4-1.3c-2.8-2.1-6.3-3.4-10.1-3.4c-9.2,0-16.8,7.5-16.8,16.8
 c0,9.3,7.5,16.8,16.8,16.8C473.6,177.4,481.2,169.8,481.2,160.6z"/>
<path class="st9" d="M146.3,151.5c-0.6,2.8-0.4,5.3-0.2,7c-0.6-0.6-1.5-1.8-1.4-2.6c0.2-1.2,1.2-1.5,1-2.8c-0.2-1.3-1-2.3-0.7-3.6
 c0.3-1.2,1.7-2.1,2.3-2.8c0.7-0.7,0.4-2,0.5-2.9c0.1-0.9,0.8-2.1,2.1-2.2c1.3-0.2,2.2-0.2,3.2-1c1-0.8,1.3-2.5,3.6-2.6
 c1.6-0.1,3,0.8,3.8,1.4c-1.8,0.1-4.6,0.5-7,2C149.9,143.6,147.1,147.4,146.3,151.5z M177.5,159.3c2-3.9,1-6.6,1-6.6
 s-1.1,3.3-3.4,4.9c0,0,2.2-3.1,1.9-6.3c-0.3-3.2-1.8-4.4-1.8-4.4s1.1,2.5,0.2,6.4c-1,3.9-4.2,7.2-5.8,8c0,0,3,0.5,5.4-1.3
 c-0.4,0.5-4.1,4.4-9.5,4.6c0,0,1.6,2.2,5.1,2.2c0,0-3.1,0.9-7.2-0.7c-4-1.6-6.1-4.7-6.2-4.7c0,0.1,0.4,3,2.5,4.8
 c-0.6-0.3-4.9-2.4-5.5-6.6c-0.6-4.1,0-6.2,2.2-8.4c1.6-1.5,3.5-2.1,4.5-2.3c-4.6-2.3-8.2-1.9-11,1c-3.1,3.2-3.1,7.6-2.9,9.8
 c0,0,0,0,0,0c0.2,0.6,1.5,4.7,5.2,7.6c4,3.1,8.2,5.3,16,3.7c7.1-1.5,10.1-9,10.2-9.4c-0.2,0.2-3.3,2.9-6.2,2.9
 C172.2,164.3,175.5,163.2,177.5,159.3z M149.5,149.4c-2.1,2.1-2.8,4.8-3,7.1c-0.1-1.4,0-3.1,0.4-4.8c0.8-4,3.4-7.7,7-9.8
 c2.6-1.6,5.6-1.9,7.4-1.9c7.2,0.9,10.3,3.9,12.1,6.5c1.5,2.1,1.5,4.6-2.6,4.6c-3.2,0-7-1.5-8.5-2.1
 C156.9,145.9,152.7,146,149.5,149.4z M165,145.5c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7
 C165.3,144.8,165,145.1,165,145.5z M153.9,143.8c0,0.8,0.6,2.1,1.3,2.2h0.2c1,0,4.4-0.2,4.8-0.3c0.1,0,0.2-0.1,0.2-0.3
 c0-0.1-0.1-0.2-0.3-0.2c0,0,0,0,0,0c-1.2,0.1-4.5,0.3-5,0.3c-0.3,0-0.8-1-0.9-1.7c0-0.5,1.1-1.1,1.9-1.3c0.4-0.1,3,0.7,4.6,1.4
 c0.1,0.1,0.3,0,0.3-0.2c0.1-0.1,0-0.3-0.1-0.3c-0.7-0.3-4.2-1.6-4.9-1.4C155.5,142.2,153.8,142.9,153.9,143.8z"/>
<path class="st9" d="M483.8,220.6l-5.3,8.4l-8.9-14.4v15.1h-6.3v-25.6h6.3l9,15.2v-6.8L483.8,220.6z M484.9,210.7v-6.6h-6.3v6.6
 H484.9z M495,211.3c-5.3,0.1-7.5,4.1-7.5,4.1l-2.6-4.1h-6.2l5.9,9.3l-5.8,9.1h6.1l2.6-4.1l2.7,4.1h6.1l-5.6-8.9
 c-0.2-1,0.2-2.1,1-3.3c0.7-1,2-1.7,3.8-1.6c1.8,0.1,2.5,0.9,3.1,2c0.6,1,1.6,1.3,2.2,1.4c0.5,0.1,1.3,0.6,1.3,1.5
 c0,0.8,0.7,1.2,1,1.2c0.3,0,1.2,0.2,1.4-1.2c0.2-1.3-0.6-3.9-1.4-5.1C502.5,215,500.2,211.2,495,211.3z M499.6,219.3
 c-0.8-0.3-1.2-0.9-1.7-1.7c-0.7-1-2-1.5-3.7-1.2c-2.1,0.5-2.9,2.4-2.9,2.4c0.7-1,2.3-1.8,4-1.5c1.7,0.4,2.4,1.5,2.8,2.3
 c0.4,0.7,1.1,0.5,1.6,0.6c0.5,0,0.5,0.2,0.8,0.4c0.2,0.3,1,0.6,1,0.4c0-0.1,0.1-0.7-0.3-1C501.1,219.8,500.4,219.6,499.6,219.3z
  M493.7,217.9c-1.6,0.3-2.4,2-2.4,2s0.8-1.1,2.3-1.2c1.5-0.1,2.1,0.4,2.7,0.6c0.7,0.2,1.1,0,1.1,0
 C496.6,218.3,495.3,217.6,493.7,217.9z"/>
<g>
 <g>
   <path class="st10" d="M281.9,115.5c0,0,0,0.2-0.1,0.5"/>
   <path class="st11" d="M281.7,117c-0.5,5-1.7,21.7,3.8,39.4c9.9,32,35,28.4,33,58.9"/>
   <path class="st10" d="M318.5,215.9c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st10" d="M350.2,109.2c0,0,0,0.2-0.1,0.5"/>
   <path class="st12" d="M349.9,110.7c-1,4.6-3.9,19.7-2,34.1c2.3,17.3,15.6,53.3-21.1,73.5"/>
   <path class="st10" d="M326.3,218.6c-0.1,0.1-0.3,0.2-0.4,0.2"/>
 </g>
</g>
<g>
 <g>
   <path class="st10" d="M419.2,134.1c0.1,0.1,0.1,0.2,0.2,0.5"/>
   <path class="st13" d="M419.4,135.6c-0.3,5.9-7,27.7-31.2,34.3c-27.1,7.5-78.4,1.1-83,45.4"/>
   <path class="st10" d="M305.2,215.9c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st10" d="M452.6,178.1c0,0,0,0.2-0.1,0.5"/>
   <path class="st14" d="M452.2,179.5c-2.5,7.5-15.9,42.3-51.3,48.2c-32.1,5.3-49.3,0-64.5,3.5"/>
   <path class="st10" d="M335.8,231.3c-0.2,0-0.3,0.1-0.5,0.1"/>
 </g>
</g>
<g>
 <g>
   <path class="st10" d="M455,223.1c0,0-0.2-0.1-0.5-0.2"/>
   <path class="st15" d="M453.6,222.6c-3.8-1.3-15.2-5.2-36.8-11.3c-26.8-7.6-53.2-6.3-84.1,11.9"/>
   <path class="st10" d="M332.3,223.4c-0.1,0.1-0.3,0.2-0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st10" d="M222.7,127.1c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st16" d="M223.7,128.2c3.5,3.5,14.8,15.5,25,34.9c15.4,29.5,10.8,39.3,39.7,60.1"/>
   <path class="st10" d="M288.8,223.4c0.1,0.1,0.3,0.2,0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st10" d="M176.8,174.7c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st17" d="M178,175.6c3.5,2.2,15.1,8,44.6,9.8c21.2,1.3,58.7-10.5,75,30"/>
   <path class="st10" d="M297.9,215.9c0.1,0.2,0.1,0.3,0.2,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st10" d="M155.7,215.3c0,0,0.1-0.1,0.4-0.3"/>
   <path class="st18" d="M157,214.5c5.5-3.3,27.9-15.1,53.9-7.1c22.4,6.9,47.7,25.6,73.6,23.9"/>
   <path class="st10" d="M285,231.3c0.2,0,0.3,0,0.5,0"/>
 </g>
</g>
</svg>
`,
    name: 'custom_workshops_3',
    theme: 'fill',
};
const custom_workshops = {
    icon: `<svg version="1.1" id="Layer_9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#EAEAEA;}
 .st1{fill:#E5E5E5;}
 .st2{fill:#DBDBDB;}
 .st3{fill:#FFFFFF;}
 .st4{fill:#EFEFEF;}
 .st5{fill:#F2F2F2;}
 .st6{fill:#E01D85;}
 .st7{opacity:0.2;fill:#3D3D75;}
 .st8{fill:#EFD1C7;}
 .st9{fill:#99CFF8;}
 .st10{fill:#F5C85C;}
 .st11{fill:#363636;}
 .st12{fill:#EDBCDA;}
 .st13{fill:#E0234E;}
 .st14{fill:#DD0031;}
 .st15{fill:#C3002F;}
 .st16{fill:#41B883;}
 .st17{fill:#34495E;}
 .st18{fill:#61DAFB;}
 .st19{fill:#3178C6;}
 .st20{fill:#4E8EF7;}
 .st21{fill:#96D7E9;}
 .st22{fill:#48C5E5;}
 .st23{fill:#E22285;}
 .st24{fill:url(#SVGID_1_);}
 .st25{fill:url(#SVGID_2_);}
 .st26{fill:url(#SVGID_3_);}
 .st27{fill:url(#SVGID_4_);}
 .st28{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;}
 .st29{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0073,1.0073;}
 .st30{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0084,1.0084;}
 .st31{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.9954,0.9954;}
 .st32{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.9958,0.9958;}
 .st33{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.9922,0.9922;}
 .st34{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:0.9938,0.9938;}
 .st35{fill:none;stroke:#9B84C1;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1.0066,1.0066;}
</style>
<ellipse class="st0" cx="306.1" cy="418.1" rx="231.6" ry="26.3"/>
<path class="st1" d="M170.8,359.2c1.3-16.3,15.8-43.2,6.1-43.2c-3.8,0-6,16.1-6.5,11.1c-0.5-5,6.5-39.2-3.4-38.8
 c-4.3,0.2-0.4,19.8-3.6,19.2c-4.4-0.8-1.5-6.2-5.1-7.2c-10.4-2.7,1.8,35.4,0,35.5c-1.6,0.1-4.7-14.6-11.5-10.3
 c-6.3,4,8.1,15,8.3,31.9C155.2,362.7,170.6,360.9,170.8,359.2z"/>
<path class="st2" d="M152.1,348.8h23.4c0,0,8.6,25.2,8.3,37.4c-0.2,12.4-3.4,22.9-17.5,23.6c-24.7,1.2-24.7-12.4-24.7-22.9
 C141.6,369.9,152.1,348.8,152.1,348.8z"/>
<path class="st1" d="M453.4,388.4c9.2-9.6,21.5-42.9,14.1-45.5c-7.4-2.6-10.7,8.3-12.7,3s6.9-22.5,2.7-23.9s-7.2,5.7-8.3,3.9
 s4.3-34.5-7.3-37.2c-11.6-2.7-16.7,11.8-15.2,19.9c1.5,8.1,5.4,20.6,2.4,20.6c-3.1,0-5.1-12.2-9.6-9.1c-5.9,4.1-6.3,19,2,24.5
 c8.3,5.5,13.5,17.1,10,15c-3.8-2.2-8.3-2.6-10,1.9s6.2,16.5,14.1,24.7S449.9,392.1,453.4,388.4z"/>
<path class="st3" d="M459.1,377.2c0.8-2.3,3-11.7,3-11.7s-4.7,7.9-6,10.2c-0.9,1.5-2.2,7-2.9,10.2c-0.8-5.2-2-13.8-3-20.8
 c0.8-3.1,2.1-7.8,2.5-9c0.6-1.9,1.7-14.5,1.7-14.5s-3.7,12.8-4.1,14.5c-0.2,0.8-0.3,3.3-0.5,5.8c-0.5-4.2-0.9-7.3-0.8-8
 c0.2-1.5-2.1-14.1-3.8-23.1c0.3-2.9,0.7-7.1,0.5-8.4c-0.4-1.9-3.2-14.8-3.2-14.8s-0.4,9.7,0,13c0.4,3.3,2.4,13,2.4,13l0,0
 c1.1,9,2.5,20.5,3.2,24.9c0.3,1.5,0.6,3.6,1,6c0,0-3.5-9.2-5.6-10.8c-2.1-1.6-12.2-12.3-12.2-12.3l7.1,10.7l10.7,12.3
 c1.2,7.4,2.8,17.7,3.6,22.8c-2.6-3.1-6.4-7.6-8.2-9.1c-2.9-2.4-6-5.2-6-5.2s4.2,4.9,5,6.3c0.6,1,6.1,6,9.3,9
 c0.2,1.3,0.3,2.1,0.3,2.1l0.8,0c0,0-0.1-0.5-0.2-1.3c0.8,0.8,1.4,1.3,1.4,1.3s-0.6-0.7-1.5-1.8c-0.1-0.5-0.1-0.9-0.2-1.5
 L459.1,377.2z"/>
<path class="st4" d="M142.6,368.5c-3.4-7.8-5.5,3.1-7.7,0.6c-2.3-2.5-1.1-14.3,0.4-21.3c2.6-11.9,3.2-18,1.2-23.7
 c-2.9-8.4-5.2,4.5-9.1,3.2c-4-1.3,0.6-25.1-9.9-17.3c-11.6,8.6,2.5,50.9,0,54.9c-4.2,6.7-2.1-28.9-8.8-26.8c-6.6,2-7,10.2-5.9,18.9
 c1,7.7,7.3,16.9,6.8,18.3c-1.5,4.2-10.4-9.6-13.7-2.8c-5.9,11.9,10.1,26.4,13.4,28c3.2,1.5,27.4,0,27.4,0S148.1,381.3,142.6,368.5z
  M105.6,352.2c-0.6-1.5-1.4-4.4,0-6.4c1.3-2,2.9,2,2.9,2s2.5,5.1,1.9,7.3C109.7,357.3,106.1,353.6,105.6,352.2z M107.6,386.9
 c-0.9-1.3-3.1-5-2.2-6.9c0.9-1.9,3.3,2,5,1.2c1.7-0.7,0.9-1.6,3.8-1c2.8,0.6,3.4,6.3,3.3,7.2C117.2,391.5,108.5,388.3,107.6,386.9z
  M120.1,343.4c1.1-6.1,2.3-7.9,4.6-9.2c2.4-1.3,5.1,7,4.3,9.6c-0.5,1.8-4,16.1-5.6,16.9C121.8,361.5,119.6,346,120.1,343.4z
  M131.7,387.2c-2.5-0.3-0.6-3.4,0.8-5.3c1.5-1.9,6.6-1.9,6.7-0.8C139.6,383.7,134.2,387.5,131.7,387.2z"/>
<path class="st1" d="M454.5,391.6c-3.6-4.7-1.8-30.2-1.8-38.3c0-7.8-1.4-20.7,2.4-21.5s6.2,6,7.2,4.4c1-1.5-4.4-28,8.9-32.4
 c10.2-3.4,14.5,8.5,12.3,19.5c-1.5,7.2-6.2,17.8-3.4,18.2c2.7,0.3,3.7-8.5,7.5-5.2c5,4.3-1.6,16.7-5.6,19.7
 c-9.4,6.9-9.3,13.9-6,12.4c3.5-1.6,7.6-1.4,8.8,2.8c1.2,4.3-6.6,14.1-14.2,20.5S457.3,395.3,454.5,391.6z"/>
<path class="st3" d="M463.4,365.1c-0.5-2.8-1.3-7.2-1.6-8.3c-0.4-1.8-0.5-13.2-0.5-13.2s2.5,11.8,2.7,13.4c0.1,0.7-0.1,4.6-0.1,6.9
 c0.8-3.7,6.4-28.9,6.4-28.9c-0.1-2.7-0.2-6.5,0.1-7.5c0.5-1.7,3.8-12.8,3.8-12.8s-0.6,8.7-0.8,11.6c-0.6,7.1-2.5,9.2-2.5,9.2
 c-1.5,7.9-4,20.2-5,24.1c-0.3,1.3-0.8,3.1-1.3,5.2c0,0,3.7-7.8,5.7-9c1.9-1.2,11.7-9.6,11.7-9.6l-7.1,8.8l-10.3,9.8
 c-1.5,6.5-3.7,15.5-4.7,20c2.5-2.5,6.2-6.1,7.9-7.2c2.7-1.8,7.7-4.2,7.7-4.2s-6.1,4.1-6.9,5.3c-0.6,0.8-5.8,4.7-8.9,7
 c-0.3,1.2-0.4,1.9-0.4,1.9l-0.8-0.1c0,0,0.1-0.4,0.2-1.1c-0.8,0.6-1.3,1-1.3,1s0.6-0.6,1.4-1.5C458.9,385.4,462.1,371.3,463.4,365.1
 z"/>
<path class="st2" d="M487.6,385h-66.2c0,0,0,27,33.1,27S487.6,385,487.6,385z"/>
<path class="st0" d="M508.9,396.5c1.2-16.3,14.5-43.3,5.6-43.3c-3.5,0-5.5,16.1-5.9,11.1s7.2-38-1.8-37.5c-4,0.2-1.7,18.5-4.6,17.9
 c-4-0.8-1.4-6.3-4.7-7.2c-9.5-2.7,1.7,35.5,0,35.6c-1.4,0.1-3.3-13.1-6.5-8.8c-4.2,5.6,3.4,13.5,3.5,30.4
 C494.7,400,508.8,398.1,508.9,396.5z"/>
<path class="st5" d="M489.2,387.5h25c0,0,6.8,5.7,7.5,18.9c0.8,13.2-14.6,16.2-19,16.2c-9.6,0-23.1-1.8-22.2-16.2
 C481.6,390.9,489.2,387.5,489.2,387.5z"/>
<path class="st5" d="M103.9,396.7h35.2c0,0,10.5,5.1,10.6,17c0,9.5-19.5,10.8-25.7,10.8c-13.5,0-32.4-0.7-32.3-10.8
 C91.8,399.7,103.9,396.7,103.9,396.7z"/>
<path class="st6" d="M360.7,378c0,0-2.3-12.8-12.5-13.2c-10.1-0.4-61.9,0.3-67.8,1c-5.9,0.7-18.3,4.4-19.5,6.7
 c-1.2,2.3,26.7,20,28.2,21.6c1.5,1.6,14.4,7.5,19.9,6.6c5.6-0.9,22.6-9.8,25.6-10.6C337.6,389.5,360.7,378,360.7,378z"/>
<path class="st7" d="M360.7,378c0,0-2.3-12.8-12.5-13.2c-10.1-0.4-61.9,0.3-67.8,1c-5.9,0.7-18.3,4.4-19.5,6.7
 c-1.2,2.3,26.7,20,28.2,21.6c1.5,1.6,14.4,7.5,19.9,6.6c5.6-0.9,22.6-9.8,25.6-10.6C337.6,389.5,360.7,378,360.7,378z"/>
<path class="st8" d="M380.3,426.4c-5,5-12.5,5.1-24,2.2c-10.9-2.8-14.7-5.8-14.7-5.8l-6.9-3l1-10.4c0,0,2.7-1.6,3.2-0.5
 c0.4,1,6.6,2,6.6,2s0,0,0.1,0c1.5,0,18.6,0.1,27.4,4.3C382.1,419.5,381.7,425,380.3,426.4z"/>
<path class="st6" d="M284.5,363.5l-13.3-1.3c0,0-13.8-4.8-24.5-2s-14.8,14.7,0.2,28.2c15,13.5,61.9,29.7,89.1,34c0,0,4.8-5,5.2-13.2
 l-67.1-39L284.5,363.5z"/>
<path class="st8" d="M406.3,288c0,0,5.4-7.5,7.6-10s6.3-6.3,7.8-8c3.5-4,3.9-10.7,3.4-10.9c-0.5-0.3-4.7,0.8-5.8,3.1
 c-1.2,2.3-2.4,5.2-5.7,6.9c-3.2,1.7-5.9,4.2-7.5,4c-1.6-0.2-3.5-2.3-3.6-3.5c-0.1-1.2,0.5-4.4-0.5-5.9c-1-1.4-1.6-0.8-1.7-0.4
 c-0.2,0.4-2,3.8-1.7,6.4s-0.3,7.1-0.1,8.1c0.2,1,1,5.3,0,7.8C397.7,287.8,406.3,288,406.3,288z"/>
<path class="st8" d="M217.3,288c0,0-5.4-7.5-7.6-10s-6.3-6.3-7.8-8c-3.5-4-3.9-10.7-3.4-10.9c0.5-0.3,4.7,0.8,5.8,3.1
 c1.2,2.3,2.4,5.2,5.7,6.9c3.2,1.7,5.9,4.2,7.5,4s3.5-2.3,3.6-3.5s-0.5-4.4,0.5-5.9c1-1.4,1.6-0.8,1.7-0.4c0.2,0.4,2,3.8,1.7,6.4
 s0.3,7.1,0.1,8.1c-0.2,1-1,5.3,0,7.8C225.9,287.8,217.3,288,217.3,288z"/>
<path class="st9" d="M410.7,286.6c0,0-14.4,28.8-20.2,38.8c-5.8,10-11.7,16.5-14.6,15.8c-6.5-1.5-32.7-26.8-33.2-26.3
 c-0.5,0.5-2.9,5.5-2.8,5.8c0.1,0.2-21.1,0.1-28,0c-6.9,0.1-28.1,0.2-28,0c0.1-0.3-2.3-5.2-2.8-5.8c-0.5-0.5-26.7,24.9-33.2,26.3
 c-2.9,0.6-8.7-5.9-14.6-15.8c-5.9-10-20.2-38.8-20.2-38.8c6-5.1,13.4-5.1,13.4-5.1c5.6,8.2,23,35.9,23,35.9s20.4-25.9,28.1-29.9
 c7.7-4,22.6-4.5,25.7-5.8l3-11.5c0,0,5,2.3,5.7,2.6c0.8-0.2,5.7-2.6,5.7-2.6l3,11.5c3.1,1.3,18,1.8,25.7,5.8
 c7.7,4,28.1,29.9,28.1,29.9s17.3-27.7,23-35.9C397.3,281.4,404.7,281.5,410.7,286.6z"/>
<path class="st8" d="M289.1,419.9l-6.9,3c0,0,0,0,0,0c-0.5,0.3-4.4,3.1-14.7,5.7c-11.5,2.9-19,2.7-24-2.2c-1.4-1.4-1.8-6.9,7.3-11.2
 c9.3-4.4,27.5-4.3,27.5-4.3s6.2-1,6.6-2c0.5-1.2,3.2,0.5,3.2,0.5L289.1,419.9z"/>
<path class="st6" d="M376.9,388.5c-11.1,10-39.8,21.6-65,28.6c-3.1,0.9-6.1,1.7-9,2.4c-5.4,1.3-10.5,2.4-15,3.1c0,0-4.8-5-5.2-13.1
 v0l2-1.2l65.1-37.9l-10.4-6.8l13.3-1.3c0,0,13.8-4.8,24.5-2C387.8,363.1,391.8,375,376.9,388.5z"/>
<path class="st4" d="M362.4,321.2l-11.3,47.6c0,0.8-0.6,1.4-1.4,1.4h-76c-0.3,0-0.6-0.1-0.8-0.2c-0.4-0.3-0.6-0.7-0.6-1.2
 l-11.3-47.6c0-0.8,0.7-1.4,1.4-1.4H361c0.4,0,0.8,0.2,1,0.5C362.3,320.5,362.4,320.9,362.4,321.2z"/>
<circle class="st7" cx="312.2" cy="346.3" r="3.9"/>
<path class="st8" d="M328.6,260.1c-1.1,2.5-4,2.3-4,2.3l-0.5,2.1v0c-1.5,4.6-5.1,7.6-7.4,8.4c-2.2,0.8-4.7,0.7-5.6,0.6
 c-0.8,0.1-3.4,0.2-5.5-0.6c-2.5-0.8-6.4-4.2-7.7-9.5c-0.1-0.3-0.1-0.6-0.1-0.7c0-0.1,0-0.2-0.1-0.4c0,0-2.9,0.2-4-2.3
 c-1.1-2.5-1-5.4,1.5-5.5c0,0,0,0,0-0.1c-0.2-1-2.5-9.6-1.8-13.9c0.8-4.6,3.3-7,3.3-7s-1.1-2.5-0.4-4.2c0.7-1.7,3-3.2,3-3.2
 c4.9-2.6,10.8-2,15.8-0.5c4,1.1,5.5,3.9,5.5,3.9s3.9,1.3,6.2,5.7c2.9,5.8,0.2,19.3,0.2,19.3C329.5,254.7,329.6,257.6,328.6,260.1z"
 />
<path class="st8" d="M320.5,281.6c0,0-2,6.1-8.3,6.4c-6.3,0.4-9.1-6.4-9.1-6.4l3-11.5c0,0,5,2.3,5.7,2.6c0.8-0.2,5.7-2.6,5.7-2.6
 L320.5,281.6z"/>
<path class="st10" d="M326.9,235.3c-2.2-4.4-6.2-5.7-6.2-5.7s-1.4-2.8-5.5-3.9c-5-1.4-11-2.1-15.8,0.5c0,0-2.3,1.5-3,3.2
 c-0.7,1.7,0.4,4.2,0.4,4.2s-2.5,2.4-3.3,7c-0.8,4.3,1.5,12.9,1.8,13.9c0,0,0,0.1,0,0.1s1.9,5.9,2.4,7.8c0,0.1,0,0.2,0.1,0.4
 c0,0.1,0.1,0.4,0.1,0.7c1.3,5.2,5.2,8.6,7.7,9.5c2.1,0.8,4.7,0.7,5.5,0.6c0.8,0.1,3.4,0.2,5.6-0.6c2.3-0.8,5.8-3.8,7.4-8.4v0
 l0.5-2.1c0,0,1.6-6.5,2.5-7.8C327,254.5,329.8,241.1,326.9,235.3z M324.4,258.3c-0.3,2.8-0.8,7.5-3.5,7c-2.7-0.5-3.9-2.7-5.3-3.7
 c-1.4-1-3.7-1-3.7-1c-1.9-0.2-4.3,1.5-5.8,3c-1.4,1.5-5,0.9-6.2-0.4c-1.2-1.2-2-6.2-2-6.2s1.5-2.7,1.8-4.8c0.3-2.1-1.2-8.2,1.3-9.8
 c2.4-1.6,5.9-2.6,8.6-2.3s-1.2,1.9-1.7,3.8c-0.4,1.9,5.2,3,8.8,2.8c3.6-0.2,5.9-2.2,7.8-2.1C326.3,244.8,324.7,255.5,324.4,258.3z"
 />
<path class="st7" d="M311.9,417c-3.1,0.9-6.1,1.7-9,2.4c-7.9-3.9-17.3-8.5-20.2-10.1v0l2-1.2C284.6,408.1,310.3,416.1,311.9,417z"/>
<path class="st11" d="M282.1,422.9C282.1,422.9,282.1,422.9,282.1,422.9c-0.5,0.4-4.5,3.1-14.7,5.8c-11.5,2.9-19,2.7-24-2.2
 c-1.4-1.4-1.8-6.9,7.3-11.2c9.3-4.4,27.5-4.3,27.5-4.3s-5.7,1.2-5.9,6.2C272.1,422,282.1,422.9,282.1,422.9z"/>
<path class="st11" d="M380.3,426.4c-5,5-12.5,5.1-24,2.2c-10.9-2.8-14.7-5.8-14.7-5.8s7.4-0.8,8.8-5c1.3-4.2-4.9-6.9-4.9-6.9
 s0,0,0.1,0c1.5,0,18.6,0.1,27.4,4.3C382.1,419.5,381.7,425,380.3,426.4z"/>
<path class="st11" d="M227.7,384.9c-0.5,2.2-1,6.5,0.9,12.9c1.3,4.3,15.5,22.1,10.7,29.8c2.1,4.3-3.7,11.2-15,10.1
 c-11.1-1.1-19.8-2.2-23.4,0c-6,3.7-3.5,8-7.1,8c-6.7,0-4.8-9.4-0.7-12.5c5.7-4.3,15.2-3.1,15.2-3.1c-8.1-3-0.7-27-0.7-27
 s1.4-8.5,4.6-16.3c2.3-5.6,4.9-10.2,7.4-12.1c-1.1-4.5,0.1-8.9,3.5-10.7c0.7-0.4,1.5-0.6,2.3-0.7l-0.1,0c0,0,10.6-4.1,8.9-1.2
 l-2.1,3.1c1.7,1.2,3.3,2.9,4.5,5.1c1.3,2.4,1.9,5,1.9,7.4c1.6,0,3.8,0.2,3.7,0.8c-0.2,1-4.2,4.3-6.2,5.7c0,0,0,0-0.1,0
 c-0.4,0.4-0.8,0.7-1.2,0.9C232.6,386,230.1,385.9,227.7,384.9z"/>
<path class="st7" d="M219.6,374.6c0,0,2.8,7,8.1,10.2c0,0-3,4.1-5.6,1.8C219.5,384.3,219.6,374.6,219.6,374.6z"/>
<path class="st12" d="M232.4,374.2c0,0-1.7-3.6-2.3-2.4c-0.5,0.9-0.7,2.4,0,2.7C230.9,374.7,233.3,375.4,232.4,374.2z"/>
<path class="st13" d="M118.1,204.8c0.5-0.7,0.8-1,2.3-1.3s2-0.7,4-2.5c1.9-1.8,5.1-2.4,8.2-2.2c3.1,0.2,5.5,1.3,5.5,1.3
 c-0.6-2.1,1.5-3.1,1.9-3.5c0.4-0.4,0.6-1.3,0.6-1.3c3.3,1.5,4.6,4.9,3.2,8.1c-1.4,3.2-4.9,3.4-4.9,3.4s2.1,1,4.8-0.3
 c2.7-1.3,3-4.5,3-4.9c0,0,2.5,1.5,4.1,6.8c1.6,5.3,0,10.9-2,13.2c0,0,0.2-2.6-0.5-4.3c0,0-0.1,5.8-5.7,9.6c0,0,1.6-2.5,2-5.3
 c0,0-3.3,6.4-10.9,6.9c0,0,3-1.2,5.1-4.3c0,0-0.9,0.9-4.1,1.1c0,0,2.6-1.4,3.3-4.4c0.7-2.7,0.3-4.5,0.3-4.5s-0.6,4.4-4.3,6.2
 s-7.3,0.5-8.1-0.3l1.4,0c0,0-1.5-1.1-1.8-2.9c-0.3-2.1,1.1-3.2,2.4-3c1.3,0.2,0.4,1.7,0.4,1.7s-0.2,1.7,2.3,1.8c0,0,0.1-0.1,0.4-0.7
 c0.3-0.5,0.6-1.4,0.6-1.4l0.1,1.7c0,0,1-0.9,1.2-1.3c0.1-0.4,0.3-0.7,0.5-0.7c0.8,0,1.4,1,1.4,1c-0.2-2.7-1.4-4.9-4.3-7.2
 c-3.2-2.4-8-1.5-8-1.5l-1.1,1.4l0-1.5l-0.7,1l-0.2-1.3c-1.3-0.4-1.5-1.8-1.5-1.8C117.6,206.8,117.6,205.6,118.1,204.8z M137.9,196.2
 c-0.2,0.8-1,2.2-0.4,3.1c0,0,0-1.9,1.9-2.8c0,0,0.3-1.6-2.3-1.6C137.1,194.8,138.1,195.4,137.9,196.2z"/>
<path class="st14" d="M229.4,96.3l-16-5.8c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1,0s-0.1,0-0.1,0c0,0,0,0-0.1,0L197,96.4
 c-0.2,0.1-0.4,0.3-0.4,0.6l2.4,21.3c0,0.2,0.1,0.4,0.3,0.4l13.6,7.6h0c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1l13.6-7.6
 c0.2-0.1,0.3-0.2,0.3-0.4l2.4-21.3C229.8,96.7,229.7,96.4,229.4,96.3z"/>
<path class="st15" d="M229.8,96.9l-2.4,21.3c0,0.2-0.1,0.4-0.3,0.4l-13.6,7.6c-0.1,0-0.2,0.1-0.3,0.1V90.5c0,0,0.1,0,0.1,0
 c0,0,0,0,0.1,0l16,5.8C229.7,96.4,229.8,96.7,229.8,96.9z"/>
<path class="st3" d="M213.2,94.8l0,0.1l-10.1,22.6h3.8l2-5.1h4.9v0l3.7,0l2,5.1h3.8L213.2,94.8L213.2,94.8L213.2,94.8L213.2,94.8z
  M216.1,109.4l-3.5,0h-2.3l2.9-7.1L216.1,109.4z"/>
<path class="st16" d="M281.8,111l17.7-30.2c0.1-0.1,0.4-0.7,0.4-0.7s-0.7,0-0.9,0h-6.9h-6.5c-0.2,0-0.3,0.1-0.4,0.3l-3.4,6.3
 l-3.4-6.3c-0.1-0.2-0.2-0.3-0.4-0.3h-6.5h-6.9c-0.2,0-0.8,0-0.8,0s0.3,0.6,0.4,0.7L281.8,111z"/>
<path class="st17" d="M292.2,80h-6.5c-0.2,0-0.3,0-0.3,0l-3.5,6.6l-3.5-6.6c0,0-0.1,0-0.3,0h-6.5h-0.9c0,0,11.3,18.8,11.3,18.8
 c0,0,11.2-18.8,11.2-18.8H292.2z"/>
<path class="st18" d="M359.1,86.6c1.1-4.3,0.7-7.8-1.4-9c-1.7-1-4.2-0.3-7,1.9c-0.5,0.4-1,0.9-1.5,1.3c-3.2-3.1-6.4-4.5-8.5-3.3
 c-2.1,1.2-2.5,4.6-1.4,9c-4.3,1.3-7.1,3.3-7.1,5.7c0,2.4,2.8,4.4,7.1,5.7c-1.1,4.3-0.7,7.8,1.4,9c0.5,0.3,1.1,0.4,1.7,0.4
 c1.9,0,4.3-1.4,6.8-3.7c0.5,0.5,1,0.9,1.5,1.3c2,1.6,3.8,2.4,5.3,2.4c0.6,0,1.2-0.1,1.7-0.4c2.1-1.2,2.5-4.6,1.4-9
 c4.3-1.3,7.1-3.3,7.1-5.7C366.2,90,363.4,87.9,359.1,86.6z M351.5,80.6c1.7-1.4,3.3-2.1,4.5-2.1c0.4,0,0.8,0.1,1.1,0.3
 c1.4,0.8,1.8,3.7,0.8,7.6c-1.5-0.4-3.1-0.6-4.8-0.8c-1-1.4-2-2.7-3.1-3.7C350.6,81.4,351.1,81,351.5,80.6z M354.3,95.2
 c-0.6,1-1.1,1.9-1.7,2.7c-1,0.1-2.1,0.1-3.2,0.1c-1.1,0-2.2,0-3.2-0.1c-0.6-0.9-1.2-1.8-1.7-2.7c-0.6-1-1.1-1.9-1.5-2.9
 c0.4-0.9,0.9-1.9,1.5-2.9c0.6-1,1.1-1.9,1.7-2.7c1-0.1,2.1-0.1,3.2-0.1c1.1,0,2.2,0,3.2,0.1c0.6,0.9,1.2,1.8,1.7,2.7
 c0.6,1,1.1,1.9,1.5,2.9C355.3,93.3,354.8,94.2,354.3,95.2z M356.4,93.8c0.5,1.2,0.9,2.3,1.2,3.4c-1.1,0.3-2.3,0.5-3.6,0.6
 c0.4-0.6,0.8-1.3,1.2-2C355.7,95.1,356.1,94.4,356.4,93.8z M349.3,102c-0.8-0.8-1.6-1.8-2.3-2.8c0.8,0,1.5,0.1,2.3,0.1
 c0.8,0,1.6,0,2.3-0.1C350.9,100.3,350.1,101.2,349.3,102z M344.5,97.8c-1.3-0.2-2.5-0.4-3.6-0.6c0.3-1.1,0.7-2.2,1.2-3.4
 c0.3,0.7,0.7,1.4,1.1,2.1C343.7,96.5,344.1,97.2,344.5,97.8z M342.2,90.9c-0.5-1.2-0.9-2.3-1.2-3.4c1.1-0.3,2.3-0.5,3.6-0.6
 c-0.4,0.6-0.8,1.3-1.2,2C342.9,89.5,342.5,90.2,342.2,90.9z M351.6,85.4c-0.8,0-1.5-0.1-2.3-0.1c-0.8,0-1.6,0-2.3,0.1
 c0.8-1,1.5-1.9,2.3-2.8C350.1,83.5,350.8,84.4,351.6,85.4z M355.3,88.9c-0.4-0.7-0.8-1.3-1.2-2c1.3,0.2,2.5,0.4,3.6,0.6
 c-0.3,1.1-0.7,2.2-1.2,3.4C356.1,90.2,355.7,89.5,355.3,88.9z M341.4,78.7c0.3-0.2,0.7-0.3,1.1-0.3c1.5,0,3.6,1.2,5.9,3.4
 c-1,1.1-2.1,2.4-3.1,3.7c-1.7,0.2-3.3,0.4-4.8,0.8C339.6,82.4,340,79.6,341.4,78.7z M333.6,92.3c0-1.7,2.3-3.4,6.2-4.5
 c0.4,1.4,1,3,1.7,4.5c-0.7,1.6-1.3,3.1-1.7,4.5C335.9,95.7,333.6,94,333.6,92.3z M341.4,105.9c-1.4-0.8-1.8-3.7-0.8-7.6
 c1.5,0.4,3.1,0.6,4.8,0.8c1,1.4,2,2.6,3.1,3.7C345.5,105.7,342.9,106.8,341.4,105.9z M357.1,105.9c-1.2,0.7-3.3,0-5.6-1.8
 c-0.5-0.4-0.9-0.8-1.4-1.2c1-1.1,2.1-2.3,3.1-3.7c1.7-0.2,3.3-0.4,4.8-0.8C358.9,102.2,358.6,105.1,357.1,105.9z M358.8,96.9
 c-0.4-1.4-1-3-1.7-4.5c0.7-1.6,1.3-3.1,1.7-4.5c3.9,1.1,6.2,2.9,6.2,4.5C365,94,362.7,95.7,358.8,96.9z M352.5,92.3
 c0,1.8-1.4,3.2-3.2,3.2c-1.8,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2C351.1,89.1,352.5,90.6,352.5,92.3z"/>
<path class="st19" d="M430.5,94.3h-28.8c-1.9,0-3.5,1.6-3.5,3.5v28.8c0,1.9,1.6,3.5,3.5,3.5h28.8c1.9,0,3.5-1.6,3.5-3.5V97.9
 C434.1,95.9,432.5,94.3,430.5,94.3z"/>
<path class="st3" d="M413.5,111.4h5.4v2.8h-4.3v12.4h-1h-1.4h-1v-12.4h-4.3v-2.8h5.4H413.5z M430.1,120.1
 C430.1,120.1,430.1,120.1,430.1,120.1C430.1,120.1,430.1,120.1,430.1,120.1c-1.3-2.4-5.6-2.8-6.2-4.4c-0.4-1,0.4-2,2.5-2
 c2.2,0,3.6,1.1,3.6,1.1v-3.2c0,0-1.4-0.7-4.3-0.6c-2.9,0.1-4.6,1.2-5.3,3c-0.7,1.9,0.1,3.9,1.3,4.8c1.4,1,2.2,1.2,3.3,1.7
 c0.5,0.2,0.9,0.5,1.2,0.7c0,0,0,0,0,0c0.1,0.1,0.1,0.1,0.2,0.2c0.2,0.3,0.6,0.7,0.5,1.3c-0.2,0.8-0.9,1.4-2.4,1.4
 c-1.8,0-3.3-0.6-4.2-1.4v3.3c0,0,1.8,1,4.8,0.8c2.9-0.1,4.3-1.1,4.9-2.2C430.9,122.9,430.6,120.9,430.1,120.1
 C430.1,120.1,430.1,120.1,430.1,120.1z"/>
<path class="st20" d="M469,162.1c0,3.8-3.1,6.9-6.9,6.9s-6.9-3.1-6.9-6.9s3.1-6.9,6.9-6.9S469,158.3,469,162.1z M475.9,151.7
 c2.2,2.9,3.5,6.5,3.5,10.4c0,9.5-7.8,17.3-17.3,17.3s-17.3-7.8-17.3-17.3s7.8-17.3,17.3-17.3c3.9,0,7.6,1.3,10.5,3.6
 c0.4-0.3,0.9-0.5,1.5-0.5c1.3,0,2.4,1.1,2.4,2.4C476.4,150.8,476.2,151.3,475.9,151.7z M478.6,162.1c0-3.7-1.2-7.1-3.3-9.9
 c-0.4,0.2-0.8,0.4-1.3,0.4c-1.3,0-2.4-1.1-2.4-2.4c0-0.5,0.1-0.9,0.4-1.3c-2.8-2.1-6.2-3.4-10-3.4c-9.1,0-16.6,7.4-16.6,16.6
 c0,9.1,7.4,16.6,16.6,16.6C471.2,178.7,478.6,171.3,478.6,162.1z"/>
<path class="st21" d="M491,218.7c-1.6,0.3-2.3,1.9-2.3,1.9s0.8-1.1,2.3-1.2c1.5-0.1,2.1,0.4,2.7,0.6c0.7,0.2,1.1,0,1.1,0
 C493.9,219.1,492.6,218.4,491,218.7z"/>
<path class="st22" d="M496.9,220.1c-0.8-0.3-1.2-0.9-1.7-1.7c-0.7-1-2-1.5-3.6-1.2c-2.1,0.5-2.9,2.3-2.9,2.3c0.7-1,2.3-1.8,4-1.4
 c1.7,0.4,2.4,1.5,2.8,2.2c0.4,0.7,1.1,0.5,1.6,0.5c0.5,0,0.5,0.2,0.8,0.4c0.2,0.3,0.9,0.6,1,0.4c0-0.1,0.1-0.7-0.3-1
 C498.3,220.6,497.7,220.5,496.9,220.1z"/>
<path class="st17" d="M481.2,221.4l-5.3,8.3l-8.8-14.2v14.9h-6.2v-25.3h6.3l8.9,15v-6.7L481.2,221.4z M482.3,205.1h-6.2v6.5h6.2
 V205.1z M500.2,216.5c-0.5-0.6-2.7-4.4-7.9-4.3c-5.2,0.1-7.4,4.1-7.4,4.1l-2.6-4.1h-6.1l5.8,9.2l-5.7,9h6l2.6-4l2.7,4h6l-5.5-8.8
 c-0.2-1,0.1-2.1,1-3.2c0.7-1,2-1.7,3.8-1.6c1.8,0.1,2.5,0.9,3.1,1.9s1.5,1.2,2.2,1.4c0.5,0.1,1.3,0.6,1.3,1.5c0,0.8,0.7,1.2,1,1.2
 c0.3,0,1.2,0.2,1.4-1.2C501.8,220.2,501,217.7,500.2,216.5z"/>
<path class="st23" d="M162.6,141.6c0,0-5.9-0.2-10.4,4.4c-5.5,5.8-4.1,13.1-3.7,14.7c0,0.1,0,0.2,0.1,0.3c-0.5-0.4-0.7-0.6-0.9-0.8
 c-0.6-0.6-1.4-1.9-1.3-2.7c0.2-1.2,1.2-1.5,1-2.8c-0.2-1.3-1-2.3-0.6-3.6c0.3-1.2,1.6-2,2.3-2.7c0.6-0.7,0.4-2,0.4-2.9
 c0.1-0.8,0.8-2,2.1-2.2c1.3-0.1,2.2-0.2,3.2-1c1-0.8,1.3-2.5,3.6-2.6h0.2c1.5,0,2.8,0.8,3.5,1.4
 C162.4,141.4,162.6,141.6,162.6,141.6z"/>
<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="164.1357" y1="148.4351" x2="164.1357" y2="172.7788">
 <stop  offset="0" style="stop-color:#5D2F89"/>
 <stop  offset="1.424575e-02" style="stop-color:#682E89"/>
 <stop  offset="6.207081e-02" style="stop-color:#872988"/>
 <stop  offset="0.1163" style="stop-color:#A32687"/>
 <stop  offset="0.1774" style="stop-color:#B92386"/>
 <stop  offset="0.2489" style="stop-color:#CA2186"/>
 <stop  offset="0.3373" style="stop-color:#D51F85"/>
 <stop  offset="0.4612" style="stop-color:#DC1E85"/>
 <stop  offset="0.8054" style="stop-color:#DE1E85"/>
</linearGradient>
<path class="st24" d="M173.5,165.8c2.8-0.1,5.9-2.7,6.1-2.9c-0.2,0.5-3.1,7.9-10.1,9.3c-7.6,1.6-11.8-0.6-15.8-3.7
 c-1.8-1.4-3.1-3.1-3.9-4.6c-0.7-1.2-1.1-2.3-1.2-2.7c0-0.1,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.3c-0.7-3.2,0-9.9,5.7-11.9
 c4.4-1.6,8.9,1.4,8.8,1.4l-0.7,0.1c-1,0.2-2.9,0.8-4.4,2.3c-2.2,2.1-2.7,4.2-2.2,8.3c0.6,4.1,4.9,6.3,5.5,6.5
 c-2.1-1.8-2.5-4.7-2.5-4.8c0,0,2.1,3.1,6.1,4.7c4,1.6,7.1,0.7,7.1,0.7c-3.4,0-5-2.1-5-2.1c5.4-0.2,8.9-4,9.4-4.5
 c-2.4,1.8-5.3,1.3-5.3,1.3c1.6-0.7,4.8-4,5.7-7.9c0.9-3.5,0-5.9-0.1-6.2c0.2,0.2,1.5,1.4,1.8,4.3c0.2,3.1-1.9,6.2-1.9,6.2
 c2.3-1.6,3.3-4.8,3.3-4.8s1,2.7-1,6.5C176.8,164.7,173.5,165.8,173.5,165.8z"/>
<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="148.3012" y1="160.7086" x2="179.9701" y2="160.7086">
 <stop  offset="0.2703" style="stop-color:#DE1E85"/>
 <stop  offset="0.3716" style="stop-color:#D61F85"/>
 <stop  offset="0.5291" style="stop-color:#C02286"/>
 <stop  offset="0.723" style="stop-color:#9C2787"/>
 <stop  offset="0.9441" style="stop-color:#6B2D89"/>
 <stop  offset="1" style="stop-color:#5D2F89"/>
</linearGradient>
<path class="st25" d="M178.7,160.9c2-3.8,1-6.5,1-6.5s-1.1,3.2-3.3,4.8c0,0,2.1-3.1,1.9-6.2c-0.2-2.9-1.5-4.1-1.8-4.3
 c0.1,0.4,1,2.7,0.1,6.2c-1,3.8-4.2,7.1-5.7,7.9c0,0,2.9,0.5,5.3-1.3c-0.4,0.5-4,4.3-9.4,4.5c0,0,1.6,2.1,5,2.1c0,0-3.1,0.9-7.1-0.7
 c-4-1.6-6.1-4.7-6.1-4.7c0,0.1,0.4,3,2.5,4.8c-0.4-0.2-3.6-1.8-4.9-4.8c-1.1,0.6-2.1,1.2-2.8,1.9c-0.7,0.6-1.5,1.1-2.3,1.3
 c0.7,0.9,1.6,1.8,2.6,2.7c4,3.1,8.1,5.3,15.8,3.7c7-1.5,9.9-8.8,10.1-9.3c-0.2,0.2-3.3,2.8-6.1,2.9
 C173.5,165.8,176.8,164.7,178.7,160.9z"/>
<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="147.9706" y1="151.7681" x2="175.4995" y2="151.7681">
 <stop  offset="0" style="stop-color:#5D2F89"/>
 <stop  offset="1.574424e-02" style="stop-color:#622E89"/>
 <stop  offset="0.1561" style="stop-color:#882988"/>
 <stop  offset="0.3024" style="stop-color:#A72587"/>
 <stop  offset="0.4542" style="stop-color:#BF2286"/>
 <stop  offset="0.6138" style="stop-color:#D02085"/>
 <stop  offset="0.7861" style="stop-color:#DB1E85"/>
 <stop  offset="0.9946" style="stop-color:#DE1E85"/>
</linearGradient>
<path class="st26" d="M174.6,148c-1.8-2.6-4.9-5.5-12-6.4c0,0-5.9-0.2-10.4,4.4c-5.5,5.8-4.5,13.2-3.4,15.8c0,0-1.1-9.9,5.7-12.7
 c4.3-1.8,8.6,1.1,8.5,1.1c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.1,0,0.1,0c1.5,0.6,5.3,2.1,8.4,2
 C176.1,152.6,176,150.1,174.6,148z M167.1,148c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7
 C167.8,147.7,167.5,148,167.1,148z"/>
<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="155.412" y1="145.7958" x2="162.7724" y2="145.7958">
 <stop  offset="5.405406e-03" style="stop-color:#CD2185"/>
 <stop  offset="0.4426" style="stop-color:#CB2185;stop-opacity:0.5824"/>
 <stop  offset="0.6001" style="stop-color:#C42285;stop-opacity:0.4319"/>
 <stop  offset="0.7124" style="stop-color:#B92486;stop-opacity:0.3247"/>
 <stop  offset="0.8032" style="stop-color:#A82686;stop-opacity:0.238"/>
 <stop  offset="0.8809" style="stop-color:#922887;stop-opacity:0.1637"/>
 <stop  offset="0.9485" style="stop-color:#772C88;stop-opacity:9.914905e-02"/>
 <stop  offset="1" style="stop-color:#5D2F89;stop-opacity:5.000000e-02"/>
</linearGradient>
<path class="st27" d="M162.8,145.3c0,0-0.4,2-1.1,2.2c-0.5,0.1-5,0.6-5.4,0.1s-1.2-2.1-0.6-2.8s1.5-1.1,2.2-1.1
 C159,143.8,162.8,144.9,162.8,145.3z"/>
<path class="st17" d="M501.7,222.2c0-0.1-0.2,0.5-0.6,0.7c-0.4,0.2-0.4,0.4-0.2,0.6S501.9,223.5,501.7,222.2z"/>
<g>
 <g>
   <path class="st28" d="M281.8,117.6c0,0,0,0.2-0.1,0.5"/>
   <path class="st29" d="M281.6,119.1c-0.5,4.9-1.6,21.4,3.8,38.9c9.7,31.6,34.6,28.1,32.6,58.2"/>
   <path class="st28" d="M318,216.7c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st28" d="M349.3,111.4c0,0,0,0.2-0.1,0.5"/>
   <path class="st30" d="M349,112.8c-1,4.6-3.9,19.4-2,33.7c2.2,17,15.4,52.6-20.8,72.6"/>
   <path class="st28" d="M325.7,219.4c-0.1,0.1-0.3,0.2-0.4,0.2"/>
 </g>
</g>
<g>
 <g>
   <path class="st28" d="M417.4,136c0.1,0.1,0.1,0.2,0.2,0.5"/>
   <path class="st31" d="M417.7,137.4c-0.3,5.9-7,27.3-30.8,33.9c-26.8,7.4-77.4,1.1-82,44.9"/>
   <path class="st28" d="M304.8,216.7c0,0.2,0,0.3,0,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st28" d="M450.5,179.4c0,0,0,0.2-0.1,0.5"/>
   <path class="st32" d="M450,180.8c-2.5,7.4-15.7,41.8-50.7,47.5c-31.7,5.2-48.7,0-63.7,3.5"/>
   <path class="st28" d="M335.1,232c-0.2,0-0.3,0.1-0.5,0.1"/>
 </g>
</g>
<g>
 <g>
   <path class="st28" d="M452.8,223.9c0,0-0.2-0.1-0.5-0.2"/>
   <path class="st33" d="M451.4,223.4c-3.7-1.3-15-5.2-36.3-11.2c-26.5-7.5-52.5-6.2-83.1,11.8"/>
   <path class="st28" d="M331.6,224.2c-0.1,0.1-0.3,0.2-0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st28" d="M223.3,129.1c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st32" d="M224.4,130.1c3.5,3.4,14.7,15.3,24.6,34.4c15.2,29.1,10.7,38.9,39.2,59.3"/>
   <path class="st28" d="M288.7,224.2c0.1,0.1,0.3,0.2,0.4,0.3"/>
 </g>
</g>
<g>
 <g>
   <path class="st28" d="M178,176c0,0,0.1,0.1,0.4,0.3"/>
   <path class="st34" d="M179.2,176.9c3.4,2.2,15,7.9,44.1,9.7c21,1.3,57.9-10.3,74.1,29.7"/>
   <path class="st28" d="M297.6,216.7c0.1,0.2,0.1,0.3,0.2,0.5"/>
 </g>
</g>
<g>
 <g>
   <path class="st28" d="M157.2,216.2c0,0,0.1-0.1,0.4-0.3"/>
   <path class="st35" d="M158.5,215.4c5.4-3.2,27.6-14.9,53.3-7c22.1,6.8,47.1,25.3,72.7,23.7"/>
   <path class="st28" d="M284.9,232c0.2,0,0.3,0,0.5,0"/>
 </g>
</g>
</svg>
`,
    name: 'custom_workshops',
    theme: 'fill',
};
const deleteIcon = {
    icon: `<svg id="delete" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  ></path>
</svg>
`,
    name: `delete`,
    theme: `fill`,
};
const engineering = {
    icon: `<svg version="1.1" id="Layer_13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#EAEAEA;}
 .st1{fill:#E5E5E5;}
 .st2{fill:#EFEFEF;}
 .st3{fill:#FFFFFF;}
 .st4{fill:#F2F2F2;}
 .st5{fill:#DBDBDB;}
 .st6{fill:#F4F4F4;}
 .st7{fill:#9B84C1;}
 .st8{fill:#EDBCDA;}
 .st9{fill:#D0E7F4;}
 .st10{fill:#EDEDED;}
 .st11{fill:none;stroke:#E5E5E5;stroke-width:0.25;stroke-miterlimit:10;}
 .st12{fill:#E2E2E2;}
 .st13{fill:#B7B7B7;}
 .st14{fill:#EFD1C7;}
 .st15{fill:#50208F;}
 .st16{opacity:0.2;fill:#3D3D75;}
 .st17{fill:#99CFF8;}
 .st18{fill:#363636;}
 .st19{fill:#F5C85C;}
 .st20{fill:#E01D85;}
</style>
<ellipse class="st0" cx="304.3" cy="386.5" rx="281.4" ry="34.1"/>
<path class="st1" d="M139.2,302.2c0,0-45.8-15-40.9-28.2c3.3-9,5.6,0.4,9.3-5.1c4.1-6.1-37.7-32.4-26.4-42.9
 c8.1-7.6,21.4,13.4,22.7,9.5c1.4-4.2-9-11.3-0.7-12.5c9.2-1.3,21.1,24.9,24.6,21.8c3-2.6-12.4-24.1-3.3-22.8s41.6,41.3,37.8,54.1
 C158.5,288.8,139.2,302.2,139.2,302.2z"/>
<path class="st1" d="M453.6,315.4c17.3,2.8,62.1-7.4,59.3-16.7c-2.9-9.3-16.9-5.2-12.8-10.9s29.2-8.4,27.6-13.6
 c-1.6-5.2-11.6-3.4-10.5-5.8s40.1-19.1,34.1-32.7c-5.9-13.6-25.3-8.8-32.8-1.8c-7.5,7-17.9,19.6-20.2,16.5c-2.3-3.1,9.1-13.5,2.4-16
 c-8.8-3.2-18.5,6.5-23,18.6c-5.3,14-9.5,25.6-10,20.5c-0.5-5.4-3.5-10.3-9.6-8.8s-13,17.5-15.6,31.2
 C439.8,309.6,447,314.3,453.6,315.4z"/>
<path class="st1" d="M128.2,320c0,0-72.7-16.7-76.6,8c-1.5,9.4,35.3,10.6,29.2,13.1s-48.2,0.5-45.1,15.6c2.3,10.8,36.1-1.1,35,2.9
 c-1.2,4.3-21.1,9.7-15.3,15.5c6.4,6.4,44.5-13.7,45.6-9.1c0.9,3.8-17.9,13.9-10.1,18.1c7.8,4.2,35.7-9.4,39.6-22
 C134.5,349.3,128.2,320,128.2,320z"/>
<path class="st2" d="M139.6,322c1.7-20.4-15.7-66.1-27-59c-11.4,7-4.7,21-12.2,18.7s-7.6-28.3-19.8-25c-10.5,2.8-3.2,13.2-6.1,14.1
 c-8.8,2.6-28.1-36.7-44.4-24.4c-16.4,12.2-13.1,29.3,1.1,37.3C40.6,289,57,295,53.7,299.3c-2.1,2.7-15.7-3.6-20.2,3.9
 c-5.9,9.7,6.8,27,26,19.6c15.1-5.8,32.5-1.7,26.3,0.9c-6.7,2.8-12.5,8.2-10,14.3c2.4,6.2,23.3,7.2,40.6,4.4S139,329.7,139.6,322z"/>
<path class="st3" d="M123.2,303.9c-1.2-3.1-7.7-14.4-7.7-14.4s2.1,13.1,2.6,16.8c0.4,2.6,4.4,9.7,6.7,13.5
 c-5.9-3.7-15.9-9.8-23.8-15c-2-3.8-5.1-10.4-5.8-12.1c-1.1-2.5-12-15.3-12-15.3s7.9,16.3,9.1,18.3c0.6,0.9,4.3,5.6,6.5,8
 c-4.7-3.1-40.3-26.3-40.3-26.3s-4.1-5.4-6.7-7.1c-2.2-1.4-15.5-8.4-15.5-8.4s9.2,8.9,12.6,11.8c5.3,4.7,9,4.6,9,4.6
 c9.9,6.8,29,19.6,34.2,22.7c1.7,1,4.2,2.5,6.9,4.2c0,0-13-3.8-17-2.7c-4,1.2-26.4,4.3-26.4,4.3l18.8,0.7l24.6-2.3
 c8.5,5.2,20.4,12.4,26.2,16.1c-6,0.4-14.9,1.2-18.5,2.2c-5.7,1.5-15.3,5.2-15.3,5.2s12.8-3.2,15.2-3c1.7,0.2,13-2.2,19.7-3.7
 c1.5,0.9,2.5,1.5,2.5,1.5l1-1.1c0,0-0.6-0.3-1.4-0.9c1.7-0.4,2.9-0.6,2.9-0.6s-1.4,0.1-3.5,0.2c-0.5-0.3-1.1-0.7-1.8-1.1
 L123.2,303.9z"/>
<path class="st1" d="M473.6,339.5c12.6-9.9,52.8-21.8,54.5-13.2c1.7,8.6-11.6,12-5.6,14.2c2.3,0.9,26.9-6.4,27.8-1.6
 c0.9,4.8-7.9,7.9-6,9.2c1.9,1.2,24.9-5.6,30,11.2c3.9,12.8-4.7,15.5-18.7,12.9c-9.1-1.7-18.2-4.9-18.7-1.4c-0.6,3.5,13,6.6,8.7,11.5
 c-5.7,6.5-22.8,6-27.6-3.8c-4.8-9.8-17.1-16.5-15.3-12.3c1.9,4.5,1.5,9.6-4,11.2s-17.8-8-25.7-17.6
 C465.1,350.3,468.8,343.3,473.6,339.5z"/>
<path class="st3" d="M489.3,338.4c2.7-0.8,13.9-2.7,13.9-2.7s-9.9,4.8-12.7,6.2c-1.9,1-8.4,2-12.1,2.6c5.8,1.2,15.4,3.2,23.2,4.7
 c3.7-0.7,9.3-1.9,10.8-2.3c2.3-0.6,16.9-1,16.9-1s-15.3,3.4-17.3,3.7c-0.9,0.1-5.9,0-8.8,0c4.7,0.9,36.8,7.4,36.8,7.4
 c3.4-0.2,8.3-0.4,9.6,0c2.1,0.6,16.3,4.6,16.3,4.6s-11.1-0.6-14.9-0.8c-9.1-0.6-11.7-2.9-11.7-2.9c-10.1-1.8-25.7-4.6-30.6-5.8
 c-1.7-0.4-4-0.9-6.7-1.5c0,0,9.8,4.6,11.3,7c1.4,2.4,11.9,14.6,11.9,14.6l-11-8.8L502,350.7c-8.2-1.8-19.7-4.3-25.4-5.5
 c3.1,3.1,7.5,7.7,8.9,9.9c2.2,3.4,1.3,4.3,1.3,4.3s-1.3-2.2-2.8-3.3c-1-0.7-5.8-7.3-8.6-11.2c-1.5-0.3-2.4-0.5-2.4-0.5l0.2-1
 c0,0,0.5,0.1,1.4,0.3c-0.7-1-1.2-1.7-1.2-1.7s0.7,0.7,1.8,1.8c0.5,0.1,1.1,0.2,1.7,0.4L489.3,338.4z"/>
<path class="st3" d="M469.7,309c3.1-0.7,7.9-4.6,7.9-4.6s-5.2,0.3-8.6,0.4c-2.4,0.1-9.1,2.6-13,4c4.9-4.3,13.2-11.5,19.9-17.3
 c3.9-1.3,9.9-3.2,11.5-3.6c2.5-0.7,16.8-8.2,16.8-8.2s-16.5,4.9-18.6,5.8c-1,0.4-3.8,1.9-6.5,3.5c4-3.4,7.1-5.9,7.9-6.3
 c1.7-0.9,13.4-11.8,21.7-19.6c3.4-1.7,8.2-4.1,9.3-5.2c1.7-1.7,13.3-13.3,13.3-13.3s-10.6,6.3-13.9,8.9
 c-3.3,2.6-12.1,11.3-12.1,11.3l0,0c-8.8,7.2-19.9,16.4-24.1,20.2c-1.4,1.3-3.4,3.1-5.6,5.1c0,0,7.1-9.8,7.2-13
 c0.1-3.2,3.8-20.8,3.8-20.8l-6,14.5l-5.1,19.2c-7,6.3-16.7,14.9-21.6,19.2c1.4-4.7,3.3-11.7,3.5-14.5c0.3-4.6-0.2-12.2-0.2-12.2
 s-0.9,10.2-1.8,12c-0.6,1.3-1.8,10.3-2.5,15.6c-1.3,1.1-2,1.8-2,1.8l0.6,0.9c0,0,0.5-0.4,1.2-1c-0.2,1.4-0.3,2.3-0.3,2.3
 s0.3-1.1,0.8-2.8c0.4-0.4,0.9-0.8,1.5-1.3L469.7,309z"/>
<path class="st2" d="M549.4,342.9c22.8-5.7,30.8-19.7,24.7-20.7c-5.6-0.9-9.5,3.5-15.7,2.8c-10.2-1.2-24.2-2.5-18.3-7.8
 c5.8-5.3,12.3,6.8,27.5-0.4s15.5-13.8,14.6-22c-0.8-8.2-4.8,1.3-8.4,4.4c-3.6,3.1-14.7,11.7-17.9,6.9c-3.2-4.8,7.3-4.9,14.5-11.6
 c7.2-6.6,10.2-19.4,8.4-25.3c-1.8-5.9-19.7,19-24.5,15.3c-8.5-6.5,11.7-15.5,12.7-20.4c0.9-4.9-4.6-5.8-18.9-3.6
 c-14.2,2.3-10.5,21-18.1,25.7c-7.6,4.7-3.8-2.4-3.8-7.7c-0.1-8.7,19.4-20.5,2.1-21.2c-9.7-0.5-17.6,10-20,17.3
 c-2.3,7.3-4.7,14.7-7.8,9.8c-3.2-4.8,14.2-31.9-0.4-29.2c-14.6,2.6-33.1,42.9-33.5,44.2c0,0-22.2,47.7-17.6,55.3
 c0,0,64.6,7.8,68.2-0.1c2.3-4.9-12.7-8.8-12.8-12.6c-0.1-4.8,4.7-2,9,0.6C517.5,345.3,525.8,348.7,549.4,342.9z M573.5,307.4
 c3.5,1.7-8,6-9,5.6C558,311,570,305.7,573.5,307.4z M566.3,285.9c11.5-1.4-7.6,7.3-7.6,7.3s-3.8,2.8-10.8,3.9
 C540.8,298.4,554.8,287.4,566.3,285.9z M551.1,268.6c6.6-1.1-7.8,14-7.8,14C534.3,284.2,544.5,269.8,551.1,268.6z M522.1,266.9
 c9-6.4-1.5,11.9-1.5,11.9C512.4,285.9,513.2,273.3,522.1,266.9z M512.9,310.2c-6.2,1.5-2.6-15.3,5.3-18.2
 C526.3,289.1,512.9,310.2,512.9,310.2z M521.3,331.3c-0.7-8.7,17.7-0.2,17.7-0.2C543.6,337.6,522.1,340,521.3,331.3z M526.3,310.1
 c-11.3,1.2,13.7-7.9,13.7-7.9C546.2,303.5,537.7,308.9,526.3,310.1z"/>
<path class="st1" d="M123.9,355V141.5c0-8.1,6.6-14.7,14.7-14.7h327.6c8.1,0,14.7,6.6,14.7,14.7V355H123.9z"/>
<path class="st3" d="M468.2,346H136.6c-1.7,0-3-1.4-3-3V138.9c0-1.7,1.3-3,3-3h331.7c1.7,0,3,1.3,3,3V343
 C471.2,344.6,469.9,346,468.2,346z"/>
<polygon class="st4" points="542.3,380.7 62.5,380.7 123.9,355 480.9,355 "/>
<path class="st5" d="M534.3,391.7H70.5c-4.4,0-8-3.6-8-8.1v-2.9h479.9v2.9C542.3,388.1,538.7,391.7,534.3,391.7z"/>
<path class="st5" d="M157.7,361.9h16.9c0.9,0,1.5,0.1,1.3,0.2l-3.7,2.4c-0.2,0.1-1.1,0.2-2.1,0.2h-17.5c-0.9,0-1.5-0.1-1.3-0.2
 l4.3-2.4C155.9,362,156.8,361.9,157.7,361.9z M182.5,361.9h16.9c0.9,0,1.5,0.1,1.4,0.2l-3,2.4c-0.2,0.1-1.1,0.2-2,0.2h-17.5
 c-0.9,0-1.6-0.1-1.4-0.2l3.6-2.4C180.7,362,181.6,361.9,182.5,361.9z M207.3,361.9h16.9c0.9,0,1.6,0.1,1.4,0.2l-2.2,2.4
 c-0.1,0.1-1,0.2-1.9,0.2h-17.5c-0.9,0-1.6-0.1-1.4-0.2l2.8-2.4C205.5,362,206.3,361.9,207.3,361.9z M232,361.9h16.9
 c0.9,0,1.6,0.1,1.5,0.2l-1.5,2.4c-0.1,0.1-0.9,0.2-1.9,0.2h-17.5c-0.9,0-1.6-0.1-1.5-0.2l2.1-2.4C230.2,362,231.1,361.9,232,361.9z
  M256.8,361.9h16.9c0.9,0,1.6,0.1,1.6,0.2l-0.8,2.4c0,0.1-0.8,0.2-1.8,0.2h-17.5c-0.9,0-1.7-0.1-1.6-0.2l1.4-2.4
 C255,362,255.8,361.9,256.8,361.9z M281.5,361.9h16.9c0.9,0,1.7,0.1,1.7,0.2l-0.1,2.4c0,0.1-0.8,0.2-1.7,0.2h-17.5
 c-0.9,0-1.7-0.1-1.7-0.2l0.7-2.4C279.8,362,280.6,361.9,281.5,361.9z M306.3,361.9h16.9c0.9,0,1.7,0.1,1.7,0.2l0.7,2.4
 c0,0.1-0.7,0.2-1.6,0.2h-17.5c-0.9,0-1.7-0.1-1.7-0.2l-0.1-2.4C304.6,362,305.4,361.9,306.3,361.9z M331,361.9h16.9
 c0.9,0,1.7,0.1,1.8,0.2l1.4,2.4c0.1,0.1-0.6,0.2-1.6,0.2H332c-0.9,0-1.8-0.1-1.8-0.2l-0.8-2.4C329.4,362,330.1,361.9,331,361.9z
  M355.8,361.9h16.9c0.9,0,1.7,0.1,1.9,0.2l2.1,2.4c0.1,0.1-0.6,0.2-1.5,0.2h-17.5c-0.9,0-1.8-0.1-1.9-0.2l-1.5-2.4
 C354.2,362,354.9,361.9,355.8,361.9z M380.5,361.9h16.9c0.9,0,1.8,0.1,1.9,0.2l2.8,2.4c0.2,0.1-0.5,0.2-1.4,0.2h-17.5
 c-0.9,0-1.8-0.1-1.9-0.2l-2.3-2.4C379,362,379.6,361.9,380.5,361.9z M159.3,365.3h17.6c1,0,1.6,0.1,1.4,0.2l-3.8,2.6
 c-0.2,0.1-1.2,0.3-2.2,0.3H154c-1,0-1.6-0.1-1.3-0.3l4.4-2.6C157.3,365.5,158.3,365.3,159.3,365.3z M185.1,365.3h17.6
 c1,0,1.6,0.1,1.4,0.2l-3,2.6c-0.2,0.1-1.1,0.3-2.1,0.3h-18.3c-1,0-1.6-0.1-1.4-0.3l3.6-2.6C183.2,365.5,184.1,365.3,185.1,365.3z
  M210.9,365.3h17.6c1,0,1.6,0.1,1.5,0.2l-2.2,2.6c-0.1,0.1-1,0.3-2,0.3h-18.3c-1,0-1.7-0.1-1.5-0.3l2.9-2.6
 C209,365.5,209.9,365.3,210.9,365.3z M236.7,365.3h17.6c1,0,1.7,0.1,1.6,0.2l-1.4,2.6c-0.1,0.1-0.9,0.3-1.9,0.3h-18.3
 c-1,0-1.7-0.1-1.6-0.3l2.1-2.6C234.9,365.5,235.7,365.3,236.7,365.3z M262.5,365.3h17.6c1,0,1.7,0.1,1.7,0.2l-0.6,2.6
 c0,0.1-0.9,0.3-1.9,0.3H261c-1,0-1.7-0.1-1.7-0.3l1.3-2.6C260.7,365.5,261.5,365.3,262.5,365.3z M288.3,365.3H306
 c1,0,1.7,0.1,1.7,0.2l0.2,2.6c0,0.1-0.8,0.3-1.8,0.3h-18.3c-1,0-1.8-0.1-1.7-0.3l0.5-2.6C286.6,365.5,287.4,365.3,288.3,365.3z
  M314.1,365.3h17.6c1,0,1.8,0.1,1.8,0.2l1,2.6c0.1,0.1-0.7,0.3-1.7,0.3h-18.3c-1,0-1.8-0.1-1.8-0.3l-0.3-2.6
 C312.4,365.5,313.2,365.3,314.1,365.3z M339.9,365.3h17.6c1,0,1.8,0.1,1.9,0.2l1.8,2.6c0.1,0.1-0.6,0.3-1.6,0.3h-18.3
 c-1,0-1.8-0.1-1.9-0.3l-1.1-2.6C338.3,365.5,339,365.3,339.9,365.3z M365.7,365.3h17.6c1,0,1.8,0.1,2,0.2l2.5,2.6
 c0.1,0.1-0.5,0.3-1.5,0.3h-18.3c-1,0-1.9-0.1-2-0.3l-1.9-2.6C364.1,365.5,364.8,365.3,365.7,365.3z M160.2,369.2h18.4
 c1,0,1.6,0.1,1.4,0.3l-3.9,2.9c-0.2,0.2-1.2,0.3-2.3,0.3h-19.1c-1,0-1.7-0.1-1.4-0.3l4.6-2.9C158.2,369.3,159.2,369.2,160.2,369.2z
  M187.2,369.2h18.4c1,0,1.7,0.1,1.5,0.3l-3,2.9c-0.2,0.2-1.1,0.3-2.2,0.3h-19.1c-1,0-1.7-0.1-1.5-0.3l3.8-2.9
 C185.2,369.3,186.2,369.2,187.2,369.2z M214.1,369.2h18.4c1,0,1.7,0.1,1.6,0.3l-2.2,2.9c-0.1,0.2-1.1,0.3-2.1,0.3h-19.1
 c-1,0-1.7-0.1-1.6-0.3l2.9-2.9C212.2,369.3,213.1,369.2,214.1,369.2z M241.1,369.2h18.4c1,0,1.8,0.1,1.7,0.3l-1.3,2.9
 c-0.1,0.2-1,0.3-2,0.3h-19.1c-1,0-1.8-0.1-1.7-0.3l2-2.9C239.2,369.3,240.1,369.2,241.1,369.2z M268,369.2h18.4c1,0,1.8,0.1,1.8,0.3
 l-0.4,2.9c0,0.2-0.9,0.3-1.9,0.3h-19.1c-1,0-1.8-0.1-1.8-0.3l1.2-2.9C266.2,369.3,267,369.2,268,369.2z M295,369.2h18.4
 c1,0,1.8,0.1,1.8,0.3l0.4,2.9c0,0.2-0.8,0.3-1.8,0.3h-19.1c-1,0-1.9-0.1-1.8-0.3l0.3-2.9C293.2,369.3,294,369.2,295,369.2z
  M321.9,369.2h18.4c1,0,1.9,0.1,1.9,0.3l1.3,2.9c0.1,0.2-0.7,0.3-1.7,0.3h-19.1c-1,0-1.9-0.1-1.9-0.3l-0.6-2.9
 C320.2,369.3,320.9,369.2,321.9,369.2z M391.5,365.3h17.6c1,0,1.9,0.1,2,0.2l3.3,2.6c0.2,0.1-0.5,0.3-1.5,0.3h-18.3
 c-1,0-1.9-0.1-2.1-0.3l-2.7-2.6C389.9,365.5,390.6,365.3,391.5,365.3z M417.3,365.3H435c1,0,1.9,0.1,2.1,0.2l4.1,2.6
 c0.2,0.1-0.4,0.3-1.4,0.3h-18.3c-1,0-2-0.1-2.1-0.3l-3.5-2.6C415.8,365.5,416.4,365.3,417.3,365.3z M405.3,361.9h16.9
 c0.9,0,1.8,0.1,2,0.2l3.6,2.4c0.2,0.1-0.4,0.2-1.4,0.2h-17.5c-0.9,0-1.9-0.1-2-0.2l-3-2.4C403.8,362,404.4,361.9,405.3,361.9z
  M430.1,361.9H447c0.9,0,1.8,0.1,2.1,0.2l4.3,2.4c0.2,0.1-0.3,0.2-1.3,0.2h-17.5c-0.9,0-1.9-0.1-2.1-0.2l-3.7-2.4
 C428.6,362,429.2,361.9,430.1,361.9z M348.9,369.2h18.4c1,0,1.9,0.1,2,0.3l2.1,2.9c0.1,0.2-0.6,0.3-1.7,0.3h-19.1
 c-1,0-1.9-0.1-2-0.3l-1.4-2.9C347.2,369.3,347.9,369.2,348.9,369.2z M375.9,369.2h18.4c1,0,1.9,0.1,2.1,0.3l3,2.9
 c0.2,0.2-0.5,0.3-1.6,0.3h-19.1c-1,0-2-0.1-2.1-0.3l-2.3-2.9C374.2,369.3,374.9,369.2,375.9,369.2z M402.8,369.2h18.4
 c1,0,2,0.1,2.2,0.3l3.9,2.9c0.2,0.2-0.4,0.3-1.5,0.3h-19.1c-1,0-2-0.1-2.2-0.3l-3.2-2.9C401.2,369.3,401.8,369.2,402.8,369.2z
  M454.9,361.9H481c0.9,0,1.9,0.1,2.2,0.2l5.3,2.4c0.3,0.1-0.2,0.2-1.2,0.2h-27c-0.9,0-1.9-0.1-2.2-0.2l-4.4-2.4
 C453.4,362,453.9,361.9,454.9,361.9z M443.2,365.3h45.4c1,0,2,0.1,2.3,0.2l5.8,2.6c0.3,0.1-0.2,0.3-1.2,0.3h-47.1
 c-1,0-2-0.1-2.2-0.3l-4.3-2.6C441.6,365.5,442.2,365.3,443.2,365.3z M429.8,369.2h67.1c1,0,2.1,0.1,2.4,0.3l6.3,2.9
 c0.4,0.2-0.2,0.3-1.2,0.3h-69.7c-1,0-2.1-0.1-2.3-0.3l-4-2.9C428.2,369.3,428.8,369.2,429.8,369.2z M123.7,361.9h26.1
 c0.9,0,1.5,0.1,1.2,0.2l-4.4,2.4c-0.2,0.1-1.2,0.2-2.2,0.2h-27c-0.9,0-1.5-0.1-1.2-0.2l5.3-2.4C121.8,362,122.8,361.9,123.7,361.9z
  M116.1,365.3h34.9c1,0,1.5,0.1,1.3,0.2l-4.6,2.6c-0.3,0.1-1.3,0.3-2.3,0.3h-36.2c-1,0-1.5-0.1-1.2-0.3l5.8-2.6
 C114.2,365.5,115.2,365.3,116.1,365.3z M107.8,369.2h43.8c1,0,1.6,0.1,1.4,0.3l-4.8,2.9c-0.3,0.2-1.3,0.3-2.4,0.3h-45.5
 c-1,0-1.6-0.1-1.2-0.3l6.3-2.9C105.8,369.3,106.8,369.2,107.8,369.2z M98.9,373.3h29.8c1,0,1.6,0.1,1.3,0.3l-5.8,3.1
 c-0.3,0.2-1.5,0.3-2.6,0.3h-31c-1.1,0-1.6-0.1-1.3-0.3l6.9-3.1C96.7,373.4,97.8,373.3,98.9,373.3z M137.6,373.3h19.3
 c1,0,1.7,0.1,1.4,0.3l-4.8,3.2c-0.3,0.2-1.4,0.3-2.5,0.3H131c-1.1,0-1.7-0.1-1.4-0.3l5.6-3.2C135.5,373.4,136.6,373.3,137.6,373.3z
  M165.8,373.3h29.8c1,0,1.7,0.1,1.6,0.3l-3.5,3.1c-0.2,0.2-1.2,0.3-2.3,0.3h-31c-1.1,0-1.8-0.1-1.5-0.3l4.6-3.1
 C163.8,373.4,164.8,373.3,165.8,373.3z M486.6,373.3h19.3c1,0,2.2,0.1,2.5,0.3l6.9,3.2c0.4,0.2-0.2,0.3-1.3,0.3H494
 c-1.1,0-2.2-0.1-2.6-0.3l-6.1-3.2C485,373.4,485.6,373.3,486.6,373.3z M204.6,373.3h179.9c1,0,2,0.1,2.2,0.3l2.8,3.1
 c0.2,0.2-0.6,0.3-1.7,0.3H200.7c-1.1,0-1.8-0.1-1.6-0.3l3.3-3.1C202.6,373.4,203.5,373.3,204.6,373.3z M447.9,373.3h29.8
 c1,0,2.1,0.1,2.5,0.3l6,3.1c0.3,0.2-0.3,0.3-1.4,0.3h-31c-1.1,0-2.2-0.1-2.5-0.3l-4.8-3.1C446.2,373.4,446.8,373.3,447.9,373.3z
  M419.7,373.3h19.3c1,0,2.1,0.1,2.3,0.3l4.7,3.2c0.3,0.2-0.4,0.3-1.5,0.3h-20.1c-1.1,0-2.1-0.1-2.4-0.3l-3.9-3.2
 C417.9,373.4,418.6,373.3,419.7,373.3z M391.4,373.3h19.3c1,0,2,0.1,2.2,0.3l3.7,3.2c0.2,0.2-0.5,0.3-1.6,0.3H395
 c-1.1,0-2.1-0.1-2.3-0.3l-2.9-3.2C389.7,373.4,390.4,373.3,391.4,373.3z M157.7,361.9h16.9c0.9,0,1.5,0.1,1.3,0.2l-3.7,2.4
 c-0.2,0.1-1.1,0.2-2.1,0.2h-17.5c-0.9,0-1.5-0.1-1.3-0.2l4.3-2.4C155.9,362,156.8,361.9,157.7,361.9z M182.5,361.9h16.9
 c0.9,0,1.5,0.1,1.4,0.2l-3,2.4c-0.2,0.1-1.1,0.2-2,0.2h-17.5c-0.9,0-1.6-0.1-1.4-0.2l3.6-2.4C180.7,362,181.6,361.9,182.5,361.9z
  M207.3,361.9h16.9c0.9,0,1.6,0.1,1.4,0.2l-2.2,2.4c-0.1,0.1-1,0.2-1.9,0.2h-17.5c-0.9,0-1.6-0.1-1.4-0.2l2.8-2.4
 C205.5,362,206.3,361.9,207.3,361.9z M232,361.9h16.9c0.9,0,1.6,0.1,1.5,0.2l-1.5,2.4c-0.1,0.1-0.9,0.2-1.9,0.2h-17.5
 c-0.9,0-1.6-0.1-1.5-0.2l2.1-2.4C230.2,362,231.1,361.9,232,361.9z M256.8,361.9h16.9c0.9,0,1.6,0.1,1.6,0.2l-0.8,2.4
 c0,0.1-0.8,0.2-1.8,0.2h-17.5c-0.9,0-1.7-0.1-1.6-0.2l1.4-2.4C255,362,255.8,361.9,256.8,361.9z M281.5,361.9h16.9
 c0.9,0,1.7,0.1,1.7,0.2l-0.1,2.4c0,0.1-0.8,0.2-1.7,0.2h-17.5c-0.9,0-1.7-0.1-1.7-0.2l0.7-2.4C279.8,362,280.6,361.9,281.5,361.9z
  M306.3,361.9h16.9c0.9,0,1.7,0.1,1.7,0.2l0.7,2.4c0,0.1-0.7,0.2-1.6,0.2h-17.5c-0.9,0-1.7-0.1-1.7-0.2l-0.1-2.4
 C304.6,362,305.4,361.9,306.3,361.9z M331,361.9h16.9c0.9,0,1.7,0.1,1.8,0.2l1.4,2.4c0.1,0.1-0.6,0.2-1.6,0.2H332
 c-0.9,0-1.8-0.1-1.8-0.2l-0.8-2.4C329.4,362,330.1,361.9,331,361.9z M355.8,361.9h16.9c0.9,0,1.7,0.1,1.9,0.2l2.1,2.4
 c0.1,0.1-0.6,0.2-1.5,0.2h-17.5c-0.9,0-1.8-0.1-1.9-0.2l-1.5-2.4C354.2,362,354.9,361.9,355.8,361.9z M380.5,361.9h16.9
 c0.9,0,1.8,0.1,1.9,0.2l2.8,2.4c0.2,0.1-0.5,0.2-1.4,0.2h-17.5c-0.9,0-1.8-0.1-1.9-0.2l-2.3-2.4C379,362,379.6,361.9,380.5,361.9z
  M405.3,361.9h16.9c0.9,0,1.8,0.1,2,0.2l3.6,2.4c0.2,0.1-0.4,0.2-1.4,0.2h-17.5c-0.9,0-1.9-0.1-2-0.2l-3-2.4
 C403.8,362,404.4,361.9,405.3,361.9z M430.1,361.9H447c0.9,0,1.8,0.1,2.1,0.2l4.3,2.4c0.2,0.1-0.3,0.2-1.3,0.2h-17.5
 c-0.9,0-1.9-0.1-2.1-0.2l-3.7-2.4C428.6,362,429.2,361.9,430.1,361.9z M130.7,358.6H147c0.9,0,1.4,0.1,1.2,0.2l-4.3,2.2
 c-0.2,0.1-1.2,0.2-2.1,0.2h-16.8c-0.9,0-1.4-0.1-1.2-0.2l4.9-2.2C128.9,358.7,129.8,358.6,130.7,358.6z M154.5,358.6h16.3
 c0.9,0,1.4,0.1,1.2,0.2l-3.7,2.2c-0.2,0.1-1.1,0.2-2,0.2h-16.8c-0.9,0-1.5-0.1-1.2-0.2l4.2-2.2C152.7,358.7,153.6,358.6,154.5,358.6
 z M178.3,358.6h16.3c0.9,0,1.5,0.1,1.3,0.2l-3,2.2c-0.2,0.1-1,0.2-1.9,0.2h-16.8c-0.9,0-1.5-0.1-1.3-0.2l3.5-2.2
 C176.5,358.7,177.4,358.6,178.3,358.6z M202.1,358.6h16.3c0.9,0,1.5,0.1,1.4,0.2l-2.3,2.2c-0.1,0.1-1,0.2-1.9,0.2h-16.8
 c-0.9,0-1.5-0.1-1.4-0.2l2.9-2.2C200.4,358.7,201.2,358.6,202.1,358.6z M225.9,358.6h16.3c0.9,0,1.5,0.1,1.4,0.2l-1.7,2.2
 c-0.1,0.1-0.9,0.2-1.8,0.2h-16.8c-0.9,0-1.5-0.1-1.4-0.2l2.2-2.2C224.2,358.7,225,358.6,225.9,358.6z M249.7,358.6h16.3
 c0.9,0,1.6,0.1,1.5,0.2l-1,2.2c-0.1,0.1-0.8,0.2-1.7,0.2h-16.8c-0.9,0-1.6-0.1-1.5-0.2l1.5-2.2C248,358.7,248.8,358.6,249.7,358.6z
  M273.4,358.6h16.3c0.9,0,1.6,0.1,1.6,0.2l-0.3,2.2c0,0.1-0.8,0.2-1.7,0.2h-16.8c-0.9,0-1.6-0.1-1.6-0.2l0.9-2.2
 C271.8,358.7,272.6,358.6,273.4,358.6z M297.2,358.6h16.3c0.9,0,1.6,0.1,1.6,0.2l0.4,2.2c0,0.1-0.7,0.2-1.6,0.2h-16.8
 c-0.9,0-1.6-0.1-1.6-0.2l0.2-2.2C295.6,358.7,296.4,358.6,297.2,358.6z M321,358.6h16.3c0.9,0,1.6,0.1,1.7,0.2l1,2.2
 c0.1,0.1-0.6,0.2-1.5,0.2h-16.8c-0.9,0-1.7-0.1-1.7-0.2l-0.5-2.2C319.4,358.7,320.1,358.6,321,358.6z M344.8,358.6h16.3
 c0.9,0,1.7,0.1,1.8,0.2l1.7,2.2c0.1,0.1-0.6,0.2-1.5,0.2h-16.8c-0.9,0-1.7-0.1-1.8-0.2l-1.2-2.2
 C343.3,358.7,343.9,358.6,344.8,358.6z M368.6,358.6h16.3c0.9,0,1.7,0.1,1.8,0.2l2.4,2.2c0.1,0.1-0.5,0.2-1.4,0.2h-16.8
 c-0.9,0-1.7-0.1-1.8-0.2l-1.8-2.2C367.1,358.7,367.7,358.6,368.6,358.6z M392.4,358.6h16.3c0.9,0,1.7,0.1,1.9,0.2l3,2.2
 c0.2,0.1-0.4,0.2-1.3,0.2h-16.8c-0.9,0-1.8-0.1-1.9-0.2l-2.5-2.2C390.9,358.7,391.5,358.6,392.4,358.6z M416.2,358.6h16.3
 c0.9,0,1.8,0.1,1.9,0.2l3.7,2.2c0.2,0.1-0.4,0.2-1.3,0.2H420c-0.9,0-1.8-0.1-2-0.2l-3.2-2.2C414.7,358.7,415.3,358.6,416.2,358.6z
  M440,358.6h34c0.9,0,1.8,0.1,2.1,0.2l4.9,2.2c0.3,0.1-0.2,0.2-1.2,0.2h-35.2c-0.9,0-1.8-0.1-2-0.2l-3.8-2.2
 C438.6,358.7,439.1,358.6,440,358.6z"/>
<path class="st6" d="M209.7,316.9h-8.4v-4.3h8.4V316.9z M239.3,270.7h-22.1v4.3h22.1V270.7z M239.3,281.2h-22.1v4.3h22.1V281.2z
  M226.1,323.1h-6.5v4.3h6.5V323.1z M234.9,334.3h-2.6v4.3h2.6V334.3z M272.5,312.3h-22.1v4.3h22.1V312.3z M352,301.8H287v4.3H352
 V301.8z M364.5,281.2h-4.1v4.3h4.1V281.2z"/>
<path class="st7" d="M210.7,296.3h-10.6V292h10.6V296.3z M210.7,302.5h-8.4v4.3h8.4V302.5z M228.2,313h-8.7v4.3h8.7V313z
  M274.5,281.5h-22.1v4.3h22.1V281.5z M354,271h-64.9v4.3H354V271z M354,292h-64.9v4.3H354V292z M354,312.7h-64.9v4.3H354V312.7z
  M354,323.1h-64.9v4.3H354V323.1z M366.6,292h-4.1v4.3h4.1V292z M366.6,302.2h-4.1v4.3h4.1V302.2z M366.6,323.1h-4.1v4.3h4.1V323.1z
 "/>
<path class="st8" d="M210.7,275.3h-10.6V271h10.6V275.3z M210.7,281.5h-10.6v4.3h10.6V281.5z M210.7,323.5h-6.3v4.3h6.3V323.5z
  M240.3,292h-22.1v4.3h22.1V292z M239,313h-8.7v4.3h8.7V313z M237.9,323.5h-6.5v4.3h6.5V323.5z M228.2,302.5h-8.7v4.3h8.7V302.5z
  M225.1,334.6h-2.6v4.3h2.6V334.6z M274.5,271h-22.1v4.3h22.1V271z M274.5,292h-22.1v4.3h22.1V292z M274.5,302.2h-22.1v4.3h22.1
 V302.2z M274.5,323.1h-22.1v4.3h22.1V323.1z M354,281.5h-64.9v4.3H354V281.5z M366.6,271h-4.1v4.3h4.1V271z M366.6,312.7h-4.1v4.3
 h4.1V312.7z M366.6,332.4h-1.4v4.3h1.4V332.4z"/>
<rect x="217.2" y="249.4" class="st6" width="22.1" height="4.3"/>
<rect x="217.2" y="259.9" class="st6" width="22.1" height="4.3"/>
<rect x="360.5" y="259.9" class="st6" width="4.1" height="4.3"/>
<rect x="252.4" y="260.3" class="st7" width="22.1" height="4.3"/>
<rect x="289.1" y="249.8" class="st7" width="64.9" height="4.3"/>
<rect x="200.1" y="249.8" class="st8" width="10.6" height="4.3"/>
<rect x="200.1" y="260.3" class="st8" width="10.6" height="4.3"/>
<rect x="252.4" y="249.8" class="st8" width="22.1" height="4.3"/>
<rect x="289.1" y="260.3" class="st8" width="64.9" height="4.3"/>
<rect x="362.5" y="249.8" class="st8" width="4.1" height="4.3"/>
<ellipse class="st5" cx="343.8" cy="233.2" rx="2.8" ry="2.2"/>
<ellipse class="st5" cx="357.3" cy="233.2" rx="2.8" ry="2.2"/>
<path class="st3" d="M376.8,332.9v-65.7c0-1.1,0.9-1.9,1.9-1.9h75.6c1.1,0,1.9,0.9,1.9,1.9v65.7H376.8z"/>
<path class="st8" d="M415.4,297.8h-20.8v-3.5h20.8V297.8z M414,289.1h-19.4v3.5H414V289.1z M418.9,304.8h-24.4v3.5h24.4V304.8z
  M409.8,299.7h-15.2v3.5h15.2V299.7z M423.9,315.2h-21.2v3.5h21.2V315.2z M416.1,310h-20.8v3.5h20.8V310z M439.3,325.7h-22.7v3.5
 h22.7V325.7z M432.4,320.6h-21.1v3.5h21.1V320.6z M401.4,278.6h-13.1v3.5h13.1V278.6z"/>
<path class="st7" d="M447.2,297.8h-31.8v-3.5h31.8V297.8z M416.6,289.1H414v3.5h2.6V289.1z M447.2,304.8h-28.2v3.5h28.2V304.8z
  M412.4,299.7h-2.6v3.5h2.6V299.7z M443.5,315.2h-19.6v3.5h19.6V315.2z M440,310h-23.9v3.5H440V310z M451.2,325.7h-11.9v3.5h11.9
 V325.7z M449,320.6h-16.5v3.5H449V320.6z M395.7,283.8H393v3.5h2.7V283.8z M402.7,278.6h-1.3v3.5h1.3V278.6z"/>
<path class="st9" d="M394.5,296.8h-9.9v-1.5h9.9V296.8z M394.5,290.1h-9.9v1.5h9.9V290.1z M394.5,305.8h-9.9v1.5h9.9V305.8z
  M394.5,300.7h-9.9v1.5h9.9V300.7z M402.8,316.2h-18.1v1.5h18.1V316.2z M395.2,311h-10.6v1.5h10.6V311z M416.6,326.7h-31.9v1.5h31.9
 V326.7z M411.3,321.6h-26.7v1.5h26.7V321.6z M393,284.8h-8.4v1.5h8.4V284.8z M388.2,279.6h-3.6v1.5h3.6V279.6z"/>
<path class="st10" d="M454.8,265.3C454.8,265.3,454.8,265.3,454.8,265.3l-76.8-0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.1-0.2,0.2
 c-0.4,0.3-0.7,0.7-0.9,1.1v7.1h79.4v-7.3C455.8,266.1,455.4,265.6,454.8,265.3z"/>
<path class="st11" d="M376.8,332.9v-65.7c0-1.1,0.9-1.9,1.9-1.9h75.6c1.1,0,1.9,0.9,1.9,1.9v65.7H376.8z"/>
<circle class="st5" cx="439.5" cy="269.5" r="1.2"/>
<circle class="st5" cx="445.3" cy="269.5" r="1.2"/>
<circle class="st5" cx="451" cy="269.5" r="1.2"/>
<path class="st3" d="M172.5,284.6l4.7-137.7c0.1-1.9,1.7-3.5,3.6-3.4l244.6,8.3c1.9,0.1,3.5,1.7,3.4,3.6l-4.7,137.7L172.5,284.6z"/>
<path class="st9" d="M299.6,218.1l11.9-24.1c0,0,0.5,3.4,1.4,3.1c0.9-0.3,2.7-2.8,3.9-2.9c1.2-0.1,10.6-3.4,10.6-3.4s1.2,2,1.4,2.3
 c0.2,0.2,1.3,1.1,1.3,1.1l0.8,1.8c0,0,1.2,1.6,1.2,2c0,0.3-0.3,10.3-0.3,10.3s-11.5,0-14.3-0.1C314.8,208,299.6,218.1,299.6,218.1z
  M346.9,215.5c0,0,1.9-10.3,1.6-10.3c-0.3-0.1-3.1,5.3-3.5,6s-1.2,3.2-1.4,4.3c-0.2,1.1-2,3.5-2,3.5L346.9,215.5z M356.1,202.6
 c-0.3,0.4,4.2,8.6,4.2,8.6l5,1l3.7-10.9c0,0,0.3-5.1,0.2-5.9c-0.1-0.8,0-0.9-1.1-2c-0.2-0.2-0.7-1.8-0.7-1.8s-0.7-0.2-1,0
 c-0.2,0.2-0.9,1.8-1,2.3c-0.1,0.5-0.8,3.3-1,3.9c-0.3,0.6-1.1-1.3-1.1-1.6s-0.5-3.4-1.1-4.3s-3.4-0.4-3.4-0.4
 S356.4,202.2,356.1,202.6z M375.7,211.9c-0.2,1,2.8,3.7,3.1,4.2c0.3,0.5,12.1,4.5,12.1,4.5s-0.2-1.1-0.5-1.1c-0.3,0-1.7-1-1.7-1
 s-1.1-4.1-1.4-4.6c-0.3-0.5-1.4-2-1.6-2.5c-0.2-0.5-1.3-1.4-1.3-1.4s-0.3-3.4-0.3-4c-0.1-0.6-1-1.2-1.5-2.2c-0.5-1-1-6.6-1-6.6
 s-0.9-1.2-1.2-1.4s-1.3-3.3-1.3-3.3s-2.6-0.3-3.2-0.1c-0.7,0.2-1.5,8.8-1.5,9.3C374.4,201.7,375.9,210.9,375.7,211.9z M403.5,218.5
 c-0.1,0.3,4.5,1.6,4.5,1.6l0.6-2.5c0,0-1.4-0.3-2.2-1s-0.7-1.9-0.8-2.3c-0.1-0.4-0.2-7.9-0.3-8.8c-0.1-0.9-0.4-5.8-0.6-6.3
 c-0.2-0.5-0.4-0.1-0.8,0c-0.4,0.1-0.7,1.9-0.8,2.2c-0.1,0.3-0.6,3.9-0.7,4.5c-0.1,0.6-1,1.2-1.1,1.5c-0.1,0.2-0.4,3.5-0.4,3.5
 S403.6,218.2,403.5,218.5z"/>
<path class="st8" d="M288.9,217.8c0,0,1.4-1.9,1.8-2c0.4-0.1,2.6-1.1,2.6-1.1l2-1.9l1.1,0c0,0,1.8-15.4,1.9-15.9s0.8-2.5,0.8-2.5
 l1-0.8l1.2-4.2l6.2,0.2l0,1.3l2-1.3l1.6,0.1c0,0,1,6.3,1.1,6.9c0.1,0.6,1.1,2.8,1.1,2.8l2.3-8l1.5-0.7l0.9-0.8c0,0,9.2-0.7,9.6,0.3
 s0.2,10.7,0.7,11.1c0.5,0.4,4.3,2.2,4.2,4.2c-0.1,2,0.8,11.9,0.8,11.9s1.7-1.3,2.2-1.4s2.7,0.7,3.1,0.8c0.4,0.1,2.1,1.3,2.1,1.3
 s3.8-0.7,4.5-2.5c0.8-1.8,1.8-14.5,2-15.7c0.2-1.2,2.1-5.3,2.4-6.1c0.3-0.7,0.8-2.5,1.5-2.7c0.7-0.2,3.2,0.2,3.2,0.2
 s1.2,0.9,1.5,0.8c0.4-0.1,1.5-0.9,1.5-0.9l3,0.2l0.8,5.2c0,0,1.9,2.8,1.9,3.9c0,1.1,0.8,9.2,1.1,8.9s1.4-6.7,1.5-9.6
 c0.1-2.9,1-5.9,1.3-5.2c0.2,0.6,1,3.6,1.5,4.1c0.6,0.5,1.8,0.7,1.7,1.6c0,1-0.7,10.6-0.4,11.6c0.3,1.1,0.5,7.4,1.1,7
 c0.6-0.3,1.2-7.2,1.3-8.7c0.1-1.6,0.8-6.8,1.2-7.8c0.4-0.9,1.4-3.6,1.7-4.6c0.3-1.1,0.5-4.3,1.7-4.4c1.2-0.1,2.5,0.7,2.6,1.5
 c0.1,0.8,0.7,4.5,1.2,5.8c0.6,1.3,2.3,5.4,2.3,6.5c0,1.1,1,5.2,1.9,6.6c0.9,1.4,3.2,5.2,4.5,5.3c1.3,0.2,3.9-0.4,5.3-0.3
 c1.4,0,4.3,1.3,4.6,0.2c0.3-1.2,1-8.1,1.3-8.9c0.3-0.7,2.3-2.9,2.7-2.7c0.5,0.3,0.9,2.1,1.2,4c0.3,1.9,0,6.7,1.1,6.8
 s3.4,0.4,3.4,0.4l-0.1,2.9L288.9,217.8z"/>
<path class="st7" d="M309.1,218.4c0,0,1.2-0.8,1.5-1.5c0.3-0.6,1.6-3.7,2.3-3.4c0.6,0.3,1.9,4.6,2.6,4.7c0.8,0.1,4,0.6,4,0.6
 L309.1,218.4z M332.9,219.2c0,0-1.4-2-2.4-2.6c-1-0.6-0.8-2.1-1.2-2.6c-0.4-0.5-1.2,1.4-1.5,2.5s-1.4,2.5-1.4,2.5L332.9,219.2z
  M348,219.7c0,0-1.2-2.4-1.4-2.6c-0.2-0.3-1.1,0.8-1.7,0.9c-0.6,0.1-1.8,1.5-1.8,1.5L348,219.7z M390.9,221.2c0,0-2.4-1.2-3.2-1.4
 c-0.8-0.2-2-0.4-2.9-0.1c-0.9,0.3-4.2-1.4-4.2-1.4l-2,1.2c0,0-3.6-0.2-5-0.2c-1.4,0-2.4,0.4-3.1,0.6c-0.6,0.2-1.9-0.4-3.1-0.8
 c-1.2-0.5-2.1-1-2.9-1.4s-1.9-1.4-2.3-1.6c-0.4-0.3-1.9,1.8-2.2,2.4c-0.3,0.6-1.1,1.6-1.1,1.6L390.9,221.2z M408.4,221.8l0-1.3
 l-7.6-0.3l-1.5,1.3L408.4,221.8z"/>
<path class="st9" d="M270.7,236.4l26.5,0.9l-0.2,6.9l2.5,0.1l0.1-2.3l9.3,0.3c0-0.7,0-0.7,0-0.7l12,0.4l0-0.7l4.1,0.1l0.1-2.3
 l35.2,1.2l0-0.8l9.3,0.3l0.1-2.4l7.7,0.3l0-0.6l20.5,0.7l0-0.8l3,0.1l0,1.1l7,0.2l-0.9,25.3L270,259L270.7,236.4z"/>
<path class="st8" d="M270.4,244.7l21.1,0.7l0-0.4l3,0.1l0-1.3l2.5,0.1l-0.1,1.7l2.3,0.1l0-0.6l2.8,0.1l0,0.6l2.1,0.1l0,1.2
 c0,0,2.3,0.3,2.3,0.1c0-0.2,0.1-2.3,0.1-2.3l2.4,0.1l0,0.9l6.9,0.2l0,0.5l2.2,0.1l0.1-2l2.3,0.1l0,0.9l4.7,0.2l-0.1,3.1l2.3,0.1
 l0-1.2l13.9,0.5l0-0.8l2.5,0.1l-0.1,2l2.3,0.1l0.1-1.7l2,0.1l0-1l2.8,0.1l-0.1,1.9l2.1,0.1l0-1.2l2.6,0.1l-0.1,1.7l2.2,0.1l0.1-1.7
 l2.3,0.1l0-0.6l2.3,0.1l0-1.1l7,0.2l0,0.8l2.3,0.1l0.1-2l2.5,0.1l0-1.2l2.5,0.1l0,1.2l2,0.1l0-1.2l2.1,0.1l0-0.5l2.7,0.1l0-0.8
 l2.3,0.1l-0.1,3.8l2.2,0.1l0-1l6.9,0.2l0-0.6l2.5,0.1l0-1.1l2.5,0.1l-0.1,1.7l2.2,0.1l0-1.1l2.6,0.1l0-1l2.9,0.1l-0.6,18.9L270,259
 L270.4,244.7z"/>
<polygon class="st7" points="368.1,280.1 406.5,281.4 406.6,279.7 399,279.4 399.1,278.1 382.7,277.6 382.7,278.1 375.7,277.9
 375.7,278.8 373.3,278.7 373.2,279.3 370.5,279.2 370.5,279.6 368.1,279.5 "/>
<path class="st12" d="M215.7,180.3l-28.3-1l0.1-3.8l28.3,1L215.7,180.3z M215.5,187.5l-28.3-1l-0.1,3.8l28.3,1L215.5,187.5z
  M215.1,197.6l-28.3-1l-0.1,3.8l28.3,1L215.1,197.6z M214.7,208.6l-28.3-1l-0.1,3.8l28.3,1L214.7,208.6z M214.4,219.7l-28.3-1
 l-0.1,3.8l28.3,1L214.4,219.7z M214,230.7l-28.3-1l-0.1,3.8l28.3,1L214,230.7z M213.7,240.8l-28.3-1l-0.1,3.8l28.3,1L213.7,240.8z
  M213.3,251.9l-28.3-1l-0.1,3.8l28.3,1L213.3,251.9z"/>
<path class="st12" d="M266.2,180.8l-14.2-0.5l0-1.4l14.2,0.5L266.2,180.8z M265.9,190.4l-14.2-0.5l0,1.4l14.2,0.5L265.9,190.4z
  M265.5,200.5l-14.2-0.5l0,1.4l14.2,0.5L265.5,200.5z M265.1,211.5l-14.2-0.5l0,1.4l14.2,0.5L265.1,211.5z M264.8,222.6l-14.2-0.5
 l0,1.4l14.2,0.5L264.8,222.6z M264.4,233.6l-14.2-0.5l0,1.4l14.2,0.5L264.4,233.6z M264.1,243.7l-14.2-0.5l0,1.4l14.2,0.5
 L264.1,243.7z M263.7,254.8l-14.2-0.5l0,1.4l14.2,0.5L263.7,254.8z"/>
<path class="st10" d="M426.3,151.9c-0.1,0-0.1-0.1-0.2-0.1l-246.5-8.3c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.3,0.3
 c-0.8,0.5-1.3,1.2-1.7,2l-0.4,12.9l251.6,8.5l0.4-13.3C428,153.3,427.3,152.5,426.3,151.9z"/>
<path class="st11" d="M172.5,284.6l4.7-137.7c0.1-1.9,1.7-3.5,3.6-3.4l244.6,8.3c1.9,0.1,3.5,1.7,3.4,3.6l-4.7,137.7L172.5,284.6z"
 />
<circle class="st5" cx="398" cy="158.6" r="2.2"/>
<circle class="st5" cx="408.6" cy="159" r="2.2"/>
<circle class="st5" cx="419.1" cy="159.3" r="2.2"/>
<path class="st13" d="M512.4,395.8l-63.6-208.6c-0.2-0.6-0.9-1-1.5-0.8c-0.6,0.2-1,0.9-0.8,1.5l1.2,4.1h-10.4l-1.5-4.8
 c-0.2-0.6-0.9-1-1.5-0.8c-0.6,0.2-1,0.9-0.8,1.5l63.6,208.6c0.2,0.5,0.6,0.9,1.2,0.9c0.1,0,0.2,0,0.4-0.1c0.6-0.2,1-0.9,0.8-1.5
 l-5.4-17.7h10.4l5.6,18.4c0.2,0.5,0.6,0.9,1.2,0.9c0.1,0,0.2,0,0.4-0.1C512.2,397.1,512.6,396.4,512.4,395.8z M483.8,344.4h10.4
 l4.8,15.9h-10.4L483.8,344.4z M458,225.7h-10.4l-4.8-15.9h10.4L458,225.7z M458.3,226.6l4.8,15.9h-10.4l-4.8-15.9H458.3z
  M463.4,243.5l4.8,15.9h-10.4l-4.8-15.9H463.4z M468.5,260.3l4.8,15.9h-10.4l-4.8-15.9H468.5z M473.7,277.1l4.8,15.9h-10.4
 l-4.8-15.9H473.7z M478.8,293.9l4.8,15.9h-10.4l-4.8-15.9H478.8z M483.9,310.8l4.8,15.9h-10.4l-4.8-15.9H483.9z M489.1,327.6
 l4.8,15.9h-10.4l-4.8-15.9H489.1z M448,193l4.8,15.9h-10.4l-4.8-15.9H448z M493.7,377.1l-4.8-15.9h10.4l4.8,15.9H493.7z"/>
<path class="st14" d="M453.7,183.1l-1.2,5.2l-1,4.2l-0.2,1.1c-0.2-0.3-0.4-0.7-0.7-1c-0.9-1.1-1.8-2.2-3-3.3
 c-2.1-2.1-4.8-4.4-8.2-7.8c-4.6-4.5-8.8-10.3-10.3-12.4c-0.1-0.1-0.1-0.2-0.1-0.2c-0.1-0.1-0.2-0.2-0.3-0.3
 c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1,0-0.1,0-0.1l0.2-0.2l0,0c-0.2-0.2-0.3-0.4-0.5-0.6c-0.7-0.9-1.4-1.9-2.1-2.7
 c-1.8-2.4-3.4-3.2-4.5-5.9c-0.1-0.2,0.7-1.8,1.2-2.2c0.4-0.3,1.8,1.4,2.4,2.1c0.5,0.6,2.4,2.7,2.4,2.7s0.4-0.3,0.4-0.5
 c0.1-0.2-0.3-1.6-0.7-2c-0.5-0.4-0.2-1.3,0-1.4c0.3,0,2.4,3.1,2.7,3.8c0.2,0.8,0.1,3.4,0.1,3.7c0,0.1,0.3,0.6,0.8,1.1l0.3,0
 c0,0,0,0.1,0,0.1c0.7,0.8,8.1,8.5,12.4,11.5C448.6,181,453.2,183.5,453.7,183.1z"/>
<path class="st15" d="M453.6,183l-1.2,5.2c-0.4,0.6-0.9,1-1.2,1.2c-0.6,0.2-2.1,0-3.6-0.2c-2.1-2.1-4.8-4.4-8.2-7.8
 c-5-5-9.6-11.4-10.7-12.9c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1,0-0.1,0-0.1c0-0.1,0.1-0.2,0.2-0.3c0.5-0.7,2.2-1.9,2.2-1.9l0.4-0.3
 c0.7,0.8,8,8.9,12.3,11.9C448.6,180.9,453.2,183.4,453.6,183z"/>
<path class="st16" d="M453.7,183.1l-1.2,5.2l-1,4.2c-0.3,0-0.6,0.1-0.9,0.1c-0.9-1.1-1.8-2.2-3-3.3c-2.1-2.1-4.8-4.4-8.2-7.8
 c-4.6-4.5-8.8-10.3-10.3-12.4c-0.1-0.1-0.1-0.2-0.1-0.2c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.2-0.2-0.5-0.4-0.8c-1.5-3.1-4-7.8-5.4-10.7
 c0.4-0.3,1.8,1.4,2.4,2.1c0.5,0.6,2.4,2.7,2.4,2.7s0.4-0.3,0.4-0.5c0.1-0.2-0.3-1.6-0.7-2c-0.5-0.4-0.2-1.3,0-1.4
 c0.3,0,2.4,3.1,2.7,3.8c0.2,0.8,0.1,3.4,0.1,3.7c0,0.1,0.3,0.5,0.7,1.1l0.4-0.3c0,0,0,0,0,0c0.7,0.8,8,8.9,12.3,11.9
 C448.6,181,453.2,183.5,453.7,183.1z"/>
<path class="st10" d="M427.1,154.5c0,0-4-1.5-4.8-0.5s-1.6,7.3-1.1,8s6,1.7,6.4,1.2c0.4-0.4,0.6-2.6,0.7-4.2
 C428.4,157.4,428.9,154.4,427.1,154.5z"/>
<line class="st11" x1="428.7" y1="155.3" x2="428.3" y2="166.4"/>
<path class="st14" d="M499.9,255.1c-0.1,0.6-3.9,9.4-4.3,9.4c-1.5-0.9-1.1-6.3-1.4-10.5c-0.2-0.2-0.4-0.4-0.7-0.4c0,0,0,0,0,0
 c-0.1,0-0.1,0.1-0.2,0.2c0,0-12.7-7.6-22.3-13.6c-2.2-1.4-4.3-4.1-5.9-7.3c0,0,0-0.1-0.1-0.1c0,3.9,0.1,7.8,0.2,8.9
 c0.2,2.3,2.1,4.8,2.5,7.9c0.4,3.1-0.4,8.1-0.3,12.9c0.1,4.9,0,7,0,7s-0.1,0-0.4,0.1l0,0.8c0,0,0,0.1,0.1,0.3c0.4,1,1.7,4.6,1.1,5
 c-0.4,0.3-10.6,3.1-10.7,2.7c-0.3-1.8,4.2-4.5,7-7.5c0-0.3-0.1-0.6-0.1-0.9c-0.1,0-0.2,0-0.3,0c0,0-1.5-9.1-3.7-20.3
 c-1.7-8.9-6-26.2-8.5-37.8c-0.1-0.3-0.2-0.6-0.2-0.9c-0.4,0-0.7,0.1-0.7,0.1s0.6-2.4,0-4.3c-1-3-0.1-10.7-1.9-14.3
 c-2-4-8-3.4-13.1-9.7c-4.9-6-9.6-13.2-10-13.8c0,0,0,0,0,0l0.3-0.2c-0.8-1.2-1.6-2.5-2.2-3.6c-1.5-2.6-3-3.6-3.8-6.4
 c0-0.3,0.9-1.8,1.4-2c0.4-0.2,1.7,1.7,2.1,2.4c0.4,0.7,2.2,2.9,2.2,2.9s0.4-0.2,0.4-0.4c0.1-0.2-0.1-1.6-0.5-2.1
 c-0.4-0.5,0-1.3,0.2-1.4c0.3,0,2,3.3,2.2,4.1c0.2,0.8-0.2,3.4-0.3,3.6c0,0.1,0.3,0.6,0.6,1.2l0.4-0.3c0,0,7.4,9.1,11.6,12.6
 c4.7,4,8.7,6.7,8.7,6.7c2.7-1.8,2.9-1.4,2.9-1.4c-0.1-2.1-1.2-4.1-1.2-4.1s-2.4,1.5-3-1.9c-0.3-1.8-0.1-3.2,0.5-5
 c0.3-0.9,0.6-1.6,0.6-1.6s0,0,0,0c-0.2-0.4-1.2-1.9-1-3.5c0.3-2.2,3.7-1.1,3.7-1.1s0.3-1,1.4-1c3.1,0,3.7,3.2,3.7,3.2
 c4.5,3.1,3.2,6.5,2.4,7.4c-0.9,0.8-2.1,0-2.1,0c-0.2,0.5-0.4,0.9-0.6,1.1c-0.6,0.6-1.3,0.5-1.3,0.5c0.4,1.5,0.9,2.7,1.5,3.6
 c3.6,2.5,4.3,9.5,4.3,15.6c0,2.7,1.9,5.3,2.3,7.1c0.1,0.7,2.3,0.7,2.4,1.3c0.3,1,0.4,1.6,0.4,1.6c-0.1,0-0.3,0.1-0.4,0.1
 c0,0,0,0-0.1,0c0,0.1,0.1,0.2,0.2,0.3v0c0.4,0.6,0.8,1.3,1.1,2c0.9,1.9,1.4,4.2,1.3,7.1c0,0,4,16.1,4.9,16.8
 c1.9,1.5,4.9,1.8,7.5,3.6c2.6,1.8,5.7,5.7,9.4,8.9c3.6,3.2,5.1,4.7,5.1,4.7s0,0.1-0.2,0.3l0.6,0.5C495.5,252,500,254.3,499.9,255.1z
 "/>
<path class="st17" d="M495,251.1c0,0,0,0.1-0.2,0.3c-0.3,0.4-0.9,1.4-1.4,2.1c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.2
 c0,0-12.7-7.6-22.3-13.6c-2.3-1.4-4.3-4.2-6-7.5c0,3.9,0.1,7.8,0.2,8.9c0.2,2.3,2.1,4.8,2.5,7.9c0.4,3.1-0.4,8.1-0.3,12.9
 c0.1,4.9,0,7,0,7s-0.1,0-0.4,0.1c-0.5,0-1.6,0.2-2.5,0.3c-0.1,0-0.2,0-0.3,0c0,0-1.5-9.1-3.7-20.3c-1.7-8.9-6-26.2-8.5-37.8
 c-0.1-0.3-0.2-0.6-0.2-0.9c-0.4,0-0.6-1.8-0.6-1.8s0.8-0.4,0.2-2.2c4.5-1.2,7.7-1,11.4-1.9c0.4,2.2,1.4,1.6,1.4,1.6
 c-0.2,0,1.6,1.1,1.4,1.2c0.5,0.7,0.9,1.5,1.3,2.3c0.9,1.9,1.4,4.2,1.3,7.1c0,0,4,16.1,4.9,16.8c1.9,1.5,4.9,1.8,7.5,3.6
 c2.6,1.8,5.7,5.7,9.4,8.9C493.5,249.7,495,251.1,495,251.1z"/>
<path class="st18" d="M499.9,255.1c-0.1,0.6-3.9,9.4-4.3,9.4c-1.5-0.9-1.1-6.3-1.4-10.5c2.3,3.6,1.3-2,1.3-2S500,254.3,499.9,255.1z
  M467.1,270.6c-0.1-0.2-0.1-0.3-0.1-0.3s-4.8,4.4-2.4,0.4c-2.8,3.1-7.3,5.7-7,7.5c0.1,0.4,10.2-2.3,10.7-2.7
 C468.8,275.2,467.5,271.6,467.1,270.6z"/>
<path class="st15" d="M456.6,182c5.9,2.3,5.7,9.2,6.7,15.3c0.8,5,2.8,10.2,2.8,10.2c-0.2,0-0.3,0.1-0.4,0.1
 c-2.9,0.9-9.9,2.6-13.9,3.1c-0.4,0-0.7,0.1-0.7,0.1s-0.5-3.2-1.7-6.8c-1.4-4.4-2.9-6.7-4.4-12.4c0,0-3.8-2.8-8.9-9.1
 c-4.9-6-9.6-13.2-10-13.8l2.6-1.9l0.4-0.3c0,0,7.6,9,11.8,12.4c4.4,3.5,7.1,4.5,7.1,4.5c3.4,0.7,4.3,1,4.3,1s2.9-0.3,3.6-1.3
 C456.8,181.8,456.6,182,456.6,182z"/>
<path class="st16" d="M499.9,255.1c-0.1,0.6-3.9,9.4-4.3,9.4c-1.5-0.9-1.1-6.3-1.4-10.5c-0.2-0.2-0.4-0.4-0.7-0.4c0,0,0,0,0,0
 c-0.1,0-0.1,0.1-0.2,0.2c0,0-12.7-7.6-22.3-13.6c-2.2-1.4-4.3-4.1-5.9-7.3c0.1-4.7,0.7-13.8,0.7-13.8c2.2-4.7,0.8-9.1,0.2-11
 c0.4,0.6,0.8,1.3,1.1,2c0.9,1.9,1.4,4.2,1.3,7.1c0,0,4,16.1,4.9,16.8c1.9,1.5,4.9,1.8,7.5,3.6c2.6,1.8,5.7,5.7,9.4,8.9
 c3.6,3.2,5.1,4.7,5.1,4.7s0,0.1-0.2,0.3l0.6,0.5C495.5,252,500,254.3,499.9,255.1z"/>
<path class="st19" d="M459.2,176.8c-0.9,0.8-2.1,0-2.1,0c-0.2,0.5-0.4,0.9-0.6,1.1c-0.6,0.6-1.3,0.5-1.3,0.5s-0.8,0.1-1.6-0.7
 c-0.3-0.3-1,0.1-1,0.1s0.1-1,0.4-0.8c0.8,0.2,1.3-1.2,1.3-1.8c0-1.2-1.1-0.6-1.1-0.6s0.5-1,0-1.7c-0.5-0.6-2.3-2.3-2.7-2.3
 c-0.4,0-1.3,1.2-1.3,1.2s0,0,0,0c-0.2-0.4-1.2-1.9-1-3.5c0.3-2.2,3.7-1.1,3.7-1.1s0.3-1,1.4-1c3.1,0,3.7,3.2,3.7,3.2
 C461.2,172.5,460,175.9,459.2,176.8z"/>
<path class="st13" d="M463,276.1L463,276.1l-1.2-3.9c-0.9-0.1-1.6,0.2-2.5,0.3l3.9,12.8c0.8-0.3,1.5-0.5,2.3-0.8l-2.2-7.4h5.7
 c0-0.3,0.1-0.6,0.1-0.8c-0.1,0-2.6-0.1-2.7-0.1C464.5,276.6,463.6,276.3,463,276.1z"/>
<path class="st3" d="M225.5,279.6l-61.1-46c-0.9-0.6-1-1.9-0.4-2.7l63.8-84.6c0.6-0.9,1.9-1,2.7-0.4l61.1,46L225.5,279.6z"/>
<path class="st10" d="M227.8,145.5c0,0-0.1,0-0.1,0L163.2,231c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.3c0,0.5,0.2,1,0.4,1.4l5.7,4.3
 l66.2-87.8l-5.9-4.4C229,145.1,228.4,145.2,227.8,145.5z"/>
<path class="st11" d="M225.1,279.3l-61.1-46c-0.9-0.6-1-1.9-0.4-2.7l63.8-84.6c0.6-0.9,1.9-1,2.7-0.4l61.1,46L225.1,279.3z"/>
<circle class="st5" cx="221.8" cy="160.4" r="1.2"/>
<circle class="st5" cx="225.3" cy="155.8" r="1.2"/>
<circle class="st5" cx="228.8" cy="151.1" r="1.2"/>
<path class="st9" d="M216,258.2l-23.3-29.6l18,10.5c0-0.9-11.1-14-10.6-14.8c0.5-0.8,15.8,5.8,15.8,5.8s-12.1-14.8-11.8-14.7
 c0.3,0.1,1.8,0,1.8,0l2.4,0.9c0,0,2.4,0.5,2.7,0.8c0.4,0.3,11.5,8.6,11.5,8.6s-5.1,7.7-6.4,9.4C214.8,236.9,216,258.2,216,258.2z
  M237.4,221.7c0,0-10.7-9.6-10.9-9.5c-0.2,0.1,4.7,6.4,5.2,7.2c0.5,0.8-14.3-7.8-13.2-6.8c1.1,1,19.3,18.4,19.3,18.4L237.4,221.7z
  M232.3,215.9c0.3,0.5,10.7,2,10.7,2l-1.3-11.2l-10.6-11.2c0,0-5.6-4.4-6.6-4.9c-1-0.6-1-0.7-2.7-0.9c-0.4,0-2.3-0.9-2.3-0.9
 s-0.6,0.3-0.5,0.6s1.6,2.1,2.1,2.5c0.5,0.5,3.3,3.1,3.9,3.8c0.6,0.7-2-0.4-2.2-0.6s-4-2.4-5.3-2.7c-1.3-0.3-1.9,1.9-1.9,1.9
 S232,215.4,232.3,215.9z M245.9,199.7c1,0.9,5.4,1.1,6.1,1.3s12.7-6,12.7-6s-18.6-11.6-18.7-11.4c-0.1,0.2,13.1,12.8,13.1,12.8
 s-5.1-2.6-5.7-2.8c-0.7-0.2-13.5-9.3-14.2-9.6c-0.6-0.2,8.6,8.4,8.6,8.4s-3.9-2.6-4.7-3c-0.7-0.5-1.8-0.3-3.2-0.8
 c-1.3-0.4-7.9-4.7-7.9-4.7s-1.8-0.4-2.1-0.4s-4.3-1.9-4.3-1.9s2.7,3.4,2.6,4c-0.1,0.6,5.2,6.2,5.7,6.6
 C234,192.3,244.9,198.8,245.9,199.7z M264.8,193.5c0.3,0.3,6.8-7.5,6.8-7.5l3.4-4.4c0,0-9.2,1.7-10.2,1.7c-1,0-2.4-1-2.9-1.3
 c-0.5-0.3-9-6.3-10-7s-6.7-4.4-7.3-4.7c-0.6-0.3-0.3,0.2-0.4,0.5c-0.1,0.3,1.8,2,2.1,2.3c0.3,0.3,4.1,3.6,4.7,4.1s1,1.7,1.2,1.9
 c0.2,0.2-10-3.4-10-3.4S264.4,193.1,264.8,193.5z"/>
<path class="st8" d="M214.4,262c0,0-1.1-2.1-1-2.5c0.1-0.3,0.1-2.4,0.1-2.4l-0.8-2.5l0.5-0.7c0,0-13.4-11.4-13.8-11.7
 c-0.4-0.3-1.9-2.2-1.9-2.2l-0.3-1.2l12.5,4.6l-1.9-3.9l-9.2-10.4c0,0,6.2,3.5,6.8,3.8c0.6,0.3,3.1,1.1,3.1,1.1l-6.3-6.8l0-1.4
 l12.4,6.6c0,0-11.4-12.5-10.3-12.2c1.1,0.3,12.1,5.3,12.6,5.2s3.9-1.4,5.8,0c1.8,1.4,11.3,7.3,11.3,7.3s-11.6-10.7-11.5-11.1
 c0.1-0.4,8.1,2.6,8.3,2.5c0.3-0.1,7.2,4.2,7.2,4.2s1-2.9-0.3-4.6c-1.3-1.7-17.5-16.5-18-17.1c-0.5-0.6-1.9-2.2-1.8-2.8
 c0.1-0.6,14.1,7.4,14.1,7.4s8.6,5.3,8.6,5c0.1-0.3-18.4-18.3-18.4-18.3l5.1,2.9c0,0,3.5,0.6,4.4,1.3c1,0.7,8.8,5.5,8.7,5.1
 c0-0.4-5.5-5.3-8.1-7.3c-2.6-2-4.9-4.5-4.3-4.3c0.7,0.3,3.8,1.8,4.5,1.7c0.7-0.1,1.4-0.7,2.3-0.1c0.9,0.7,9.4,7.4,10.5,7.9
 c1.1,0.5,7,4.5,6.9,3.9c0-0.6-6-5.5-7.5-6.6c-1.4-1.1-5.9-5-6.6-5.9c-0.7-0.9-2.6-3.3-3.5-4.2s12.1,7,12.6,6.1
 c0.5-0.8-5.2-4.7-5.2-4.7c1.2,0.9-3.7-3.6-2.2-3.1c1.5,0.5,6,2,7,2.7c1,0.7,5.2,2.7,6.9,3c1.7,0.3,6.2,1.3,6.9,0.5
 c0.7-0.8,1.4-2.8,2.1-3.7s3.2-1.9,2.2-2.9c-1-1-7-6-7.6-6.7s-1.7-3.4-1.2-3.6c0.4-0.1,2.3,0.8,4.2,1.9c1.9,1.1,6.2,4.4,6.7,3.7
 c0.5-0.7,7.3-3.7,7.3-3.7l-2.8,3.7L214.4,262z"/>
<path class="st7" d="M224,249.1c0,0-0.4-1.5-1-2.2c-0.6-0.7-3.5-4.1-2.9-4.3c0.6-0.2-7.4-8.5-6.9-9c0.5-0.4,16.9,7.3,16.9,7.3
 L224,249.1z M235.4,234c0,0-2.8-0.7-4-0.5c-1.2,0.2-2.7-1.1-3.4-1.3c-0.7-0.2-11.1-5.6-10.1-4.5l12.3,13.2L235.4,234z M242.6,224.4
 c0,0-3.2-1.1-3.6-1.2c-0.4-0.1,0.4,1.3,0.3,1.9c-0.1,0.5,0.9,2.5,0.9,2.5L242.6,224.4z M263.1,197.2c0,0-2.4,0.6-3,1
 c-0.6,0.4-1.4,1-1.4,1.8c0,0.9-3.4,1.7-3.4,1.7l0.4,2.3c0,0-1.8,2.2-2.4,3.2s-0.6,1.9-0.6,2.6c0,0.6-1.3,1-2.3,1.4
 c-1,0.4-2,0.5-2.9,0.8c-0.8,0.3-7-3.5-7.5-3.4s5.8,6.3,6.4,7s1.4,2.1,1.4,2.1L263.1,197.2z M271.5,186l1.4-1.7l-23.6-15.6l17.3,19.7
 l-9.3-5.4l8.5,10.6L271.5,186z"/>
<rect x="196.6" y="225.9" transform="matrix(0.602 -0.7985 0.7985 0.602 -82.9239 287.4702)" class="st10" width="100.6" height="1.9"/>
<rect x="229.4" y="216.6" transform="matrix(0.602 -0.7985 0.7985 0.602 -70.4734 293.9819)" class="st10" width="60.5" height="2.1"/>
<rect x="212.5" y="231.5" transform="matrix(0.602 -0.7985 0.7985 0.602 -84.7743 295.0111)" class="st10" width="82.2" height="2.1"/>
<path class="st14" d="M168.2,364.8c0.1,0.1-1.4,3.1-1.2,3.8c0.2,0.8,3.2,5.1,3.7,5.6c0.5,0.5,4.7,0.3,4.9,0.2
 c0.2-0.1-0.3-0.7-0.7-1.3c-0.5-0.6-1.6-1.3-1.6-1.3s-0.6-0.7-0.9-2.5c-0.1-0.9-0.4-1.8-0.6-2.7c0,0,0,0,0-0.1
 c-0.2-0.9-0.4-1.8-0.4-2.7c0-1.7,0.9-20.5,1.5-24.6c0.6-4,2.7-12.4,2.7-12.4l-8.2-0.7c0,0,0.6,11.9,0.2,13.5
 c-0.4,1.5-0.7,3.5-1.2,5.5c-0.6,2,0.3,6.3,0.9,9.5C167.9,357.9,168.1,364.7,168.2,364.8z"/>
<path class="st18" d="M166.9,368.7c0.2,0.8,3.2,5.1,3.7,5.6c0.5,0.5,4.7,0.3,4.9,0.2c0.2-0.1-0.3-0.7-0.7-1.3
 c-0.5-0.6-1.6-1.3-1.6-1.3s-0.6-0.7-0.9-2.5c-0.1-0.9-0.4-1.8-0.6-2.7c0,0,0,0,0-0.1c-0.2-0.3-1-1.5-1.9-1.9c-1-0.5-1.7,0.2-1.7,0.2
 C168.2,365,166.7,367.9,166.9,368.7z"/>
<path class="st16" d="M168.2,364.8c0.1,0.1-1.4,3.1-1.2,3.8c0.2,0.8,3.2,5.1,3.7,5.6c0.5,0.5,4.7,0.3,4.9,0.2
 c0.2-0.1-0.3-0.7-0.7-1.3c-0.5-0.6-1.6-1.3-1.6-1.3s-0.6-0.7-0.9-2.5c-0.1-0.9-0.4-1.8-0.6-2.7c0,0,0,0,0-0.1
 c-0.2-0.9-0.4-1.8-0.4-2.7c0-1.7,0.9-20.5,1.5-24.6c0.6-4,2.7-12.4,2.7-12.4l-8.2-0.7c0,0,0.6,11.9,0.2,13.5
 c-0.4,1.5-0.7,3.5-1.2,5.5c-0.6,2,0.3,6.3,0.9,9.5C167.9,357.9,168.1,364.7,168.2,364.8z"/>
<path class="st14" d="M155.9,298.1c3.8,2.8,11.3,1.7,13.1-3.9c1.7-5.6-1.6-11.6,0.3-14c0.1,0.2,0.3,0.4,0.5,0.5
 c2.1,1.7,5.6,1.2,6.7,1c0,0,0,0,0,0c0.2,0,0.3-0.1,0.3-0.1l-0.6,2.1c0,0-3.6,1.4-4.4,3c-0.1,0.1-0.1,0.2-0.1,0.4
 c-0.5,1.6-0.6,4.8-0.3,8.3c0.4,3.5,0.4,7.6,0.3,8.1c-0.2,1-7.2,4.7-6.9,13.9c0.2,7.2,0,12.9,0,12.9c1.4,0.8,15.2,1.2,16,0.4
 s1.4-17.7,1.4-20.9c0.1-3.2,1.8-6.6,1.8-7.6c0-1,2.1-2.4,2.7-4.7c0.6-2.3-1.5-5.8-1.7-6.7c-0.2-0.9,9.6-8.3,10.4-10.4
 c0.6-1.5,6-13,6-13c-0.4-1.6-2.6-2.2-3.2-2.3c-0.7,0-6.5,12.5-7.1,13.3c-0.6,0.9-10,5.7-10,5.7l-1-0.4c0,0,0.2-3.7,0.2-3.7
 s2.2-0.6,2.6-2.5c0.4-2-4.7-6.9-4.7-6.9c0,0,0.1-0.1,0.1-0.1c0.1-0.4,0.6-1.9-0.3-3.1c-1-1.3-3.2-2.3-5.2-0.4
 c-2,1.9-2.1,2.9-2.3,2.9c-0.1,0-2,0.1-2.9,1.8c-0.9,1.7-0.2,2.5-0.2,2.5l0,0c-1.2-0.4-2.9-0.6-4.7,0.2c-3.9,1.6-3,6.8-1.9,11.5
 c1.1,4.7-2.3,0.8-5,1.4C152.2,288.4,152.1,295.2,155.9,298.1z"/>
<path class="st14" d="M171.9,365.3c0.1,0.1-1.4,3.1-1.2,3.8c0.2,0.8,3.2,5.1,3.7,5.6c0.5,0.5,4.7,0.3,4.9,0.2
 c0.2-0.1-0.3-0.7-0.7-1.3c-0.5-0.6-1.6-1.3-1.6-1.3s-0.6-0.7-0.9-2.5c-0.1-0.8-0.3-1.5-0.5-2.3c-0.1-0.2-0.1-0.4-0.1-0.5
 c-0.2-0.9-0.4-1.8-0.4-2.7c0-1.7,0.9-20.5,1.5-24.5c0.6-4,2.7-12.4,2.7-12.4l-8.2-0.7c0,0,0.6,11.9,0.2,13.5
 c-0.4,1.5-0.7,3.4-1.2,5.5c-0.6,2,0.3,6.3,0.9,9.5C171.7,358.4,171.9,365.2,171.9,365.3z"/>
<path class="st14" d="M200.5,268.1c0.7-1.2,1.4-2.5,1.9-3.5c1.3-2.5,2.5-3.5,3.2-6.3c0-0.3-0.8-1.7-1.2-2c-0.4-0.2-1.4,1.6-1.8,2.3
 c-0.4,0.7-1.8,2.9-1.8,2.9s-0.3-0.2-0.4-0.4c-0.1-0.2,0.1-1.6,0.4-2.1c0.4-0.5,0-1.3-0.2-1.4c-0.3,0-1.7,3.3-1.9,4
 c-0.2,0.7,0.2,3.3,0.2,3.6c0,0.1-0.2,0.6-0.5,1.2L200.5,268.1z"/>
<path class="st14" d="M159.2,310.1c-0.6,1.2-1.3,2.5-1.8,3.6c-1.2,2.6-2.4,3.6-3,6.4c0,0.3,0.8,1.7,1.3,1.9c0.4,0.2,1.3-1.7,1.7-2.4
 c0.4-0.7,1.7-2.9,1.7-2.9s0.3,0.2,0.4,0.4c0.1,0.2,0,1.6-0.3,2.1c-0.4,0.5,0,1.3,0.2,1.4c0.3,0,1.6-3.3,1.7-4.1
 c0.1-0.8-0.3-3.3-0.4-3.6c0-0.1,0.2-0.6,0.5-1.2L159.2,310.1z"/>
<path class="st20" d="M173,285.5c-1.2,0.3-9.1,11.4-9.9,13.5c-0.6,1.5-4.9,11.7-4.9,11.7c0.5,1.6,2.6,2.1,3.3,2.1s4.9-11.2,5.4-12.1
 s8.5-9.8,8.5-9.8s3.7-0.5,2.1-3.3S173,285.5,173,285.5z"/>
<path class="st16" d="M157.5,313.6c0.3-0.7,0.7-1.5,1.1-2.3c-0.2-0.2-0.3-0.4-0.4-0.7c0,0,4.3-10.2,4.9-11.7
 c0.8-2.1,8.8-13.2,9.9-13.5c0,0,2.9-0.7,4.5,2.1s-2.1,3.3-2.1,3.3s-8,8.9-8.5,9.8c-0.5,0.9-4.7,12.2-5.4,12.1
 c-0.1,0-0.4-0.1-0.6-0.1c0,0.1,0,0.1,0,0.2c0.1,0.3,0.5,2.8,0.4,3.6c-0.1,0.8-1.4,4.1-1.7,4.1c-0.2,0-0.6-0.8-0.2-1.4
 c0.3-0.5,0.4-1.9,0.3-2.1c-0.1-0.2-0.4-0.4-0.4-0.4s-1.4,2.3-1.7,2.9c-0.4,0.7-1.3,2.6-1.7,2.4c-0.5-0.2-1.3-1.6-1.3-1.9
 C155.1,317.3,156.3,316.2,157.5,313.6z"/>
<path class="st20" d="M164.8,330.2c1.4,0.8,15.2,1.2,16,0.4s1.4-17.7,1.4-20.9c0.1-3.2,1.8-6.6,1.8-7.6c0-1,2.1-2.4,2.7-4.7
 c0.6-2.3-1.5-5.8-1.7-6.7c-0.2-0.9,9.6-8.3,10.4-10.4c0.6-1.5,6-13,6-13c-0.4-1.6-2.6-2.2-3.2-2.3c-0.7,0-6.5,12.5-7.1,13.3
 c-0.6,0.9-10,5.7-10,5.7l-1-0.4c0,0-2.7,0.9-4.1-0.2c0,0-3.6,1.4-4.4,3c-1.3,2.8,0.1,15.7-0.1,16.7c-0.2,1-7.2,4.7-6.9,13.9
 C165,324.5,164.8,330.2,164.8,330.2z"/>
<path class="st19" d="M155.9,298.1c3.8,2.8,11.3,1.7,13.1-3.9c1.7-5.6-1.6-11.6,0.3-14c0.1,0.2,0.3,0.4,0.5,0.5
 c2.1,1.7,5.6,1.2,6.7,1c0,0,0,0,0,0c1.3-0.6,1.7-1.5,1.7-1.5s-0.7-0.6-1-1.4c-0.3-0.9-1.1-1.1-1.1-1.1s0.2,0.6-0.4,0.9
 c-0.6,0.3-2.3-0.8-2.1-1.4c0.2-0.6,1-0.3,1.5-1.2c0.5-0.9-0.2-1.8,0-2.1c0.2-0.3,2.6-1.9,3.4-2.9c0,0,0.1-0.1,0.1-0.1
 c0.1-0.4,0.6-1.9-0.3-3.1c-1-1.3-3.2-2.3-5.2-0.4c-2,1.9-2.1,2.9-2.3,2.9c-0.1,0-2,0.1-2.9,1.8c-0.9,1.7-0.2,2.5-0.2,2.5l0,0
 c-1.2-0.4-2.9-0.6-4.7,0.2c-3.9,1.6-3,6.8-1.9,11.5c1.1,4.7-2.3,0.8-5,1.4C152.2,288.4,152.1,295.2,155.9,298.1z"/>
<path class="st18" d="M170.7,369.2c0.2,0.8,3.2,5.1,3.7,5.6c0.5,0.5,4.7,0.3,4.9,0.2c0.2-0.1-0.3-0.7-0.7-1.3
 c-0.5-0.6-1.6-1.3-1.6-1.3s-0.6-0.7-0.9-2.5c-0.1-0.8-0.3-1.5-0.5-2.3c-0.1-0.2-0.1-0.4-0.1-0.5c-0.1-0.5-1.2-1.4-2.1-1.7
 c-0.9-0.3-1.5,0-1.5,0C172,365.5,170.5,368.4,170.7,369.2z"/>
<path class="st14" d="M353.5,111c0.2-0.2,0.5-0.4,0.8-0.6c4.2,1.2,8.9,4.1,10.4,3c0.3-0.3-7.1-8.4-7.6-8.7c-0.7-0.4-3.4,2.6-4.1,3.5
 c-0.1,0.2-0.2,0.3-0.2,0.3l-0.7,0.4L353.5,111z"/>
<path class="st18" d="M352.9,108.2c-0.1,0.2-0.2,0.3-0.2,0.3s6.4,2.4,1.5,2c4.2,1.2,8.9,4.1,10.4,3c0.3-0.3-7.1-8.4-7.6-8.7
 C356.4,104.4,353.7,107.4,352.9,108.2z"/>
<path class="st17" d="M244.9,126.6c0,0,1.2-2.5,8-3.5c2.7-0.4,19.1-4.1,19.6-3.9c0.5,0.3-6.2,8.1-6.2,8.1H247L244.9,126.6z"/>
<path class="st16" d="M244.9,126.6c0,0,1.2-2.5,8-3.5c2.7-0.4,19.1-4.1,19.6-3.9c0.5,0.3-6.2,8.1-6.2,8.1H247L244.9,126.6z"/>
<path class="st14" d="M244,126.8c0,0,0.3-0.7,1.9-0.8s4.4-0.5,4.5,0.4c0.1,0.9-2.6,3.8-3.7,3.3C245.5,129.1,243.6,127.2,244,126.8z"
 />
<path class="st14" d="M252.8,154.5c-1,1.1-1.9,2.4-2.8,3.3c-2.2,2.2-3.1,3.7-5.8,5.3c-0.3,0.1-2.1-0.3-2.5-0.7
 c-0.3-0.3,1.3-2,1.9-2.7c0.6-0.6,2.4-2.9,2.4-2.9s-0.3-0.3-0.6-0.3c-0.3,0-1.1,0.6-1.6,1c-0.8,0.6-1.5,0.4-1.6,0.2
 c-0.1-0.3,2.6-2.7,3.3-3.1c0.7-0.4,3.6-0.9,3.9-0.9c0.1,0,0.6-0.4,1.1-1L252.8,154.5z"/>
<path class="st14" d="M270.9,121.3l-0.4,0c-0.9,0-2.9-0.1-2.9-0.1c-0.5-1.3-1-2-1.3-2.2c-0.6-0.4-1.8-0.9-2-1c0,0,0,0,0,0
 s-0.2-1.5-1.4-2s-1.5,0.4-1.5,0.4s-0.9-1.7-2.8-2.5c-1.6-0.7-3.2,0-3.8,1.9c-0.5,1.9-1.5,4-2.2,5c-0.7,1-2.3,3.5-2,4.6
 c0.3,1.1,1,1,1,1s-0.1,1.9,1.5,2.2c1.6,0.3,2.3-0.8,2.6-1.8c0.2-0.5,0.2-1,0.2-1s2.4,0.5,4,0.8c1.6,0.3,3.3,0.7,3.3,0.7
 s-0.1,0.6,0.2,0.8c0.3,0.2,1.2,0.2,1.2,0.2s0.1,0.9,0.7,1.2c1.4,0.5,3.9-0.5,3.4-3.9l1.3,0.5c0,0,3.6-0.9,4-1.9
 S270.9,121.3,270.9,121.3z"/>
<path class="st18" d="M259.1,119.6c0.8-0.7,3.5,0.1,5.3,1.5c1.7,1.4,1.3,3.7,0.9,4.1c-0.4,0.4-1.1,0-1.5,0.2
 c-0.4,0.3-0.7,2.1-0.7,2.1s-0.1,0.6,0.2,0.8c0.3,0.2,1.2,0.2,1.2,0.2s0.1,0.9,0.7,1.2c1.4,0.5,3.9-0.5,3.4-3.9
 c-0.4-1.7-1.2-4.4-1.2-4.4c-0.5-1.3-1-2-1.3-2.2c-0.6-0.4-1.8-0.9-2-1c0.1,0.6,0.2,1.2,0.1,1.3c0,0.2-1-0.2-2.1-0.8
 c-1.1-0.6-1.1-2.1-1.1-2.1s-0.9-1.7-2.8-2.5c-1.6-0.7-3.2,0-3.8,1.9c-0.5,1.9-1.5,4-2.2,5c-0.7,1-2.3,3.5-2,4.6c0.3,1.1,1,1,1,1
 s-0.1,1.9,1.5,2.2c1.6,0.3,2.3-0.8,2.6-1.8c0.1-0.4,0.1-0.7,0.2-1c0.5-1.6,0.7-1.6,1.2-2.3C257.7,123,258.3,120.3,259.1,119.6z"/>
<path class="st17" d="M300.7,126.8c0,0-3.6-6.7-6.4-9.3c0,0-3.4,0.7-10.3-0.8c0,0-9.6-1.6-11.8,1.9c-2.2,3.6-8,18.2-8.7,19.3
 c-0.7,1.1-14.6,14.9-14.2,15.3c0.4,0.4,2.4,2.5,3.5,2.6c0,0,13.6-12.2,15.9-15.3c1.1-1.6,9.6-13.6,9.6-13.6L300.7,126.8z"/>
<path class="st20" d="M314.3,119.6c3.4,1.4,13,0.7,13,0.7s16.5-8.5,24.4-12.6c0,0,1.4,1.5,2.7,4.5c0,0-23.3,14.4-23.9,14.6
 c-0.5,0.1-18.5,0-18.5,0S313.4,119.2,314.3,119.6z"/>
<path class="st16" d="M314.3,119.6c3.4,1.4,13,0.7,13,0.7s16.5-8.5,24.4-12.6c0,0,0.3,0.3,0.7,0.9l0.3-0.2c0,0,0.1-0.1,0.2-0.3
 c0.8-0.8,3.5-3.8,4.1-3.5c0.5,0.3,8,8.4,7.6,8.7c-1.5,1.2-6.2-1.8-10.4-3c-0.2,0.1-0.3,0.2-0.5,0.3c0.2,0.4,0.5,0.8,0.7,1.4
 c0,0-23.3,14.4-23.9,14.6c-0.5,0.1-18.5,0-18.5,0S313.4,119.2,314.3,119.6z"/>
<path class="st14" d="M339.9,95.2c0.1-0.3,0.2-0.6,0.3-0.9c4-1.7,9.5-2.4,10-4.2c0.1-0.4-10.8-2.1-11.4-2c-0.7,0.1-1,4.2-1,5.3
 c0,0.2,0,0.3,0,0.3l-0.3,0.8L339.9,95.2z"/>
<path class="st18" d="M337.7,93.3c0,0.2,0,0.3,0,0.3s6.5-2.2,2.5,0.6c4-1.7,9.5-2.4,10-4.2c0.1-0.4-10.8-2.1-11.4-2
 C338,88.2,337.8,92.2,337.7,93.3z"/>
<path class="st20" d="M293.7,117.6c0,0,1.9-0.2,5.9-1.3c5.1-1.4,8.2,0.8,9.1,1.2c3.4,1.4,18.2,2,18.2,2s7.6-22,9.8-25.5
 c0,0,2.1,0.2,4.3,1.8c0,0-7.7,31-9.5,31c-0.5,0-35.7,0.1-35.7,0.1C295.9,119,293.7,117.6,293.7,117.6z"/>
</svg>
`,
    name: 'engineering',
    theme: 'fill',
};
const error = {
    icon: `<svg id="error" viewBox="0 0 512 512" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="269" cy="264.8" r="243" fill="#8cc53f"/><path d="M512 265a244 244 0 0 1-12 74l-214-73 215-74a241 241 0 0 1 11 73z" style="adobe-blending-mode:screen" opacity=".2" fill="#ff0"/><path d="M512 265c0 12-1 24-3 35l-223-34 224-35 2 34z" style="adobe-blending-mode:screen" opacity=".2" fill="#ff0"/><path d="M172 358v130a239 239 0 0 1-16-8V358c0-4 3-7 6-7h3a7 7 0 0 1 2 1c3 0 5 3 5 6zm-23 2-42 86a239 239 0 0 1-12-12l40-81a6 6 0 0 1 3-3 6 6 0 0 1 5 0h1l2 1a7 7 0 0 1 3 9zm118 148-11-1h-6l-72-147a2 2 0 0 1-1 0v-2a5 5 0 0 1 0-1v-1l1-2a8 8 0 0 1 1-1v-1a5 5 0 0 1 1 0l1-1 2-1 3-1 1 1h2l3 3 74 151 1 4z" fill="#4d4d4d"/><path d="M167 352c-3 0-6 3-6 6v125l-5-3V358c0-4 3-7 6-7h3a7 7 0 0 1 2 1zm-24-2a7 7 0 0 0-3 3l-41 85-4-4 40-81a6 6 0 0 1 3-3 7 7 0 0 1 4 0 6 6 0 0 1 1 0zm40 10 73 147h-6l-72-147a2 2 0 0 1-1 0v-2a5 5 0 0 1 0-1v-1l1-2a8 8 0 0 1 1-1v-1a5 5 0 0 1 1 0l1-1 2-1 3-1 1 1h2l-3 1a7 7 0 0 0-3 9z"/><path d="M178 358v2a6 6 0 0 1-1-4l1 2z"/><path d="M327 243v46c0 3-2 6-4 6h-29c-2 0-4-3-4-6v-46c0-4 2-6 4-6h29c2 0 4 2 4 6z" fill="#333"/><path d="M342 236v60c0 4-2 8-4 8h-28c-3 0-4-4-4-8v-60c0-4 1-8 4-8h28c2 0 4 4 4 8z"/><path d="M345 236v60c0 4-2 8-4 8h-29c-2 0-4-4-4-8v-60c0-4 2-8 4-8h29c2 0 4 4 4 8z" fill="#333"/><path d="M345 278v18c0 4-2 8-4 8h-29c-2 0-4-4-4-8v-18h37z"/><path d="M327 282v7c0 3-2 6-4 6h-29c-2 0-4-3-4-6v-7h37z"/><g fill="#335c64"><path d="M26 189h270v162H26z"/><path style="adobe-blending-mode:multiply" opacity=".5" d="M26 189h270v162H26z"/></g><path d="M40 279a6 6 0 0 1-6 6H15a6 6 0 0 1-6-6v-36a6 6 0 0 1 6-6h19a6 6 0 0 1 6 6v36zm157 51c6 0 10 2 10 5v19c0 4-4 6-10 6h-66c-6 0-11-2-11-6v-19c0-3 5-5 11-5h66z" fill="#231f20"/><path fill="#335c64" d="M32 212h264v134H32z"/><path d="m243 76-2 17c0 2-2 3-4 2l-63-6-72-8c-3 0-5-1-4-2l1-18 5-2 93 10 42 4c2 0 4 2 4 3z" fill="#4d4d4d"/><ellipse cx="87.1" cy="127.3" rx="75.3" ry="75.2" fill="#f5ba3d"/><ellipse cx="87.1" cy="127.3" rx="75.3" ry="75.2" fill="#895881"/><ellipse cx="235.4" cy="132.9" rx="68.9" ry="68.8" fill="#f5ba3d"/><ellipse cx="235.4" cy="132.9" rx="68.9" ry="68.8" fill="#895881"/><g fill="#c6a9b5"><circle cx="88.6" cy="125.8" r="73.9"/><circle cx="88.6" cy="125.8" r="73.9" style="adobe-blending-mode:multiply"/></g><circle cx="88.6" cy="125.8" r="68.7" fill="#c6a9b5"/><circle cx="88.6" cy="125.8" r="21.8" fill="#895881"/><circle cx="87.2" cy="127.2" r="13.8" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="88.6" cy="125.8" r="13.8" fill="#4d4d4d"/><circle cx="45.7" cy="115.6" r="13.8" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="128.9" cy="115.6" r="13.8" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="111.9" cy="164.1" r="13.8" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="62.5" cy="164.1" r="13.8" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="87.2" cy="86.2" r="13.8" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="47.1" cy="112.8" r="13.8" fill="#4d4d4d"/><circle cx="130.3" cy="112.8" r="13.8" fill="#4d4d4d"/><circle cx="113.3" cy="161.3" r="13.8" fill="#4d4d4d"/><circle cx="63.9" cy="161.3" r="13.8" fill="#4d4d4d"/><circle cx="88.6" cy="83.4" r="13.8" fill="#4d4d4d"/><path d="m243 76-2 17c0 2-2 3-4 2l-63-6a68 68 0 0 1 23-20l42 4c2 0 4 2 4 3z" fill="#f5ba3d"/><path d="m243 76-2 17c0 2-2 3-4 2l-63-6a68 68 0 0 1 23-20l42 4c2 0 4 2 4 3z" style="adobe-blending-mode:multiply"/><g fill="#c6a9b5"><circle cx="236.8" cy="131.5" r="67.5"/><circle cx="236.8" cy="131.5" r="67.5" style="adobe-blending-mode:multiply"/></g><circle cx="236.8" cy="131.5" r="62.8" fill="#c6a9b5"/><circle cx="236.8" cy="131.5" r="19.9" fill="#895881"/><circle cx="235.6" cy="132.8" r="12.6" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="236.8" cy="131.5" r="12.6" fill="#4d4d4d"/><circle cx="197.7" cy="122.2" r="12.6" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="273.6" cy="122.2" r="12.6" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="258.2" cy="166.4" r="12.6" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="213.1" cy="166.4" r="12.6" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="235.6" cy="95.3" r="12.6" style="adobe-blending-mode:screen" fill="#c59b6d"/><circle cx="199" cy="119.6" r="12.6" fill="#4d4d4d"/><circle cx="274.9" cy="119.6" r="12.6" fill="#4d4d4d"/><circle cx="259.4" cy="163.8" r="12.6" fill="#4d4d4d"/><circle cx="214.3" cy="163.8" r="12.6" fill="#4d4d4d"/><circle cx="236.8" cy="92.8" r="12.6" fill="#4d4d4d"/><g fill="#ba334d"><circle cx="264" cy="237.6" r="12.2"/><circle cx="264" cy="237.6" r="12.2" style="adobe-blending-mode:multiply"/></g><circle cx="265.5" cy="236.1" r="10.7" fill="#ba334d"/><g fill="#ba334d"><circle cx="227" cy="237.6" r="12.2"/><circle cx="227" cy="237.6" r="12.2" style="adobe-blending-mode:multiply"/></g><circle cx="228.5" cy="236.1" r="10.7" fill="#ba334d"/><g fill="#ba334d"><circle cx="189.2" cy="237.6" r="12.2"/><circle cx="189.2" cy="237.6" r="12.2" style="adobe-blending-mode:multiply"/></g><circle cx="190.7" cy="236.1" r="10.7" fill="#ba334d"/><g style="adobe-blending-mode:screen"><g style="adobe-blending-mode:normal"><path d="M153 243H52c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 1 5 4s-2 4-5 4z" fill="#335c64"/><path d="M153 243H52c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 1 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/></g></g><g style="adobe-blending-mode:screen"><g style="adobe-blending-mode:normal"><path d="M153 263H52c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" fill="#335c64"/><path d="M153 263H52c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/></g></g><g style="adobe-blending-mode:screen"><g style="adobe-blending-mode:normal"><path d="M153 283H52c-2 0-4-1-4-3s2-4 4-4h101c3 0 5 1 5 4s-2 3-5 3z" fill="#335c64"/><path d="M153 283H52c-2 0-4-1-4-3s2-4 4-4h101c3 0 5 1 5 4s-2 3-5 3z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/></g></g><g style="adobe-blending-mode:screen"><g style="adobe-blending-mode:normal"><path d="M153 304H52c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" fill="#335c64"/><path d="M153 304H52c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/></g></g><g style="adobe-blending-mode:screen"><g style="adobe-blending-mode:normal"><path d="M153 324H52c-2 0-4-1-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" fill="#335c64"/><path d="M153 324H52c-2 0-4-1-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/></g></g><path d="M155 241H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" fill="#335c64"/><path d="M155 241H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/><path d="M155 262H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" fill="#335c64"/><path d="M155 262H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/><path d="M155 282H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" fill="#335c64"/><path d="M155 282H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/><path d="M155 303H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 1 5 4s-2 4-5 4z" fill="#335c64"/><path d="M155 303H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 1 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/><path d="M155 323H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" fill="#335c64"/><path d="M155 323H54c-2 0-4-2-4-4s2-4 4-4h101c3 0 5 2 5 4s-2 4-5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#37673f"/><path d="m160 237-2 4v-1c0-2-2-4-5-4H52l-2 1c0-2 2-4 4-4h101c3 0 5 2 5 4zm0 21-2 3v-1c0-2-2-3-5-3H50c0-2 2-3 4-3h101c3 0 5 2 5 4zM160 278c0 2-1 3-2 3 0-2-2-4-5-4H52l-2 1c0-2 2-4 4-4h101c3 0 5 2 5 4zM160 299l-2 3v-1c0-2-2-4-5-4H52l-2 1c0-2 2-3 4-3h101c3 0 5 1 5 4zM160 319l-2 3c0-2-2-4-5-4H50c0-1 2-3 4-3h101c3 0 5 2 5 4z" style="adobe-blending-mode:multiply" opacity=".5" fill="#335c64"/><path d="M369 230v72c0 5-2 9-4 9h-29c-2 0-4-4-4-9v-72c0-5 2-9 4-9h29c2 0 4 4 4 9z"/><path style="adobe-blending-mode:screen" fill="#333" d="M308 238h37v10h-37z"/><path d="M371 230v72c0 5-1 9-3 9h-29c-2 0-4-4-4-9v-72c0-5 2-9 4-9h29c2 0 3 4 3 9z" fill="#333"/><path d="M371 275v27c0 5-1 9-3 9h-29c-2 0-4-4-4-9v-27h36z"/><path style="adobe-blending-mode:screen" fill="#333" d="M335 233h36v10h-36z"/></svg>
`,
    name: 'error',
    theme: 'fill',
};
const genre = {
    icon: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  id="genre"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path
    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  />
  <circle cx="12" cy="12" r="5" />
</svg>
`,
    name: 'genre',
    theme: 'fill',
};
const imdb = {
    icon: `<svg id="imdb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M0 0h24v24H0z" fill="none" />
  <path
    d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
  />
</svg>
`,
    name: 'imdb',
    theme: 'fill',
};
const play = {
    icon: `<svg id="play" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="0.875em">
  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
</svg>
`,
    name: 'play',
    theme: 'fill',
};
const popular = {
    icon: `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  id="popular"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path
    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  />
</svg>
`,
    name: 'popular',
    theme: 'fill',
};
const sad = {
    icon: `<svg id="sad" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <circle cx="15.5" cy="9.5" r="1.5" />
  <circle cx="8.5" cy="9.5" r="1.5" />
  <path
    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"
  />
</svg>
`,
    name: 'sad',
    theme: 'fill',
};
const search = {
    icon: `<svg id="search" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path
  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
`,
    name: 'search',
    theme: 'fill',
};
const top_rated = {
    icon: `<svg
  id="top_rated"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M0 0h24v24H0z" fill="none" />
  <path
    d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"
  />
</svg>
`,
    name: 'top_rated',
    theme: 'fill',
};
const upcoming = {
    icon: `<svg
  id="upcoming"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path
    d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"
  />
</svg>
`,
    name: 'upcoming',
    theme: 'fill',
};
const website = {
    icon: `<svg id="website" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path
    d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"
  />
</svg>
`,
    name: 'website',
    theme: 'fill',
};
const who_we_are = {
    icon: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#EAEAEA;}
 .st1{fill:#EDEDED;}
 .st2{fill:none;stroke:#E5E5E5;stroke-width:0.25;stroke-miterlimit:10;}
 .st3{fill:#DBDBDB;}
 .st4{fill:#D0E7F4;}
 .st5{fill:#EDBCDA;}
 .st6{fill:#9B84C1;}
 .st7{fill:#E2E2E2;}
 .st8{fill:#F4F4F4;}
 .st9{fill:#E5E5E5;}
 .st10{fill:#FFFFFF;}
 .st11{fill:#EFEFEF;}
 .st12{fill:#F2F2F2;}
 .st13{fill:#EFD1C7;}
 .st14{fill:#816051;}
 .st15{fill:#F5C85C;}
 .st16{fill:#50208F;}
 .st17{fill:#99CFF8;}
 .st18{fill:#363636;}
 .st19{fill:#E01D85;}
 .st20{fill:#826152;}
 .st21{opacity:0.2;fill:#3D3D75;}
 .st22{fill:#C9C9C9;}
</style>
<ellipse class="st0" cx="301.9" cy="402.6" rx="277.9" ry="10"/>
<path class="st1" d="M378.4,115.1c-0.1,0-0.1-0.1-0.1-0.1H147.9c-0.1,0.1-0.2,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.3,0.3
 c-0.7,0.5-1.2,1.2-1.6,2v12.1h235.1V117C380,116.3,379.3,115.5,378.4,115.1z"/>
<path class="st2" d="M145.6,269.9V118.2c0-1.8,1.5-3.3,3.3-3.3h228.5c1.8,0,3.3,1.5,3.3,3.3v82"/>
<line class="st2" x1="372.2" y1="246.9" x2="256.6" y2="246.9"/>
<rect x="372.2" y="200.2" class="st2" width="86.6" height="95.4"/>
<circle class="st3" cx="352.2" cy="122.2" r="2"/>
<rect x="110.7" y="226" class="st2" width="145.8" height="75.6"/>
<circle class="st3" cx="362" cy="122.2" r="2"/>
<circle class="st3" cx="371.8" cy="122.2" r="2"/>
<path class="st4" d="M262.2,180.8l10.3-22.9c0,0,0.6,3.2,1.4,2.8s2.4-2.7,3.5-2.8c1.1-0.1,9.8-3.5,9.8-3.5s1.2,1.9,1.3,2.1
 c0.1,0.2,1.3,1,1.3,1l0.8,1.6c0,0,1.2,1.5,1.2,1.8s0,9.7,0,9.7s-10.8,0.4-13.3,0.4S262.2,180.8,262.2,180.8z M306.2,176.9
 c0,0,1.5-9.6,1.2-9.7s-2.7,5.1-3.1,5.7s-1,3-1.2,4c-0.1,1-1.8,3.3-1.8,3.3L306.2,176.9z M314.4,164.6c-0.2,0.4,4.2,7.9,4.2,7.9
 l4.7,0.7l3.1-10.3c0,0,0.1-4.8,0-5.5c-0.1-0.7,0-0.8-1-1.8c-0.2-0.2-0.7-1.6-0.7-1.6s-0.7-0.2-0.9,0c-0.2,0.2-0.8,1.7-0.9,2.1
 c-0.1,0.4-0.6,3.1-0.8,3.7c-0.2,0.6-1-1.2-1-1.4c0-0.2-0.6-3.1-1.2-4c-0.6-0.8-3.1-0.2-3.1-0.2S314.6,164.2,314.4,164.6z M333,172.6
 c-0.1,0.9,2.8,3.4,3.1,3.8s11.4,3.8,11.4,3.8s-0.3-1-0.5-1s-1.7-0.8-1.7-0.8s-1.1-3.8-1.4-4.2s-1.3-1.8-1.6-2.2
 c-0.2-0.4-1.3-1.3-1.3-1.3s-0.4-3.1-0.4-3.7s-1-1.1-1.5-2c-0.5-0.9-1.1-6.1-1.1-6.1s-0.9-1.1-1.1-1.3c-0.2-0.1-1.3-3.1-1.3-3.1
 s-2.4-0.2-3,0s-1.1,8.3-1.1,8.7C331.5,163.2,333.1,171.7,333,172.6z M359.2,177.9c-0.1,0.3,4.3,1.3,4.3,1.3l0.4-2.3
 c0,0-1.3-0.3-2.1-0.8c-0.7-0.5-0.7-1.7-0.8-2.1s-0.4-7.4-0.5-8.2c-0.1-0.8-0.6-5.4-0.8-5.8c-0.2-0.4-0.4-0.1-0.8,0
 c-0.4,0.1-0.6,1.8-0.7,2.1c-0.1,0.3-0.4,3.7-0.5,4.2s-0.9,1.2-1,1.4s-0.3,3.2-0.3,3.2S359.2,177.6,359.2,177.9z"/>
<path class="st5" d="M252.1,180.8c0,0,1.2-1.8,1.6-1.9c0.3-0.1,2.4-1.1,2.4-1.1l1.8-1.8h1c0,0,1.2-14.5,1.2-14.9s0.7-2.4,0.7-2.4
 l0.9-0.8l1-3.9h5.8v1.2l1.8-1.2h1.5c0,0,1.1,5.8,1.2,6.4c0.1,0.6,1.1,2.6,1.1,2.6l1.9-7.5l1.3-0.7l0.8-0.8c0,0,8.5-0.9,9,0
 c0.4,0.9,0.6,10,1,10.3c0.4,0.3,4,1.9,4,3.8s1.1,11.1,1.1,11.1s1.6-1.2,2-1.3s2.6,0.6,2.9,0.7c0.3,0.1,2,1.1,2,1.1s3.5-0.8,4.2-2.5
 s1.2-13.6,1.3-14.7c0.1-1.1,1.8-5.1,2-5.7c0.2-0.7,0.7-2.4,1.3-2.6c0.7-0.2,3,0.1,3,0.1s1.1,0.8,1.5,0.7c0.3-0.1,1.3-0.9,1.3-0.9
 l2.8,0.1l0.9,4.8c0,0,1.9,2.6,1.9,3.6s1,8.5,1.3,8.3c0.3-0.2,1.1-6.3,1.1-9c0-2.7,0.8-5.5,1-4.9c0.2,0.6,1,3.4,1.6,3.8
 c0.6,0.4,1.7,0.6,1.7,1.5c0,0.9-0.3,9.9,0,10.9s0.7,6.8,1.2,6.5c0.6-0.3,0.9-6.7,0.9-8.2s0.6-6.4,0.9-7.3c0.3-0.9,1.2-3.4,1.5-4.4
 c0.2-1,0.3-4,1.5-4.2c1.1-0.1,2.4,0.6,2.5,1.3s0.8,4.2,1.3,5.4c0.6,1.2,2.4,4.9,2.4,5.9s1.1,4.8,2,6.1c0.9,1.2,3.1,4.7,4.4,4.8
 c1.2,0.1,3.6-0.4,4.9-0.4c1.3,0,4,1.1,4.3,0c0.2-1.1,0.7-7.6,0.9-8.3c0.2-0.7,2-2.8,2.5-2.6c0.4,0.2,0.9,1.9,1.2,3.7
 s0.2,6.3,1.2,6.3s3.1,0.2,3.1,0.2v2.7H252.1z"/>
<path class="st6" d="M271,180.8c0,0,1.1-0.8,1.3-1.4c0.2-0.6,1.4-3.5,2-3.3s1.9,4.2,2.6,4.3c0.7,0.1,3.7,0.4,3.7,0.4H271z
  M293.2,180.8c0,0-1.3-1.8-2.3-2.4s-0.8-1.9-1.2-2.4c-0.4-0.5-1,1.4-1.3,2.4c-0.3,1-1.3,2.4-1.3,2.4H293.2z M307.4,180.8
 c0,0-1.2-2.2-1.4-2.4s-1,0.8-1.6,0.9s-1.6,1.5-1.6,1.5H307.4z M347.5,180.8c0,0-2.3-1-3.1-1.2c-0.7-0.2-1.9-0.4-2.7,0
 c-0.8,0.4-4-1.1-4-1.1l-1.9,1.1c0,0-3.4-0.1-4.6,0c-1.3,0.1-2.2,0.5-2.8,0.7s-1.8-0.3-2.9-0.7c-1.1-0.4-1.9-0.9-2.8-1.2
 c-0.8-0.3-1.8-1.2-2.2-1.5c-0.4-0.2-1.7,1.7-1.9,2.3c-0.2,0.6-1,1.6-1,1.6H347.5z M363.9,180.8v-1.2h-7.1l-1.3,1.2H363.9z"/>
<path class="st4" d="M235.8,198.8h24.8v6.4h2.3v-2.2h8.7c0-0.7,0-0.7,0-0.7h11.2v-0.7h3.8v-2.2h32.9v-0.7h8.7v-2.2h7.2V196h19.2
 v-0.7h2.8v1h6.5v23.6H235.8V198.8z"/>
<path class="st5" d="M235.8,206.6h19.8v-0.4h2.8V205h2.3v1.6h2.1V206h2.6v0.5h2v1.1c0,0,2.2,0.2,2.2,0c0-0.2,0-2.1,0-2.1h2.2v0.8
 h6.5v0.5h2.1V205h2.2v0.8h4.4v2.9h2.2v-1.1h13v-0.8h2.3v1.9h2.2v-1.6h1.9v-0.9h2.6v1.8h2v-1.2h2.4v1.6h2.1v-1.6h2.1v-0.6h2.1v-1.1
 h6.6v0.8h2.2v-1.9h2.3V203h2.4v1.1h1.9V203h2v-0.5h2.5v-0.8h2.2v3.5h2.1v-0.9h6.5v-0.6h2.3v-1.1h2.3v1.6h2v-1.1h2.4v-0.9h2.7v17.6
 H235.8V206.6z"/>
<polygon class="st6" points="328.1,236.5 364,236.5 364,234.9 356.9,234.9 356.9,233.7 341.6,233.7 341.6,234.2 335.1,234.2
 335.1,235.1 332.8,235.1 332.8,235.7 330.3,235.7 330.3,236 328.1,236 "/>
<path class="st7" d="M182.7,148.2h-26.5v-3.6h26.5V148.2z M182.7,154.9h-26.5v3.6h26.5V154.9z M182.7,164.3h-26.5v3.6h26.5V164.3z
  M182.7,174.7h-26.5v3.6h26.5V174.7z M182.7,185h-26.5v3.6h26.5V185z M182.7,195.3h-26.5v3.6h26.5V195.3z M182.7,204.7h-26.5v3.6
 h26.5V204.7z M182.7,215.1h-26.5v3.6h26.5V215.1z"/>
<path class="st7" d="M229.8,147.1h-13.2v-1.3h13.2V147.1z M229.8,156h-13.2v1.3h13.2V156z M229.8,165.5h-13.2v1.3h13.2V165.5z
  M229.8,175.8h-13.2v1.3h13.2V175.8z M229.8,186.1h-13.2v1.3h13.2V186.1z M229.8,196.4h-13.2v1.3h13.2V196.4z M229.8,205.9h-13.2
 v1.3h13.2V205.9z M229.8,216.2h-13.2v1.3h13.2V216.2z"/>
<path class="st8" d="M129.3,276.3h-6.1v-4h6.1V276.3z M150.8,233.4h-16.1v4h16.1V233.4z M150.8,243.1h-16.1v4h16.1V243.1z
  M149.1,262.5h-6.3v4h6.3V262.5z M141.2,282h-4.7v4h4.7V282z M147.7,292.3h-1.9v4h1.9V292.3z M175,272h-16.1v4H175V272z M233,262.2
 h-47.3v4H233V262.2z M242.1,243.1h-3v4h3V243.1z"/>
<path class="st6" d="M130,257.1h-7.7v-4h7.7V257.1z M130,262.9h-6.1v4h6.1V262.9z M142.8,272.6h-6.3v4h6.3V272.6z M176.5,243.4
 h-16.1v4h16.1V243.4z M234.5,233.7h-47.3v4h47.3V233.7z M234.5,253.1h-47.3v4h47.3V253.1z M234.5,272.3h-47.3v4h47.3V272.3z
  M234.5,282h-47.3v4h47.3V282z M243.6,253.1h-3v4h3V253.1z M243.6,262.6h-3v4h3V262.6z M243.6,282h-3v4h3V282z"/>
<path class="st5" d="M130,237.7h-7.7v-4h7.7V237.7z M130,243.4h-7.7v4h7.7V243.4z M130,282.3h-4.6v4h4.6V282.3z M151.6,253.1h-16.1
 v4h16.1V253.1z M150.6,272.6h-6.3v4h6.3V272.6z M149.8,282.3h-4.7v4h4.7V282.3z M142.8,262.9h-6.3v4h6.3V262.9z M140.5,292.7h-1.9v4
 h1.9V292.7z M176.5,233.7h-16.1v4h16.1V233.7z M176.5,253.1h-16.1v4h16.1V253.1z M176.5,262.6h-16.1v4h16.1V262.6z M176.5,282h-16.1
 v4h16.1V282z M234.5,243.4h-47.3v4h47.3V243.4z M243.6,233.7h-3v4h3V233.7z M243.6,272.3h-3v4h3V272.3z M243.6,290.6h-1v4h1V290.6z"
 />
<path class="st5" d="M413.8,236h-21.3v-5.9h21.3V236z M412.3,221.3h-19.9v5.9h19.9V221.3z M417.4,248.1h-25v5.9h25V248.1z
  M408,239.2h-15.6v5.9H408V239.2z M422.5,265.8h-21.6v5.9h21.6V265.8z M414.5,257h-21.3v5.9h21.3V257z M438.2,283.8H415v5.9h23.2
 V283.8z M431.2,274.9h-21.6v5.9h21.6V274.9z M399.4,203.3H386v5.9h13.4V203.3z"/>
<path class="st6" d="M446.3,236h-32.5v-5.9h32.5V236z M415,221.3h-2.7v5.9h2.7V221.3z M446.3,248.1h-28.9v5.9h28.9V248.1z
  M410.7,239.2H408v5.9h2.7V239.2z M442.6,265.8h-20v5.9h20V265.8z M438.9,257h-24.4v5.9h24.4V257z M450.3,283.8h-12.2v5.9h12.2
 V283.8z M448.1,274.9h-16.9v5.9h16.9V274.9z M393.7,212.1h-2.7v5.9h2.7V212.1z M400.8,203.3h-1.3v5.9h1.3V203.3z"/>
<path class="st4" d="M392.5,234.3h-10.1v-2.5h10.1V234.3z M392.5,223h-10.1v2.5h10.1V223z M392.5,249.8h-10.1v2.5h10.1V249.8z
  M392.5,240.9h-10.1v2.5h10.1V240.9z M400.9,267.5h-18.5v2.5h18.5V267.5z M393.2,258.7h-10.8v2.5h10.8V258.7z M415,285.5h-32.7v2.5
 H415V285.5z M409.6,276.6h-27.3v2.5h27.3V276.6z M390.9,213.8h-8.6v2.5h8.6V213.8z M386,205h-3.7v2.5h3.7V205z"/>
<path class="st9" d="M532,375.7c6.8-6.1,15.8-27.1,10.4-28.8c-5.5-1.7-7.9,5.2-9.3,1.9c-1.5-3.4,5.1-14.2,2-15.1
 c-3.1-0.9-5.3,3.6-6.1,2.5s3.2-21.8-5.3-23.5c-8.5-1.7-12.3,7.5-11.2,12.6c1.1,5.1,4,13,1.7,13c-2.3,0-3.8-7.7-7.1-5.8
 c-4.3,2.6-4.7,12,1.5,15.5c6.1,3.5,10,10.8,7.3,9.5c-2.8-1.4-6.1-1.7-7.3,1.2c-1.2,2.9,4.5,10.5,10.4,15.6
 C524.8,379.4,529.4,378,532,375.7z"/>
<path class="st10" d="M533.1,366.3c0.6-1.4,2.2-7.4,2.2-7.4s-3.5,5-4.4,6.4c-0.7,1-1.6,4.4-2.1,6.4c-0.6-3.3-1.5-8.7-2.2-13.2
 c0.6-1.9,1.5-4.9,1.8-5.7c0.5-1.2,1.2-9.2,1.2-9.2s-2.7,8.1-3,9.2c-0.1,0.5-0.2,2.1-0.4,3.7c-0.4-2.6-0.7-4.6-0.6-5.1
 c0.1-1-1.6-8.9-2.8-14.6c0.2-1.9,0.5-4.5,0.4-5.3c-0.3-1.2-2.4-9.3-2.4-9.3s-0.3,6.2,0,8.3c0.3,2.1,1.7,8.3,1.7,8.3l0,0
 c0.8,5.7,1.8,12.9,2.4,15.8c0.2,0.9,0.4,2.3,0.7,3.8c0,0-2.6-5.8-4.1-6.8c-1.5-1-9-7.8-9-7.8l5.2,6.8l7.8,7.8
 c0.9,4.7,2.1,11.2,2.7,14.4c-1.9-2-4.7-4.8-6-5.8c-2.1-1.5-6-3.6-6-3.6s4.7,3.4,5.3,4.3c0.4,0.6,4.5,3.8,6.9,5.7
 c0.2,0.8,0.2,1.4,0.2,1.4l0.6,0c0,0-0.1-0.3-0.1-0.8c0.6,0.5,1,0.8,1,0.8s-0.4-0.5-1.1-1.2c0-0.3-0.1-0.6-0.2-1L533.1,366.3z"/>
<path class="st9" d="M112.8,386.1c0,0,16.7-35.9,11.5-35.7s-10,12.7-10.6,8c-0.6-4.7,2.4-34.6-3.3-32.8c-5.7,1.8-3.1,20.1-4.5,15.2
 s-4.1-16.3-6.1-11.7s1.2,34.1,0,31.8c-1.2-2.3-5.5-12.8-8.6-7.8c-3.1,4.9,1.1,26.8,7.4,31.3C104.8,388.9,112.8,386.1,112.8,386.1z"
 />
<path class="st11" d="M77.1,379.8c10.5-8.3,24.4-36.9,16-39.1s-12.1,7.1-14.3,2.5c-2.3-4.6,7.8-19.3,3.1-20.6s-8.2,4.9-9.4,3.4
 c-1.2-1.5,4.9-29.7-8.2-32S45.4,304.2,47,311.1s6.1,17.7,2.7,17.7c-3.5,0-5.8-10.5-10.9-7.9c-6.7,3.5-7.2,16.4,2.3,21.1
 s15.3,14.7,11.3,12.9c-4.3-1.9-9.4-2.3-11.3,1.6c-1.8,3.9,7,14.2,16,21.3C66.1,384.9,73.2,382.9,77.1,379.8z"/>
<path class="st3" d="M95,377.6h27.3c0,0,7.4,4.1,8.2,13.7s-16,11.8-20.8,11.8c-10.5,0-25.2-1.3-24.2-11.7
 C86.6,380.1,95,377.6,95,377.6z"/>
<path class="st10" d="M78.4,363.9c1-1.9,3.4-10.1,3.4-10.1s-5.3,6.8-6.8,8.7c-1,1.3-2.5,6-3.2,8.8c-0.9-4.5-2.3-11.9-3.4-17.9
 c0.9-2.6,2.4-6.7,2.8-7.8c0.7-1.6,1.9-12.5,1.9-12.5s-4.2,11-4.6,12.5c-0.2,0.7-0.4,2.8-0.5,5c-0.6-3.6-1-6.3-0.9-6.9
 c0.2-1.3-2.4-12.1-4.3-19.9c0.4-2.5,0.8-6.1,0.5-7.2c-0.5-1.6-3.6-12.7-3.6-12.7s-0.4,8.4,0,11.2c0.4,2.9,2.7,11.2,2.7,11.2l0,0
 c1.2,7.7,2.8,17.6,3.6,21.4c0.3,1.3,0.7,3.1,1.1,5.2c0,0-4-7.9-6.3-9.3c-2.3-1.4-13.8-10.6-13.8-10.6l8.1,9.2L67,353
 c1.3,6.4,3.2,15.2,4.1,19.6c-2.9-2.7-7.2-6.5-9.3-7.8c-3.3-2-9.3-4.9-9.3-4.9s7.2,4.6,8.2,5.9c0.7,0.9,6.9,5.2,10.6,7.7
 c0.2,1.2,0.4,1.8,0.4,1.8h1c0,0-0.1-0.4-0.2-1.1c1,0.7,1.6,1.1,1.6,1.1s-0.7-0.6-1.7-1.6c-0.1-0.4-0.2-0.8-0.3-1.3L78.4,363.9z"/>
<path class="st11" d="M37,369.1h64.8c0,0,0,33.9-32.4,33.9S37,369.1,37,369.1z"/>
<path class="st9" d="M532.8,377.7c-5.6-6.1-12.1-25.8-7.1-26.7s6.6,5.4,8.2,2.6c1.6-2.9-3.4-13.2-0.6-13.7s4.5,3.7,5.3,2.8
 c0.8-0.9-1.2-19.8,6.5-20.5c7.7-0.7,10.4,7.9,9,12.3c-1.3,4.5-4.6,11.3-2.5,11.5s4-6.5,6.7-4.5c3.7,2.7,3.3,11.2-2.5,13.7
 c-5.7,2.5-9.7,8.7-7.3,7.8c2.6-1,5.6-0.9,6.4,1.8c0.9,2.7-4.8,8.9-10.5,13C539,381.7,534.9,380,532.8,377.7z"/>
<path class="st10" d="M533,367.2c-0.4-1.3-1.4-6.8-1.4-6.8s2.7,4.8,3.5,6.2c0.5,0.9,1.1,4.1,1.4,6c0.8-2.9,2-7.6,3-11.6
 c-0.4-1.8-1-4.5-1.2-5.3c-0.3-1.1-0.4-8.3-0.4-8.3s1.8,7.5,2,8.5c0.1,0.5,0.1,1.9,0,3.3c0.6-2.3,0.9-4.1,0.9-4.5
 c0-0.9,2.1-7.8,3.6-12.8c-0.1-1.7-0.1-4.1,0.1-4.8c0.4-1,2.8-8.1,2.8-8.1s-0.2,5.5-0.6,7.4c-0.4,1.8-2.2,7.2-2.2,7.2l0,0
 c-1.1,5-2.6,11.4-3.3,13.8c-0.2,0.8-0.6,2-0.9,3.3c0,0,2.8-4.9,4.2-5.7c1.4-0.8,8.6-6.1,8.6-6.1l-5.2,5.5l-7.6,6.2
 c-1.1,4.1-2.7,9.8-3.5,12.6c1.8-1.6,4.5-3.8,5.8-4.6c2-1.1,5.7-2.6,5.7-2.6s-4.5,2.6-5.1,3.3c-0.4,0.5-4.3,3-6.6,4.4
 c-0.2,0.7-0.3,1.2-0.3,1.2l-0.6-0.1c0,0,0.1-0.3,0.2-0.7c-0.6,0.4-1,0.6-1,0.6s0.4-0.4,1.1-0.9c0.1-0.2,0.1-0.5,0.2-0.9L533,367.2z"
 />
<path class="st3" d="M557.8,371.2h-47.5c0,0,0,27.9,23.7,27.9C557.8,399.1,557.8,371.2,557.8,371.2z"/>
<path class="st0" d="M526.1,352.1c-2.6-5-10.2,2.5-12.3,0.2c-2.1-2.3,2.5-14.2,5-20.2c3.9-9.4,3.6-25.1-1.2-25.6
 c-7.5-0.7-4.4,8.2-8,7.1c-1.1-0.4-7-8.5-11.9,3.7c-2.5,6.1-0.2,18.1-0.2,18.1c-0.5,2.2-2.5-15.8-8.6-13.9
 c-6.1,1.9-6.1,11.9-3.4,18.4c2.8,6.5,6.8,13.9,5.9,14.9c-0.8,0.9-9.2-6.8-12.3-0.5c-5.4,11.1,9.3,24.6,12.2,26
 c2.9,1.4,22.4,0,22.4,0S532,363.4,526.1,352.1z M487.9,335.4c-0.6-1.4-1.2-4.1,0-5.9c1.2-1.8,2.6,1.8,2.6,1.8s2.3,4.8,1.7,6.8
 C491.7,340.2,488.4,336.8,487.9,335.4z M489.8,367.8c-0.9-1.2-2.9-4.6-2-6.5c0.8-1.8,3,1.8,4.6,1.1c1.6-0.7,0.9-1.5,3.4-1
 c2.6,0.5,3.1,5.9,3,6.7C498.6,372,490.6,369.1,489.8,367.8z M512.6,315.4c0.4-2.4,1.7-2.8,3.8-4c2.2-1.2,2.8,5.5,2.8,5.5
 s-3,4.6-4.5,5.3C513.2,323,512.2,317.8,512.6,315.4z M511.6,330.3c-0.3-2.5-0.6-1.8,1-3.5c1.5-1.8,3.3,3.5,3.3,3.5
 C515.4,332.2,511.8,332.7,511.6,330.3z M516.3,363.4c-2.3-0.3-0.6-3.2,0.8-5c1.4-1.8,4.4,0,4.5,1
 C521.8,361.9,518.5,363.6,516.3,363.4z"/>
<path class="st12" d="M487.7,378.1h27.9c0,0,7.5,4.2,8.4,14c0.8,9.8-16.3,12-21.2,12c-10.7,0-25.8-1.3-24.7-12
 C479.1,380.6,487.7,378.1,487.7,378.1z"/>
<path class="st13" d="M197.8,191c-0.4,0.5-1.5,0.1-1.5,0.1s-1,6.1-2.9,6.6c0,0,0.1,0.6,0.1,1.4v0.1h0.7l1.1,12.7l-0.1,0
 c0.2,1.6,0.4,3.6,0.5,6.2c0.3,7.1,0.5,18.2-3,19.8c-0.2,0.1-0.4,0.2-0.7,0.2c-0.2,0-0.5,0-0.8,0c-6.6-0.2-23.4-11.3-23.4-11.3
 c-0.2,8.7-2,21.6-3,28.3c-0.4,2.6-0.7,4.3-0.7,4.3l-1.4,0.3c0,0-0.1,0-0.1,0c0,0-0.6,59.1-0.6,83.8s0.6,44.7,0.6,44.7
 c-0.3,0-0.5,0.1-0.7,0.1v0.1c0,0.6,0.1,1.3,0.1,1.9c7.3,5.3,18.2,8.2,18.2,12.1c0,1-21.6,0.2-22.8-0.4c-1.3-0.6-0.9-8.8-0.8-11.1
 c0.1-0.4,0.1-0.6,0.1-0.6l-0.2-1.7c-0.1,0-0.2,0-0.3,0c-0.3,0-0.5,0-0.5,0s-1.1-4.4-2.8-14.9c-1.7-10.5-5.4-20.6-5.9-27.5
 c-0.5-6.9,2.4-12.8,1.9-17.9c-0.5-5.1-3.3-35.5-3.3-35.5l-9.8,30.6c-2.6,11.7-2.1,9.2-5.6,22.2c-3.5,13-9.7,44.4-9.7,44.4
 c-0.3,0.1-0.6,0.1-0.9,0.1v0.1l-0.1,1.1c0,0,1.4,7.7,1,10.1c-0.4,2.5,0.2,2.7-5.4,2.7c-5.6,0-6.7-0.5-7.2-1.1
 c-0.6-0.6-0.5-3.4,0-4.3c0.4-0.9,7.1-7.6,7.1-7.6l0.1-1c-0.3,0-0.4-0.1-0.6-0.1c-0.1,0-0.2,0-0.2,0c-0.6-8.8,0.3-40.5,2.2-48.7
 c1.8-8.2,7.3-20.7,7.4-21.5c0-0.8,3.8-27.1,5.7-39.6c1.6-11.3,3.4-19,3.8-20.4c0-0.2,0.1-0.3,0.1-0.3s-1.1-0.4-1.1-0.7
 c0-0.2,0.3-2.4,0.4-5.5c0.2-3.7,0.2-8.6-0.9-13c-1.8-8.2-3-9.8-3-9.8s-3.1,5-6.4,12.1c-1.3,3-3.3,7.2-5.3,11.7
 c-2,4.5-4.2,9.3-6.1,13.4l-3.7,9.8l-0.6-0.2c-0.3,0.8-0.5,1.2-0.5,1.2c0,0.1,0.6,1.2,0.6,1.3c0.2,0.6,0.7,2.1,0.9,3.2
 c0.1,1.4-1,4.9-1.2,5.3c-0.3,0.4-1.8,0.9-1.8,0.9s-0.5,0.6-1.1,0.7c-0.6,0.1-1.8-0.6-1.8-0.6s-0.9,0.5-1.6,0.2
 c-0.3-0.1-0.8-0.9-0.8-0.9s-1.2,0.4-1.6,0.2c-0.4-0.2-0.3-0.8-0.3-0.8s-1.3,0.1-1.6-0.6c-0.5-1.2,0.8-3.8,1.5-5.8
 c0.8-2.3,3.5-3.9,4-4.5c0.1-0.4,0.2-0.9,0.3-1.3l-0.6-0.2l9.3-29.3c1.2-3.9,2.2-7.2,2.6-8.8c1.7-6.6,5.1-17,8.1-22.2
 c4.6-8.2,22.3-11.1,22.6-11.4l0.2-0.7c0.3-1.6,0.9-5.5,1-5.5c-2.2-1.4-3.5-2.7-3.7-3.3c-0.5-1.4-1-3.7-1.1-4.2c0,0,0-0.1,0-0.1
 s-2.7-1-3.2-3.5c-0.5-2.5,1.4-2.7,1.4-2.7s-2.9-2.3-3.7-6.2c-0.7-3.3,1.2-6.1,5-6.4c3.7-0.3,8.2-1.3,10.3-2.2
 c2.1-0.9,7.5-3.1,9.5-2.1c2,1,1.6,2.4,1.6,2.4s3.6,0.5,3.6,3.7c0,3.1-2.5,4-4.3,4.2c-1.1,0.2-2,0.1-2,0.1s0,4.7,0,7.8s0,6.5,0,6.5
 s1.2,0.1,1.4,0.7c0.2,0.6,0,2.3,0,2.3s1.7,0.6,1.9,1.8c0.5,2.9-2.4,7.3-8.7,5l0.4,2.7c20.1,3.1,18.2,9.2,33.4,18.1
 c0.2,0,0.8-5.4,1.3-11.1l0.5-12.5h0.5c-0.3-1.4-1.8-9.5-1.7-10.2c0.1-0.8,1.3-1.5,1.3-1.5s0.5-3.2,0.8-4.8c0.3-1.5,1.4-8.1,2.3-8.2
 c0.9-0.1,0.9,1.3,0.5,3.4c-0.4,2.1-0.4,5.6-0.3,5.6c0.1,0,2.1-0.1,2.5,0.1c0.4,0.1,0.6,0.9,0.6,0.9s1.1-0.4,1.5,0
 c0.4,0.4,0.7,1.1,0.7,1.1s0.8-0.5,1,0.6C198,187.2,198.2,190.6,197.8,191z"/>
<path class="st14" d="M286.4,348.4l-6.3,42.5c0,0,0.3,0.1,0.7,0.1l0.8,0.2v0c-0.2,0.5-0.3,1-0.3,1.2c-7.2,4.6-16.1,7.5-18.2,10.8
 c-0.3,0.5-0.5,1-0.5,1.4c0,1,21.6,0.1,22.7-0.5c1.6-0.7,1.4-10.1,1.8-10.9l0.2-0.8l0-0.1l1.4,0.3c0,0,11.4-37.6,12.2-41
 c0.3-1.2,0.6-2.3,1-3.2H286.4z M342.2,295c-1.5-5.7-5.9-13.9-10-17c-4.1-3.1-14.1-4-14.1-4s-3.7-4-5.5-10.8c0,0,2.7,0.4,3.8-3.1
 c0,0,2.5,1.6,4.1,0c1.6-1.6-0.4-5.5,1.6-5.7c2-0.3,2.5-4,1.6-5.3c-1.6-2.5-6.9-1.5-9.4-3c-2.6-1.5-6.7-8.6-10.5-8.1
 c-3.8,0.6-5.3,2.1-5.2,5.6c0.1,3.5,2.1,6.8,2.1,6.8s-5.1,8.1-3.8,13.4c1.2,5.3,7.3,4.2,7.3,4.2s0.2,2,0.5,5.8l0,0.4
 c0,0-7,1.8-11.5,4.3c-4.2,2.3-22.2,24.1-22.2,24.1s-17.5-16.3-18.7-16.3h0c-0.1,0.1-0.4,0.2-0.6,0.4c-0.8-1-1.5-1.7-1.5-1.9
 c0-0.4,0-4.2-0.4-5.2c-0.4-1-3.5-5.3-3.9-5.3c-0.4,0.2-0.7,1.4,0,2c0.7,0.6,1.2,2.5,1.1,2.9c-0.1,0.4-0.6,0.8-0.6,0.8
 s-2.9-2.8-3.6-3.7c-0.8-0.9-4.3-3.2-4.8-2.8c-0.7,0.5-1.2,2.8-1.1,3.1c0.7,1.3,5.2,4.6,8,7.9c1.2,1.5,2.8,3.4,4.1,5.1
 c-0.1,0.1-0.2,0.3-0.2,0.4c-0.2,0.3-0.2,0.4-0.2,0.4s0,0,0,0.1c0.8,1,10.3,13.5,13.8,17.4c3.7,4.1,6.4,9.3,9.7,8.2
 c3.3-1.1,17.6-12.6,17.6-12.6l0.6,14l0.1,1.6l0.1,1.6l0.1,2c0,0-0.1,0-0.2,0h-0.4c-4,0.2-25.6,1.2-35.3,4.1
 c-10.7,3.1-16.3,7.4-17.9,14.1c-1.6,6.7,16.5,50.3,16.5,50.3s0.3,0,0.7,0c0.3,0,0.6,0,0.9,0v0c0.2,0.7,0.4,1.4,0.4,1.7
 c-7.3,5.3-16.9,6.7-16.9,10.6c0,1,23.5,0.1,23.9,0c0.3-0.1,0.5-0.2,0.7-0.5c1.2-2.3-2.1-11.1-2.2-11.3l-0.2-0.7v0c0.2,0,0.3,0,0.5,0
 c0.1,0,0.2,0,0.3,0c0.3,0,0.6-0.1,0.8-0.1c0,0-2.3-17.4-4.5-27.9c-1.9-9-4.9-18-4.9-18h34v0h31c1.3-0.8,5.3-4.1,5.6-12.8
 c0.1-3.4-0.3-6.6-0.8-9.1c-0.2-0.9-0.3-1.6-0.5-2.3c-0.4-1.8-0.8-3-0.9-3.3c0,0,0-0.1,0-0.1h23.8c0,0,3-0.3,2.9-2.9
 C347.8,312.1,343.7,300.8,342.2,295z M323.9,309.6c0,0,4.2-12.8,4.4-12.8c0,0.4,4.4,11.6,4.4,11.6L323.9,309.6z"/>
<path class="st13" d="M456.4,317.5h-1.6l-50.6,0.1h-23.6c0,0,10.1-4.9,10.9-4.5c0.7,0.4,8.8,0.9,8.8,0.9s0.9-0.1,1.8-0.3
 c0.1-0.8,0.1-1.3,0.1-1.3s6.3-0.4,11.7-1.3c3.9-0.7,23.7-1.7,34.3-2.2c3.9-0.2,6.6-0.3,6.6-0.3L456.4,317.5z"/>
<path class="st13" d="M499.4,298.9c0.9,9.2-13.7,17.1-25.8,16.2c-0.9-0.1-1.9-0.2-2.8-0.4c0,0,0.3,10.3,0.2,10.8c0,0,0,0-0.1,0.1
 c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.6,0.4-0.9,0.6c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.2,0.1-0.2,0.1
 s3.4,17.3-3.5,18.4h-42.7c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6h2.6l-8.1,0.6c0,0,13.5,35.3,14.8,42c0,0-0.1,0-0.3,0.1
 c-0.2,0-0.4,0.1-0.6,0.1c-0.1,0-0.1,0-0.2,0l0.3,1.1c0.1,0.3,4.3,11.2,1.5,11.8c-0.4,0.1-23.9,1-23.9,0c0-3.9,9.6-5.2,16.9-10.6
 c0-0.3-0.1-0.8-0.3-1.3c-0.2,0-0.3,0.1-0.3,0.1c0,0-0.2,0-0.3,0.1l-2.2,0.4c0,0-11.2-20.9-18.5-36.2l-24.4,36.1l-1.4-0.6l-0.7,1.2
 c-0.3,0.8,0.1,9.4-1.4,10.2c-1.1,0.5-22.7,0.5-22.7,0.5c0-3.9,11-7.4,19.2-12.7c0-0.3,0.3-0.8,0.6-1.3l-0.4-0.2l-1.2-0.5
 c0,0,19.9-35.9,26.6-48.1c0.1-7.2,7.4-8.7,20.8-10.5c10.4-1.5,19.3-2.4,22.2-2.7c0.2,0,0.4-0.1,0.5-0.1c0.5,0,0.9-0.1,0.9-0.1
 s0.3-2.1,0.3-2.7c0-0.4-1.7-4.9-2-7.4c-0.1-0.8-0.3-1.4-0.4-1.6c-2.6-3.8-1.9-6.1-1.8-6.3c-0.8,0.4-12.8,6.7-19,7.9H420
 c-0.1,0-0.2,0-0.2,0c-1.1,0.2-1.9,0.2-2.5,0l0,0c-1.7-0.7-2.2-3.1-1.6-6.7c0.7-4.6,2.9-11.2,6.1-18.5c3.8-8.9,8.3-15.7,8.3-15.7
 s0.3,0.1,0.8,0.3l0.8-1.5c0,0,1.4-6.3,1.8-7c0.4-0.7,1.5-1.4,1.9-1.5c0.4-0.1,1.2-0.4,2-0.4s1.5,0.4,1.5,0.4s2,0.1,2.3,0.4
 c0.3,0.3,0.5,1.7,0.5,1.7s0.5,1.9,0.5,2.4c0,0.5-0.9,1.8-1.8,2.4c-1,0.6-2.4,1.3-2.9,1.4c-0.3,0-1.5,1.9-2.5,3.3
 c0.1,0.1,0.3,0.1,0.4,0.2l0,0h0c0.3,0.2,0.5,0.4,0.6,0.5l-7,22.2c0,0,12.1-12.2,17.6-14.2c0-0.3,0-0.6,0-0.9c0-0.7,0-1.4,0-2.1
 l0.1-1.4c0.1-1.6,0.3-3.7,0.9-5.8c0.1-0.6,0.2-1,0.3-1.4c0-0.1,0-0.2,0.1-0.3c-2.2-0.6-5.1-1.6-5.5-3.1c-0.7-2,2.5-12.3,3.6-15.9
 c0,0,0,0-0.1,0c-0.9-0.9-1.7-1.7-2.3-2.4c-2.2-2.8-1.9-8.8,2-10.4c4-1.6,4.2-0.6,5.5,1.4c0,0,2.5,5.3,7.8,5.1
 c5.3-0.3,13.4-1.5,16.1,2.2c2.7,3.7,1.4,7,1.4,7s2.7,0.7,2,4.4c-0.7,3.7-3.4,9-1.6,12.4C478.6,279.5,498.4,288.9,499.4,298.9z"/>
<path class="st15" d="M144.5,181.3c-1.7,1.2-1.1,6.7,0.8,10.5c2,3.8,6.6,3.8,7.4,3.3c0.8-0.6,0.3-2,1-2.7c0.6-0.7,4.2-0.5,4.2-0.5
 s1.2,0.1,1.4,0.7c0.2,0.6,0,2.3,0,2.3s1.7,0.6,1.9,1.8c0.5,2.9-2.4,7.3-8.7,5c-3.1-1.4-7.9-3.9-7.9-3.9c-2.2-1.4-3.5-2.7-3.7-3.3
 c-0.5-1.4-1-3.7-1.1-4.2c1,0.4,2.2,0.8,2.5,0.8c0.4,0,0-1.9-0.8-4.2c-0.8-2.3-3.5-2.8-3.5-2.8s-2.9-2.3-3.7-6.2
 c-0.7-3.3,1.2-6.1,5-6.4c3.7-0.3,8.2-1.3,10.3-2.2c2.1-0.9,7.5-3.1,9.5-2.1c2,1,1.6,2.4,1.6,2.4s3.6,0.5,3.6,3.7
 c0,3.1-2.5,4-4.3,4.2c-0.7,0-1.4,0-2,0.1c-3.1,0.3-3.2,0.8-4.7,1.5C151.6,179.8,146.2,180,144.5,181.3z"/>
<path class="st16" d="M162.8,259.8c0,0-0.1,0-0.1,0c0,0-0.6,59.1-0.6,83.8s0.6,44.7,0.6,44.7c-0.3,0-0.5,0.1-0.7,0.1v0.1
 c-2.3,0.3-4.7,0.3-5.7,0.3c-0.3,0-0.5,0-0.5,0s-1.1-4.4-2.8-14.9c-1.7-10.5-5.4-20.6-5.9-27.5c-0.5-6.9,2.4-12.8,1.9-17.9
 c-0.5-5.1-3.3-35.5-3.3-35.5l-9.8,30.6c-2.6,11.7-2.1,9.2-5.6,22.2c-3.5,13-9.7,44.4-9.7,44.4c-0.3,0.1-0.6,0.1-0.9,0.1v0.1
 c-2,0.1-4.5-0.1-5.2-0.2c-0.1,0-0.2,0-0.2,0c-0.6-8.8,0.3-40.5,2.2-48.7c1.8-8.2,7.3-20.7,7.4-21.5c0-0.8,3.8-27.1,5.7-39.6
 c1.6-11.3,3.4-19,3.8-20.4c0-0.2,0.1-0.3,0.1-0.3L162.8,259.8z"/>
<path class="st17" d="M192.7,238c-0.5,0.1-0.9,0.2-1.4,0.3c-6.6-0.2-23.4-11.3-23.4-11.3c-0.3,12.2-3.7,32.6-3.7,32.6l-1.4,0.3
 c0,0-0.1,0-0.1,0c-2.4,0.2-6.5,0.5-12.2,0.4c-7.9-0.1-13.4-0.3-16.2-0.3c-0.4,0-0.9-0.1-0.9-0.1s-1.1-0.4-1.1-0.7
 c0-0.3,1.4-10.4-0.4-18.6c-1.8-8.2-3-9.8-3-9.8s-3.1,5-6.4,12.1c-1.3,3-3.3,7.2-5.3,11.7c-2,4.5-4.2,9.3-6.1,13.4l-3.7,9.8l-0.6-0.2
 l-5.1-1.6l-0.6-0.2l9.3-29.3c1.2-3.9,2.2-7.2,2.6-8.8c1.7-6.6,5.1-17,8.1-22.2c4.6-8.2,22.3-11.1,22.6-11.4l-0.7,2.7
 c0,0,2.4,4.7,7.4,4.6c3.6,0,2.7-6.9,2.7-6.9c20.1,3.1,18.2,9.2,33.4,18.1c0.2,0,0.8-5.4,1.3-11.1l0.5-12.5h5.5v0.1h0.7l1.1,12.7
 l-0.1,0c0.2,1.6,0.4,3.6,0.5,6.2C196,225.3,196.3,236.3,192.7,238z"/>
<path class="st18" d="M120.4,401.8c-0.4,2.5,0.2,2.7-5.4,2.7c-5.6,0-6.7-0.5-7.2-1.1c-0.6-0.6-0.5-3.4,0-4.3
 c0.4-0.9,7.1-7.6,7.1-7.6s0,0.2,0,0.5c0,0.6,0.3,1.7,1.1,1.8c1.2,0.2,3.4-2.1,3.4-2.1S120.8,399.4,120.4,401.8z M162,390.5
 c0,0,0.8,2.5-1.9,2.2c-1.6-0.2-2.8-0.9-3.4-1.4c-0.1,2.2-0.6,10.4,0.8,11.1c1.1,0.6,22.7,1.3,22.8,0.4
 C180.2,398.7,169.3,395.9,162,390.5z"/>
<path class="st19" d="M323.5,332.3c-0.3,10.4-6,13-6,13h-14.2c0,0-1.4,2.9-2.2,6.3c-0.8,3.4-12.2,41-12.2,41c-0.3,0-0.9-0.1-1.5-0.2
 c-1.7-0.3-4.2-0.9-5.8-1.2c-0.3-0.1-0.6-0.1-0.8-0.2c-0.4-0.1-0.7-0.1-0.7-0.1l6.8-45.8h-34c0,0,3,9,4.9,18
 c2.3,10.4,4.5,27.9,4.5,27.9c-0.2,0.1-0.5,0.1-0.8,0.1c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0.1-0.5,0.1c-1.7,0.2-4.1,0.2-5.6,0.2h-0.9
 c-0.4,0-0.7,0-0.7,0s-18.1-43.6-16.5-50.3c1.6-6.7,7.2-11,17.9-14.1c9.7-2.9,31.3-3.9,35.3-4.1h0.4c0.1,0,0.2,0,0.2,0l-0.2-3.6
 c11.3,0.3,24.3,0.9,31.5,1.6c0.2,0.7,0.3,1.5,0.5,2.3C323.2,325.7,323.6,328.9,323.5,332.3z"/>
<path class="st16" d="M342.2,295c-1.5-5.7-5.9-13.9-10-17c-4.1-3.1-14.1-4-14.1-4s-8.6,7.3-10.8,6.7c-2.3-0.6-2.5-6.5-2.5-6.5
 s-7,1.8-11.5,4.3c-4.2,2.3-22.2,24.1-22.2,24.1s-17.5-16.3-18.7-16.3h0c-1.7,1.2-2.9,3-3.4,3.8c-0.2,0.3-0.2,0.4-0.2,0.4s0,0,0,0.1
 c0.8,1,10.3,13.5,13.8,17.4c3.7,4.1,6.4,9.3,9.7,8.2c3.3-1.1,17.6-12.6,17.6-12.6l0.8,19.3c0,0-0.1,0-0.2,0c3,0,27.9,0.7,32.1,0.3
 c-0.6-3.5-1.4-5.7-1.4-5.7h23.8c0,0,3-0.3,2.9-2.9C347.8,312.1,343.7,300.8,342.2,295z M323.9,309.6c0,0,4.2-12.8,4.4-12.8
 c0,0.4,4.4,11.6,4.4,11.6L323.9,309.6z"/>
<path class="st19" d="M454.9,317.5l-50.6,0.1h-2.1l0-3.9c0.1-0.8,0.1-1.3,0.1-1.3s6.3-0.4,11.7-1.3c3.9-0.7,23.7-1.7,34.3-2.2
 L454.9,317.5z"/>
<path class="st18" d="M322.3,254.4c-2,0.3,0,4.1-1.6,5.7c-1.6,1.6-4.1,0-4.1,0s0.5-2.1-0.6-2.7c-1.1-0.6-4.5,1.8-4.7,1.6
 c-0.2-0.1-0.2-0.7,0.2-1.7c0.4-1-2-2-2-3.5c0.1-1.5,0.7-2.7-0.6-4.1c-1.3-1.4-5.3-2-8.1,0.6c0,0-1.9-3.3-2.1-6.8
 c-0.1-3.5,1.4-5.1,5.2-5.6c3.8-0.5,7.9,6.6,10.5,8.1c2.6,1.5,7.8,0.6,9.4,3C324.8,250.4,324.3,254.2,322.3,254.4z"/>
<path class="st18" d="M263.1,403.2c-0.1,0.3-0.4,0.5-0.7,0.5c-0.4,0.1-23.9,1-23.9,0c0-3.9,9.6-5.2,16.9-10.6c0,0-0.4,1.7,1,1.6
 c1.3-0.1,4.5-2.9,4.5-2.9C261,392.1,264.4,400.9,263.1,403.2z M282,394.9c-1.1-0.2-0.7-2.4-0.7-2.4c-7.2,4.6-16.1,7.5-18.2,10.8
 c-0.3,0.5-0.5,1-0.5,1.4c0,1,21.6,0.1,22.7-0.5c1.6-0.7,1.4-10.1,1.8-10.9C287.2,393.2,285.5,395.4,282,394.9z"/>
<path class="st20" d="M314.2,313.5c0,0-8.5-0.6-9.1-0.4s-12.6,4.7-12.6,4.7h23.4C315.9,317.8,315.1,315.1,314.2,313.5z"/>
<path class="st16" d="M465.7,345.1l-3.7,0.5l-44.3,3.4c0,0,13.5,35.3,14.8,42c0,0-0.1,0-0.3,0.1c-0.2,0-0.4,0.1-0.6,0.1
 c-0.1,0-0.1,0-0.2,0c-1.6,0.3-4.5,0.8-5.4,1c-0.2,0-0.3,0.1-0.3,0.1c0,0-0.2,0-0.3,0.1l-2.2,0.4c0,0-11.2-20.9-18.5-36.2l-24.4,36.1
 l-1.4-0.6l-5.1-2.2l-0.4-0.2l-1.2-0.5c0,0,19.9-35.9,26.6-48.1c0.1-7.2,7.4-8.7,20.8-10.5c11.1-1.6,20.3-2.5,22.7-2.7
 c0.5,0,0.9-0.1,0.9-0.1s25.2-10,26.4-1.1c-0.1,0.1-0.2,0.1-0.2,0.1S474.4,343.4,465.7,345.1z"/>
<path class="st19" d="M473.6,315.1c-0.9-0.1-1.9-0.2-2.8-0.4c0,0,0.3,10.3,0.2,10.8c0,0,0,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1
 c0,0-0.1,0.1-0.1,0.1c-1.1,1.1-3.8,2-13.2,2c-7.9,0-12.4,0-15.7,0c0.2,0,0.4-0.1,0.5-0.1c0.5,0,0.9-0.1,0.9-0.1s0.3-2.1,0.3-2.7
 c0-0.4-1.7-4.9-2-7.4c-0.1-0.8-0.3-1.4-0.4-1.6c-2.6-3.8-1.9-6.1-1.8-6.3c-0.8,0.4-12.8,6.7-19,7.9H420c-1.2,0.2-2.1,0.3-2.7,0l0,0
 c-1.7-0.7-2.2-3.1-1.6-6.7c0.7-4.6,2.9-11.2,6.1-18.5c3.8-8.9,8.3-15.7,8.3-15.7s0.3,0.1,0.8,0.3l4.6,1.8l0,0h0
 c0.3,0.2,0.5,0.4,0.6,0.5l-7,22.2c0,0,12.1-12.2,17.6-14.2c0-0.3,0-0.6,0-0.9c2-1.1,3.5-1.8,3.9-1.5c1.5,0.8,24.5,15,24.5,16.5
 C474.9,302.1,474.2,308.9,473.6,315.1z"/>
<path class="st15" d="M499.4,298.9c1,10-16,18.3-28.6,15.9c-26.1-6.2-24-22.3-24.2-27.4c0-1,0-2,0-3c0.2-3.7,1-7.1,1.2-8.6
 c0-0.1,0-0.2,0.1-0.3c0.4-1.5,2.5-9.5,4-9.4c2.2,0.2,4.2-3.7,3.2-5.1c-1-1.3-3.2,0-3.2,0s-1.2,0-2.6-1.1c-1.4-1.1-3.3-3.4-3.3-3.4
 s0,0-0.1,0c-0.9-0.9-1.7-1.7-2.3-2.4c-2.2-2.8-1.9-8.8,2-10.4c4-1.6,4.2-0.6,5.5,1.4c0,0,2.5,5.3,7.8,5.1c5.3-0.3,13.4-1.5,16.1,2.2
 c2.7,3.7,1.4,7,1.4,7s2.7,0.7,2,4.4c-0.7,3.7-3.4,9-1.6,12.4C478.6,279.5,498.4,288.9,499.4,298.9z"/>
<path class="st18" d="M378.1,393.1c-0.3,0.8,0.1,9.4-1.4,10.2c-1.1,0.5-22.7,0.5-22.7,0.5c0-3.9,11-7.4,19.2-12.7c0,0-1.3,1.9-1,2.9
 C372.5,394.8,378.1,393.1,378.1,393.1z M431.7,392.2c0,0-2.3,3.5-3.9,3c-1.5-0.5-1.5-1.7-1.5-1.8c-7.3,5.4-16.9,6.7-16.9,10.6
 c0,0.9,23.5,0.1,23.9,0C436,403.5,431.7,392.5,431.7,392.2z"/>
<path class="st21" d="M293.1,323c0,0-2.6,1.4-3.6,4.6c-1,3.2-2.6,17.5-2.6,17.5h-34c0,0,3,9,4.9,18c2.3,10.4,4.5,27.9,4.5,27.9
 c-0.2,0.1-0.5,0.1-0.8,0.1c-0.1,0-0.2,0-0.3,0c-0.2,0-0.3,0-0.5,0v0l0.2,0.7c0.1,0.3,3.4,8.9,2.2,11.3v0l-0.3,0.4c0,0,0,0-0.1,0
 c-0.1,0-0.3,0.1-0.5,0.1c-0.1,0-0.1,0-0.2,0c-3.2,0.2-23.5,0.9-23.5,0c0-3.9,9.6-5.2,16.9-10.6c0-0.3-0.2-1-0.4-1.7v0
 c-0.4,0-0.7,0-0.9,0c-0.4,0-0.7,0-0.7,0s-18.1-43.6-16.5-50.3c1.6-6.7,7.2-11,17.9-14.1c9.7-2.9,31.3-3.9,35.3-4.1h0.5L293.1,323z
  M162,390.5c0-0.6-0.1-1.3-0.1-1.9v-0.1c0.2,0,0.5-0.1,0.7-0.1c0,0-0.6-20-0.6-44.7c0-19.5,0.4-60.6,0.5-76.9
 c-3.3,3.8-10.8,12.4-12.3,14.3c-1.9,2.5-4.6,12-4.6,12s2.8,30.3,3.3,35.5c0.5,5.1-2.4,11.1-1.9,17.9c0.5,6.9,4.2,17,5.9,27.5
 c1.7,10.5,2.8,14.9,2.8,14.9s0.2,0,0.5,0c0.1,0,0.2,0,0.3,0l0.2,1.7c0,0,0,0.2-0.1,0.6c-0.1,2.2-0.6,10.4,0.8,11.1
 c1.1,0.6,22.7,1.3,22.8,0.4C180.2,398.7,169.3,395.9,162,390.5z M404.7,356.4l-24.4,36.1l-1.4-0.6l-0.7,1.2
 c-0.3,0.8,0.1,9.4-1.4,10.2c-1.1,0.5-22.7,0.5-22.7,0.5c0-3.9,11-7.4,19.2-12.7c0-0.3,0.3-0.8,0.6-1.3l-0.4-0.2l-1.2-0.5
 c0,0,19.9-35.9,26.6-48.1c0-0.2,0-0.4,0.1-0.6C398.9,345.2,404.7,356.4,404.7,356.4z M417.3,317.6l-13,0h-23.6
 c0,0,10.1-4.9,10.9-4.5c0.7,0.4,8.8,0.9,8.8,0.9s0.9-0.1,1.8-0.3c0.1-0.8,0.1-1.3,0.1-1.3s6.3-0.4,11.7-1.3c0.4-0.1,0.9-0.1,1.6-0.2
 C415.1,314.5,415.5,316.9,417.3,317.6z M441,315.9c-2.6-3.8-1.9-6.1-1.8-6.3c-0.8,0.4-12.8,6.7-19,7.9l21.2,0
 C441.3,316.8,441.2,316.1,441,315.9z"/>
<path class="st22" d="M481.4,345.1h-15.5c-0.1,0-0.1,0-0.2,0l-3.7,0.5l-36.2,2.8h55.6c0.9,0,1.6-0.8,1.6-1.6
 C483.1,345.8,482.3,345.1,481.4,345.1z M267.3,345.1c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6h19.2l0.5-3.3H267.3z
  M326.7,345.1h-8.8c-0.3,0.2-0.4,0.2-0.4,0.2h-14.2c0,0-0.6,1.2-1.2,3h24.6c0.9,0,1.6-0.8,1.6-1.6
 C328.3,345.8,327.6,345.1,326.7,345.1z M437.8,317.6H198.4c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6h239.4
 c0.9,0,1.6-0.7,1.6-1.6C439.5,318.4,438.7,317.6,437.8,317.6z"/>
</svg>
`,
    name: 'who-we-are',
    theme: 'fill',
};
const workshops = {
    icon: `<svg version="1.1" id="Layer_11" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 600 530" style="enable-background:new 0 0 600 530;" xml:space="preserve">
<style type="text/css">
 .st0{fill:#EAEAEA;}
 .st1{fill:#E5E5E5;}
 .st2{fill:#DBDBDB;}
 .st3{fill:#FFFFFF;}
 .st4{fill:#EFEFEF;}
 .st5{fill:#F2F2F2;}
 .st6{fill:#50208F;}
 .st7{fill:#E01D85;}
 .st8{opacity:0.2;fill:#3D3D75;}
 .st9{fill:#816051;}
 .st10{fill:#363636;}
 .st11{fill:#F7F7F7;}
 .st12{fill:#F5C85C;}
 .st13{fill:#FFFFFF;stroke:#D0E7F4;stroke-width:0.4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
 .st14{fill:#9B84C1;}
 .st15{fill:#EDBCDA;}
 .st16{fill:#D0E7F4;}
 .st17{fill:#99CFF8;}
 .st18{fill:#EFD1C7;}
</style>
<ellipse class="st0" cx="301.7" cy="347.2" rx="278.2" ry="34.7"/>
<path class="st1" d="M145.6,288.8c-0.9-9.6-11.2-25.6-4.3-25.6c2.7,0,4.3,9.5,4.6,6.6s-4.6-23.2,2.4-23c3.1,0.1,0.3,11.7,2.5,11.4
 c3.1-0.5,1-3.7,3.6-4.2c7.3-1.6-1.3,21,0,21.1c1.1,0.1,3.3-8.6,8.1-6.1c4.5,2.3-5.8,8.9-5.9,18.9
 C156.6,290.9,145.7,289.8,145.6,288.8z"/>
<path class="st2" d="M158.8,276.3h-16.5c0,0-6.1,16.5-5.9,24.5c0.2,8.1,2.4,15,12.4,15.4c17.5,0.8,17.5-8.1,17.5-15
 C166.2,290.1,158.8,276.3,158.8,276.3z"/>
<path class="st1" d="M434.3,307.3c5.5-5.6,12.8-25.1,8.4-26.7c-4.4-1.5-6.3,4.8-7.5,1.7c-1.2-3.1,4.1-13.2,1.6-14
 c-2.5-0.8-4.3,3.4-4.9,2.3s2.6-20.2-4.3-21.8c-6.9-1.6-9.9,6.9-9,11.7s3.2,12.1,1.4,12.1c-1.8,0-3-7.1-5.7-5.3
 c-3.5,2.4-3.8,11.1,1.2,14.3c4.9,3.2,8,10,5.9,8.8c-2.3-1.3-4.9-1.5-5.9,1.1s3.7,9.7,8.4,14.5C428.5,310.8,432.2,309.5,434.3,307.3z
 "/>
<path class="st3" d="M437.6,300.8c0.5-1.3,1.8-6.9,1.8-6.9s-2.8,4.7-3.6,6c-0.5,0.9-1.3,4.1-1.7,6c-0.5-3-1.2-8.1-1.8-12.2
 c0.5-1.8,1.2-4.6,1.5-5.3c0.4-1.1,1-8.5,1-8.5s-2.2,7.5-2.4,8.5c-0.1,0.5-0.2,1.9-0.3,3.4c-0.3-2.4-0.5-4.3-0.5-4.7
 c0.1-0.9-1.3-8.3-2.3-13.5c0.2-1.7,0.4-4.2,0.3-4.9c-0.3-1.1-1.9-8.7-1.9-8.7s-0.2,5.7,0,7.6c0.2,1.9,1.4,7.6,1.4,7.6l0,0
 c0.6,5.3,1.5,12,1.9,14.6c0.2,0.9,0.4,2.1,0.6,3.5c0,0-2.1-5.4-3.3-6.3c-1.2-0.9-7.2-7.2-7.2-7.2l4.2,6.3l6.3,7.2
 c0.7,4.3,1.7,10.4,2.1,13.4c-1.5-1.8-3.8-4.4-4.9-5.3c-1.7-1.4-3.6-3.1-3.6-3.1s2.5,2.9,3,3.7c0.4,0.6,3.6,3.5,5.5,5.3
 c0.1,0.8,0.2,1.3,0.2,1.3l0.5,0c0,0,0-0.3-0.1-0.7c0.5,0.4,0.8,0.7,0.8,0.7s-0.3-0.4-0.9-1.1c0-0.3-0.1-0.6-0.1-0.9L437.6,300.8z"/>
<path class="st4" d="M171.9,304.5c0,0,14.1,0.9,16,0c1.9-0.9,11.3-9.4,7.8-16.3c-1.9-3.9-7.1,4.1-8,1.7c-0.3-0.8,3.3-6.2,4-10.7
 c0.7-5.1,0.5-9.9-3.4-11.1c-3.9-1.2-2.6,19.6-5.1,15.6c-1.5-2.3,6.8-27,0-32c-6.1-4.6-3.4,9.3-5.8,10.1c-2.3,0.7-3.6-6.8-5.3-1.9
 c-1.1,3.3-0.8,6.9,0.7,13.8c0.9,4.1,1.6,11,0.3,12.4c-1.3,1.4-2.6-4.9-4.5-0.4C165.2,293.3,171.9,304.5,171.9,304.5z M187.3,278
 c-0.4-1.3,1.1-4.3,1.1-4.3s0.9-2.3,1.7-1.2c0.8,1.2,0.4,2.9,0,3.7C189.7,277.2,187.6,279.3,187.3,278z M183.1,296.9
 c0-0.5,0.3-3.9,1.9-4.2c1.7-0.3,1.2,0.2,2.2,0.6c1,0.4,2.4-1.8,2.9-0.7c0.5,1.2-0.7,3.3-1.3,4C188.3,297.4,183.3,299.3,183.1,296.9z
  M179.7,281.3c-1-0.5-3-8.8-3.3-9.8c-0.5-1.6,1.1-6.4,2.5-5.6c1.4,0.8,2.1,1.8,2.7,5.4C181.9,272.8,180.6,281.8,179.7,281.3z
  M170.4,293.2c0.1-0.7,3-0.6,3.9,0.5c0.9,1.1,1.9,2.9,0.5,3.1C173.4,296.9,170.2,294.8,170.4,293.2z"/>
<path class="st5" d="M168.4,300.3H194c0,0,7.6,3.7,7.7,12.3c0,6.9-14.1,7.8-18.6,7.8c-9.8,0-23.5-0.5-23.5-7.8
 C159.6,302.5,168.4,300.3,168.4,300.3z"/>
<path class="st1" d="M434.9,309.2c-2.1-2.8-1-17.7-1-22.5c0-4.6-0.9-12.1,1.4-12.6s3.7,3.5,4.3,2.6c0.6-0.9-2.6-16.4,5.3-19
 c6-2,8.6,5,7.3,11.4c-0.9,4.2-3.7,10.4-2,10.6c1.6,0.2,2.2-5,4.5-3.1c3,2.5-0.9,9.8-3.3,11.5c-5.6,4-5.5,8.1-3.5,7.3
 c2.1-0.9,4.5-0.8,5.2,1.7c0.7,2.5-3.9,8.2-8.4,12C439.9,313,436.6,311.4,434.9,309.2z"/>
<path class="st3" d="M440.2,293.7c-0.3-1.7-0.8-4.2-1-4.9c-0.3-1-0.3-7.7-0.3-7.7s1.5,6.9,1.6,7.9c0.1,0.4-0.1,2.7-0.1,4
 c0.4-2.1,3.8-16.9,3.8-16.9c-0.1-1.6-0.1-3.8,0.1-4.4c0.3-1,2.3-7.5,2.3-7.5s-0.4,5.1-0.5,6.8c-0.4,4.2-1.5,5.4-1.5,5.4
 c-0.9,4.6-2.4,11.8-2.9,14.1c-0.2,0.8-0.5,1.8-0.8,3.1c0,0,2.2-4.6,3.4-5.3c1.1-0.7,6.9-5.6,6.9-5.6l-4.2,5.1l-6.1,5.8
 c-0.9,3.8-2.2,9.1-2.8,11.7c1.5-1.5,3.7-3.6,4.7-4.2c1.6-1.1,4.6-2.4,4.6-2.4s-3.6,2.4-4.1,3.1c-0.4,0.5-3.5,2.8-5.3,4.1
 c-0.2,0.7-0.3,1.1-0.3,1.1l-0.4-0.1c0,0,0.1-0.2,0.1-0.6c-0.5,0.3-0.8,0.6-0.8,0.6s0.3-0.3,0.9-0.9
 C437.6,305.6,439.4,297.3,440.2,293.7z"/>
<path class="st2" d="M456.3,304.4h-39.6c0,0,0,18.9,19.8,18.9S456.3,304.4,456.3,304.4z"/>
<path class="st0" d="M303.3,299.2c1-12.9,11.4-34.3,4.4-34.3c-2.7,0-4.3,12.7-4.7,8.8c-0.3-3.9,5.7-30-1.4-29.6
 c-3.1,0.2-1.4,14.6-3.6,14.1c-3.1-0.7-1.1-4.9-3.7-5.7c-7.5-2.1,1.3,28.1,0,28.2c-1.1,0.1-2.6-10.3-5.1-6.9
 c-3.3,4.4,2.7,10.7,2.8,24C292,301.9,303.2,300.5,303.3,299.2z"/>
<path class="st5" d="M287.7,292.1h19.8c0,0,5.3,4.5,5.9,14.9c0.6,10.4-11.6,12.8-15,12.8c-7.6,0-18.3-1.4-17.5-12.8
 C281.7,294.8,287.7,292.1,287.7,292.1z"/>
<path class="st1" d="M516.5,317.2c-7.2-6.5-16.9-29-11.1-30.7c5.8-1.8,8.4,5.6,9.9,2c1.6-3.6-5.4-15.2-2.1-16.1
 c3.3-1,5.7,3.9,6.5,2.7c0.9-1.2-3.4-23.3,5.7-25.1c9.1-1.8,13.1,8,11.9,13.5c-1.1,5.5-4.3,13.9-1.9,13.9c2.4,0,4-8.2,7.5-6.2
 c4.6,2.7,5,12.8-1.6,16.5c-6.5,3.7-10.6,11.5-7.8,10.1c3-1.5,6.5-1.8,7.8,1.3c1.3,3.1-4.8,11.2-11.1,16.7
 C524.1,321.3,519.2,319.7,516.5,317.2z"/>
<path class="st3" d="M515.2,307.3c-0.7-1.5-2.4-7.9-2.4-7.9s3.7,5.4,4.7,6.9c0.7,1,1.7,4.7,2.2,6.9c0.6-3.5,1.6-9.3,2.4-14.1
 c-0.6-2.1-1.6-5.3-1.9-6.1c-0.5-1.3-1.3-9.8-1.3-9.8s2.9,8.6,3.2,9.8c0.1,0.5,0.3,2.2,0.4,3.9c0.4-2.8,0.7-5,0.7-5.4
 c-0.1-1,1.7-9.5,3-15.6c-0.3-2-0.6-4.8-0.4-5.6c0.3-1.3,2.5-10,2.5-10s0.3,6.6,0,8.8c-0.3,2.2-1.9,8.8-1.9,8.8l0,0
 c-0.8,6.1-1.9,13.8-2.5,16.8c-0.2,1-0.5,2.4-0.8,4c0,0,2.8-6.2,4.4-7.3c1.6-1.1,9.6-8.3,9.6-8.3l-5.6,7.2l-8.4,8.3
 c-0.9,5-2.2,12-2.8,15.4c2-2.1,5-5.1,6.4-6.1c2.3-1.6,6.4-3.9,6.4-3.9s-5,3.6-5.7,4.6c-0.5,0.7-4.8,4.1-7.3,6.1
 c-0.2,0.9-0.3,1.4-0.3,1.4l-0.7,0c0,0,0.1-0.3,0.1-0.8c-0.7,0.5-1.1,0.8-1.1,0.8s0.5-0.5,1.2-1.2c0.1-0.3,0.1-0.6,0.2-1L515.2,307.3
 z"/>
<path class="st4" d="M60.9,327c8.9-7,20.8-31.4,13.6-33.4s-10.3,6.1-12.2,2.2c-1.9-3.9,8.6-13.8,2.6-17.5c-5.1-3.2-6.6,3.7-8,2.9
 c-4.4-2.6,4.2-25.3-7-27.3c-11.2-2-16.8,5.8-14.7,14.6c1.4,5.9,5.2,14.8,2.3,15.1c-1.9,0.2-4.5-7.7-9.3-6.7c-6.2,1.3-8.3,13,1.9,18
 c8.1,3.9,13.1,12.5,9.6,11c-3.7-1.6-8-1.9-9.6,1.4s5.9,12.1,13.6,18.1C51.4,331.4,57.5,329.7,60.9,327z"/>
<path class="st3" d="M62,313.5c0.8-1.7,2.9-8.6,2.9-8.6s-4.5,5.8-5.8,7.5c-0.9,1.1-2.3,5.5-2.9,7.8c-0.7-3.8-2.1-10.1-3-15.3
 c0.8-2.3,2.3-6,2.7-7c0.6-1.4,1.6-10.7,1.6-10.7s-3.6,9.4-4,10.7c-0.2,0.6-0.6,3.9-0.7,5.7c-0.5-3.1-4.7-26.3-4.7-26.3
 s0.6-3.7,0.3-5.4c-0.2-1.4-2.5-9.5-2.5-9.5s-0.1,7.1,0,9.6c0.1,3.9,1.6,5.4,1.6,5.4c1,6.6,3.1,19.2,3.8,22.5c0.2,1.1,0.6,2.6,1,4.4
 c0,0-3.4-6.7-5.4-7.9c-2-1.2-11.8-9-11.8-9l6.9,7.9l10.3,9.1c1.2,5.4,2.7,13,3.5,16.7c-2.5-2.3-6.1-5.6-7.9-6.7
 c-2.8-1.7-7.9-4.2-7.9-4.2s6.2,4,7,5c0.6,0.7,5.9,4.4,9,6.6c0.2,1,0.3,1.6,0.3,1.6H57c0,0-0.1-0.4-0.2-0.9c0.8,0.6,1.3,0.9,1.3,0.9
 s-0.6-0.5-1.4-1.3c-0.1-0.3-0.1-0.7-0.2-1.1L62,313.5z"/>
<path class="st4" d="M26.7,318h55.2c0,0,0,28.9-27.6,28.9S26.7,318,26.7,318z"/>
<path class="st1" d="M515.6,319.4c6-6.5,12.9-27.5,7.6-28.5c-5.3-1-10.8,5.6-8.7,2.7c2.5-3.5,3.7-14.1,0.7-14.6c-3-0.5-4.8,4-5.6,3
 c-0.8-1,3.4-18.9-7-21.9c-8-2.3-11.4,5.7-9.6,13.2c1.2,4.8,4.9,12,2.7,12.3c-2.2,0.2-4.2-7-7.2-4.8c-3.9,2.9-3.5,11.9,2.6,14.6
 s10.4,9.3,7.7,8.3c-2.8-1.1-6-1-6.9,1.9s5.2,9.5,11.2,13.8C509,323.7,513.3,321.9,515.6,319.4z"/>
<path class="st3" d="M526.6,308.2c0.5-1.4,1.5-7.3,1.5-7.3s-2.9,5.1-3.7,6.6c-0.6,1-1.2,4.4-1.5,6.3c-0.8-3.1-2.1-8.2-3.2-12.3
 c0.4-1.9,1.1-4.8,1.3-5.6c0.3-1.2,0.4-8.9,0.4-8.9s-2,8-2.1,9.1c-0.1,0.5,0.1,3.1,0.1,4.6c-0.6-2.5-5-19.5-5-19.5
 c0.1-1.8,0.2-4.4-0.1-5.1c-0.4-1.1-3-8.7-3-8.7s0.5,5.9,0.7,7.9c0.5,4.8,1.9,6.2,1.9,6.2c1.2,5.3,3.1,13.6,3.9,16.2
 c0.3,0.9,0.6,2.1,1,3.5c0,0-2.9-5.3-4.5-6.1c-1.5-0.8-9.2-6.5-9.2-6.5l5.5,5.9l8.1,6.6c1.2,4.4,2.9,10.5,3.7,13.5
 c-1.9-1.7-4.9-4.1-6.2-4.9c-2.2-1.2-6-2.8-6-2.8s4.8,2.8,5.4,3.6c0.5,0.6,4.6,3.2,7,4.7c0.2,0.8,0.3,1.3,0.3,1.3l0.6-0.1
 c0,0-0.1-0.3-0.2-0.7c0.6,0.4,1,0.6,1,0.6s-0.4-0.4-1.1-1c-0.1-0.3-0.1-0.6-0.2-0.9L526.6,308.2z"/>
<path class="st2" d="M489,312.5h50.6c0,0,0,29.8-25.3,29.8C489,342.3,489,312.5,489,312.5z"/>
<path class="st5" d="M535.9,323c0,0,20.8,1.5,23.9,0c3.1-1.5,18.8-15.9,13.1-27.8c-3.3-6.7-12.2,1.5-13.1,0.5c-0.9-1,3.4-9,6.3-15.9
 c2.9-6.9,2.9-17.6-3.6-19.7c-6.5-2-8.6,17.1-9.1,14.8c0,0,2.4-12.8-0.2-19.3c-5.3-13.1-9.7-5.8-11-5.4c-3.8,1.2-2.5-17.2-11.1-14.1
 c-4.8,1.7-4.6,25.1-0.5,35.2c2.7,6.4,7.5,19.1,5.3,21.6s-10.3-5.5-13.1-0.2C516.5,304.8,535.9,323,535.9,323z M558.8,277.9
 c-0.6-2.2,1.9-7.3,1.9-7.3s1.5-3.9,2.8-2c1.3,2,0.6,4.9,0,6.3C562.9,276.4,559.4,280.1,558.8,277.9z M551.8,309.9
 c-0.1-0.9,0.5-6.6,3.2-7.1c2.8-0.6,2,0.3,3.7,1c1.7,0.7,4.1-3.1,4.9-1.2c0.9,2-1.2,5.6-2.1,6.9C560.6,310.8,552.1,314,551.8,309.9z
  M534.9,260.8c-1.6-0.8-3.4-4-3.9-5.8c-0.8-2.7-0.8-11.9,1.6-10.6c2.3,1.3,3.5,3.1,4.5,9.2C537.6,256.1,536.5,261.6,534.9,260.8z
  M533.7,269.4c-0.3-3.9,1.4-6.3,3.6-5c1.3,0.7,4.4,2.7,2.8,7.4C539.3,274.3,533.8,271.5,533.7,269.4z M527.6,300.6
 c0.1-1.1,3.4-3,4.8-1.1c1.4,1.9,3.2,5,0.8,5.3C530.8,305,527.3,303.2,527.6,300.6z"/>
<path class="st5" d="M563.8,319.8H534c0,0-8,4.5-8.9,14.9s17.4,12.8,22.6,12.8c11.4,0,27.5-1.4,26.4-12.8
 C572.9,322.5,563.8,319.8,563.8,319.8z"/>
<path class="st6" d="M90.5,251.6c0,0-13.3,10.4-15.1,30.6s-1.7,27.7-6.9,36.3c-5.1,8.6-9.2,38.7,21,44.4
 c76.7,14.5,88.8,1.3,88.8,1.3c15.3-16.2-9.5-34.4-16.3-40c-6.7-5.6-19-7.2-22.4-23.9c-3.4-16.7-6-37.4-21.2-47.6
 C112.3,248.5,90.5,251.6,90.5,251.6z"/>
<path class="st7" d="M160.8,321l16.9-4.5c0,0,1,0.5-1.7,4.8c-2.7,4.3-13,21.6-15.4,18.5C158.3,336.7,160.8,321,160.8,321z"/>
<path class="st8" d="M160.8,321l16.9-4.5c0,0,1,0.5-1.7,4.8c-2.7,4.3-13,21.6-15.4,18.5C158.3,336.7,160.8,321,160.8,321z"/>
<path class="st9" d="M239.2,360c0.2,0.8-12.7,0.1-14.3-0.1c-2.6-0.4-8.9,0.9-8.9,0.9c-3.8-2.1-1.4-5.8-1.7-6.8c0-0.1,0-0.1,0-0.1
 c-0.2-0.4-5.5-1.9-9.9-3.3c-4.3-1.4-8.6-2.7-8.6-2.7c-3-1.1-5.2-1.9-6.1-2.4c-14.7-7.6-21.1-17.9-21.6-18.6
 c-0.5-0.7-13.9-2.1-13.9-2.1s-11.6-5.5-12.7-7.8c-1.1-2.3,1.8-4.9,1.8-4.9s13.6-3.2,20.2-1c6.7,2.2,8.7,2.2,10.9,3.7
 s3.8,7.5,16.1,16.9c9.5,7.2,21.5,13.6,31.9,18.8C234.9,356.8,238.6,357.8,239.2,360z"/>
<path class="st10" d="M241.2,360.4c0.2,0.8-10.4,0.9-16.8,0.6c-2.6-0.1-8.5-0.3-8.5-0.3c-3.8-2.1-1.4-5.8-1.7-6.8
 c1.4,0.3,4.6,1,7.1-1c1.4-1.1,1.5-1.8,1-2.4C232.1,356.1,240.1,355.8,241.2,360.4z"/>
<path class="st8" d="M228.3,353.5c-1.7-0.9-3.7-1.9-6-3c-10.4-5.2-22.4-11.6-31.9-18.8c-12.3-9.3-13.9-15.4-16.1-16.9
 s-4.2-1.4-10.9-3.7c-6.6-2.2-20.2,1-20.2,1s-2.9,2.6-1.8,4.9c1.1,2.3,12.7,7.8,12.7,7.8s13.4,1.3,13.9,2.1c0.5,0.7,6.9,11,21.6,18.6
 c0.9,0.5,3.1,1.3,6.1,2.4c0,0,4.3,1.3,8.6,2.7c4.3,1.4,9.6,2.9,9.9,3.3c0,0,0,0.1,0,0.1c0.3,1-2.1,4.7,1.7,6.8c0,0,5.9,0.1,8.5,0.3
 c6.4,0.3,17,0.2,16.8-0.6C240.3,356.8,235.3,356.7,228.3,353.5z"/>
<path class="st9" d="M237.8,364.6c0.2,0.8-12.7,0.1-14.3-0.1c-2.6-0.4-8.9,0.9-8.9,0.9c-3.8-2.1-1.4-5.8-1.7-6.8c0-0.1,0-0.1,0-0.1
 c-0.2-0.4-5.5-1.9-9.9-3.3c-4.3-1.4-8.6-2.7-8.6-2.7c-3-1.1-5.2-1.9-6.1-2.4c-14.7-7.6-21.1-17.9-21.6-18.6
 c-0.5-0.7-13.9-2.1-13.9-2.1s-11.6-5.5-12.7-7.8c-1.1-2.3,1.8-4.9,1.8-4.9s13.6-3.2,20.2-1c6.7,2.2,8.7,2.2,10.9,3.7
 c2.2,1.5,3.8,7.5,16.1,16.9c9.5,7.2,21.5,13.6,31.9,18.8C233.6,361.5,237.3,362.5,237.8,364.6z"/>
<path class="st10" d="M239.9,365c0.2,0.8-10.4,0.9-16.8,0.6c-2.6-0.1-8.5-0.3-8.5-0.3c-3.8-2.1-1.4-5.8-1.7-6.8c1.4,0.3,4.6,1,7.1-1
 c1.4-1.1,1.5-1.8,1-2.4C231,360.3,238.7,360.8,239.9,365z"/>
<path class="st9" d="M112.7,301.7C112.7,301.6,112.7,301.6,112.7,301.7c-9.3,0.5-13.2,0-13.3-3.4c-0.2-3.4,0.9-22.3,0.9-22.3
 c-8.3-1.2-12.1-4.5-13.5-6.2c-0.6-0.7-0.8-1.1-0.8-1.1s-10.8,0.5-12.6-8.2c-2.1-10.2,10.7-14.6,14.1-17c3.3-2.3-1-10.4,5.4-17.2
 c0.2-0.2,0.4-0.4,0.6-0.6c6.3-5.9,18.2-4,18.2-4c4.7-5.9,12-7.8,19-5.2c7,2.5,5.3,12.1,5.3,12.1s-0.4,1.2,0.6,3
 c0.3,0.5,0.7,1.1,1.3,1.7c2.7,2.7-0.7,8.2-6.3,8.3c0,0,0.1,6.7-3,8.4c-1.3,0.7-3.7,0.2-3.7,0.2s-0.2,1.8,0.2,3.1
 c0.1,0.4,0.3,0.8,0.6,1c0.2,0.2,0.4,0.2,0.8,0.3c1.4,0.2,3.6-0.4,6.7,2.2c3.7,3.1,18.7,19.1,20,18.5c1.3-0.6,12.9-11.4,13.6-11.5
 c0.4-0.1,0.9,0.2,1.2,0.5l0.2,0.2l1.6-1.7c0,0-1.9-1.6-0.3-5.8c1-2.5,1.8-5.1,2.7-6.6c0.5-1.1,1.1-1.6,1.5-1.4
 c0.9,0.4,0.6,1.8,0.2,3.2c-0.5,1.5-1.2,2.9-0.9,3.1c0.6,0.4,1,0.5,2.2-1c0.1-0.1,0.2-0.2,0.3-0.4c1.7-2.2,5.9-8.4,6.9-7.3
 c1,1.2,2.2,4.9,1.3,7.7c-0.4,1.1-1.3,3-3.7,5.4c-0.7,0.7-1.4,1.4-2.2,2c-2.5,2-4.5,3.4-4.5,3.4l-2,1.9c0,0,0,0,0.1,0
 c0,0,0.1,0.1,0.1,0.1l1.5,1.7c0,0-16.8,16.8-20.1,18.4c-1.3,0.7-11.9-8.7-11.9-8.7s0,0.1,0,0.1c0.8,2.7-3.4,20.3-3.4,20.3
 c0.1,0.9,3.9,0.9,4,1.9L112.7,301.7z"/>
<path class="st7" d="M177.7,316.5c-8.6,1.4-17,23.4-17,23.4s-16.9-10.4-42.9-18.5c-2.6-3.2-5.2-12.6-2.8-18.7c1.6-4-2.2-1-2.2-1
 c-9.3,0.5-14.3,0.2-14.5-3.1c-0.2-3.4,2.1-22.5,2.1-22.5c-8.3-1.2-12.1-4.5-13.5-6.2c1.4-4.1,2.5-7.1,2.9-7.7
 c1.3-2,27.1-8.3,27.1-8.3s6.3,7.9,9,6.6c2-0.9,0.8-4.3,0.1-6c1.2,0.9,3.7-0.7,7.4,2.5c3.7,3.1,18.7,19.1,20,18.5
 c1.3-0.6,12.9-11.4,13.6-11.5c0.4-0.1,0.9,0.2,1.2,0.5l0.2,0.2l3.2,2.5c0,0,0,0,0.1,0c0,0,0.1,0.1,0.1,0.1l1.5,1.7
 c0,0-16.8,16.8-20.1,18.4c-1.3,0.7-10.6-6.9-10.6-6.9c-0.4,1.2-1.2,2.3-1.2,2.3c0.3,5.6-0.5,11.9-0.5,11.9
 C149,307.9,177.7,314.4,177.7,316.5z"/>
<path class="st11" d="M134.6,315.6l-26.7-3.8c-0.5-0.1-0.9-0.6-0.8-1.1l4.6-32.6c0.1-0.5,0.6-0.9,1.1-0.8l26.7,3.8
 c0.5,0.1,0.9,0.6,0.8,1.1l-4.6,32.6C135.6,315.3,135.1,315.6,134.6,315.6z"/>
<path class="st9" d="M125.7,296.9c2,0.2,3.6,0.4,4.5,0.5c0.7-0.3,2.9-2,5.1-1.9c1.9,0,4.4,0,5.3,0.6c1.1,0.7,0.1,2.2,0.1,2.2
 s0.3,0.8,0.2,1.1c0,0.8-0.7,1.5-0.7,1.5s0.4,0.8,0.1,1.7c-0.2,0.8-0.8,1.1-0.8,1.1s0.6,1.1-0.5,1.6c-0.4,0.2-4.7,0-5.8-0.6
 c-0.9-0.5-2-1.4-2.5-1.7c0,0-1.1-1.2-0.9-0.9c0,0-2,0.1-5.2,0.3L125.7,296.9z"/>
<path class="st12" d="M131.7,241.6c0,0,0.1-9.6-3.5-14.4c0,0-4,5.5-6.6,7.6c-2.6,2.1-8.7,4.9-8.7,4.9l0.7,4.5c0,0,0.2,1.5,3,3.3
 c0,0-1.3,2.1,0.2,4.2c1.5,2,4,3.7,4.4,8.3c0.4,4.6-3.2,8-7.3,8.7c0,0,0.2-6.6-5-7c-5.2-0.4-8,2.3-8.8,14.4
 c-11.5-1.7-14.3-7.3-14.3-7.3s-10.8,0.5-12.6-8.2c-2.1-10.2,10.7-14.6,14.1-17c3.3-2.3-1-10.4,5.4-17.2c0.2-0.2,0.4-0.4,0.6-0.6
 c6.3-5.9,18.2-4,18.2-4c4.7-5.9,12-7.8,19-5.2c7,2.5,5.3,12.1,5.3,12.1s-0.4,1.2,0.6,3c0.3,0.5,0.7,1.1,1.3,1.7
 C140.7,236,137.3,241.5,131.7,241.6z"/>
<path class="st8" d="M183.8,254.3c-0.4,1.1-1.3,3-3.7,5.4c-0.7,0.7-1.4,1.4-2.2,2c-2.5,2-4.5,3.4-4.5,3.4l-2,1.9c0,0,0,0,0.1,0
 c0,0,0.1,0.1,0.1,0.1l1.5,1.7c0,0-16.8,16.8-20.1,18.4c-1.3,0.7-10.6-6.9-10.6-6.9c0.8-1.5,3.1-6.1-2.8-12.9
 c-3.7-4.3-6.1-10.2-9.8-12.6c1.4,0.2,2.3,0.8,3.5,1.8c3.7,3.1,18.7,19.1,20,18.5c1.3-0.6,12.9-11.4,13.6-11.5
 c0.4-0.1,0.9,0.2,1.2,0.5l0.2,0.2l1.6-1.7c0,0-1.9-1.6-0.3-5.8c1-2.5,1.8-5.1,2.7-6.6c0.5-1.1,1.1-1.6,1.5-1.4
 c0.9,0.4,0.6,1.8,0.2,3.2c-0.5,1.5-1.2,2.9-0.9,3.1c0.6,0.4,1,0.5,2.2-1c0.1-0.1,0.2-0.2,0.3-0.4c1.7-2.2,5.9-8.4,6.9-7.3
 C183.5,247.8,184.6,251.5,183.8,254.3z"/>
<path class="st7" d="M128.8,295.9l-1.2,7.7c0,0-15.9,0.1-21.5-0.6c-8.9-1.1-7.4-5-7.5-5.3c-0.6-2.3,7.7-4.6,7.7-4.6L128.8,295.9z"/>
<path class="st13" d="M193.6,194h-42c-5.7,0-10.4,4.7-10.4,10.4v22c0,5.1,3.8,9.4,8.7,10.2c-3.6,7.4-10.8,9-10.8,9
 c11.9-0.2,17.8-5.3,20.5-8.9h34c5.7,0,10.4-4.7,10.4-10.4v-22C204,198.6,199.3,194,193.6,194z"/>
<path class="st14" d="M183,201.6h-10c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8c-1,0-1.8,0.9-1.8,2c0,1.1,0.8,2,1.8,2
 c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8s2-0.8,2-1.8
 c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-10C184.5,202.3,183.8,201.6,183,201.6z"/>
<path class="st15" d="M170.1,206.1c0.6,0,1.1,0.3,1.4,0.8v-3.8c0-0.8-0.7-1.5-1.5-1.5h-3.6c0.4-0.3,0.6-0.8,0.6-1.3
 c0-1-0.9-1.8-2-1.8s-2,0.8-2,1.8c0,0.5,0.2,0.9,0.6,1.3h-3.6c-0.8,0-1.5,0.7-1.5,1.5v10c0,0.8,0.7,1.5,1.5,1.5h3.8
 c-0.5-0.3-0.8-0.8-0.8-1.4c0-1,0.9-1.8,2-1.8s2,0.8,2,1.8c0,0.6-0.3,1.1-0.8,1.4h3.8c0.8,0,1.5-0.7,1.5-1.5v-3.8
 c-0.3,0.5-0.8,0.8-1.4,0.8c-1,0-1.8-0.9-1.8-2S169.1,206.1,170.1,206.1z"/>
<path class="st14" d="M172.9,219.3c-0.6,0-1.1,0.3-1.4,0.8v-4c0-0.8-0.7-1.5-1.5-1.5h-3.9c0.5-0.3,0.9-0.8,0.9-1.4
 c0-1-0.9-1.8-2-1.8s-2,0.8-2,1.8c0,0.6,0.4,1.1,0.9,1.4h-3.9c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8
 c-1,0-1.8,0.9-1.8,2s0.8,2,1.8,2c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8
 s2-0.8,2-1.8c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-3.7c0.3,0.5,0.8,0.8,1.4,0.8c1,0,1.8-0.9,1.8-2
 S173.8,219.3,172.9,219.3z"/>
<path class="st16" d="M178.8,225c0,1.1-0.8,2-1.8,2c-0.6,0-1.1-0.3-1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h10c0.8,0,1.5-0.7,1.5-1.5v-10
 c0-0.8-0.7-1.5-1.5-1.5h-3.8c0.5,0.3,0.8,0.8,0.8,1.4c0,1-0.9,1.8-2,1.8c-1.1,0-2-0.8-2-1.8c0-0.6,0.3-1.1,0.8-1.4h-3.8
 c-0.8,0-1.5,0.7-1.5,1.5v3.8c0.3-0.5,0.8-0.8,1.4-0.8C178,222.9,178.8,223.8,178.8,225z"/>
<path class="st17" d="M283.5,268.3c-0.4-3.1,1.8-10.6-12.1-32c-12.8-19.7-27.9-18.8-30.2-18.6c-2.3-0.3-20.9-1.8-33.4,18.1
 c-10.1,16.2-8.6,29.3-9,32.4c-0.4,3.1-18.2,17.9-13.3,33.6s9.7,17.5,18,21.4c0,0,19.4,5.1,35.2,5.2c18.7,0,30.1-2.1,39.5-5.2
 c6.2-2,15.5-6.2,18.6-21.4C300.2,285.8,283.9,271.4,283.5,268.3z"/>
<path class="st18" d="M279.2,331.4c0,2-1.6,3.5-7.7,2.4c-4.3-0.8-9.1-3.9-11.4-5.6c0,0,0,0,0,0c-0.9-0.7-1.5-1.1-1.5-1.1
 c-3.3-1-11.1-1.8-19.9-3.1c-8.7,1.4-16.6,2.1-19.9,3.1c0,0-0.6,0.5-1.7,1.3c-2.4,1.7-7.1,4.7-11.3,5.5c-6.1,1.1-7.7-0.4-7.7-2.4
 c0-2.1,5.1-7.5,16.8-8.9c0.5-0.1,1-0.1,1.6-0.2l4.1-1.9c0,0,0.2-0.1,0.6-0.3c-1.9-0.6-3.7-1.3-5.4-2c-9.3-4.1-23.3-14-20.7-22.4
 c1.8-5.9,8.4-5.9,12.1-5.4c0,0,0.1,0,0.1,0c1.5,0.2,2.5,0.5,2.5,0.5c-0.6-0.5-0.8-1.8-0.9-3.6c-0.1-7.3,3.7-22.6,3.7-22.6l3-10.1
 c-1.2-0.2-2.7-0.9-4-1.9c-2.9-2.1-5.3-5.5-3.5-9.2c2.8-6,10.8-3.4,9.9-7c-1.4-5.4,0.3-9.4,5-11.8c4.7-2.4,2.9-2.5,7.6-9
 c0.8-1.1,1.9-2,3.1-2.5l0,0c4.3-2.2,10-1,10-1s0,0,0,0.1c1.6,0.4,3.1,1.2,4.2,2.6l0.9,1.2c0,0,7.1,0.6,8.8,7.2
 c1.7,6.5-5.1,7.2-2.2,11.5c2.9,4.3,5.8,6.9,1,10c0,0,0.1,0.1,0.4,0.2c0.4,0.3,1,0.8,1.7,1.7c1.1,1.4,2.6,3.9,3.8,8l3,10.1
 c0,0,3.1,12.8,3.6,20.6c0.2,2.8,0,4.9-0.8,5.6l0,0c0.7-0.2,12.1-3.3,14.6,4.8c2.6,8.4-11.4,18.3-20.7,22.4c-1.7,0.8-3.5,1.4-5.4,2
 c0.4,0.2,0.6,0.3,0.6,0.3l4.1,1.9c0.7,0.1,1.3,0.1,1.9,0.2c0,0,0,0,0.1,0C274.3,324.1,279.2,329.4,279.2,331.4z"/>
<path class="st10" d="M217.1,328.4c-2.4,1.7-7.1,4.7-11.3,5.5c-6.1,1.1-7.7-0.4-7.7-2.4c0-2.1,5.1-7.5,16.8-8.9c0,0-5.6,1.5-6,5.1
 C208.6,331.2,214.9,329.4,217.1,328.4z M262.9,322.6c0.8,0.3,7.4,2.6,5.7,6.1c-1.2,2.6-7.9-0.2-8.5-0.4c2.4,1.7,7.1,4.8,11.4,5.6
 c6.1,1.1,7.7-0.4,7.7-2.4C279.2,329.4,274.3,324.1,262.9,322.6z"/>
<path class="st6" d="M261.6,318.1c-1.7,0.8-3.5,1.4-5.4,2c0.4,0.2,0.6,0.3,0.6,0.3l4.1,1.9c-0.1,3.9-2.3,4.8-2.3,4.8
 c-3.3-1-11.1-1.8-19.9-3.1c-8.7,1.4-16.6,2.1-19.9,3.1c-2.5-1.9-2.3-4.8-2.3-4.8l4.1-1.9c0,0,0.2-0.1,0.6-0.3
 c-1.9-0.6-3.7-1.3-5.4-2c-9.3-4.1-23.3-14-20.7-22.4c1.8-5.9,8.4-5.9,12.1-5.4c0,0,0.1,0,0.1,0c1.5,0.2,2.5,0.5,2.5,0.5
 c-0.6-0.5-0.8-1.8-0.9-3.6c8.4,1,18,3.4,18,3.4s24.5-5.8,35.6-5.6c2,0,4,0.1,6.1,0.3c0.2,2.8,0,4.9-0.8,5.6l0,0
 c0.7-0.2,12.1-3.3,14.6,4.8C284.9,304.1,270.9,314,261.6,318.1z"/>
<path class="st7" d="M267.6,290.9c0,0-3.5,0.8-7.2,2.6c-3.7,1.8-44.4-0.3-44.4-0.3s-3.9-1.7-8.8-2.7c1.5,0.2,2.5,0.5,2.5,0.5
 c-3-2.7,2.8-26.2,2.8-26.2l3-10.1c-1.2-0.2-2.7-0.9-4-1.9c3.3-4.1,6.6-8.2,6.6-8.2s6.9,8,21.1,7.9c9.7,0,16.3-3.8,19-5.8
 c1.1,1.4,2.6,3.9,3.8,8l3,10.1C264.9,264.7,270.6,288.2,267.6,290.9z"/>
<path class="st8" d="M261.8,295.9c0,0-15.8,9.6-23.1,14.6c0,0-18.1-11.9-22.4-14.6c0,0,17.7-3.3,19.8-3.3
 C238.2,292.7,261.8,295.9,261.8,295.9z"/>
<path class="st8" d="M238.7,324c-0.1,0-0.2,0-0.2,0c-5.7-0.9-17.3-3.8-17.3-3.8l-1.7,0.8l10.4,4.3L238.7,324z"/>
<path class="st10" d="M256,244.7c0,0,0.1,0.1,0.4,0.2c-4.6-2.1-9.3-0.7-11.5-2.1c-2.1-1.3-1.4-4.1-1.4-4.1c2.9-1.8,3.4-5.5,3.4-5.5
 c1,0.5,2.8-1.2,2.5-3.5c-0.3-2.1-2.1-1.4-2.2-1.4c0.1-0.3,0.1-3.5-0.2-3.2c-1.1,1-3.3,4-6.9,4.6c-3.6,0.6-2.9,0-4.3-0.2
 c-1.5-0.2-2.9,1.5-3.8,2.9c-0.9,1.4-1.3,2.5-1.3,2.5c0.8,2.8,3.7,4.1,3.7,4.1c0,5.1-6.4,4-11,5.5c-5.8,1.9-7.8,9.9-7.8,9.9
 c-3.6-0.7-10.2-5.6-7.6-11.1c2.8-6,10.8-3.4,9.9-7c-1.4-5.4,0.3-9.4,5-11.8c4.7-2.4,2.9-2.5,7.6-9c0.8-1.1,1.9-2,3.1-2.5l0,0
 c4.3-2.2,10-1,10-1s0,0,0,0.1c1.6,0.4,3.1,1.2,4.2,2.6l0.9,1.2c0,0,7.1,0.6,8.8,7.2c1.7,6.5-5.1,7.2-2.2,11.5
 C257.9,239,260.8,241.6,256,244.7z"/>
<path class="st4" d="M269.3,265.4l-6.9,30.5c0,0.5-0.4,0.9-0.9,0.9h-45.9c-0.2,0-0.3-0.1-0.5-0.1c-0.2-0.2-0.4-0.4-0.4-0.7
 l-6.9-30.5c0-0.5,0.4-0.9,0.9-0.9h59.7c0.3,0,0.5,0.1,0.6,0.3C269.3,265,269.3,265.2,269.3,265.4z"/>
<circle class="st8" cx="239" cy="280.2" r="2.4"/>
<path class="st14" d="M252.3,171.8h-10c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8c-1,0-1.8,0.9-1.8,2c0,1.1,0.8,2,1.8,2
 c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8s2-0.8,2-1.8
 c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-10C253.8,172.5,253.1,171.8,252.3,171.8z"/>
<path class="st15" d="M239.4,176.3c0.6,0,1.1,0.3,1.4,0.8v-3.8c0-0.8-0.7-1.5-1.5-1.5h-3.6c0.4-0.3,0.6-0.8,0.6-1.3
 c0-1-0.9-1.8-2-1.8s-2,0.8-2,1.8c0,0.5,0.2,0.9,0.6,1.3h-3.6c-0.8,0-1.5,0.7-1.5,1.5v10c0,0.8,0.7,1.5,1.5,1.5h3.8
 c-0.5-0.3-0.8-0.8-0.8-1.4c0-1,0.9-1.8,2-1.8s2,0.8,2,1.8c0,0.6-0.3,1.1-0.8,1.4h3.8c0.8,0,1.5-0.7,1.5-1.5v-3.8
 c-0.3,0.5-0.8,0.8-1.4,0.8c-1,0-1.8-0.9-1.8-2S238.4,176.3,239.4,176.3z"/>
<path class="st14" d="M242.2,189.5c-0.6,0-1.1,0.3-1.4,0.8v-4c0-0.8-0.7-1.5-1.5-1.5h-3.9c0.5-0.3,0.9-0.8,0.9-1.4
 c0-1-0.9-1.8-2-1.8s-2,0.8-2,1.8c0,0.6,0.4,1.1,0.9,1.4h-3.9c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8
 c-1,0-1.8,0.9-1.8,2s0.8,2,1.8,2c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8
 s2-0.8,2-1.8c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-3.7c0.3,0.5,0.8,0.8,1.4,0.8c1,0,1.8-0.9,1.8-2
 S243.1,189.5,242.2,189.5z"/>
<path class="st16" d="M248.1,195.2c0,1.1-0.8,2-1.8,2c-0.6,0-1.1-0.3-1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h10c0.8,0,1.5-0.7,1.5-1.5
 v-10c0-0.8-0.7-1.5-1.5-1.5h-3.8c0.5,0.3,0.8,0.8,0.8,1.4c0,1-0.9,1.8-2,1.8s-2-0.8-2-1.8c0-0.6,0.3-1.1,0.8-1.4h-3.8
 c-0.8,0-1.5,0.7-1.5,1.5v3.8c0.3-0.5,0.8-0.8,1.4-0.8C247.3,193.1,248.1,194,248.1,195.2z"/>
<path class="st6" d="M340,331.5c0,0,29.8,0.2,38.6-2.1c7-1.8,16.9-1.8,20.2-22.9c2.2-14.2,12.5-48.3,5.8-59.8
 c-11.1-19-32.1-22.2-51.3-10.7c-19.2,11.5-20.4,40-20.3,43.4s-47,29.7-30,43C313.7,330.9,334.4,331.5,340,331.5z"/>
<path class="st18" d="M385.6,256c-3.2-7.4-6.7-8.1-6.7-8.1c-1.3-0.6-2.9-1.2-4.9-1.6c-5.3-1.2-7.3-2.3-8-3.9c0-0.1-0.1-0.2-0.1-0.4
 c-0.5-1.9-0.5-6.8-0.5-6.8l1.4-2.2c0,0,1,0.1,2.6-0.7c2.4-1.2,2.7-3.5,1.8-4c-0.1-0.1-0.2-0.1-0.3-0.1c0,0,4.1-2.1,4.9-5.1
 c0.8-2.9-3.9-3-3.9-5.8s-2.6-5.3-7.1-5.9c-4.5-0.6-5.2-3.8-10.2-2.9c-3.3,0.6-4.8,3.6-4.7,6.5c0,0.2,0,0.3,0,0.3
 c-1.1,0.8-2.6,2-3.4,2.8c-0.3-0.2-0.5-0.3-0.8-0.5c0,0-6.4,3.2-16.1,8.9c-9.7,5.7-12.5,11.5-13,12.2c-1.9,2.8,22.5,14.6,26.7,16.9
 c0,0-1.3,3.8-1.2,10.6c0.1,6.8,2.4,21.2,2.4,21.2s0,0,0,0c-0.3-0.1-2.8-0.8-5.6-1.2c-2.8-0.4-5.8-0.7-6.9,0.2c0,0-0.6,0.1-2.1,1.5h0
 c-0.8,0.7-1.8,1.7-3.1,3.1c-1.5,1.7-7.1,8-13.6,15.2c-10,11.3-21.9,25-23.7,28.1c0,0,0.5,0.4,1.2,0.9l-0.8,0.8c0,0,0,0,0,0
 c-0.7,0.3-11.1,4.5-14.6,6.3c-3.6,1.9-3.9,3.8-4,4.2c-0.1,0.4,22.8,0,24.3-0.8c1.5-0.8,1-6.8,1-6.8s0.3-0.3,0.6-0.8
 c0.6,0.1,1.2,0.2,1.8,0.1c0,0,11.1-10.8,21.1-20.3c3.7-3.5,7.3-6.8,10.1-9.3c3.3-3,5.6-4.9,6-4.8c1.4,0.3,9.1,3,17.4,6.6
 c0,0,3.8-3.9,15.8-11.6c0.6-0.4,1.2-0.9,1.8-1.3l-0.3-0.9c0,0,0,0,0,0l-0.2-0.9c0,0-0.8-2.8-1.1-6.7c8.5-2.9,18.4-7.4,18.8-8.8
 C389.1,278.5,388.9,263.4,385.6,256z M331.9,237.9c0.7-0.5,18.1-15,18.1-15.3c0,0,0,0,0-0.1c0-0.1-0.1-0.3-0.2-0.5
 c-0.1-0.1-0.1-0.3-0.2-0.5c0,0,0,0,0,0c0.7-0.3,2.1-0.1,3.1-0.6l0,0c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.1,0.2,0.1
 c0.2,0.2,0.4,0.3,0.5,0.4c0,0,0,0,0.1,0c0,0-1.3,4-1.3,9.3c-0.1,5.3,3.3,9.1,6.8,7.1c0,0,0.1,3.2-2.5,4.1c-0.2,0.1-0.4,0.1-0.6,0.2
 c0,0-2.3,0.3-6.7-0.7C345,240.8,331.2,238.4,331.9,237.9z M370.6,279.8c0.1-0.2,0.1-0.4,0.2-0.7c0.5-1.5,4.1-10,5.5-13.4
 c1.7,4.3,1.3,9.9,1.4,10.5C377.9,276.6,375.9,278.2,370.6,279.8z"/>
<path class="st7" d="M341.4,346.1c-1.5,0.8-25.5,1.2-25.4,0.8c0.1-0.4,0.4-2.3,4-4.2c3.6-1.9,12.6-4.8,12.6-4.8l-0.2-0.3
 c-0.4,0-0.6,0.1-0.6,0.1s-5.8-9.4-11.6-19.2c-2.5-4.1-5-8.3-7-11.9c-2.8-4.8-4.8-8.6-5.2-9.8c-1.3-4.1-0.9-8.9,5-11.2
 c4-1.5,12.2,0.9,17,2.6h0c2.2,0.8,3.7,1.4,3.7,1.4L329,306l1.2,3.1l10.5,27.6c-0.2,0.1-0.5,0.1-0.7,0.1c0.7,1.4,1.4,2.6,1.4,2.6
 S342.9,345.3,341.4,346.1z"/>
<path class="st8" d="M341.4,346.1c-1.5,0.8-25.5,1.2-25.4,0.8c0.1-0.4,0.4-2.3,4-4.2c3.6-1.9,12.6-4.8,12.6-4.8l-0.2-0.3
 c-0.4,0-0.6,0.1-0.6,0.1s-5.8-9.4-11.6-19.2c-2.5-4.1-5-8.3-7-11.9c-2.8-4.8-4.8-8.6-5.2-9.8c-1.3-4.1-0.9-8.9,5-11.2
 c4-1.5,12.2,0.9,17,2.6h0c2.2,0.8,3.7,1.4,3.7,1.4L329,306l1.2,3.1l10.5,27.6c-0.2,0.1-0.5,0.1-0.7,0.1c0.7,1.4,1.4,2.6,1.4,2.6
 S342.9,345.3,341.4,346.1z"/>
<path class="st17" d="M385.6,256c-3.2-7.4-6.7-8.1-6.7-8.1c-1.3-0.6-2.9-1.2-4.9-1.6c-5.3-1.2-7.3-2.3-8-3.9c0-0.1-0.1-0.2-0.1-0.4
 c-0.9,1.5-2,3-4.9,2.6c-2.6-0.4-2.7-2.1-3-3.3c-0.8,0.8-1.8,1.1-2,1.1c0,0-2.3,0.3-6.7-0.7c-4.3-1-18.2-3.3-17.5-3.8
 c0.7-0.5,18.1-15,18.1-15.3c0,0,0,0,0-0.1c0-0.1-0.1-0.3-0.2-0.5c-0.1-0.1-0.1-0.3-0.2-0.5c0,0,0,0,0,0c-0.5-0.9-1.4-2.2-2.9-3.2
 c-0.3-0.2-0.5-0.3-0.8-0.5c0,0-6.4,3.2-16.1,8.9c-9.7,5.7-12.7,11.4-13,12.2c-1.9,4.2,22.5,14.6,26.7,16.9c0,0-1.3,3.8-1.2,10.6
 c0.1,6.8,2.4,21.2,2.4,21.2s5.3,5.5,13.3,8.5c3.3,1.2,11.2-1.9,12.9,0c0,0-0.8-2.8-1.1-6.7c8.5-2.9,18.4-7.4,18.8-8.8
 C389.1,278.5,388.9,263.4,385.6,256z M370.6,279.8c0.1-0.2,0.1-0.4,0.2-0.7c0.5-1.5,4.1-10,5.5-13.4c1.7,4.3,1.3,9.9,1.4,10.5
 C377.9,276.6,375.9,278.2,370.6,279.8z"/>
<polygon class="st2" points="359.7,291.8 357.5,262.5 313.6,256.9 311.9,257.3 358.2,292.9 "/>
<polygon class="st4" points="358.5,292.9 356.3,262.9 311.9,257.2 316.2,287.3 "/>
<ellipse transform="matrix(0.1031 -0.9947 0.9947 0.1031 24.8975 578.7748)" class="st8" cx="333.4" cy="275.6" rx="1.5" ry="2.8"/>
<path class="st7" d="M371.2,298c-0.6,0.4-1.2,0.9-1.8,1.3c-12,7.7-15.8,11.6-15.8,11.6c-8.3-3.6-16-6.3-17.4-6.6
 c-0.3-0.1-2.6,1.8-6,4.8c-2.8,2.6-6.4,5.9-10.1,9.3c-10,9.5-21.1,20.3-21.1,20.3c-0.6,0-1.2,0-1.8-0.1c-0.4,0.5-0.6,0.8-0.6,0.8
 s0.6,6-1,6.8c-1.5,0.8-24.4,1.1-24.3,0.8c0-0.4,0.4-2.3,4-4.2c3.4-1.8,13.9-6.1,14.6-6.3c0,0,0,0,0,0l0.8-0.8
 c-0.7-0.5-1.2-0.9-1.2-0.9c1.9-3.1,13.8-16.9,23.7-28.1c6.5-7.3,12.1-13.5,13.6-15.2c1.3-1.4,2.3-2.4,3.1-3.1
 c1.5-1.3,2.1-1.5,2.1-1.5c1.1-0.9,4.1-0.6,6.9-0.2c1.7,0.4,3.5,0.8,5.6,1.3c6.5,1.5,11.6,3.1,15.7,4.6l2.5-0.8l6.8-2.1
 c0.3,3.9,1.1,6.7,1.1,6.7L371.2,298z"/>
<path class="st18" d="M296.5,339.4c0,0-3.6,3.3-4.5,3.4s-4.1-3.1-3.9-3.6s1.6-2.9,1.6-2.9l0.8-0.8c3.9,2.7,6.6,3,6.6,3L296.5,339.4z
  M332.5,337.9c0,0,0.2,3,0.7,3.2s3.9-1.1,5.4-1.7c1.5-0.5,1.3-2.6,1.3-2.6c-2,0.5-7.6,0.8-7.6,0.8L332.5,337.9z"/>
<path class="st10" d="M341.4,346.1c-1.5,0.8-25.5,1.2-25.4,0.8c0.1-0.4,0.4-2.3,4-4.2c3.6-1.9,12.6-4.8,12.6-4.8s0.8,1.5,3.6,1
 c2.8-0.5,3.8-2.1,3.8-2.1c0.7,1.4,1.4,2.6,1.4,2.6S342.9,345.3,341.4,346.1z"/>
<path class="st10" d="M295.6,346.1c-1.5,0.8-24.4,1.1-24.3,0.8c0-0.4,0.4-2.3,4-4.2c3.4-1.8,13.9-6.1,14.6-6.3
 c-0.2,0.3-1.2,2.2,0.4,3c1.6,0.8,5.4,0.2,6.2,0c0.1,0,0.2,0,0.2,0S297.1,345.4,295.6,346.1z"/>
<path class="st10" d="M375.9,223.2c-0.8,3-4.9,5.1-4.9,5.1c-0.7-0.2-1.4-0.3-1.8-0.2c-0.8,0.1-1.9,0.9-2.1,0.9
 c-0.3,0.1,1.7-5.2-1.2-7.3c-2.9-2.1-9.3,2-12.3,0c0,0,0,0-0.1,0c-0.2-0.1-0.3-0.3-0.5-0.4c-0.1,0-0.1-0.1-0.2-0.1
 c-0.1-0.1-0.2-0.1-0.3-0.2c-2.2-2.2-2.6-5.5-2.6-5.5s0-0.1,0-0.3c-0.1-2.9,1.4-6,4.7-6.5c5-0.9,5.7,2.3,10.2,2.9
 c4.5,0.6,7.1,3.1,7.1,5.9S376.7,220.3,375.9,223.2z"/>
<path class="st14" d="M374.6,168.8h-10c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8c-1,0-1.8,0.9-1.8,2c0,1.1,0.8,2,1.8,2
 c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8s2-0.8,2-1.8
 c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-10C376.1,169.5,375.4,168.8,374.6,168.8z"/>
<path class="st15" d="M361.7,173.3c0.6,0,1.1,0.3,1.4,0.8v-3.8c0-0.8-0.7-1.5-1.5-1.5H358c0.4-0.3,0.6-0.8,0.6-1.3
 c0-1-0.9-1.8-2-1.8s-2,0.8-2,1.8c0,0.5,0.2,0.9,0.6,1.3h-3.6c-0.8,0-1.5,0.7-1.5,1.5v10c0,0.8,0.7,1.5,1.5,1.5h3.8
 c-0.5-0.3-0.8-0.8-0.8-1.4c0-1,0.9-1.8,2-1.8s2,0.8,2,1.8c0,0.6-0.3,1.1-0.8,1.4h3.8c0.8,0,1.5-0.7,1.5-1.5v-3.8
 c-0.3,0.5-0.8,0.8-1.4,0.8c-1,0-1.8-0.9-1.8-2C359.9,174.2,360.7,173.3,361.7,173.3z"/>
<path class="st14" d="M364.5,186.4c-0.6,0-1.1,0.3-1.4,0.8v-4c0-0.8-0.7-1.5-1.5-1.5h-3.9c0.5-0.3,0.9-0.8,0.9-1.4
 c0-1-0.9-1.8-2-1.8s-2,0.8-2,1.8c0,0.6,0.4,1.1,0.9,1.4h-3.9c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8
 c-1,0-1.8,0.9-1.8,2s0.8,2,1.8,2c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8
 s2-0.8,2-1.8c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-3.7c0.3,0.5,0.8,0.8,1.4,0.8c1,0,1.8-0.9,1.8-2
 S365.5,186.4,364.5,186.4z"/>
<path class="st16" d="M370.5,192.1c0,1.1-0.8,2-1.8,2c-0.6,0-1.1-0.3-1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h10c0.8,0,1.5-0.7,1.5-1.5
 v-10c0-0.8-0.7-1.5-1.5-1.5H375c0.5,0.3,0.8,0.8,0.8,1.4c0,1-0.9,1.8-2,1.8s-2-0.8-2-1.8c0-0.6,0.3-1.1,0.8-1.4h-3.8
 c-0.8,0-1.5,0.7-1.5,1.5v3.8c0.3-0.5,0.8-0.8,1.4-0.8C369.7,190.1,370.5,191,370.5,192.1z"/>
<path class="st17" d="M451,332.7c0,0-20.7,5.7-27,16.3c-5,8.5-4,12.1-0.5,15.1c4.3,3.8,15,8,86.8,0c6.9-0.8,14.3-0.9,19.3-20
 c5-19.1-11.8-28.2-12-33.9c-0.2-5.7,16.2-51.5-6.9-49.6c-31.5,2.6-36.6,27.5-39.9,34.7C467.6,302.6,460.2,326.9,451,332.7z"/>
<path class="st18" d="M461.2,314.4c0,0-8.2,11.1-8.8,11.2c-0.2,0-1.4-0.5-3.3-1.3c-6.2-2.6-19.2-8.4-19.2-8.4l-22.2,35.2
 c0,0-0.3,0-0.7,0c-0.3,0-0.6,0-1-0.1l-0.1,0.1l-0.3,0.6c-0.3,0.7,0.1,9-1.4,9.8c-1.1,0.5-21.8,0.4-21.8,0.4
 c0-3.8,10.5-7.1,18.5-12.2c0,0,0.1,0,0.1-0.1c0.1-0.1,0.1-0.1,0.1-0.3l-1.4-1c0,0,14.8-35,21.6-43.8c1.4-1.8,7.1-1.2,12.4,0.3
 c3.9,1.1,17.2,6.4,23.8,8.6C459.7,314.2,461.1,314.6,461.2,314.4z"/>
<path class="st6" d="M457.5,313.4c-1.9,2.8-5,6.7-8.4,11c-6.2-2.6-19.2-8.4-19.2-8.4l-22.2,35.2c0,0-0.3,0-0.7,0c-0.3,0-0.6,0-1,0
 c-1.4-0.1-4.8-1.7-4.7-1.8l-1.4-1c0,0,14.8-35,21.6-43.8c1.4-1.8,7.1-1.2,12.4,0.3C437.6,305.9,451,311.2,457.5,313.4z"/>
<path class="st10" d="M405.7,351.8c-0.3,0.7,0.1,9-1.4,9.8c-1.1,0.5-21.8,0.4-21.8,0.4c0-3.7,10.5-7.1,18.5-12.2c0,0-1.3,1.8-1,2.7
 C400.3,353.4,405.7,351.8,405.7,351.8z"/>
<path class="st8" d="M461.2,314.4c0,0-8.2,11.1-8.8,11.2c-0.2,0-1.4-0.5-3.3-1.3c-6.2-2.6-19.2-8.4-19.2-8.4l-22.2,35.2
 c0,0-0.3,0-0.7,0c-0.3,0-0.6,0-1-0.1l-0.1,0.1l-0.3,0.6c-0.3,0.7,0.1,9-1.4,9.8c-1.1,0.5-21.8,0.4-21.8,0.4
 c0-3.8,10.5-7.1,18.5-12.2c0,0,0.1,0,0.1-0.1c0.1-0.1,0.1-0.1,0.1-0.3l-1.4-1c0,0,14.8-35,21.6-43.8c1.4-1.8,7.1-1.2,12.4,0.3
 c3.9,1.1,17.2,6.4,23.8,8.6C459.7,314.2,461.1,314.6,461.2,314.4z"/>
<path class="st18" d="M382.1,351.5l-0.7,1.2c-0.3,0.7,0.1,9-1.4,9.8c-1.1,0.5-21.8,0.4-21.8,0.4c0-3.7,10.5-7.1,18.5-12.2
 L382.1,351.5z"/>
<path class="st10" d="M381.4,352.7c-0.3,0.7,0.1,9-1.4,9.8c-1.1,0.5-21.8,0.4-21.8,0.4c0-3.7,10.5-7.1,18.5-12.2c0,0-1.3,1.8-1,2.7
 C376,354.3,381.4,352.7,381.4,352.7z"/>
<path class="st18" d="M438.8,304.1c-0.2,0-3.5,0.5-4,0.4c-0.4,0-7.6-2.9-9.7-2.8s-3.9,1.1-3.9,1.1s14.9,6,15.7,6
 c0.7,0,5.1-1.9,5.1-1.9L438.8,304.1z"/>
<path class="st7" d="M455.3,297.8c-0.1,0.1-17.3,5-17.3,5s0,4.5,2.4,6.1l16-2.6L455.3,297.8z"/>
<path class="st8" d="M455.3,297.8c-0.1,0.1-17.3,5-17.3,5s0,0.6,0.1,1.4c-1.1,0.1-2.9,0.4-3.2,0.4c-0.4,0-7.6-2.9-9.7-2.8
 s-4.4,1.3-4.4,1.3s15.4,5.8,16.2,5.8c0.4,0,1.5-0.4,2.7-0.9c0.3,0.3,0.6,0.6,0.9,0.9l16-2.6L455.3,297.8z"/>
<polygon class="st2" points="414.4,303.6 397.1,278.9 398.9,277.1 416.4,301.2 443,310.7 442,313.2 "/>
<path class="st18" d="M517.6,275c-0.6-12.3-8.1-15.8-12.9-17.1c-4.9-1.3-3.1-7-4-10.3c-1.1-4-11.5-10-17.6-2l-0.4-0.1
 c-0.6-2.7-2.4-3.3-2.4-3.3s0.1-1.9-2.9-3.5c-3.1-1.6-5.9,0.2-6.2,0.3c-0.3,0.1-1.6-1.3-6.5-2c-4.8-0.7-7.1,3-7.2,6.1
 c-0.1,3.1,3,5,3,5s-3.4,14,0.2,15.2c3.6,1.1,6,0.3,6,0.3s1.8,3.2-0.3,6.5c0,0,0,0.1-0.1,0.1c0,0-4.9-1.1-11.4,5.1
 c-6.5,6.2-13.5,10.2-13.5,10.2s-9.7-10.9-13.2-16.8c0,0-3.6,2.2-5.6,5.3c0,0,16,22.6,18.2,22.3c2.3-0.3,9.2-5.1,9.2-5.1
 s-0.3,4.1,2.4,6.9c0,0,0.6,3.3,0.7,6.1c0.3,6.3,0.2,8,0.2,8l-0.5,1.9l-0.6,2.1c0,0-30.3-12.1-36.3-12c-6,0.1-20.3,19.5-27.6,28.4
 c-7.3,8.8-12.8,17.4-12.8,17.4c0.8,0.8,5.8,3.1,8.7,2.8c0,0,32.4-32,33.2-31.5c0.8,0.5,9.4,5.6,17.9,11c8.5,5.4,14.4,10.5,23.8,10.8
 c0,0,9.4-12.1,19.4-16.6c0,0-0.8-4.8-1.3-8.6c-0.4-2.2-0.6-4.1-0.6-4.3c0-0.2,0.1-0.6,0.2-1.2c0.3-1.3,0.7-3.2,1.1-4.8
 c1.6-6.5,2.7-18.7,2.3-21.6c0,0,0,0,0,0.1c0,0,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0.1,0.2,0.1,0.4,0.2,0.6c0,0.1,0.1,0.3,0.1,0.4
 c0.9,2.6,3.9,7.6,13.2,8.8c0.6,0.1,1.2,0.1,1.9,0.2C510,297.4,518.2,287.4,517.6,275z M478.4,264.9c-0.3,0.5-0.5,1.1-0.7,1.7
 c-0.9,2.6-1.1,5.6-1,6.5c0,0.1,0,0.1,0,0.2c-0.5-1.3-1-2.3-1.4-3.4c-0.3-0.6-0.6-1.3-0.7-2.1c-0.5-2.1-0.5-5.6-0.5-5.6
 s4.5-1.8,7-5.6C481.2,256.5,482.3,257.3,478.4,264.9z"/>
<path class="st14" d="M480.3,193.4h-10c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8c-1,0-1.8,0.9-1.8,2c0,1.1,0.8,2,1.8,2
 c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8s2-0.8,2-1.8
 c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-10C481.8,194,481.2,193.4,480.3,193.4z"/>
<path class="st15" d="M467.4,197.8c0.6,0,1.1,0.3,1.4,0.8v-3.8c0-0.8-0.7-1.5-1.5-1.5h-3.6c0.4-0.3,0.6-0.8,0.6-1.3
 c0-1-0.9-1.8-2-1.8s-2,0.8-2,1.8c0,0.5,0.2,0.9,0.6,1.3h-3.6c-0.8,0-1.5,0.7-1.5,1.5v10c0,0.8,0.7,1.5,1.5,1.5h3.8
 c-0.5-0.3-0.8-0.8-0.8-1.4c0-1,0.9-1.8,2-1.8s2,0.8,2,1.8c0,0.6-0.3,1.1-0.8,1.4h3.8c0.8,0,1.5-0.7,1.5-1.5v-3.8
 c-0.3,0.5-0.8,0.8-1.4,0.8c-1,0-1.8-0.9-1.8-2S466.4,197.8,467.4,197.8z"/>
<path class="st14" d="M470.2,211c-0.6,0-1.1,0.3-1.4,0.8v-4c0-0.8-0.7-1.5-1.5-1.5h-3.9c0.5-0.3,0.9-0.8,0.9-1.4c0-1-0.9-1.8-2-1.8
 s-2,0.8-2,1.8c0,0.6,0.4,1.1,0.9,1.4h-3.9c-0.8,0-1.5,0.7-1.5,1.5v3.8c-0.3-0.5-0.8-0.8-1.4-0.8c-1,0-1.8,0.9-1.8,2s0.8,2,1.8,2
 c0.6,0,1.1-0.3,1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h3.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,1,0.9,1.8,2,1.8s2-0.8,2-1.8
 c0-0.6-0.4-1.1-0.9-1.4h3.9c0.8,0,1.5-0.7,1.5-1.5v-3.7c0.3,0.5,0.8,0.8,1.4,0.8c1,0,1.8-0.9,1.8-2S471.2,211,470.2,211z"/>
<path class="st16" d="M476.2,216.7c0,1.1-0.8,2-1.8,2c-0.6,0-1.1-0.3-1.4-0.8v3.8c0,0.8,0.7,1.5,1.5,1.5h10c0.8,0,1.5-0.7,1.5-1.5
 v-10c0-0.8-0.7-1.5-1.5-1.5h-3.8c0.5,0.3,0.8,0.8,0.8,1.4c0,1-0.9,1.8-2,1.8c-1.1,0-2-0.8-2-1.8c0-0.6,0.3-1.1,0.8-1.4h-3.8
 c-0.8,0-1.5,0.7-1.5,1.5v3.8c0.3-0.5,0.8-0.8,1.4-0.8C475.4,214.7,476.2,215.6,476.2,216.7z"/>
<path class="st18" d="M424.9,273.6c0,0-1.8-1.8-1.8-1.8c0.5,0.4-3.4-2.9-6.1-4.8c-7.8-5.4-7.8-8.8-7.3-9.2c1.7-1.7,7.1,1.1,11.7,4
 c1.6,1.1,1.5,1.3,2,0.9c0.3-0.2-0.4-1.5-0.9-2.9c-0.4-1.3-0.7-2.6,0.2-2.9c0.4-0.2,0.9,0.4,1.4,1.3c0.8,1.4,1.6,3.8,2.5,6.1
 c1.5,3.9-0.3,5.3-0.3,5.3l1.5,1.5L424.9,273.6z"/>
<path class="st6" d="M478.4,326.5c-10,4.5-19.4,16.6-19.4,16.6c-9.5-0.3-15.3-5.4-23.8-10.8c-8.5-5.4-17.1-10.5-17.9-11
 c-0.8-0.5-33.2,31.5-33.2,31.5c-2.9,0.3-8-2-8.7-2.8c0,0,5.5-8.5,12.8-17.4c7.3-8.9,21.6-28.3,27.6-28.4c6-0.1,36.3,12,36.3,12
 l1.1-4.1c4.8,1.3,16.8,0.8,23.5,0.3c-0.1,0.6-0.2,1-0.2,1.2C476.5,314.2,478.4,326.5,478.4,326.5z"/>
<path class="st7" d="M480.1,286c0.4,2.9-0.6,15.1-2.3,21.6c-0.4,1.6-0.9,3.6-1.1,4.8c-0.1,0.6-0.2,1-0.2,1.2c0,0.2,0.3,2.1,0.6,4.3
 c-7.5-0.1-17.8-1.4-21.3-2.2c-0.8-0.2-1.9-0.8-3.1-1.7l0.5-1.9c0,0,0.1-1.8-0.2-8c-0.1-2.8-0.7-6.1-0.7-6.1
 c-2.7-2.8-2.4-6.9-2.4-6.9s-6.9,4.9-9.2,5.1c-2.3,0.3-18.2-22.3-18.2-22.3c2-3.1,5.6-5.3,5.6-5.3c3.6,5.8,13.2,16.8,13.2,16.8
 s7.1-4,13.5-10.2c6.6-6.3,11.4-5.1,11.4-5.1c0,0,4.2,1.1,4.2,1.1s4.8-0.1,4.7-1.3c0,0,0,0,0,0c0.4,1.1,0.9,2,1.4,3.4
 c-0.1-0.3,0-3.8,0.9-6.7c3,4.9,13.2,21.7,15.9,29.6C481.8,294.6,480.3,286.9,480.1,286z"/>
<path class="st12" d="M495.6,296.4c-0.6-0.1-1.3-0.1-1.9-0.2c-9.4-1.2-15.8-5.3-16.9-22.9c0-0.1,0-0.1,0-0.2c-0.1-0.9,0.1-3.9,1-6.5
 c0.2-0.6,0.4-1.1,0.7-1.7c3.8-7.7,2.8-8.4,2.8-8.4c-2.5,3.9-7,5.6-7,5.6l-0.5,1.5c0,0-2.2-3-2.1-5c0.1-0.7,3.5-2.2,2.2-4.1
 c-0.7-1-3.4,0.9-3.4,0.9s-1.1-0.9-0.3-2.8c0.8-1.9-2.6-1.1-4.7-2.5c-3.4-2.3-3.8-3.8-3.8-3.8l-1,1.6c0,0-3.1-1.9-3-5
 c0.1-3,2.4-6.8,7.2-6.1c4.9,0.7,6.2,2.1,6.5,2c0.3-0.1,3.1-1.8,6.2-0.3c3,1.6,2.9,3.5,2.9,3.5s1.8,0.6,2.4,3.3l0.4,0.1
 c6-8,16.4-2,17.6,2c0.9,3.3-0.9,9,4,10.3c4.9,1.3,12.4,4.8,12.9,17.1C518.2,287.4,510,297.4,495.6,296.4z"/>
</svg>
`,
    name: 'workshops',
    theme: 'fill',
};
const AllIcons = [
    account,
    back,
    consulting,
    custom_workshops_1,
    custom_workshops_2,
    custom_workshops_3,
    custom_workshops,
    deleteIcon,
    engineering,
    error,
    genre,
    imdb,
    play,
    popular,
    sad,
    search,
    top_rated,
    upcoming,
    website,
    who_we_are,
    workshops,
];


/***/ }),

/***/ 374:
/*!**********************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/icon-data.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUPPORTED_ICONS": () => (/* binding */ SUPPORTED_ICONS)
/* harmony export */ });
const SUPPORTED_ICONS = [
    'account',
    'back',
    'genre',
    'imdb',
    'play',
    'popular',
    'search',
    'top_rated',
    'upcoming',
    'website',
    'delete',
    'sad',
    'error',
    'consulting',
    'custom_workshops',
    'custom_workshops_1',
    'custom_workshops_2',
    'custom_workshops_3',
    'engineering',
    'who-we-are',
    'workshops'
];


/***/ }),

/***/ 2853:
/*!***********************************************************!*\
  !*** ./node_modules/@ant-design/colors/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blue": () => (/* binding */ blue),
/* harmony export */   "cyan": () => (/* binding */ cyan),
/* harmony export */   "geekblue": () => (/* binding */ geekblue),
/* harmony export */   "generate": () => (/* binding */ generate),
/* harmony export */   "gold": () => (/* binding */ gold),
/* harmony export */   "green": () => (/* binding */ green),
/* harmony export */   "grey": () => (/* binding */ grey),
/* harmony export */   "lime": () => (/* binding */ lime),
/* harmony export */   "magenta": () => (/* binding */ magenta),
/* harmony export */   "orange": () => (/* binding */ orange),
/* harmony export */   "presetDarkPalettes": () => (/* binding */ presetDarkPalettes),
/* harmony export */   "presetPalettes": () => (/* binding */ presetPalettes),
/* harmony export */   "presetPrimaryColors": () => (/* binding */ presetPrimaryColors),
/* harmony export */   "purple": () => (/* binding */ purple),
/* harmony export */   "red": () => (/* binding */ red),
/* harmony export */   "volcano": () => (/* binding */ volcano),
/* harmony export */   "yellow": () => (/* binding */ yellow)
/* harmony export */ });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ctrl/tinycolor */ 9701);


var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = pColor.toHsv();
    var colorString = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }).toHexString();
    patterns.push(colorString);
  }

  patterns.push(pColor.toHexString());

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = pColor.toHsv();

    var _colorString = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }).toHexString();

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref) {
      var index = _ref.index,
          opacity = _ref.opacity;
      var darkColorString = new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__.TinyColor(opts.backgroundColor || '#141414').mix(patterns[index], opacity * 100).toHexString();
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;




/***/ }),

/***/ 7593:
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/conversion.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertDecimalToHex": () => (/* binding */ convertDecimalToHex),
/* harmony export */   "convertHexToDecimal": () => (/* binding */ convertHexToDecimal),
/* harmony export */   "hslToRgb": () => (/* binding */ hslToRgb),
/* harmony export */   "hsvToRgb": () => (/* binding */ hsvToRgb),
/* harmony export */   "numberInputToObject": () => (/* binding */ numberInputToObject),
/* harmony export */   "parseIntFromHex": () => (/* binding */ parseIntFromHex),
/* harmony export */   "rgbToHex": () => (/* binding */ rgbToHex),
/* harmony export */   "rgbToHsl": () => (/* binding */ rgbToHsl),
/* harmony export */   "rgbToHsv": () => (/* binding */ rgbToHsv),
/* harmony export */   "rgbToRgb": () => (/* binding */ rgbToRgb),
/* harmony export */   "rgbaToArgbHex": () => (/* binding */ rgbaToArgbHex),
/* harmony export */   "rgbaToHex": () => (/* binding */ rgbaToHex)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 6934);

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255) * 255,
        g: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255) * 255,
        b: (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360);
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    l = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(r, 255);
    g = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(g, 255);
    b = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(h, 360) * 6;
    s = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(s, 100);
    v = (0,_util__WEBPACK_IMPORTED_MODULE_0__.bound01)(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(convertDecimalToHex(a)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(r).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(g).toString(16)),
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.pad2)(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}


/***/ }),

/***/ 2174:
/*!*********************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "names": () => (/* binding */ names)
/* harmony export */ });
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ 8291:
/*!******************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/format-input.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputToRGB": () => (/* binding */ inputToRGB),
/* harmony export */   "isValidCSSUnit": () => (/* binding */ isValidCSSUnit),
/* harmony export */   "stringInputToObject": () => (/* binding */ stringInputToObject)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ 7593);
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-color-names */ 2174);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 6934);



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToRgb)(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            v = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.v);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hsvToRgb)(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.s);
            l = (0,_util__WEBPACK_IMPORTED_MODULE_1__.convertToPercentage)(color.l);
            rgb = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.hslToRgb)(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = (0,_util__WEBPACK_IMPORTED_MODULE_1__.boundAlpha)(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (_css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color]) {
        color = _css_color_names__WEBPACK_IMPORTED_MODULE_2__.names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            a: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.convertHexToDecimal)(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[1] + match[1]),
            g: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[2] + match[2]),
            b: (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.parseIntFromHex)(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}


/***/ }),

/***/ 9701:
/*!***********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TinyColor": () => (/* binding */ TinyColor),
/* harmony export */   "tinycolor": () => (/* binding */ tinycolor)
/* harmony export */ });
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion */ 7593);
/* harmony import */ var _css_color_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css-color-names */ 2174);
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format-input */ 8291);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 6934);




var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.numberInputToObject)(color);
        }
        this.originalInput = color;
        var rgb = (0,_format_input__WEBPACK_IMPORTED_MODULE_1__.inputToRGB)(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = (0,_util__WEBPACK_IMPORTED_MODULE_2__.boundAlpha)(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsv)(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHsl)(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbaToHex)(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round((0,_util__WEBPACK_IMPORTED_MODULE_2__.bound01)(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + (0,_conversion__WEBPACK_IMPORTED_MODULE_0__.rgbToHex)(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(_css_color_names__WEBPACK_IMPORTED_MODULE_3__.names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = (0,_util__WEBPACK_IMPORTED_MODULE_2__.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ 6934:
/*!**********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/util.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bound01": () => (/* binding */ bound01),
/* harmony export */   "boundAlpha": () => (/* binding */ boundAlpha),
/* harmony export */   "clamp01": () => (/* binding */ clamp01),
/* harmony export */   "convertToPercentage": () => (/* binding */ convertToPercentage),
/* harmony export */   "isOnePointZero": () => (/* binding */ isOnePointZero),
/* harmony export */   "isPercentage": () => (/* binding */ isPercentage),
/* harmony export */   "pad2": () => (/* binding */ pad2)
/* harmony export */ });
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}


/***/ }),

/***/ 3816:
/*!**************************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANT_ICONS": () => (/* binding */ ANT_ICONS),
/* harmony export */   "ANT_ICON_ANGULAR_CONSOLE_PREFIX": () => (/* binding */ ANT_ICON_ANGULAR_CONSOLE_PREFIX),
/* harmony export */   "DynamicLoadingTimeoutError": () => (/* binding */ DynamicLoadingTimeoutError),
/* harmony export */   "HttpModuleNotImport": () => (/* binding */ HttpModuleNotImport),
/* harmony export */   "IconDirective": () => (/* binding */ IconDirective),
/* harmony export */   "IconModule": () => (/* binding */ IconModule),
/* harmony export */   "IconNotFoundError": () => (/* binding */ IconNotFoundError),
/* harmony export */   "IconService": () => (/* binding */ IconService),
/* harmony export */   "NameSpaceIsNotSpecifyError": () => (/* binding */ NameSpaceIsNotSpecifyError),
/* harmony export */   "SVGTagNotFoundError": () => (/* binding */ SVGTagNotFoundError),
/* harmony export */   "UrlNotSafeError": () => (/* binding */ UrlNotSafeError),
/* harmony export */   "alreadyHasAThemeSuffix": () => (/* binding */ alreadyHasAThemeSuffix),
/* harmony export */   "cloneSVG": () => (/* binding */ cloneSVG),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "getIconDefinitionFromAbbr": () => (/* binding */ getIconDefinitionFromAbbr),
/* harmony export */   "getNameAndNamespace": () => (/* binding */ getNameAndNamespace),
/* harmony export */   "getSecondaryColor": () => (/* binding */ getSecondaryColor),
/* harmony export */   "hasNamespace": () => (/* binding */ hasNamespace),
/* harmony export */   "isIconDefinition": () => (/* binding */ isIconDefinition),
/* harmony export */   "manifest": () => (/* binding */ manifest),
/* harmony export */   "mapAbbrToTheme": () => (/* binding */ mapAbbrToTheme),
/* harmony export */   "replaceFillColor": () => (/* binding */ replaceFillColor),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "withSuffix": () => (/* binding */ withSuffix),
/* harmony export */   "withSuffixAndColor": () => (/* binding */ withSuffixAndColor)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/colors */ 2853);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 318);









const ANT_ICON_ANGULAR_CONSOLE_PREFIX = '[@ant-design/icons-angular]:';

function error(message) {
  console.error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
}

function warn(message) {
  if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
    console.warn(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX} ${message}.`);
  }
}

function getSecondaryColor(primaryColor) {
  return (0,_ant_design_colors__WEBPACK_IMPORTED_MODULE_0__.generate)(primaryColor)[0];
}

function withSuffix(name, theme) {
  switch (theme) {
    case 'fill':
      return `${name}-fill`;

    case 'outline':
      return `${name}-o`;

    case 'twotone':
      return `${name}-twotone`;

    case undefined:
      return name;

    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Theme "${theme}" is not a recognized theme!`);
  }
}

function withSuffixAndColor(name, theme, pri, sec) {
  return `${withSuffix(name, theme)}-${pri}-${sec}`;
}

function mapAbbrToTheme(abbr) {
  return abbr === 'o' ? 'outline' : abbr;
}

function alreadyHasAThemeSuffix(name) {
  return name.endsWith('-fill') || name.endsWith('-o') || name.endsWith('-twotone');
}

function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && (typeof target.theme === 'string' || target.theme === undefined) && typeof target.icon === 'string';
}
/**
 * Get an `IconDefinition` object from abbreviation type, like `account-book-fill`.
 * @param str
 */


function getIconDefinitionFromAbbr(str) {
  const arr = str.split('-');
  const theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
  const name = arr.join('-');
  return {
    name,
    theme,
    icon: ''
  };
}

function cloneSVG(svg) {
  return svg.cloneNode(true);
}
/**
 * Parse inline SVG string and replace colors with placeholders. For twotone icons only.
 */


function replaceFillColor(raw) {
  return raw.replace(/['"]#333['"]/g, '"primaryColor"').replace(/['"]#E6E6E6['"]/g, '"secondaryColor"').replace(/['"]#D9D9D9['"]/g, '"secondaryColor"').replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}
/**
 * Split a name with namespace in it into a tuple like [ name, namespace ].
 */


function getNameAndNamespace(type) {
  const split = type.split(':');

  switch (split.length) {
    case 1:
      return [type, ''];

    case 2:
      return [split[1], split[0]];

    default:
      throw new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The icon type ${type} is not valid!`);
  }
}

function hasNamespace(type) {
  return getNameAndNamespace(type)[1] !== '';
}

function NameSpaceIsNotSpecifyError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Type should have a namespace. Try "namespace:${name}".`);
}

function IconNotFoundError(icon) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}the icon ${icon} does not exist or is not registered.`);
}

function HttpModuleNotImport() {
  error(`you need to import "HttpClientModule" to use dynamic importing.`);
  return null;
}

function UrlNotSafeError(url) {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}The url "${url}" is unsafe.`);
}

function SVGTagNotFoundError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}<svg> tag not found.`);
}

function DynamicLoadingTimeoutError() {
  return new Error(`${ANT_ICON_ANGULAR_CONSOLE_PREFIX}Importing timeout error.`);
} // tslint:disable:no-any


const JSONP_HANDLER_NAME = '__ant_icon_load';
const ANT_ICONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('ant_icons');

class IconService {
  // TODO@wendellhu: change parameter sequence in the next major version
  constructor(_rendererFactory, _handler, _document, sanitizer, _antIcons) {
    this._rendererFactory = _rendererFactory;
    this._handler = _handler;
    this._document = _document;
    this.sanitizer = sanitizer;
    this._antIcons = _antIcons;
    this.defaultTheme = 'outline';
    /**
     * All icon definitions would be registered here.
     */

    this._svgDefinitions = new Map();
    /**
     * Cache all rendered icons. Icons are identified by name, theme,
     * and for twotone icons, primary color and secondary color.
     */

    this._svgRenderedDefinitions = new Map();
    this._inProgressFetches = new Map();
    /**
     * Url prefix for fetching inline SVG by dynamic importing.
     */

    this._assetsUrlRoot = '';
    this._twoToneColorPalette = {
      primaryColor: '#333333',
      secondaryColor: '#E6E6E6'
    };
    /** A flag indicates whether jsonp loading is enabled. */

    this._enableJsonpLoading = false;
    this._jsonpIconLoad$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._renderer = this._rendererFactory.createRenderer(null, null);

    if (this._handler) {
      this._http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient(this._handler);
    }

    if (this._antIcons) {
      this.addIcon(...this._antIcons);
    }
  }

  set twoToneColor({
    primaryColor,
    secondaryColor
  }) {
    this._twoToneColorPalette.primaryColor = primaryColor;
    this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  }

  get twoToneColor() {
    // Make a copy to avoid unexpected changes.
    return Object.assign({}, this._twoToneColorPalette);
  }
  /**
   * Disable dynamic loading (support static loading only).
   */


  get _disableDynamicLoading() {
    return false;
  }
  /**
   * Call this method to switch to jsonp like loading.
   */


  useJsonpLoading() {
    if (!this._enableJsonpLoading) {
      this._enableJsonpLoading = true;

      window[JSONP_HANDLER_NAME] = icon => {
        this._jsonpIconLoad$.next(icon);
      };
    } else {
      warn('You are already using jsonp loading.');
    }
  }
  /**
   * Change the prefix of the inline svg resources, so they could be deployed elsewhere, like CDN.
   * @param prefix
   */


  changeAssetsSource(prefix) {
    this._assetsUrlRoot = prefix.endsWith('/') ? prefix : prefix + '/';
  }
  /**
   * Add icons provided by ant design.
   * @param icons
   */


  addIcon(...icons) {
    icons.forEach(icon => {
      this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  }
  /**
   * Register an icon. Namespace is required.
   * @param type
   * @param literal
   */


  addIconLiteral(type, literal) {
    const [_, namespace] = getNameAndNamespace(type);

    if (!namespace) {
      throw NameSpaceIsNotSpecifyError();
    }

    this.addIcon({
      name: type,
      icon: literal
    });
  }
  /**
   * Remove all cache.
   */


  clear() {
    this._svgDefinitions.clear();

    this._svgRenderedDefinitions.clear();
  }
  /**
   * Get a rendered `SVGElement`.
   * @param icon
   * @param twoToneColor
   */


  getRenderedContent(icon, twoToneColor) {
    // If `icon` is a `IconDefinition`, go to the next step. If not, try to fetch it from cache.
    const definition = isIconDefinition(icon) ? icon : this._svgDefinitions.get(icon) || null;

    if (!definition && this._disableDynamicLoading) {
      throw IconNotFoundError(icon);
    } // If `icon` is a `IconDefinition` of successfully fetch, wrap it in an `Observable`.
    // Otherwise try to fetch it from remote.


    const $iconDefinition = definition ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(definition) : this._loadIconDynamically(icon); // If finally get an `IconDefinition`, render and return it. Otherwise throw an error.

    return $iconDefinition.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(i => {
      if (!i) {
        throw IconNotFoundError(icon);
      }

      return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
    }));
  }

  getCachedIcons() {
    return this._svgDefinitions;
  }
  /**
   * Get raw svg and assemble a `IconDefinition` object.
   * @param type
   */


  _loadIconDynamically(type) {
    // If developer doesn't provide HTTP module nor enable jsonp loading, just throw an error.
    if (!this._http && !this._enableJsonpLoading) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(HttpModuleNotImport());
    } // If multi directive ask for the same icon at the same time,
    // request should only be fired once.


    let inProgress = this._inProgressFetches.get(type);

    if (!inProgress) {
      const [name, namespace] = getNameAndNamespace(type); // If the string has a namespace within, create a simple `IconDefinition`.

      const icon = namespace ? {
        name: type,
        icon: ''
      } : getIconDefinitionFromAbbr(name);
      const suffix = this._enableJsonpLoading ? '.js' : '.svg';
      const url = (namespace ? `${this._assetsUrlRoot}assets/${namespace}/${name}` : `${this._assetsUrlRoot}assets/${icon.theme}/${icon.name}`) + suffix;
      const safeUrl = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__.SecurityContext.URL, url);

      if (!safeUrl) {
        throw UrlNotSafeError(url);
      }

      const source = !this._enableJsonpLoading ? this._http.get(safeUrl, {
        responseType: 'text'
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(literal => Object.assign(Object.assign({}, icon), {
        icon: literal
      }))) : this._loadIconDynamicallyWithJsonp(icon, safeUrl);
      inProgress = source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(definition => this.addIcon(definition)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._inProgressFetches.delete(type)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.share)());

      this._inProgressFetches.set(type, inProgress);
    }

    return inProgress;
  }

  _loadIconDynamicallyWithJsonp(icon, url) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable(subscriber => {
      const loader = this._document.createElement('script');

      const timer = setTimeout(() => {
        clean();
        subscriber.error(DynamicLoadingTimeoutError());
      }, 6000);
      loader.src = url;

      function clean() {
        loader.parentNode.removeChild(loader);
        clearTimeout(timer);
      }

      this._document.body.appendChild(loader);

      this._jsonpIconLoad$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(i => i.name === icon.name && i.theme === icon.theme), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(i => {
        subscriber.next(i);
        clean();
      });
    });
  }
  /**
   * Render a new `SVGElement` for a given `IconDefinition`, or make a copy from cache.
   * @param icon
   * @param twoToneColor
   */


  _loadSVGFromCacheOrCreateNew(icon, twoToneColor) {
    let svg;
    const pri = twoToneColor || this._twoToneColorPalette.primaryColor;

    const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;

    const key = icon.theme === 'twotone' ? withSuffixAndColor(icon.name, icon.theme, pri, sec) : icon.theme === undefined ? icon.name : withSuffix(icon.name, icon.theme); // Try to make a copy from cache.

    const cached = this._svgRenderedDefinitions.get(key);

    if (cached) {
      svg = cached.icon;
    } else {
      svg = this._setSVGAttribute(this._colorizeSVGIcon( // Icons provided by ant design should be refined to remove preset colors.
      this._createSVGElementFromString(hasNamespace(icon.name) ? icon.icon : replaceFillColor(icon.icon)), icon.theme === 'twotone', pri, sec)); // Cache it.

      this._svgRenderedDefinitions.set(key, Object.assign(Object.assign({}, icon), {
        icon: svg
      }));
    }

    return cloneSVG(svg);
  }

  _createSVGElementFromString(str) {
    const div = this._document.createElement('div');

    div.innerHTML = str;
    const svg = div.querySelector('svg');

    if (!svg) {
      throw SVGTagNotFoundError;
    }

    return svg;
  }

  _setSVGAttribute(svg) {
    this._renderer.setAttribute(svg, 'width', '1em');

    this._renderer.setAttribute(svg, 'height', '1em');

    return svg;
  }

  _colorizeSVGIcon(svg, twotone, pri, sec) {
    if (twotone) {
      const children = svg.childNodes;
      const length = children.length;

      for (let i = 0; i < length; i++) {
        const child = children[i];

        if (child.getAttribute('fill') === 'secondaryColor') {
          this._renderer.setAttribute(child, 'fill', sec);
        } else {
          this._renderer.setAttribute(child, 'fill', pri);
        }
      }
    }

    this._renderer.setAttribute(svg, 'fill', 'currentColor');

    return svg;
  }

}

IconService.ɵfac = function IconService_Factory(t) {
  return new (t || IconService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpBackend, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ANT_ICONS, 8));
};

IconService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: IconService,
  factory: IconService.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory2
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpBackend,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [ANT_ICONS]
      }]
    }];
  }, null);
})();

function checkMeta(prev, after) {
  return prev.type === after.type && prev.theme === after.theme && prev.twoToneColor === after.twoToneColor;
}

class IconDirective {
  constructor(_iconService, _elementRef, _renderer) {
    this._iconService = _iconService;
    this._elementRef = _elementRef;
    this._renderer = _renderer;
  }

  ngOnChanges(changes) {
    if (changes.type || changes.theme || changes.twoToneColor) {
      this._changeIcon();
    }
  }
  /**
   * Render a new icon in the current element. Remove the icon when `type` is falsy.
   */


  _changeIcon() {
    return new Promise(resolve => {
      if (!this.type) {
        this._clearSVGElement();

        resolve(null);
        return;
      }

      const beforeMeta = this._getSelfRenderMeta();

      this._iconService.getRenderedContent(this._parseIconType(this.type, this.theme), this.twoToneColor).subscribe(svg => {
        // avoid race condition
        // see https://github.com/ant-design/ant-design-icons/issues/315
        const afterMeta = this._getSelfRenderMeta();

        if (checkMeta(beforeMeta, afterMeta)) {
          this._setSVGElement(svg);

          resolve(svg);
        } else {
          resolve(null);
        }
      });
    });
  }

  _getSelfRenderMeta() {
    return {
      type: this.type,
      theme: this.theme,
      twoToneColor: this.twoToneColor
    };
  }
  /**
   * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
   * If namespace is specified, ignore theme because it meaningless for users' icons.
   *
   * @param type
   * @param theme
   */


  _parseIconType(type, theme) {
    if (isIconDefinition(type)) {
      return type;
    } else {
      const [name, namespace] = getNameAndNamespace(type);

      if (namespace) {
        return type;
      }

      if (alreadyHasAThemeSuffix(name)) {
        if (!!theme) {
          warn(`'type' ${name} already gets a theme inside so 'theme' ${theme} would be ignored`);
        }

        return name;
      } else {
        return withSuffix(name, theme || this._iconService.defaultTheme);
      }
    }
  }

  _setSVGElement(svg) {
    this._clearSVGElement();

    this._renderer.appendChild(this._elementRef.nativeElement, svg);
  }

  _clearSVGElement() {
    var _a;

    const el = this._elementRef.nativeElement;
    const children = el.childNodes;
    const length = children.length;

    for (let i = length - 1; i >= 0; i--) {
      const child = children[i];

      if (((_a = child.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'svg') {
        this._renderer.removeChild(el, child);
      }
    }
  }

}

IconDirective.ɵfac = function IconDirective_Factory(t) {
  return new (t || IconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](IconService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2));
};

IconDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: IconDirective,
  selectors: [["", "antIcon", ""]],
  inputs: {
    type: "type",
    theme: "theme",
    twoToneColor: "twoToneColor"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[antIcon]'
    }]
  }], function () {
    return [{
      type: IconService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    theme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    twoToneColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class IconModule {}

IconModule.ɵfac = function IconModule_Factory(t) {
  return new (t || IconModule)();
};

IconModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: IconModule
});
IconModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [IconService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IconModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule],
      exports: [IconDirective],
      declarations: [IconDirective],
      providers: [IconService]
    }]
  }], null, null);
})();

const manifest = {
  fill: ['alert', 'account-book', 'amazon-circle', 'alipay-circle', 'amazon-square', 'android', 'apple', 'api', 'appstore', 'audio', 'alipay-square', 'backward', 'bank', 'behance-square', 'bell', 'behance-circle', 'box-plot', 'book', 'bug', 'calculator', 'calendar', 'build', 'aliwangwang', 'camera', 'caret-left', 'caret-up', 'carry-out', 'check-square', 'check-circle', 'caret-right', 'chrome', 'ci-circle', 'cloud', 'close-circle', 'bulb', 'caret-down', 'codepen-circle', 'code-sandbox-square', 'code', 'close-square', 'codepen-square', 'car', 'compass', 'contacts', 'container', 'copyright-circle', 'clock-circle', 'credit-card', 'customer-service', 'crown', 'dashboard', 'delete', 'database', 'diff', 'dingtalk-circle', 'dingtalk-square', 'dislike', 'down-circle', 'dollar-circle', 'dribbble-circle', 'dribbble-square', 'edit', 'dropbox-circle', 'environment', 'copy', 'dropbox-square', 'down-square', 'experiment', 'euro-circle', 'eye', 'fast-forward', 'control', 'fast-backward', 'facebook', 'file-add', 'code-sandbox-circle', 'file-excel', 'file-exclamation', 'file', 'eye-invisible', 'file-ppt', 'file-image', 'file-text', 'file-unknown', 'file-markdown', 'file-word', 'filter', 'file-zip', 'exclamation-circle', 'fire', 'file-pdf', 'folder', 'folder-open', 'flag', 'forward', 'fund', 'frown', 'format-painter', 'funnel-plot', 'gift', 'google-plus-circle', 'google-circle', 'golden', 'github', 'hdd', 'gold', 'google-square', 'google-plus-square', 'gitlab', 'highlight', 'heart', 'html5', 'home', 'ie-square', 'ie-circle', 'instagram', 'info-circle', 'idcard', 'insurance', 'hourglass', 'interaction', 'layout', 'left-circle', 'left-square', 'like', 'linkedin', 'lock', 'mail', 'meh', 'medicine-box', 'mac-command', 'medium-square', 'minus-square', 'money-collect', 'mobile', 'message', 'folder-add', 'medium-circle', 'notification', 'pay-circle', 'pause-circle', 'phone', 'play-circle', 'play-square', 'pie-chart', 'picture', 'plus-square', 'plus-circle', 'profile', 'pound-circle', 'project', 'printer', 'pushpin', 'qq-circle', 'qq-square', 'question-circle', 'red-envelope', 'read', 'reconciliation', 'minus-circle', 'reddit-square', 'reddit-circle', 'property-safety', 'right-circle', 'right-square', 'rocket', 'rest', 'robot', 'save', 'schedule', 'safety-certificate', 'security-scan', 'shop', 'shopping', 'sketch-circle', 'sketch-square', 'slack-circle', 'setting', 'signal', 'skin', 'sliders', 'slack-square', 'snippets', 'smile', 'sound', 'step-backward', 'stop', 'star', 'switcher', 'tablet', 'tag', 'skype', 'step-forward', 'thunderbolt', 'taobao-square', 'taobao-circle', 'tags', 'trademark-circle', 'tool', 'twitter-circle', 'unlock', 'twitter-square', 'trophy', 'up-circle', 'up-square', 'usb', 'wallet', 'warning', 'weibo-square', 'wechat', 'video-camera', 'windows', 'yuque', 'yahoo', 'zhihu-square', 'zhihu-circle', 'weibo-circle', 'youtube'],
  outline: ['alert', 'aim', 'alibaba', 'amazon', 'aliyun', 'ant-design', 'account-book', 'apartment', 'android', 'api', 'apple', 'area-chart', 'appstore', 'ant-cloud', 'arrow-right', 'arrow-down', 'alipay-circle', 'audio-muted', 'align-center', 'arrow-up', 'arrows-alt', 'aliwangwang', 'backward', 'audit', 'bank', 'bar-chart', 'barcode', 'bars', 'behance', 'block', 'book', 'behance-square', 'bell', 'appstore-add', 'border-bottom', 'border-horizontal', 'audio', 'border-outer', 'border-left', 'border', 'bg-colors', 'align-right', 'border-right', 'borderless-table', 'box-plot', 'border-top', 'border-verticle', 'border-inner', 'bug', 'alipay', 'branches', 'camera', 'calculator', 'calendar', 'build', 'align-left', 'arrow-left', 'caret-left', 'caret-right', 'caret-up', 'carry-out', 'caret-down', 'check-circle', 'check', 'bulb', 'car', 'clear', 'ci', 'clock-circle', 'close-circle', 'close-square', 'close', 'bold', 'cloud-download', 'cloud', 'cloud-sync', 'cloud-server', 'cloud-upload', 'check-square', 'code', 'code-sandbox', 'coffee', 'codepen', 'chrome', 'compress', 'compass', 'column-width', 'comment', 'ci-circle', 'copy', 'container', 'control', 'copyright', 'credit-card', 'cluster', 'customer-service', 'contacts', 'console-sql', 'dash', 'dashboard', 'column-height', 'database', 'copyright-circle', 'codepen-circle', 'delete-column', 'desktop', 'deployment-unit', 'delivered-procedure', 'dingding', 'disconnect', 'dingtalk', 'dollar-circle', 'dislike', 'delete-row', 'diff', 'dollar', 'double-right', 'dot-chart', 'down', 'crown', 'down-circle', 'down-square', 'double-left', 'download', 'edit', 'ellipsis', 'dribbble', 'dribbble-square', 'delete', 'dropbox', 'environment', 'euro-circle', 'enter', 'exception', 'expand-alt', 'exclamation-circle', 'drag', 'euro', 'experiment', 'export', 'expand', 'fall', 'eye-invisible', 'eye', 'fast-forward', 'fast-backward', 'file-add', 'field-string', 'file-exclamation', 'file-done', 'field-time', 'file-excel', 'field-binary', 'file-gif', 'file-image', 'file', 'file-markdown', 'file-ppt', 'file-pdf', 'field-number', 'file-search', 'file-sync', 'file-jpg', 'file-text', 'filter', 'exclamation', 'file-zip', 'flag', 'folder-add', 'file-unknown', 'folder-open', 'fire', 'file-protect', 'folder-view', 'folder', 'fork', 'font-colors', 'font-size', 'facebook', 'format-painter', 'frown', 'form', 'fullscreen', 'fund-projection-screen', 'fullscreen-exit', 'fund', 'gift', 'gateway', 'github', 'fund-view', 'gif', 'funnel-plot', 'gold', 'gitlab', 'global', 'google', 'group', 'hdd', 'heat-map', 'highlight', 'google-plus', 'function', 'history', 'file-word', 'forward', 'home', 'idcard', 'holder', 'hourglass', 'info-circle', 'heart', 'insert-row-below', 'import', 'insert-row-left', 'insert-row-above', 'insert-row-right', 'ie', 'info', 'key', 'inbox', 'italic', 'insurance', 'laptop', 'issues-close', 'instagram', 'left-square', 'like', 'line', 'link', 'loading-3-quarters', 'linkedin', 'line-height', 'loading', 'lock', 'login', 'line-chart', 'man', 'mail', 'left-circle', 'mac-command', 'logout', 'medicine-box', 'layout', 'medium', 'medium-workmark', 'left', 'meh', 'menu-fold', 'menu-unfold', 'interaction', 'message', 'minus', 'minus-square', 'minus-circle', 'menu', 'merge-cells', 'mobile', 'money-collect', 'node-index', 'monitor', 'node-expand', 'ordered-list', 'more', 'number', 'notification', 'one-to-one', 'pause-circle', 'percentage', 'phone', 'pause', 'paper-clip', 'partition', 'pie-chart', 'pic-left', 'pic-center', 'picture', 'node-collapse', 'pic-right', 'play-square', 'play-circle', 'pay-circle', 'plus', 'plus-circle', 'html5', 'plus-square', 'pound', 'profile', 'project', 'property-safety', 'poweroff', 'pushpin', 'qrcode', 'printer', 'pound-circle', 'pull-request', 'question', 'qq', 'radar-chart', 'question-circle', 'radius-bottomleft', 'radius-upleft', 'redo', 'radius-setting', 'radius-upright', 'reddit', 'rest', 'read', 'reload', 'radius-bottomright', 'reconciliation', 'right', 'robot', 'rocket', 'right-square', 'right-circle', 'rotate-right', 'safety-certificate', 'red-envelope', 'rotate-left', 'retweet', 'rollback', 'rise', 'save', 'safety', 'search', 'security-scan', 'scan', 'send', 'setting', 'scissor', 'select', 'shake', 'shopping-cart', 'sisternode', 'shop', 'sketch', 'shopping', 'share-alt', 'schedule', 'skin', 'shrink', 'small-dash', 'sliders', 'skype', 'slack-square', 'snippets', 'sort-ascending', 'smile', 'solution', 'slack', 'sound', 'split-cells', 'sort-descending', 'step-forward', 'star', 'step-backward', 'subnode', 'swap', 'stock', 'swap-right', 'tags', 'tablet', 'tag', 'table', 'taobao-circle', 'switcher', 'stop', 'taobao', 'swap-left', 'sync', 'team', 'tool', 'trademark-circle', 'thunderbolt', 'to-top', 'translation', 'trademark', 'trophy', 'underline', 'ungroup', 'strikethrough', 'up-square', 'up-circle', 'up', 'unordered-list', 'twitter', 'undo', 'unlock', 'upload', 'transaction', 'user-delete', 'usb', 'user-add', 'usergroup-delete', 'video-camera-add', 'verified', 'vertical-right', 'vertical-align-bottom', 'usergroup-add', 'user', 'vertical-align-top', 'user-switch', 'video-camera', 'weibo', 'weibo-circle', 'vertical-left', 'vertical-align-middle', 'wifi', 'wallet', 'warning', 'whats-app', 'wechat', 'zhihu', 'youtube', 'woman', 'weibo-square', 'windows', 'yahoo', 'zoom-in', 'yuque', 'zoom-out'],
  twotone: ['account-book', 'alert', 'api', 'audio', 'bank', 'bell', 'appstore', 'book', 'box-plot', 'bulb', 'calendar', 'camera', 'car', 'bug', 'carry-out', 'check-square', 'build', 'check-circle', 'ci-circle', 'ci', 'clock-circle', 'close-square', 'calculator', 'cloud', 'close-circle', 'code', 'container', 'compass', 'control', 'contacts', 'copy', 'copyright-circle', 'copyright', 'credit-card', 'crown', 'delete', 'diff', 'customer-service', 'database', 'dollar-circle', 'dashboard', 'dollar', 'down-square', 'edit', 'dislike', 'exclamation-circle', 'environment', 'experiment', 'euro-circle', 'down-circle', 'euro', 'eye', 'file-add', 'file-excel', 'eye-invisible', 'file-markdown', 'file-exclamation', 'file-pdf', 'file-ppt', 'file-unknown', 'file', 'file-word', 'file-text', 'filter', 'file-zip', 'flag', 'fire', 'folder', 'file-image', 'folder-add', 'folder-open', 'frown', 'fund', 'funnel-plot', 'gift', 'gold', 'highlight', 'hdd', 'home', 'hourglass', 'heart', 'html5', 'idcard', 'insurance', 'interaction', 'info-circle', 'layout', 'like', 'left-circle', 'lock', 'left-square', 'mail', 'meh', 'medicine-box', 'minus-circle', 'minus-square', 'money-collect', 'pause-circle', 'mobile', 'notification', 'message', 'phone', 'pie-chart', 'play-square', 'picture', 'play-circle', 'plus-circle', 'plus-square', 'pound-circle', 'printer', 'property-safety', 'pushpin', 'project', 'question-circle', 'profile', 'red-envelope', 'reconciliation', 'right-square', 'right-circle', 'schedule', 'save', 'safety-certificate', 'security-scan', 'rocket', 'shop', 'rest', 'setting', 'sliders', 'smile', 'snippets', 'sound', 'star', 'skin', 'shopping', 'switcher', 'tablet', 'tag', 'tags', 'thunderbolt', 'tool', 'stop', 'trademark-circle', 'trophy', 'up-circle', 'up-square', 'usb', 'unlock', 'wallet', 'video-camera', 'warning']
};
/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=packages_ngx-fast-icon-demo_src_app_comparison_ant_ant_module_ts.js.map