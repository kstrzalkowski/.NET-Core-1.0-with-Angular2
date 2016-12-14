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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var home_module_1 = require('./home/home.module');
var blankPage_module_1 = require('./blank-page/blankPage.module');
var bsComponent_module_1 = require('./bs-component/bsComponent.module');
var upload_module_1 = require('./upload/upload.module');
var dashboard_component_1 = require('./dashboard.component');
var index_1 = require('../shared/index');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                home_module_1.HomeModule,
                bsComponent_module_1.BSComponentModule,
                blankPage_module_1.BlankPageModule,
                upload_module_1.UploadModule,
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map