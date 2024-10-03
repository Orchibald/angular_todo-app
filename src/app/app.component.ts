import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

const imports = [
  RouterOutlet,
  RouterModule
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
