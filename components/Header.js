import { css } from '@emotion/react';
import Link from 'next/link';

const headerLeft = css`
  height: 2em;
  width: 4em;
  padding: 0.5em 1em;
`;

const headerRight = css`
  height: 2em;
  width: 4em;
  padding: 0.5em 1em;

  img {
    /*  */
  }

  span {
    position: absolute;
    top: 0;
    right: 0;

    justify-content: center;
    line-height: 8px;
    border-radius: 50%,
    font-size: 8px
  }
`;

export default function Header() {
  return (
    <header>
      <div css={headerLeft}>
        <Link href="/index">
          <a>Home</a>
        </Link>
        <Link href="/merch">
          <a>Merch</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div css={headerRight}>
        <Link>
          <div>
            {/* replace placeholder counts with ${props.cartItemsCount} or {props.cartItemsCount} */}
            <img src="../img/cart.png" alt="cart containing PLACEHOLDERCOUNT" />
            <span>5</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
