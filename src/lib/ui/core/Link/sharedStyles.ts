import {css} from 'styled-components/macro';

import linkConfig from './link.config';

export const sharedStyles = css`
  color: ${linkConfig.color.primary.main};

  &:any-link {
    /* unvisited link */
    &:link {
      color: ${linkConfig.color.primary.main};
    }

    /* visited link */
    &:visited {
      color: ${linkConfig.color.primary.visited};
    }

    /* selected link */
    &:active {
      color: ${linkConfig.color.primary.active};
    }

    &:hover {
      color: ${linkConfig.color.primary.hover};
    }
  }
`;

export default sharedStyles;
