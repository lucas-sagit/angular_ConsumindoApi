import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pdv',
  imports: [RouterModule, MatIconModule],
  standalone: true,
  templateUrl: './pdv.html',
  styleUrl: './pdv.scss'
})
export class Pdv {

  constructor(private location: Location) {}

    goBack(): void {
      this.location.back();
    }
  }

