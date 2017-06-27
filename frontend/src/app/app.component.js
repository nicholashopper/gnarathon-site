"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    // App Component class
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n      <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n        <div class=\"mdl-layout__header-row\">\n\n          <!-- Title -->\n          <a class=\"mdl-layout-title\" [routerLink]=\"['/']\">\n            <img src=\"/assets/site-logo.png\" style=\"width:250px;height:50px;\"/>\n          </a>\n\n          <!-- Add spacer, to align navigation to the right -->\n          <div class=\"mdl-layout-spacer\"></div>\n\n          <!-- Navigation with router directives-->\n          <nav class=\"mdl-navigation\">\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/']\">Home</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/updates']\">Updates</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/history']\">History</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/about']\">About</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/contact']\">Contact</a>\n          </nav>\n        </div>\n\n      </header>\n    </div>\n\n    <!-- Router Outlet -->\n    <router-outlet></router-outlet>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map