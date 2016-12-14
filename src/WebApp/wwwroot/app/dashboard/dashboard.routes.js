"use strict";
var index_1 = require('./home/index');
var index_2 = require('./blank-page/index');
var index_3 = require('./bs-component/index');
var index_4 = require('./upload/index');
var index_5 = require('./index');
exports.DashboardRoutes = [
    {
        path: 'dashboard',
        component: index_5.DashboardComponent,
        children: index_1.HomeRoutes.concat(index_3.BSComponentRoutes, index_2.BlankPageRoutes, index_4.UploadRoutes)
    }
];
//# sourceMappingURL=dashboard.routes.js.map