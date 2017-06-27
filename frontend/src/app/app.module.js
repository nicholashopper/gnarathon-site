"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// Declarations
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var home_component_1 = require("./home.component");
var _404_component_1 = require("./404.component");
var post_routing_module_1 = require("./post/post-routing.module");
var post_component_1 = require("./post/post.component");
var post_service_1 = require("./post/post.service");
var blog_service_1 = require("./blog/blog.service");
var blog_routing_module_1 = require("./blog/blog-routing.module");
var blog_list_component_1 = require("./blog/blog-list.component");
var projects_component_1 = require("./projects/projects.component");
var projects_service_1 = require("./projects/projects.service");
var projects_routing_module_1 = require("./projects/projects-routing.module");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
// Decorator
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            post_routing_module_1.PostRoutingModule,
            blog_routing_module_1.BlogRoutingModule,
            projects_routing_module_1.ProjectsRoutingModule,
            app_routes_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            blog_list_component_1.BlogListComponent,
            about_component_1.AboutComponent,
            projects_component_1.ProjectsComponent,
            contact_component_1.ContactComponent,
            home_component_1.HomeComponent,
            _404_component_1.ErrorComponent,
            post_component_1.PostComponent
        ],
        providers: [
            blog_service_1.BlogService,
            post_service_1.PostService,
            projects_service_1.ProjectsService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map