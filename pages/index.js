import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/Layout';

const heroDividerWrapper = css`
  position: relative;
  margin-top: 20vh;
  margin-left: auto 0;
  margin-right: auto 0;

  display: flex;
  justify-self: middle;

  max-width: 60vw;
`;

const heroDividerContentColumn = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: middle;
  position: relative;
  max-width: 30vw;
  margin-right: 2em;

  img {
    width: 20vw;
  }
`;
const h1Intro = css`
  h1 {
    font-size: 48px;
  }
`;
const pIntro = css`
  margin-top: 10vh;
  p {
    font-size: 24px;
  }
`;

export default function Home(props) {
  return (
    <Layout cartCount={props.cartCount}>
      <Head>
        <title>UpMerched</title>
        <meta name="UpMerched" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div css={heroDividerWrapper}>
          <div css={heroDividerContentColumn}>
            <div css={h1Intro}>
              <h1>Need some merch?</h1>
              <h1>Gotcha fam.</h1>
            </div>
            <div css={pIntro}>
              <p>
                UpMerched offers a wonderful selection of cool little products.
              </p>
              <br />
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div css={heroDividerContentColumn}>
            <img src="/img/stickers.jpg" alt="" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
