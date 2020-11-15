(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alexl\source\repos\ng\simple-angular-boilerplate-with-angular-material\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CAgo":
/*!*****************************************!*\
  !*** ./src/app/services/api-service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../enums/tab-enum */ "G3Vg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ApiService {
    constructor(http) {
        this.http = http;
    }
    getWordsSimilarity(obj) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.post('/word2vec/similarity', obj).toPromise().then((resp) => (resp === null || resp === void 0 ? void 0 : resp.similarity) ? resp.similarity : null);
        });
    }
    getProcess(obj, activeTabIndex) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = this.getProcessRequestByActiveTabIndex(activeTabIndex);
            return this.http.post(url, obj).toPromise().then((resp) => this.parseProcessResp(activeTabIndex, resp));
        });
    }
    parseProcessResp(activeTabIndex, resp) {
        var _a, _b, _c, _d;
        const result = [];
        switch (activeTabIndex) {
            case (_enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__["TabEnum"].Term):
                if ((_b = (_a = resp) === null || _a === void 0 ? void 0 : _a.similar) === null || _b === void 0 ? void 0 : _b.length) {
                    resp.similar.forEach((el) => result.push({ term: el[0], vector: el[1] }));
                }
                break;
            case (_enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__["TabEnum"].TermArray):
                if ((_d = (_c = resp) === null || _c === void 0 ? void 0 : _c.center) === null || _d === void 0 ? void 0 : _d.length) {
                    resp.center.forEach((el) => result.push({ term: el[0], vector: el[1] }));
                }
                break;
        }
        return result;
    }
    getProcessRequestByActiveTabIndex(activeTabIndex) {
        switch (activeTabIndex) {
            case (_enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__["TabEnum"].Term):
                return '/word2vec/similar';
            case (_enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__["TabEnum"].TermArray):
                return '/word2vec/center';
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "G3Vg":
/*!***********************************!*\
  !*** ./src/app/enums/tab-enum.ts ***!
  \***********************************/
/*! exports provided: TabEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabEnum", function() { return TabEnum; });
var TabEnum;
(function (TabEnum) {
    TabEnum[TabEnum["Term"] = 0] = "Term";
    TabEnum[TabEnum["TermArray"] = 1] = "TermArray";
    TabEnum[TabEnum["TermCompare"] = 2] = "TermCompare";
})(TabEnum || (TabEnum = {}));


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../enums/tab-enum */ "G3Vg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/api-service */ "CAgo");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");















function MainComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u0456 \u0430\u0441\u043E\u0446\u0456\u0430\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_16_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0422\u0435\u0440\u043C\u0456\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_16_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r12.term, " ");
} }
function MainComponent_ng_container_16_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041A\u043E\u0441\u0438\u043D\u0443\u0441\u0442\u044C \u043D\u0430 \u0431\u043B\u0438\u0437\u043A\u0456\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_16_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13.vector, " ");
} }
function MainComponent_ng_container_16_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
} }
function MainComponent_ng_container_16_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
} }
function MainComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function MainComponent_ng_container_16_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u0456 \u0430\u0441\u043E\u0446\u0456\u0430\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MainComponent_ng_container_16_th_10_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MainComponent_ng_container_16_td_11_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MainComponent_ng_container_16_th_13_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MainComponent_ng_container_16_td_14_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MainComponent_ng_container_16_tr_15_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " --> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MainComponent_ng_container_16_tr_17_Template, 1, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matColumnDef", ctx_r1.displayedColumns[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matColumnDef", ctx_r1.displayedColumns[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
function MainComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0426\u0435\u043D\u0442\u0440 \u043B\u0435\u043A\u0441\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_32_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0422\u0435\u0440\u043C\u0456\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_32_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r23.term, " ");
} }
function MainComponent_ng_container_32_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041A\u043E\u0441\u0438\u043D\u0443\u0441\u0442\u044C \u043D\u0430 \u0431\u043B\u0438\u0437\u043A\u0456\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_32_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r24.vector, " ");
} }
function MainComponent_ng_container_32_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
} }
function MainComponent_ng_container_32_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
} }
function MainComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function MainComponent_ng_container_32_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0426\u0435\u043D\u0442\u0440 \u043B\u0435\u043A\u0441\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MainComponent_ng_container_32_th_10_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MainComponent_ng_container_32_td_11_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MainComponent_ng_container_32_th_13_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MainComponent_ng_container_32_td_14_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MainComponent_ng_container_32_tr_15_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MainComponent_ng_container_32_tr_16_Template, 1, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r3.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
} }
function MainComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0421\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u0430 \u0431\u043B\u0438\u0437\u044C\u043A\u0456\u0441\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MainComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u041A\u043E\u0441\u0438\u043D\u0443\u0441\u043D\u0430 \u0431\u043B\u0438\u0437\u044C\u043A\u0456\u0441\u0442\u044C:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.similarityData);
} }
const _c0 = function () { return { standalone: true }; };
class MainComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.terms = '';
        this.firstTerm = '';
        this.secondTerm = '';
        this.displayedColumns = ['term', 'vector'];
        this.activeTab = _enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__["TabEnum"].Term;
    }
    ngOnInit() { }
    getProcess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.terms) {
                let reqObj;
                const termArr = this.terms.split(' ');
                if (termArr === null || termArr === void 0 ? void 0 : termArr.length) {
                    switch (this.activeTab) {
                        case (_enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__["TabEnum"].Term):
                            reqObj = { word: termArr[0] };
                            break;
                        case (_enums_tab_enum__WEBPACK_IMPORTED_MODULE_1__["TabEnum"].TermArray):
                            reqObj = { words: termArr };
                            break;
                    }
                    const data = yield this.apiService.getProcess(reqObj, this.activeTab);
                    this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
                    this.data.sort = this.sort;
                }
            }
        });
    }
    getWordsSimilarity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const reqObj = {
                word_1: this.firstTerm,
                word_2: this.secondTerm
            };
            this.similarityData = yield this.apiService.getWordsSimilarity(reqObj);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.data.filter = filterValue.trim().toLowerCase();
    }
    // Use for reset data after active tab changed:
    onSelectedTabChange(ev) {
        this.activeTab = ev.index;
        this.data = this.similarityData = undefined;
        this.terms = this.firstTerm = this.secondTerm = '';
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 53, vars: 20, consts: [["animationDuration", "0ms", "mat-align-tabs", "center", 3, "color", "backgroundColor", "selectedTabChange"], ["mat-tab-label", ""], [1, "container"], [1, "container", "container_middle"], [1, "main-form"], ["appearance", "outline"], ["type", "text", "matInput", "", "placeholder", "\u0433\u043E\u043D\u0447\u0430\u0440", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043A\u043E\u043C\u043F'\u044E\u0442\u0435\u0440 \u043F\u043E\u0440\u0442\u0430\u0442\u0438\u0432\u043D\u0438\u0439", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "\u043D\u043E\u0443\u0442\u0431\u0443\u043A", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "\u043F\u043B\u0430\u043D\u0448\u0435\u0442", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "similarity-result", 4, "ngIf"], ["title", "\u041E\u0431\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u0438\u0445 \u0430\u0441\u043E\u0446\u0456\u0430\u0442\u0456\u0432 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0441\u043B\u0456\u0432\u043D\u0438\u0445 \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432"], [1, "filter-data"], ["matInput", "", "placeholder", "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0435\u0440\u043C\u0456\u043D \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443", 3, "keyup"], [1, "grid-wrapper"], ["mat-table", "", "matSort", "", 3, "dataSource"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["title", "\u041E\u0431\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F \u0446\u0435\u043D\u0442\u0440\u0443 \u043B\u0435\u043A\u0441\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430 \u043E\u0434\u043D\u043E\u0441\u043B\u0456\u0432\u043D\u0438\u0445 \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432"], ["matColumnDef", "term"], ["matColumnDef", "vector"], ["title", "\u041E\u0431\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u043E\u0457 \u0431\u043B\u0438\u0437\u044C\u043A\u0456\u0441\u0442\u0456 \u043E\u0434\u043D\u043E\u0441\u043B\u0456\u0432\u043D\u0438\u0445 \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432"], [1, "similarity-result"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function MainComponent_Template_mat_tab_group_selectedTabChange_0_listener($event) { return ctx.onSelectedTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MainComponent_ng_template_2_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u041E\u0431\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u0438\u0445 \u0430\u0441\u043E\u0446\u0456\u0430\u0442\u0456\u0432 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0441\u043B\u0456\u0432\u043D\u0438\u0445 \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0435\u0439\u0440\u043E\u043D\u043D\u0430 \u0432\u0435\u043A\u0442\u043E\u0440\u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043B\u0456\u0432 (\u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C word2vec word embeddings) \u0440\u043E\u0437\u043C\u0456\u0440\u043D\u0456\u0441\u0442\u044E 500d");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0435\u0440\u043C\u0456\u043D (\u043B\u0435\u043C\u0443)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_13_listener($event) { return ctx.terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_button_click_14_listener() { return ctx.getProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u041E\u0431\u0447\u0438\u0441\u043B\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MainComponent_ng_container_16_Template, 18, 6, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MainComponent_ng_template_18_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u041E\u0431\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F \u0446\u0435\u043D\u0442\u0440\u0443 \u043B\u0435\u043A\u0441\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430 \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u0421\u0435\u0440\u0432\u0456\u0441 \u043E\u0431\u0447\u0438\u0441\u043B\u044E\u0454 \u0446\u0435\u043D\u0442\u0440 \u043B\u0435\u043A\u0441\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u0430 \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432 \u0437 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u0457 \u043C\u043E\u0432\u0438. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0435\u0439\u0440\u043E\u043D\u043D\u0430 \u0432\u0435\u043A\u0442\u043E\u0440\u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043B\u0456\u0432 (\u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C word2vec word embeddings) \u0440\u043E\u0437\u043C\u0456\u0440\u043D\u0456\u0441\u0442\u044E 300d - \u0423\u0431\u0435\u0440\u043A\u043E\u0440\u043F\u0443\u0441. \u041C\u043E\u0434\u0435\u043B\u044C \u043F\u043E\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0430 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u043A\u043E\u0440\u043F\u0443\u0441\u0443 \u0423\u0431\u0435\u0440\u0422\u0435\u043A\u0441\u0442, \u044F\u043A\u0438\u0439 \u043C\u0456\u0441\u0442\u0438\u0442\u044C 67496871 \u0440\u0435\u0447\u0435\u043D\u044C, \u0449\u043E \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C 665 \u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0456\u0432 \u0442\u043E\u043A\u0435\u043D\u0456\u0432. \u0414\u0436\u0435\u0440\u0435\u043B\u0430 \u0440\u0435\u0447\u0435\u043D\u044C: \u0442\u0435\u043A\u0441\u0442\u0438 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u0438\u0445 \u0432\u0438\u0434\u0430\u043D\u044C, \u0432\u0456\u043A\u0456\u043F\u0435\u0434\u0456\u0457, \u0445\u0443\u0434\u043E\u0436\u043D\u044F \u043B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0435\u0440\u043C\u0456\u043D\u0438 (\u043B\u0435\u043C\u0438) \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0431\u0456\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_29_listener($event) { return ctx.terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_button_click_30_listener() { return ctx.getProcess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u041E\u0431\u0447\u0438\u0441\u043B\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, MainComponent_ng_container_32_Template, 17, 4, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, MainComponent_ng_template_34_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u041E\u0431\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044F \u0441\u0435\u043C\u0430\u043D\u0442\u0438\u0447\u043D\u043E\u0457 \u0431\u043B\u0438\u0437\u044C\u043A\u043E\u0441\u0442\u0456 \u043E\u0434\u043D\u043E\u0441\u043B\u0456\u0432\u043D\u0438\u0445 \u0442\u0435\u0440\u043C\u0456\u043D\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u043D\u0435\u0439\u0440\u043E\u043D\u043D\u0430 \u0432\u0435\u043A\u0442\u043E\u0440\u043D\u0430 \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043B\u0456\u0432 (\u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C word2vec word embeddings) \u0440\u043E\u0437\u043C\u0456\u0440\u043D\u0456\u0441\u0442\u044E 500d");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0438\u0439 \u0442\u0435\u0440\u043C\u0456\u043D(\u043B\u0435\u043C\u0443) \u0434\u043B\u044F \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_45_listener($event) { return ctx.firstTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0439 \u0442\u0435\u0440\u043C\u0456\u043D(\u043B\u0435\u043C\u0443) \u0434\u043B\u044F \u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_49_listener($event) { return ctx.secondTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_button_click_50_listener() { return ctx.getWordsSimilarity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\u041E\u0431\u0447\u0438\u0441\u043B\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, MainComponent_div_52_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "primary")("backgroundColor", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.terms)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.terms)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.firstTerm)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.secondTerm)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.firstTerm || !ctx.secondTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.similarityData !== undefined);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], styles: [":root {\n  pading: 20px;\n}\n\napp-main {\n  flex-grow: 1;\n}\n\napp-main mat-tab-group {\n  height: 100%;\n}\n\napp-main .mat-tab-body-wrapper {\n  height: inherit;\n  padding: 30px 20px 20px;\n}\n\napp-main .grid-wrapper {\n  flex-grow: 1;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n}\n\napp-main .grid-wrapper table {\n  width: 100%;\n}\n\napp-main .grid-wrapper table thead tr {\n  background-color: #f5f5f5;\n}\n\napp-main .grid-wrapper table thead tr th {\n  font-size: 16px;\n}\n\napp-main h1 {\n  text-align: center;\n}\n\napp-main h3 {\n  margin-bottom: 10px;\n}\n\napp-main .similarity-result {\n  font-size: 18px;\n}\n\napp-main .similarity-result span + span {\n  font-weight: bold;\n  margin-left: 15px;\n}\n\napp-main form.main-form {\n  display: flex;\n  margin: 20px 0 0;\n}\n\napp-main form.main-form .mat-form-field {\n  flex-grow: 1;\n  margin-right: 50px;\n}\n\napp-main form.main-form button {\n  height: 47px;\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n\napp-main .filter-data {\n  border: none;\n  margin: -15px 0 8px;\n}\n\napp-main form .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 2px 0 6px;\n}\n\napp-main form .mat-form-field-appearance-outline .mat-form-field-infix input.mat-input-element {\n  font-size: 16px;\n  line-height: 32px;\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUU7RUFDSSxZQUFBO0FBRU47O0FBQUU7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUFFTjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBRUo7O0FBREk7RUFDRSxXQUFBO0FBR047O0FBRk07RUFDRSx5QkFBQTtBQUlSOztBQUhRO0VBQ0UsZUFBQTtBQUtWOztBQUhFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLG1CQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0FBS0o7O0FBSkk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBTU47O0FBRkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFITTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUtSOztBQUpNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTVI7O0FBTEU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMRTtFQUNFLGtCQUFBO0FBT0o7O0FBTkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtBQVFOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdFxyXG4gIHBhZGluZzogMjBweFxyXG5cclxuYXBwLW1haW5cclxuICBmbGV4LWdyb3c6IDFcclxuXHJcbiAgbWF0LXRhYi1ncm91cFxyXG4gICAgICBoZWlnaHQ6IDEwMCVcclxuXHJcbiAgLm1hdC10YWItYm9keS13cmFwcGVyXHJcbiAgICAgIGhlaWdodDogaW5oZXJpdFxyXG4gICAgICBwYWRkaW5nOiAzMHB4IDIwcHggMjBweFxyXG5cclxuICAuZ3JpZC13cmFwcGVyXHJcbiAgICBmbGV4LWdyb3c6IDFcclxuICAgIG92ZXJmbG93LXk6IGF1dG9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKVxyXG4gICAgdGFibGVcclxuICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgdGhlYWQgdHJcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1XHJcbiAgICAgICAgdGhcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG5cclxuICBoMVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4gIGgzXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcblxyXG4gIC5zaW1pbGFyaXR5LXJlc3VsdFxyXG4gICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICBzcGFuICsgc3BhblxyXG4gICAgICBmb250LXdlaWdodDogYm9sZFxyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweFxyXG5cclxuXHJcbiAgZm9ybVxyXG4gICAgJi5tYWluLWZvcm1cclxuICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICBtYXJnaW46IDIwcHggMCAwXHJcbiAgICAgIC5tYXQtZm9ybS1maWVsZFxyXG4gICAgICAgIGZsZXgtZ3JvdzogMVxyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweFxyXG4gICAgICBidXR0b25cclxuICAgICAgICBoZWlnaHQ6IDQ3cHhcclxuICAgICAgICBmbGV4LXNocmluazogMFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweFxyXG4gIC5maWx0ZXItZGF0YVxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBtYXJnaW46IC0xNXB4IDAgOHB4XHJcblxyXG4gIGZvcm0gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXhcclxuICAgIHBhZGRpbmc6IDJweCAwIDZweFxyXG4gICAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnRcclxuICAgICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudFxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.sass'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [["color", "primary"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IK \u0456\u043C\u0435\u043D\u0456 \u0412.\u041C.\u0413\u043B\u0443\u0448\u043A\u043E\u0432\u0430 \u041DAH \u0423\u043A\u0440\u0430\u0457\u043D\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: ["footer[_ngcontent-%COMP%]   .mat-toolbar-row[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  height: auto;\n  justify-content: center;\n}\nfooter[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFOztFQUVJLFlBQUE7RUFDQSx1QkFBQTtBQUFOO0FBRUU7RUFDSSxlQUFBO0FBQU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJcclxuICAubWF0LXRvb2xiYXItcm93LFxyXG4gIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93XHJcbiAgICAgIGhlaWdodDogYXV0b1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG5cclxuICBzbWFsbFxyXG4gICAgICBmb250LXNpemU6IDE0cHhcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["role", "banner", 1, "toolbar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["app-root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n}\n\napp-main[_ngcontent-%COMP%] {\n  height: inherit;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm9vdFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgaGVpZ2h0OiBpbmhlcml0XHJcblxyXG5hcHAtbWFpblxyXG4gIGhlaWdodDogaW5oZXJpdFxyXG4gIG92ZXJmbG93OiBoaWRkZW5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");








// Angular material imports:








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map