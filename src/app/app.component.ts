import { Component } from '@angular/core';
import { Produktas } from './models/produktas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public produktas: Produktas;

  public constructor() {
    this.produktas = new Produktas("Kamuolys", 2, 20, 10);
  }
}
