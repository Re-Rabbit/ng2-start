import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_DIRECTIVES, RouteDefinition } from 'angular2/router'
import { UserListComponent } from './user-list.component.ts'
import { UserDetailComponent } from './user-detail.component.ts'
import { UserService } from './user.service.ts'

const component = {
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [UserService],
    template: `
<h1>Hello World</h1>
<router-outlet></router-outlet>
`
}

const router: RouteDefinition[] = [
    { path: '/users', name: 'UserList', component: UserListComponent, useAsDefault: true },
    { path: '/users/:id', name: 'UserDetail', component: UserDetailComponent }
]

@Component(component)
@RouteConfig(router)
export class AppComponent { }
