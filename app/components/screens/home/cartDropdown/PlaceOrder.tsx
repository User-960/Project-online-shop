import Link from 'next/link';
import React from 'react';

const PlaceOrder: React.FC = () => {
  return (
    <Link href='checkout'>
      <p className='bg-green-800 shadow-md shadow-green-100 rounded-xl block text-center p-3 text-white w-3/5 mx-auto mt-5 hover:bg-green-700 duration-300 transition-colors ease-in'>
        Place order
      </p>
    </Link>
  )
}

export default PlaceOrder;
