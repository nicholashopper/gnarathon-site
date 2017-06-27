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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var post_service_1 = require("./post.service");
var PostComponent = (function () {
    function PostComponent(route, postService, sanitizer) {
        this.route = route;
        this.postService = postService;
        this.sanitizer = sanitizer;
        this.mode = 'Observable';
    }
    PostComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getPosts(this.slug)
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.slug = params['slug'];
        });
        this.getPosts();
    };
    PostComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostComponent.prototype.getHtml = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'post-details',
        providers: [post_service_1.PostService],
        template: "\n    <div class=\"container\">\n      <div class=\"page\" *ngFor=\"let post of posts\">\n        <h1>{{post.title}}</h1>\n        <h5>Updated: {{post.posted |  date:'MM/dd/yyyy'}}</h5>\n        <div [innerHTML]=\"getHtml(post.body)\"></div>\n      </div>\n      <p *ngIf=\"posts?.length < 1\"><br>Whoops! post/{{slug}} does not exist.</p>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, post_service_1.PostService, platform_browser_1.DomSanitizer])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map