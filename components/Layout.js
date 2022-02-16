import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Header from './Header';

const mainStyle = css`
  margin-top: 5em;
  margin-left: 20vw;
  margin-right: 20vw;
  max-width: 50vw;
`;

export default function Layout(props) {
  const cookieCheckerSetter = () => {
    if (!Cookies.get('cart') || Cookies.get('cart') < 0) {
      Cookies.set('cart', 0, { SameSite: 'lax', secure: true, expires: 1 });
    }
  };
  cookieCheckerSetter();

  console.log('Layout.js props', props);
  console.log('Layout.js props.cartCount', props.cartCount);
  console.log();
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cartCount={props.cartCount || Cookies.get('cart')} />
      <main css={mainStyle}>{props.children}</main>
    </div>
  );
}
