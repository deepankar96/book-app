import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';






import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CollegeLoginPageComponent } from './college-login-page/college-login-page.component';
import {collegeAuthInterceptor} from './college-interceptor';
import { AddCollegeComponent } from './add-college/add-college.component';
import { DepartmentLoginPageComponent } from './department-login-page/department-login-page.component';
import { DepartmentHomepageComponent } from './department-homepage/department-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    HomepageComponent,
    CollegeLoginPageComponent,
    AddCollegeComponent,
    DepartmentLoginPageComponent,
    DepartmentHomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
  ],
  providers: [   {provide:HTTP_INTERCEPTORS,useClass:collegeAuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
