import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/MainProductsList/app.component';
import { BuyerUser } from './BuyerUser';
import { ProductDetails } from './components/ProductDetails/productDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetails
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: '', component: AppComponent },
        { path: 'products', component: ProductDetails },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    buyers: [BuyerUser] 
}
