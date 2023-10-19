import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './components/template/header/views/home/home.component';
import { ProductCrudComponent } from './components/template/header/views/product-crud/product-crud.component';
import { RedDirective } from './components/template/header/directives/red.directive';
import { ForDirective } from './components/template/header/directives/for.directive';
import { ProductProductCreateComponent } from './components/product/product.product-create/product.product-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
