export interface NgxSwitchTheme {
  common?: {
    switchRadius?: string;
    switchWidth?: string;
    switchHeight?: string;
    bgRadius?: string;
    bgWidth?: string;
    bgHeight?: string;
    animationSpeed?: string;
  };
  checked?: {
    bgColor?: string;
    bgBorderWidth?: string;
    bgBorderColor?: string;
    switchColor?: string;
    switchBorderColor?: string;
    switchBorderWidth?: string;
  };
  unchecked?: {
    bgColor?: string;
    bgBorderWidth?: string;
    bgBorderColor?: string;
    switchColor?: string;
    switchBorderColor?: string;
    switchBorderWidth?: string;
  };
}

export const defaultNgxSwitchTheme: NgxSwitchTheme = {
  common: {
    switchRadius: '34px',
    switchWidth: '1.75rem',
    switchHeight: '1.75rem',
    bgRadius: '50%',
    bgWidth: '3.5rem',
    bgHeight: '2rem',
    animationSpeed: '.4s'
  },
  checked: {
    bgColor: '',
    bgBorderWidth: '',
    bgBorderColor: '',
    switchColor: '',
    switchBorderColor: '',
    switchBorderWidth: ''
  },
  unchecked: {
    bgColor: '',
    bgBorderWidth: '',
    bgBorderColor: '',
    switchColor: '',
    switchBorderColor: '',
    switchBorderWidth: ''
  }
};
