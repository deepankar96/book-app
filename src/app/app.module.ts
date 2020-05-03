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
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';





import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MasterHomePageComponent } from './master-home-page/master-home-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { ContributorLoginComponent } from './contributor-login/contributor-login.component';
import { ContributorHomepageComponent } from './contributor-homepage/contributor-homepage.component';
import { BookDisplayPageComponent } from './book-display-page/book-display-page.component';
import { BookContentEditPageComponent } from './book-content-edit-page/book-content-edit-page.component';
import { BookContentDisplayPageComponent } from './book-content-display-page/book-content-display-page.component';
import { UserSignupPageComponent } from './user-signup-page/user-signup-page.component';
import { SuperAdminPageComponent } from './super-admin-page/super-admin-page.component';
import { SuperAdminLoginPageComponent } from './super-admin-login-page/super-admin-login-page.component';
import { BookDisplaySuperAdminComponent } from './book-display-super-admin/book-display-super-admin.component';
import { UserReadingHistoryPageComponent } from './user-reading-history-page/user-reading-history-page.component';
import { SuperAdminUserHistoryPageComponent } from './super-admin-user-history-page/super-admin-user-history-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SuperAdminLanguagesComponent } from './super-admin-languages/super-admin-languages.component';
import { AddGenreSuperadminComponent } from './add-genre-superadmin/add-genre-superadmin.component';
@NgModule({
  declarations: [
    AppComponent,
    MasterHomePageComponent,
    UserLoginPageComponent,
    ContributorLoginComponent,
    ContributorHomepageComponent,
    BookDisplayPageComponent,
    BookContentEditPageComponent,
    BookContentDisplayPageComponent,
    UserSignupPageComponent,
    SuperAdminPageComponent,
    SuperAdminLoginPageComponent,
    BookDisplaySuperAdminComponent,
    UserReadingHistoryPageComponent,
    SuperAdminUserHistoryPageComponent,
    LandingPageComponent,
    SuperAdminLanguagesComponent,
    AddGenreSuperadminComponent,
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
    MatTabsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
