import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
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
import { PricePipe } from './price.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { VahicleDetailsComponent } from './vahicle-details/vahicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { RatingComponent } from './rating/rating.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { TextAreaParentComponent } from './text-area-parent/text-area-parent.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StructuralDirectivesComponent,
    PageNotFoundComponent,
    MarksComponent,
    PipesComponent,
    EventComponent,
    ProductsComponent,
    UsersComponent,
    AccountsComponent,
    FlipkartComponent,
    VahiclesComponent,
    EmailsComponent,
    ActivitiesComponent,
    GalleryComponent,
    UserInfoComponent,
    CreateUserComponent,
    UserFormComponent,
    StudentFormComponent,
    PricePipe,
    UserDetailsComponent,
    VahicleDetailsComponent,
    AccountDetailsComponent,
    ParentComponent,
    ChildComponent,
    ItemsComponent,
    CartComponent,
    NavComponent,
    RatingComponent,
    RatingParentComponent,
    TextAreaComponent,
    TextAreaParentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
