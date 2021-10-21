import { Component } from '@angular/core';
import { Basket } from './models/Basket';
import { Produktas } from './models/Produktas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public produktas: Produktas;
  public krepselis: Basket;

  public constructor() {
    this.produktas = new Produktas("Kamuolys", 4, 20, 10);
    this.krepselis = new Basket(0);
  }
}
