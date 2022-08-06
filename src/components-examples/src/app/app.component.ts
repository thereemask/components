import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'components-examples';

  clickMe(evt: Event) {
    console.log('Click Me!!', evt);
  }
}
