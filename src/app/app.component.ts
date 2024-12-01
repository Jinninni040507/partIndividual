import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchNursesByNameComponent } from './search-nurses-by-name/search-nurses-by-name.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchNursesByNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'partIndividual';
}
