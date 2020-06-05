/** @jsx jsx */
import { jsx, NavLink, Flex, Container, Link as ThemeLink } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';

const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX;

const PrefixedLink = ({ href, ...rest }) => (
  <Link href={href} as={`${assetPrefix}${href}`} {...rest} />
);

const LINKS = [
  { url: '/', name: 'Phone Home' },
  { url: '/docs/introduction', name: 'Docs' },
  { url: '/faq', name: 'FAQs' },
  { url: '/stats', name: 'Stats' },
];

const Header = () => {
  return (
    <Container as="nav" mt={3}>
      <Flex
        sx={{
          alignItems: 'center',
          mb: [2, 4],
        }}
      >
        <PrefixedLink href="/" passHref>
          <ThemeLink sx={{ color: 'onSurface' }}>
            <Icon
              name="logo_only"
              size="auto"
              width="40"
              height="40"
              sx={{ display: ['block', 'none'] }}
            />
            <Icon
              name="logo"
              size="auto"
              width="152"
              height="40"
              sx={{ display: ['none', 'block'] }}
            />
          </ThemeLink>
        </PrefixedLink>
        <Flex
          as="nav"
          sx={{
            ml: ['auto'],
            mr: [null, 0],
          }}
        >
          {LINKS.map(({ url, name }) => (
            <PrefixedLink href={url} passHref key={url}>
              <NavLink sx={{ '&:last-child': { pr: 0 } }}>{name}</NavLink>
            </PrefixedLink>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;
