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



import { MasterHomePageComponent } from './master-home-page/master-home-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { ContributorLoginComponent } from './contributor-login/contributor-login.component';
import { ContributorHomepageComponent } from './contributor-homepage/contributor-homepage.component';
import { BookDisplayPageComponent } from './book-display-page/book-display-page.component';
import { BookContentEditPageComponent } from './book-content-edit-page/book-content-edit-page.component';
import { BookContentDisplayPageComponent } from './book-content-display-page/book-content-display-page.component';
import { UserSignupPageComponent } from './user-signup-page/user-signup-page.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
