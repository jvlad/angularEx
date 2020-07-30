import { Component } from '@angular/core';
import { Product } from './Product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'Hello F2019';
    nameFieldTitle
    nameFieldValue
    passwordFieldTitle
    products: Product[] = [
        new Product("Car"),
        new Product("Truck"),
        new Product("Bike"),
    ]

    resourcesDescription: String = "Those are amazing links, walk through them NOW!!!"

    onGoToNextScreen = () => {
        console.log("button clicked")
    }
}