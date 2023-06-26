import { useGetProductsQuery } from '@/app/store/product/product.api';
import React from 'react';
import CartDropdown from './cart-dropdown/CartDropdown';
import ProductItem from './ProductItem';

const Home: React.FC = () => {
  const { data = [], isLoading, error } = useGetProductsQuery(6);
  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <div className='flex justify-between items-center mb-10'>
        <h1>Let&apos;s find your products!</h1>
        <CartDropdown />
      </div>

      {isLoading ?
        ('Loading...') :
        error ?
          (<div className='text-red-600'>{'Error :' + error}</div>) :
          (<div className='flex flex-wrap justify-between'>
            {
              data?.map((product: any) => (
                <ProductItem product={product} />
              ))
            }
          </div>
          )
      }
    </div>
  )
}

export default Home;
