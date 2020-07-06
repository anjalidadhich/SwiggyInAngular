import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './order/order.component';
import { OffersComponent } from './offers/offers.component';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { FaqComponent } from './faq/faq.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HelpWithOrderComponent } from './help-with-order/help-with-order.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RecentOrderComponent } from './recent-order/recent-order.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './service/product.service';
import { ProfileComponent } from './profile/profile.component';
import { BillingService } from './service/billing.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OrderComponent,
    OffersComponent,
    TermsComponent,
    SearchComponent,
    FaqComponent,
    FavouritesComponent,
    HelpWithOrderComponent,
    CartComponent,
    CheckoutComponent,
    RecentOrderComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService,BillingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
