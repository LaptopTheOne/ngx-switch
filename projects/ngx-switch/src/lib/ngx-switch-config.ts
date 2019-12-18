import { NgxSwitchTheme } from './ngx-switch-models';
import { CONST } from './ngx-switch-constants';

export class NgxSwitchConfig {

  private sliderStartOffset: string;
  private sliderTranslateOffset: string;
  private sliderStartOffsetNumValue: number;
  private sliderTranslateOffsetNumValue: number;

  constructor(private theme: NgxSwitchTheme) {
    this.sliderStartOffset = this.calculateSliderStartPosition();
    // this.sliderTranslateOffset = this.calculateSliderTranslateOffset();
    // console.log('ttt', this.sliderTranslateOffset);
  }

  private calculateSliderStartPosition() {
    console.log('calculateSliderStartPosition');
    if(this.theme.common.bgBorderWidth.includes(CONST.PX_STR)) {
      this.sliderStartOffsetNumValue = 2 * parseInt(this.theme.common.bgBorderWidth.replace(CONST.PX_STR, ''));
      return this.sliderStartOffsetNumValue + CONST.PX_STR
    } else if(this.theme.common.bgBorderWidth.includes(CONST.REM_STR)) {
      this.sliderStartOffsetNumValue = 2 * parseFloat(this.theme.common.bgBorderWidth.replace(CONST.REM_STR, ''));
      return this.sliderStartOffsetNumValue + CONST.REM_STR
    } else if(this.theme.common.bgBorderWidth.includes(CONST.EM_STR)) {
      this.sliderStartOffsetNumValue = 2 * parseFloat(this.theme.common.bgBorderWidth.replace(CONST.EM_STR, ''));
      return this.sliderStartOffsetNumValue + CONST.EM_STR
    }
  }

  getSliderTranslateOffset(): string {
    return this.sliderStartOffset;
  }

  // private calculateSliderTranslateOffset() {
  //   console.log('calculateSliderStartPosition');
  //   if (this.theme.common.bgWidth.includes(CONST.PX_STR)) {
  //     // this.sliderTranslateOffsetNumValue = parseInt(this.theme.common.bgWidth.replace(PX_STR, '')) - 2 * this.sliderStartOffsetNumValue;
  //     this.sliderTranslateOffsetNumValue = parseInt(this.theme.common.bgWidth.replace(CONST.PX_STR, ''));
  //     return this.sliderTranslateOffsetNumValue + CONST.PX_STR
  //   } else if (this.theme.common.bgWidth.includes(CONST.REM_STR)) {
  //     // this.sliderTranslateOffsetNumValue = parseInt(this.theme.common.bgWidth.replace(REM_STR, '')) - 2 * this.sliderStartOffsetNumValue;
  //     this.sliderTranslateOffsetNumValue = parseInt(this.theme.common.bgWidth.replace(CONST.REM_STR, ''));
  //     return this.sliderTranslateOffsetNumValue + CONST.REM_STR
  //   } else if (this.theme.common.bgWidth.includes(CONST.EM_STR)) { 
  //     // this.sliderTranslateOffsetNumValue = parseInt(this.theme.common.bgWidth.replace(EM_STR, '')) - 2 * this.sliderStartOffsetNumValue;
  //     this.sliderTranslateOffsetNumValue = parseInt(this.theme.common.bgWidth.replace(CONST.EM_STR, ''));
  //     return this.sliderTranslateOffsetNumValue + CONST.EM_STR
  //   }
  // }
}