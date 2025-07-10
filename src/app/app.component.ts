import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductComponent } from "./produts/product.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular_ConsumindoApi';
}

