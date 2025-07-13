import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports:
  [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    CommonModule
  ],

  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  states =
    [
      { label: 'Gerenciamento de chaves', route: 'product' },
      { label: 'Download PDV', route: 'pdv' }
    ]

  selectedState: string = 'state';
  constructor(private router: Router) {}

  onStateChange(label: string): void {
    const item = this.states.find(state => state.label === label);
    if (item) {
      this.router.navigate([item.route]);
    }
  }
}



