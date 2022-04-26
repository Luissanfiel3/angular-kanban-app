import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styles: [
    `:host {
        width: 100vw;
      }`
  ],

})
export class AppComponent {
  title = 'angular-kanban-app';
}
