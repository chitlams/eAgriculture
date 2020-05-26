"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var auth_gaurd_1 = require("./_gaurds/auth.gaurd");
exports.appRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    {
        path: "",
        runGuardsAndResolvers: "always",
        canActivate: [auth_gaurd_1.AuthGaurd],
        children: [
        //{
        //  path: "members", component: MemberListComponent,
        //  resolve: { users: MemberListResolver }
        //},
        //{
        //  path: "members/:id", component: MemberDetailComponent,
        //  resolve: { user: MemberDetailResolver }
        //},
        //{ path: "messages", component: MessagesComponent },
        //{ path: "lists", component: ListsComponent }
        ]
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];
//# sourceMappingURL=routs.js.map