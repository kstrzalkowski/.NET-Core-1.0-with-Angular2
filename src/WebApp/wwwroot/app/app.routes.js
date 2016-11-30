"use strict";
var index_1 = require('./login/index');
var index_2 = require('./dashboard/index');
var index_3 = require('./login/index');
exports.routes = index_1.LoginRoutes.concat(index_2.DashboardRoutes, [
    { path: '**', component: index_3.LoginComponent }
]);
//# sourceMappingURL=app.routes.js.map