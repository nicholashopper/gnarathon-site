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
var blog_service_1 = require("./blog.service");
var router_1 = require("@angular/router");
var BlogListComponent = (function () {
    function BlogListComponent(route, blogService) {
        this.route = route;
        this.blogService = blogService;
        this.mode = 'Observable';
    }
    BlogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            _this.getPosts();
        });
    };
    BlogListComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogService.getPosts(this.page)
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    BlogListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return BlogListComponent;
}());
BlogListComponent = __decorate([
    core_1.Component({
        selector: 'blog-list',
        providers: [blog_service_1.BlogService],
        template: "\n\n\n  <div class=\"updates\">\n  <div class=\"demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n      <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n        <div class=\"mdl-layout__header-row\">\n\n          <!-- Title -->\n          <span class=\"mdl-layout-title\"></span>\n\n          <!-- Add spacer, to align navigation to the right -->\n          <div class=\"mdl-layout-spacer\"></div>\n\n          <!-- Navigation with router directives-->\n          <nav class=\"mdl-navigation\">\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/updates/wlc']\">Waco Longboard Cult</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/updates/gnarathon']\">Gnarathon Events</a>\n          </nav>\n        </div>\n      </header>\n\n      <main class=\"mdl-layout__content\">\n        <h1 class=\"header-text\">Whats in the works?</h1>\n      </main>\n    </div>\n    </div>\n\n  <div class=\"container\">\n    <ul class=\"demo-list-icon mdl-list\">\n      <li class=\"mdl-list__item\" *ngFor=\"let post of posts\">\n        <a class=\"post-button\" [routerLink]=\"['/post', post.slug]\">\n          <div>\n              <h3>{{post.title}}</h3>\n              <h5>{{post.posted |  date:'MM/dd/yyyy'}}</h5>\n          </div>\n        </a>\n    </ul>\n    <p class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n  </div>"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, blog_service_1.BlogService])
], BlogListComponent);
exports.BlogListComponent = BlogListComponent;
//# sourceMappingURL=blog-list.component.js.map