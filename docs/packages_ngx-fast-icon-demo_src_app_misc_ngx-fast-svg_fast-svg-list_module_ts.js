"use strict";
(self["webpackChunkngx_fast_icon_demo"] = self["webpackChunkngx_fast_icon_demo"] || []).push([["packages_ngx-fast-icon-demo_src_app_misc_ngx-fast-svg_fast-svg-list_module_ts"],{

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

/***/ 7643:
/*!******************************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/misc/ngx-fast-svg/fast-svg-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastSvgListComponent": () => (/* binding */ FastSvgListComponent)
/* harmony export */ });
/* harmony import */ var _icon_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icon-data */ 374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_fast_lib_src_lib_fast_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../ngx-fast-lib/src/lib/fast-svg.component */ 4221);




function FastSvgListComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fast-svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", icon_r3);
} }
function FastSvgListComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FastSvgListComponent_ul_5_li_1_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", list_r1);
} }
class FastSvgListComponent {
    constructor() {
        this.icons = [..._icon_data__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_ICONS];
        this.lists = [];
    }
    add() {
        this.lists.push(this.icons);
    }
}
FastSvgListComponent.ɵfac = function FastSvgListComponent_Factory(t) { return new (t || FastSvgListComponent)(); };
FastSvgListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FastSvgListComponent, selectors: [["fast-svg-list"]], decls: 6, vars: 1, consts: [["data-test", "add", 3, "click"], ["data-test", "list", "class", "loading-demo", 4, "ngFor", "ngForOf"], ["data-test", "list", 1, "loading-demo"], [4, "ngFor", "ngForOf"], [3, "name"]], template: function FastSvgListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ngx-fast-svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p")(3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FastSvgListComponent_Template_button_click_3_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "add list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FastSvgListComponent_ul_5_Template, 2, 1, "ul", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.lists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ngx_fast_lib_src_lib_fast_svg_component__WEBPACK_IMPORTED_MODULE_1__.FastSvgComponent], encapsulation: 2 });


/***/ }),

/***/ 2509:
/*!***************************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/misc/ngx-fast-svg/fast-svg-list.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastSvgListModule": () => (/* binding */ FastSvgListModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fast_svg_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fast-svg-list.component */ 7643);
/* harmony import */ var _push_based_ngx_fast_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @push-based/ngx-fast-svg */ 9221);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_fast_lib_src_lib_fast_svg_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ngx-fast-lib/src/lib/fast-svg.module */ 9503);







class FastSvgListModule {
}
FastSvgListModule.ɵfac = function FastSvgListModule_Factory(t) { return new (t || FastSvgListModule)(); };
FastSvgListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FastSvgListModule });
FastSvgListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _push_based_ngx_fast_svg__WEBPACK_IMPORTED_MODULE_1__.FastSvgModule.forRoot({
                url: (name) => `assets/svg-icons/${name}.svg`,
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                {
                    path: '',
                    component: _fast_svg_list_component__WEBPACK_IMPORTED_MODULE_0__.FastSvgListComponent,
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FastSvgListModule, { declarations: [_fast_svg_list_component__WEBPACK_IMPORTED_MODULE_0__.FastSvgListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_fast_lib_src_lib_fast_svg_module__WEBPACK_IMPORTED_MODULE_2__.FastSvgModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=packages_ngx-fast-icon-demo_src_app_misc_ngx-fast-svg_fast-svg-list_module_ts.js.map