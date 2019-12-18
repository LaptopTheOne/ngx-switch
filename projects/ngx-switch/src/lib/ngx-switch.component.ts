import { Component, OnInit, Input } from '@angular/core';
import { defaultNgxSwitchTheme, NgxSwitchTheme } from './ngx-switch-models';
import { NgxSwitchConfig } from './ngx-switch-config';

@Component({
  selector: 'lib-ngx-switch',
  templateUrl: './ngx-switch.component.html',
  styleUrls: ['./ngx-switch.component.css']
})
export class NgxSwitchComponent implements OnInit {

  @Input() theme: NgxSwitchTheme = defaultNgxSwitchTheme;
  checkboxStatus: boolean;
  config: NgxSwitchConfig;
  sliderStartOffset: string;
  sliderTranslateOffset: string;

  constructor() { }

  ngOnInit() {
    this.config = new NgxSwitchConfig(this.theme);
    this.sliderStartOffset = this.config.getSliderStartOffset();
    this.sliderTranslateOffset = this.config.getSliderTranslateOffset();
  }

  ngxHandleClick($event) {
    this.checkboxStatus = $event.srcElement.checked;
    console.log(this.checkboxStatus);
  }

}
