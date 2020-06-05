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
        IT’S TIME TO BUILD1A1B1C
      </Heading>
      <Text variant="bodyLarge" sx={{ my: 3 }}>
        TONS OF NEW TEXT HERE 123 123 123
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
