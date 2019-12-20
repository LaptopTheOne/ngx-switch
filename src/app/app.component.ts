import { Component } from '@angular/core';
import { SwitchTheme } from 'ngx-switch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-switch';

  customTheme: SwitchTheme = new SwitchTheme();

  constructor() {
     console.log(this.customTheme);
     this.customTheme.unchecked.switchBgColor = 'red';
  }
}
