import mytheme from '@makerdao/dai-ui-theme-oasis';
import { icons } from '@makerdao/dai-ui-icons';

const theme = {
  ...mytheme,
  icons: {
    ...icons,
    logo: {
      path: <></>,
      viewBox: '0 0 152 40',
    },
    logo_only: {
      path: <></>,
      viewBox: '0 0 40 40',
    },
  },
  metadata: {
    fontLinkHref:
      'https://fonts.googleapis.com/css2?family=Rubik&family=Space+Mono:wght@400;700&display=swap',
  },
  layout: {
    ...mytheme.layout,
    container: {
      ...mytheme.layout.container,
      px: 3,
    },
    landingContainer: {
      ...mytheme.layout.landingContainer,
      px: 3,
    },
  },
};

export default theme;
