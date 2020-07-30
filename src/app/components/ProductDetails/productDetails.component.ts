import { Component } from '@angular/core';
import { Product } from '../MainProductsList/Product';

@Component({
    templateUrl: './productDetails.component.html'
})
export class ProductDetails {
    product: Product = new Product("Demo Hardcoded Product")
}