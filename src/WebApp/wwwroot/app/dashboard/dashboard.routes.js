"use strict";
var index_1 = require('./home/index');
var index_2 = require('./blank-page/index');
var index_3 = require('./bs-component/index');
var index_4 = require('./index');
exports.DashboardRoutes = [
    {
        path: 'dashboard',
        component: index_4.DashboardComponent,
        children: index_1.HomeRoutes.concat(index_3.BSComponentRoutes, index_2.BlankPageRoutes)
    }
];
//# sourceMappingURL=dashboard.routes.js.map