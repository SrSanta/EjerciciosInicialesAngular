import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavBarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ejerciciosIniciales';
}
