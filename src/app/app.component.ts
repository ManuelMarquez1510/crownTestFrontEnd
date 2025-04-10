import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogsComponent } from './components/catalogs/catalogs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CatalogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crownTestFrontEnd';
}
