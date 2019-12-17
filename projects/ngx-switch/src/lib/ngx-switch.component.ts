import { Component, OnInit, Input } from '@angular/core';
import { defaultNgxSwitchTheme, NgxSwitchTheme } from './ngx-switch-models';

@Component({
  selector: 'lib-ngx-switch',
  templateUrl: './ngx-switch.component.html',
  styleUrls: ['./ngx-switch.component.css']
})
export class NgxSwitchComponent implements OnInit {

  @Input() theme: NgxSwitchTheme = defaultNgxSwitchTheme;
  checkboxStatus: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngxHandleClick($event) {
    this.checkboxStatus = $event.srcElement.checked;
    console.log(this.checkboxStatus);
  }

}
