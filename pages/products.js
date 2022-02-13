import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import productDatabase from '../util/productDatabase';

const productCard = css`
  display: flex;
  flex-flow: column;
  max-width: 300px;
  height: min-content;
  padding: 1em;
  margin: 0.5em;
  border: 1px solid #eaeaea;
  border-radius: 0.5em;
  transition: color 0.15s, border-color 0.15s;

  background-color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  text-align: left;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    color: #0020f3;
    border-color: #0020f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .description1 {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1em;
  }

  .description2 {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.5;
  }
  .price {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1em;
  }
`;

export default function Products(props) {
  // console.log('props', JSON.stringify(props, null, 2));

  const addToCart = () => null;

  return (
    <div>
      <Layout>
        <Head>
          <title>Products</title>
          <meta description="Products, Prices, Descriptions" />
        </Head>

        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around',
          }}
        >
          {props.products.map((product) => {
            return (
              <div css={productCard} key={'product-' + product.id}>
                <Image
                  src={`/img/${product.name}.jpg`}
                  alt={product.name}
                  width="400"
                  height="400"
                />

                <hr />
                <h2>{product.title}</h2>
                <p className="description1">{product.description1}</p>
                <p className="description2">{product.description2}</p>
                <hr />
                <p className="price">{product.priceString}</p>
                <button onClick={() => addToCart()} css={addToCart}>
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

// Code in getServerSideProps
// runs only in Node.js
// and allows you to do some
// fancy things:
// - Read files from the file system
// - Connect to a (real) database
export function getServerSideProps() {
  return {
    props: { products: productDatabase },
  };
}
