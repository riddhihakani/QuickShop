import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
// import { FlickityModule } from 'ngx-flickity';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule} from 'ngx-toastr';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { AdminModule } from './admin/admin.module';
import { MaterialModule } from './material/material.module';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthInterceptor } from './auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SingleProductComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouComponent,
    ProfileComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AdminModule,
    MaterialModule,
    MatBadgeModule,
    MatIconModule,
    ToastrModule.forRoot()
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatBadgeModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
