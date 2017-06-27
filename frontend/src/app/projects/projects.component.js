"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var projects_service_1 = require("./projects.service");
var router_1 = require("@angular/router");
var ProjectsComponent = (function () {
    function ProjectsComponent(route, projectsService) {
        this.route = route;
        this.projectsService = projectsService;
        this.mode = 'Observable';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.type = params['type'];
            _this.getProjects();
        });
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjects(this.type)
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    ProjectsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    core_1.Component({
        template: "\n  \t<div class=\"history\">\n  \t<div class=\"demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n      <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n        <div class=\"mdl-layout__header-row\">\n\n          <!-- Title -->\n          <span class=\"mdl-layout-title\"></span>\n\n          <!-- Add spacer, to align navigation to the right -->\n          <div class=\"mdl-layout-spacer\"></div>\n\n          <!-- Navigation with router directives-->\n          <nav class=\"mdl-navigation\">\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/history/events']\">Events</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/history/halloffame']\">Winners</a>\n          </nav>\n        </div>\n      </header>\n\n      <main class=\"mdl-layout__content\">\n        <h1 class=\"header-text\">8 years of Gnarathon</h1>\n      </main>\n    </div>\n    </div>\n\n    <div class=\"container\">\n    <div class=\"container\">\n    <ul class=\"demo-list-icon mdl-list\">\n      <li class=\"mdl-list__item\" *ngFor=\"let post of posts\">\n        <a class=\"post-button\" [routerLink]=\"['/post', post.slug]\">\n          <div>\n              <h3>{{post.title}}</h3>\n          </div>\n        </a>\n    </ul>\n    <p class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n  </div>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, projects_service_1.ProjectsService])
], ProjectsComponent);
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map