import Head from 'next/head';
import Layout from '../components/Layout';

export default function About(props) {
  console.log('props', props);
  console.log('props.cartCountProp', props.cartCountProp);

  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
