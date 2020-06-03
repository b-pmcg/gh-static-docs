/** @jsx jsx */
import { jsx, Container, Heading, Text, Button } from 'theme-ui';
import Link from 'next/link';
import { Icon } from '@makerdao/dai-ui-icons';

const Lead = () => {
  return (
    <Container
      sx={{
        textAlign: 'center',
        maxWidth: '768px',
        py: 6,
      }}
    >
      <Heading variant="largeHeading" as="h1">
        IT’S TIME TO BUILD234
      </Heading>
      <Text variant="bodyLarge" sx={{ my: 3 }}>
        Every Western institution was unprepared for the coronavirus pandemic,
        despite many prior warnings. This monumental failure of institutional
        effectiveness will reverberate for the rest of the decade, but it’s not
        too early to ask why, and what we need to do about it.
      </Text>
      <Link href="/docs/introduction">
        <Button as="a" variant="textual">
          Go to Docs <Icon name="arrow_right" />
        </Button>
      </Link>
    </Container>
  );
};

export default Lead;
