"use strict";
(self["webpackChunkngx_fast_icon_demo"] = self["webpackChunkngx_fast_icon_demo"] || []).push([["packages_ngx-fast-icon-demo_src_app_comparison_fast-icon_fast-icon_module_ts"],{

/***/ 6450:
/*!*****************************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/comparison/fast-icon/fast-icon.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastIconRouteComponent": () => (/* binding */ FastIconRouteComponent)
/* harmony export */ });
/* harmony import */ var _icon_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icon-data */ 374);
/* harmony import */ var _misc_icons_tester_icon_tester_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/icons-tester/icon-tester.service */ 5969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_fast_lib_src_lib_fast_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ngx-fast-lib/src/lib/fast-svg.component */ 4221);






const _c0 = function (a0) { return { active: a0 }; };
function FastIconRouteComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FastIconRouteComponent_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const button_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.tester.setLayout(button_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, button_r2 === ctx_r0.tester.setting));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", button_r2, " ");
} }
function FastIconRouteComponent_div_15_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fast-svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", icon_r8);
} }
function FastIconRouteComponent_div_15_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FastIconRouteComponent_div_15_ul_1_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", list_r6);
} }
function FastIconRouteComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FastIconRouteComponent_div_15_ul_1_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.tester.lists);
} }
class FastIconRouteComponent {
    constructor(tester) {
        this.tester = tester;
        this.tester.defineSet(_icon_data__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_ICONS);
    }
}
FastIconRouteComponent.ɵfac = function FastIconRouteComponent_Factory(t) { return new (t || FastIconRouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_misc_icons_tester_icon_tester_service__WEBPACK_IMPORTED_MODULE_1__.IconTester)); };
FastIconRouteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FastIconRouteComponent, selectors: [["ng-component"]], decls: 16, vars: 2, consts: [[1, "buttons-wrapper"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["class", "row icons", 4, "ngIf"], [3, "ngClass", "click"], [1, "row", "icons"], ["class", "group", 4, "ngFor", "ngForOf"], [1, "group"], [4, "ngFor", "ngForOf"], [3, "name"]], template: function FastIconRouteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Fast svg demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Layout setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FastIconRouteComponent_button_5_Template, 2, 4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Content controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 0)(9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FastIconRouteComponent_Template_button_click_9_listener() { return ctx.tester.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FastIconRouteComponent_Template_button_click_11_listener() { return ctx.tester.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FastIconRouteComponent_Template_button_click_13_listener() { return ctx.tester.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Reload page");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FastIconRouteComponent_div_15_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tester.buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tester.showContainer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_fast_lib_src_lib_fast_svg_component__WEBPACK_IMPORTED_MODULE_2__.FastSvgComponent], styles: [".group[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhc3QtaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJmYXN0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JvdXAge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4755:
/*!**************************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/comparison/fast-icon/fast-icon.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastIconRouteModule": () => (/* binding */ FastIconRouteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _push_based_ngx_fast_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @push-based/ngx-fast-svg */ 9221);
/* harmony import */ var _fast_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fast-icon.component */ 6450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class FastIconRouteModule {
}
FastIconRouteModule.ɵfac = function FastIconRouteModule_Factory(t) { return new (t || FastIconRouteModule)(); };
FastIconRouteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FastIconRouteModule });
FastIconRouteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                {
                    path: '',
                    component: _fast_icon_component__WEBPACK_IMPORTED_MODULE_1__.FastIconRouteComponent,
                },
            ]),
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _push_based_ngx_fast_svg__WEBPACK_IMPORTED_MODULE_0__.FastSvgModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FastIconRouteModule, { declarations: [_fast_icon_component__WEBPACK_IMPORTED_MODULE_1__.FastIconRouteComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _push_based_ngx_fast_svg__WEBPACK_IMPORTED_MODULE_0__.FastSvgModule] }); })();


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


/***/ })

}]);
//# sourceMappingURL=packages_ngx-fast-icon-demo_src_app_comparison_fast-icon_fast-icon_module_ts.js.map