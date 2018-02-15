import { Component } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.component.scss', './styles/app.component.' + environment.site + '.scss'],
})
export class AppComponent {
  title = 'app';
}
