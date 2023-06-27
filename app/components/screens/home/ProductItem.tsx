import Image from 'next/image'
import { IProduct } from '@/app/store/product/product.types';
import React from 'react';
import { useActions } from '@/app/hooks/useActions';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';

interface IProductItemProps {
  product: IProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  const { addItem } = useActions();
  const { cart } = useTypedSelector(state => state);

  const isExistsInCart = cart.some(p => p.id === product.id);

  return (
    <div
      style={{ width: '48%', backgroundColor: '#E5F0EA' }}
      className='rounded-xl mb-5 p-3 shadow-sm flex flex-col justify-between'
    >
      <div className='text-center'>
        <Image
          src={product.image}
          alt={product.title}
          width='100'
          height='143'
          className='rounded-xl m-auto w-[100px] h-[143px]'
          priority={true}
        />
      </div>
      <div className='flex items-center justify-between mt-3'>
        <div className='text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5'>
          {product.title}
        </div>
        <div className='text-sm text-green-600'>${product.price}</div>
      </div>
      <button
        className='text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200'
        onClick={() => !isExistsInCart && addItem(product)}
      >
        {isExistsInCart ? 'Already in cart' : 'Add to cart'}
      </button>
    </div>
  )
}

export default ProductItem;
