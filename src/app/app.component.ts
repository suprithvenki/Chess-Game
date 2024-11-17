import { Component } from '@angular/core';
import { NavMenuComponent } from './modules/nav-menu/nav-menu.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected the styleUrls key (was styleUrl)
})
export class AppComponent {
  title = 'Chess-game';
}
