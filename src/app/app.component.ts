import { Component } from '@angular/core';
import { SwitchTheme } from 'ngx-switch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-switch';

  customThemeDefault: SwitchTheme = new SwitchTheme();
  customThemeVertical: SwitchTheme = new SwitchTheme();
  customThemeHCustomColors: SwitchTheme = new SwitchTheme();
  customThemeVCustomColors: SwitchTheme = new SwitchTheme();
  customThemeHCustomRadius: SwitchTheme = new SwitchTheme();
  customThemeVCustomRadius: SwitchTheme = new SwitchTheme();

  constructor() {
    // console.log(this.customThemeDefault);
    this.customThemeVertical.common.isVertical = true;
    this.customThemeVertical.common.bgWidth = '2rem';
    this.customThemeVertical.common.bgHeight = '3.5rem';

    this.customThemeHCustomColors.checked.bgBorderColor = 'blue';
    // this.customThemeHCustomColors.checked.bgBorderRadius = '1px';
    this.customThemeHCustomColors.checked.bgColor = 'lightblue';
    this.customThemeHCustomColors.unchecked.bgColor = 'cyan';
    this.customThemeHCustomColors.checked.switchBgColor = 'red';
    this.customThemeHCustomColors.unchecked.switchBgColor = 'yellow';

    this.customThemeHCustomRadius.unchecked.bgBorderRadius = '2px';
    this.customThemeHCustomRadius.unchecked.switchBorderRadius = '2px';
    this.customThemeHCustomRadius.checked.bgBorderRadius = '2px';
    this.customThemeHCustomRadius.checked.switchBorderRadius = '2px';

  }
}
