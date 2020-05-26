import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from "./messages/messages.component";
import { AuthGaurd } from "./_gaurds/auth.gaurd";


export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGaurd],
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
