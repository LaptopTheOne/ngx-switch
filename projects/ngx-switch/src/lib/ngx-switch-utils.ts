import { CONST } from './ngx-switch-constants';

export class Utils {

  private pxRemRatio: number;

  constructor(pixelRemRatio: number = CONST.REM_TO_PX_RATIO) {
    this.pxRemRatio = pixelRemRatio;
  }

  public convertRemToPx(rem: number) { return rem * this.pxRemRatio; }

  public convertPxToRem(px: number) { return px / this.pxRemRatio; }

  public getCSSUnitType(cssValue: string): string {
    if (cssValue.includes(CONST.PX_STR)) {
      return CONST.PX_STR;
    } else if (cssValue.includes(CONST.REM_STR)) {
      return CONST.REM_STR;
    } else if (cssValue.includes(CONST.EM_STR)) {
      return CONST.EM_STR;
    }
  }

  public getCSSUnitNum(cssValue: string): number {
    switch (this.getCSSUnitType(cssValue)) {
      case CONST.PX_STR: return parseInt(cssValue.replace(CONST.PX_STR, ''), 10); break;
      case CONST.REM_STR: return parseFloat(cssValue.replace(CONST.REM_STR, '')); break;
      case CONST.EM_STR: return parseFloat(cssValue.replace(CONST.EM_STR, '')); break;
    }
  }

  public multiplyCSSUnit(cssValue: string, factor: number): string {
    return factor * this.getCSSUnitNum(cssValue) + this.getCSSUnitType(cssValue);
  }

  public incrementCSSUnit(cssValue: string, factor: number): string {
    const tmpValue = factor + this.getCSSUnitNum(cssValue);
    return tmpValue + this.getCSSUnitType(cssValue);
  }

  public decrementCSSUnit(cssValue: string, factor: number): string {
    const tmpValue = this.getCSSUnitNum(cssValue) - factor;
    return tmpValue + this.getCSSUnitType(cssValue);
  }

  private convertCSSUnitToPX(cssValue: string): number {
    switch (this.getCSSUnitType(cssValue)) {
      case CONST.PX_STR: return parseInt(cssValue.replace(CONST.PX_STR, ''), 10); break;
      case CONST.REM_STR: return this.pxRemRatio * parseFloat(cssValue.replace(CONST.REM_STR, '')); break;
    }
  }

  // result is always in PX
  public addCSSUnits(...cssValues): string {
    return cssValues.reduce((acc, cur) => this.convertCSSUnitToPX(acc) + this.convertCSSUnitToPX(cur) + CONST.PX_STR);
  }

  // result is always in PX
  public subCSSUnits(...cssValues): string {
    return cssValues.reduce((acc, cur) => this.convertCSSUnitToPX(acc) - this.convertCSSUnitToPX(cur) + CONST.PX_STR);
  }
}
