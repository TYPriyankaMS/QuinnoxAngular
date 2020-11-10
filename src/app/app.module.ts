import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributeDirective } from './attribute.directive';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterComponent } from './router/router.component';
import { ActivatedRouterComponent } from './activated-router/activated-router.component';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import { HttpClientModule} from '@angular/common/http';

//step 2
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'router', component: RouterComponent },
  { path: 'activated-router/:id', component: ActivatedRouterComponent },
  { path: 'http-requests', component: HttpRequestsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AttributeDirective,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    RouterComponent,
    ActivatedRouterComponent,
    HttpRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // step 1 and step 3 (relate routes with router module by forRoot method)
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [LoginComponent]
})
export class AppModule { }
