import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoCart } from 'react-icons/io5';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { addToCart } from '../Redux/cartSlice';
import { selectCartItemById } from '../Redux/cartSelectors';

const AddToCartButton = ({ product, small }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(product.id));
  const isInCart = !!cartItem;

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  return (
    <button className='main-buttom'>
      {small ? (
        <>
          <h5 onClick={handleAddToCart}>
            {isInCart ? 'In Cart' : (
              <>
                <IoCart />
                {' Add To Cart'}
              </>
            )}
          </h5>
          <h5>
            <FaHeartCirclePlus />
          </h5>
        </>
      ) 
        : 
      <h5 onClick={handleAddToCart}>
        <IoCart />
        {isInCart ? 'In Cart' : ' Add To Cart'}
      </h5>
      }

    </button>
  );
};

export default AddToCartButton;