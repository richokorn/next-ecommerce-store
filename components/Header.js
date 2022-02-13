import { css } from '@emotion/react';
import Link from 'next/link';

const headerWrapper = css`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;

  display: flex;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 3px 0px
  margin: 0;
  width: 100%;
  height: min-content;

  padding-bottom: 20px;
  padding-top: 20px;

  background-color: rgb(255, 255, 255);

`;

const headerLeft = css`
  position: absolute;
  display: flex;
  left: 0;
  margin-left: 15vw;

  height: 2em;
  align-items: center;

  img {
    max-height: 3.5em;
  }

  a {
    display: flex;
    align-items: center;
    margin-left: 24px;
  }

  p {
    font-size: 24px;
  }
`;

const headerRight = css`
  position: absolute;
  right: 0;
  display: flex;
  height: 2em;
  margin-right: 15vw;
  align-items: center;

  a {
    font-size: 21px;
    margin-right: 24px;
    font-size: 21px;
    color: rgb(229, 23, 107);
  }

  a:hover {
    text-decoration: underline rgb(229, 23, 107);
  }

  img {
    max-height: 3em;
  }
`;

export default function Header() {
  return (
    <header>
      <div css={headerWrapper}>
        <div style={{ height: '2em', width: '0px' }} />
        <div css={headerLeft}>
          <Link href="/">
            <a>
              <img src="/img/logo.jpg" alt="" />
              <p>merched</p>
            </a>
          </Link>
        </div>
        <div css={headerRight}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/products">
            <a>Merch</a>
          </Link>
          <Link href="https://upleveled.io/#courses">
            <a>Courses</a>
          </Link>
          <Link href="https://upleveled.io/graduates">
            <a>Graduates</a>
          </Link>
          <Link href="https://www.eventbrite.at/o/upleveled-30041446326">
            <a>Events</a>
          </Link>
          <Link href="https://upleveled.io/for-employers">
            <a>For Employers</a>
          </Link>

          <div>
            <img src="/img/cart.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
