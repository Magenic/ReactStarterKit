import {colors} from 'providers/ThemeProvider/configs';

interface PaperConfig {
  background: {
    color: string;
  };
  border: {
    color: string;
    radius: string;
    width: string;
    style: string;
  };
  padding: string;
}

const config: PaperConfig = {
  background: {
    color: colors.white.light,
  },
  border: {
    color: colors.grey.light,
    radius: '3px',
    width: '1px',
    style: 'solid',
  },
  padding: '1em',
};

export default config;
