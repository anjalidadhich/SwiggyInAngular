import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
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
import { ProductComponent } from './product/product.component';
// const routes: Routes = [];
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  // {
  //   path: 'details/:id',
  //   component: DetailsComponent
  // },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'FAQ',
    component: FaqComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent
  },
  {
    path: 'home',
    component: HomeComponent
   }
   //,
  // {
  //   path: 'cart/:id',
  //   component: CartComponent
  // }
  ,
  {
    path: 'cart',
    component: CartComponent
  },
  // {
  //   path: 'checkout/:id',
  //   component: CheckoutComponent
  // },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'recentOrder',
    component: RecentOrderComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
  ,
  {
    path: 'HelpWithOrder',
    component: HelpWithOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
