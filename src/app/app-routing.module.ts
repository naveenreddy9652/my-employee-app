import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { MarksComponent } from './marks/marks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VahiclesComponent } from './vahicles/vahicles.component';
import { EmailsComponent } from './emails/emails.component';
import { ActivitiesComponent } from './activities/activities.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AuthenticationGuard } from './authentication.guard';
import { NotifyGuard } from './notify.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'structuralDirectuves', component:StructuralDirectivesComponent},
  {path:'marks', component:MarksComponent},
  {path:'pipes', component:PipesComponent},
  {path: 'event', component:EventComponent},
  {path:'products', component:ProductsComponent},
  {path:'userService',component:UsersComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'flipkart',component:FlipkartComponent},
  {path:'vahicles',component:VahiclesComponent},
  {path:'emails',component:EmailsComponent},
  {path: 'activity', component:ActivitiesComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'userInfo', component:UserInfoComponent},
  {path: 'create-user', canDeactivate:[NotifyGuard], component:CreateUserComponent},
  {path: 'user-form', component:UserFormComponent},
  {path: 'student-form', component:StudentFormComponent},

  ]},
  
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
