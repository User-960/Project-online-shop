import { useGetProductsQuery } from '@/app/store/product/product.api';
import { IProduct } from '@/app/store/product/product.types';
import React from 'react';
import CartDropdown from './cartDropdown/CartDropdown';
import ProductItem from './ProductItem';

const Home: React.FC = () => {
  const { data = [], isLoading, error } = useGetProductsQuery(6);
  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <div className='flex justify-between items-center mb-10'>
        <h1 className='text-2xl text-green-900 font-medium'>
          Let&apos;s find your products!
        </h1>
        <CartDropdown />
      </div>

      {isLoading ?
        (<div>{'Loading...'}</div>) :
        error ?
          (<div className='text-red-600'>{'Error :' + error}</div>) :
          (<div className='flex flex-wrap justify-between max-w-[660px] m-auto'>
            {
              data?.map((product: IProduct) => (
                <ProductItem key={product.id} product={product} />
              ))
            }
          </div>
          )
      }
    </div>
  )
}

export default Home;
