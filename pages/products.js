import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import productDatabase from '../util/productDatabase';

export default function Products(props) {
  console.log('props', JSON.stringify(props, null, 2));

  return (
    <Layout>
      <Head>
        <title>Products</title>
        <meta description="Products, Prices, Descriptions" />
      </Head>

      <h1>Products</h1>

      {props.products.map((product) => {
        return (
          <div
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              padding: '0.5em',
              borderRadius: '0.5em',
              marginBottom: '0.5em',
            }}
            key={'product-' + product.id}
          >
            <a>
              {product.name} is a {product.age} year old {product.type} with a{' '}
              {product.accessory}.
            </a>
          </div>
        );
      })}
    </Layout>
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
    props: { animals: productDatabase },
  };
}
