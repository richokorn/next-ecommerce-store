import { css } from '@emotion/react';
import Head from 'next/head';
import Header from './Header';

const mainStyle = css`
  margin-top: 5em;
  margin-left: 20vw;
  margin-right: 20vw;
  max-width: 50vw;
`;

export default function Layout(props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main css={mainStyle}>{props.children}</main>
    </div>
  );
}
