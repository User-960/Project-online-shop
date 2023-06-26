import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Online Shop</title>
        <meta name="description" content="Online shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className='flex justify-between items-center mb-10'>
          <h1>Let&apos;s find your products!</h1>
        </div>

        <div className='flex flex-wrap justify-between'>
          Data
        </div>
      </div>
    </>
  )
}

export default Home;
