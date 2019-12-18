export interface NgxSwitchTheme {
  common?: {
    switchRadius?: string;
    switchWidth?: string;
    switchHeight?: string;
    bgRadius?: string;
    bgWidth?: string;
    bgHeight?: string;
    animationSpeed?: string;
    bgBorderWidth?: string;
    switchBorderWidth?: string;
  };
  checked?: {
    bgColor?: string;
    bgBorderColor?: string;
    bgBorderStyle?: string;
    bgBorderRadius?: string;
    switchBgColor?: string;
    switchBorderStyle?: string;
    switchBorderColor?: string;
    switchBorderRadius?: string;
    switchBoxShadow?: string;
  };
  unchecked?: {
    bgColor?: string;
    bgBorderColor?: string;
    bgBorderStyle?: string;
    bgBorderRadius?: string;
    switchBgColor?: string;
    switchBorderStyle?: string;
    switchBorderColor?: string;
    switchBorderRadius?: string;
    switchBoxShadow?: string;
  };
}

export const defaultNgxSwitchTheme: NgxSwitchTheme = {
  common: {
    switchRadius: '34px',
    switchWidth: '1.75rem',
    switchHeight: '1.75rem',
    switchBorderWidth: '0.5px',
    bgRadius: '50%',
    bgWidth: '3.5rem',
    bgHeight: '2rem',
    bgBorderWidth: '1px',
    animationSpeed: '.4s',
  },
  checked: {
    bgColor: '#4dc7f0',
    bgBorderRadius: '34px',
    bgBorderColor: '#14568d',
    bgBorderStyle: 'solid',
    switchBgColor: 'white',
    switchBorderColor: 'rgba(0, 0, 0, 0.1)',
    switchBorderRadius: '50%',
    switchBoxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 1px 0 rgba(0, 0, 0, 0.05)',
  },
  unchecked: {
    bgColor: '#b9b9b9',
    bgBorderRadius: '34px',
    bgBorderColor: '#676767',
    bgBorderStyle: 'solid',
    switchBgColor: 'white',
    switchBorderColor: 'rgba(0, 0, 0, 0.1)',
    switchBorderRadius: '50%',
    switchBoxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 1px 0 rgba(0, 0, 0, 0.05)'
  }
};
