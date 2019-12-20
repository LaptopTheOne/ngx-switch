import { NgxSwitchTheme } from './ngx-switch-models';
import { CONST } from './ngx-switch-constants';
import { Utils } from './ngx-switch-utils';

export class NgxSwitchConfig {

  private sliderLeftStartOffset: string;
  private sliderBottomStartOffset: string;
  private sliderTranslateOffset: string;
  private sliderStartOffsetNumValue: number;
  private sliderTranslateOffsetNumValue: number;
  private utils: Utils = new Utils();

  constructor(private theme: NgxSwitchTheme) {
    console.log(this.theme.common.bgHeight, this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 4), this.theme.common.switchHeight);
    this.sliderLeftStartOffset = this.theme.common.isVertical ?
    this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 2) : this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 2);
    this.sliderBottomStartOffset = this.theme.common.isVertical ?
    this.utils.subCSSUnits(
      this.theme.common.bgHeight,
      this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 2),
      this.theme.common.switchHeight
      )
    : this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 2);
    this.sliderTranslateOffset = this.theme.common.isVertical ? this.utils.subCSSUnits(
      this.theme.common.bgHeight,
      this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 4),
      this.theme.common.switchHeight
      ) : this.utils.subCSSUnits(
      this.theme.common.bgWidth,
      this.utils.multiplyCSSUnit(this.theme.common.bgBorderWidth, 4),
      this.theme.common.switchWidth
      );
  }

  getSliderLeftStartOffset(): string {
    return this.sliderLeftStartOffset;
  }

  getSliderBottomStartOffset(): string {
    return this.sliderBottomStartOffset;
  }

  getSliderTranslateOffset(): string {
    console.log(this.sliderTranslateOffset);
    return this.sliderTranslateOffset;
  }

}
