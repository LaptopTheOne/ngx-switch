import { NgxSwitchTheme } from './ngx-switch-models';
import { CONST } from './ngx-switch-constants';
import { Utils } from './ngx-switch-utils';

export class NgxSwitchConfig {

  private sliderStartOffset: string;
  private sliderTranslateOffset: string;
  private sliderStartOffsetNumValue: number;
  private sliderTranslateOffsetNumValue: number;
  private utils: Utils = new Utils();

  constructor(private theme: NgxSwitchTheme) {
    this.sliderStartOffset = this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 2);
    this.sliderTranslateOffset = this.utils.subCSSUnits(
      this.theme.common.bgWidth,
      this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 4),
      this.theme.common.switchWidth
      );
  }

  getSliderStartOffset(): string {
    return this.sliderStartOffset;
  }

  getSliderTranslateOffset(): string {
    return this.sliderTranslateOffset;
  }

}
