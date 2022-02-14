import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';

export default function About() {
  const [count, setCount] = useState(45);

  const Incrementer = () => count + 1;
  const Decrementer = () => count - 1;

  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={() => setCount(Incrementer())}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(Decrementer())}>-</button>
    </Layout>
  );
}
