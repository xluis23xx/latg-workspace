import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LatgSideMenuComponent, TitleColor } from 'latg-side-menu';

@Component({
  selector: 'app-root',
  imports: [LatgSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'latg-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
