"use strict";
(self["webpackChunkngx_fast_icon_demo"] = self["webpackChunkngx_fast_icon_demo"] || []).push([["packages_ngx-fast-icon-demo_src_app_misc_angular-svg-icon_angular-svg-icon-list_module_ts"],{

/***/ 151:
/*!******************************************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/misc/angular-svg-icon/angular-svg-icon-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularSvgIconListComponent": () => (/* binding */ AngularSvgIconListComponent)
/* harmony export */ });
/* harmony import */ var _icon_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icon-data */ 374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ 592);




function AngularSvgIconListComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "svg-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/svg-icons/" + icon_r3 + ".svg");
} }
function AngularSvgIconListComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AngularSvgIconListComponent_ul_5_li_1_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r1);
} }
class AngularSvgIconListComponent {
    constructor() {
        this.icons = [..._icon_data__WEBPACK_IMPORTED_MODULE_0__.SUPPORTED_ICONS];
        this.lists = [];
    }
    add() {
        this.lists.push(this.icons);
    }
}
AngularSvgIconListComponent.ɵfac = function AngularSvgIconListComponent_Factory(t) { return new (t || AngularSvgIconListComponent)(); };
AngularSvgIconListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AngularSvgIconListComponent, selectors: [["angular-svg-icon-list"]], decls: 6, vars: 1, consts: [["data-test", "add", 3, "click"], ["data-test", "list", "class", "loading-demo", 4, "ngFor", "ngForOf"], ["data-test", "list", 1, "loading-demo"], [4, "ngFor", "ngForOf"], [3, "src"]], template: function AngularSvgIconListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "angular-svg-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p")(3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AngularSvgIconListComponent_Template_button_click_3_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "add list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AngularSvgIconListComponent_ul_5_Template, 2, 1, "ul", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lists);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIconComponent], encapsulation: 2 });


/***/ }),

/***/ 8950:
/*!***************************************************************************************************!*\
  !*** ./packages/ngx-fast-icon-demo/src/app/misc/angular-svg-icon/angular-svg-icon-list.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularSvgIconListModule": () => (/* binding */ AngularSvgIconListModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_svg_icon_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-svg-icon-list.component */ 151);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ 592);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);








class AngularSvgIconListModule {
}
AngularSvgIconListModule.ɵfac = function AngularSvgIconListModule_Factory(t) { return new (t || AngularSvgIconListModule)(); };
AngularSvgIconListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AngularSvgIconListModule });
AngularSvgIconListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__.AngularSvgIconModule.forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                {
                    path: '',
                    component: _angular_svg_icon_list_component__WEBPACK_IMPORTED_MODULE_0__.AngularSvgIconListComponent
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AngularSvgIconListModule, { declarations: [_angular_svg_icon_list_component__WEBPACK_IMPORTED_MODULE_0__.AngularSvgIconListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__.AngularSvgIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=packages_ngx-fast-icon-demo_src_app_misc_angular-svg-icon_angular-svg-icon-list_module_ts.js.map