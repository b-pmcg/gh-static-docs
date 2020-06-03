/** @jsx jsx */
import { jsx } from 'theme-ui';
import Head from 'next/head';
import BaseLayout from '../layouts/BaseLayout';
import Lead from '../components/Lead';
import ProtocolDescription from '../components/ProtocolDescription.mdx';

const Index = () => (
  <BaseLayout>
    <Head>
      <title>GH Static Docs</title>
    </Head>
    <Lead />
    <ProtocolDescription />
  </BaseLayout>
);

export default Index;
