import React, { useState } from 'react'
import '../Css/register-login-checkout.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { FaRegUser, FaCity, FaFlagUsa, FaRegCreditCard  } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuPhone  } from "react-icons/lu";
import { MdOutlineEmail, MdCalendarMonth } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

import CartCheckoutNav from '../components/cart-checkout-nav';


export default function CheckOut() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='checkout-page container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Your Information</h2>
         {/* Email */}
          <div className={`inputHolder ${errors.email ? 'notvalid' : ''}`}>
          <div className="holder">
          <MdOutlineEmail />
          <input
            type="email"
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address"
              }
            })}
            placeholder="Your Email"
          />
          </div>
          {errors.email && (
            <span>
              <AiOutlineExclamationCircle />
              {errors.email.message}
            </span>
          )}
        </div>
        <div className='rowHolder'>
          {/* Country */}
          <div className={`inputHolder ${errors.country ? 'notvalid' : ''}`}>
            <div className="holder">
              <FaFlagUsa style={{ fontSize: '15px', marginTop: '1px' }}/>
              <input
                type="text"
                {...register("country", {
                  required: "Please enter your country",
                  minLength: {
                    value: 3,
                    message: "Country name must be at least 3 characters"
                  }
                })}
                placeholder="Your Country"
              />
            </div>
            {errors.country && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.country.message}
              </span>
            )}
          </div>
          {/* City */}
          <div className={`inputHolder ${errors.city ? 'notvalid' : ''}`}>
            <div className="holder">
              <FaCity />
              <input
                type="text"
                {...register("city", {
                  required: "Please enter your city",
                  minLength: {
                    value: 2,
                    message: "City name must be at least 3 characters"
                  }
                })}
                placeholder="Your City"
              />
            </div>
            {errors.city && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.city.message}
              </span>
            )}
          </div>
        </div>
        {/* Notes */}
        <div className={`inputHolder ${errors.notes ? 'notvalid' : ''}`}>
          <div className="holder">
            <AiOutlineMessage />
            <textarea
              {...register("notes", {
                maxLength: {
                  value: 500,
                  message: "Notes must be at most 500 characters long"
                }
              })}
              placeholder="Add Extra Notes For Your Order"
            />
          </div>
          {errors.notes && (
            <span>
              <AiOutlineExclamationCircle />
              {errors.notes.message}
            </span>
          )}
        </div>
        <div className='payment-section'>
          <h2>Payment Details</h2>
          {/* Card Number */}
          <div className='inputHolder'>
            <div className="holder">
              <FaRegCreditCard  />
              <input
                type="text"
                {...register("cardNumber", {
                  required: "Please enter your card number",
                  pattern: {
                    value: /^\d{16}$/,
                    message: "Card number must be 16 digits long"
                  }
                })}
                placeholder="Card Number"
                style={{ borderColor: errors.cardNumber ? 'red' : 'black' }}
              />
            </div>
            {errors.cardNumber && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.cardNumber.message}
              </span>
            )}
          </div>
          <div className='rowHolder'>
            {/* Expiration Month */}
            <div className='inputHolder'>
              <div className="holder">
                <MdCalendarMonth/>
                <input
                  type="number"
                  {...register("expMonth", {
                    required: "Please enter expiration month",
                    min: {
                      value: 1,
                      message: "Expiration month must be between 01 and 12"
                    },
                    max: {
                      value: 12,
                      message: "Expiration month must be between 01 and 12"
                    }
                  })}
                  placeholder="Expiration Month (MM)"
                />
              </div>
              {errors.expMonth && (
                <span>
                  <AiOutlineExclamationCircle />
                  {errors.expMonth.message}
                </span>
              )}
            </div>
            {/* Expiration Year */}
            <div className='inputHolder'>
              <div className="holder">
                <MdCalendarMonth/>
                <input
                  type="number"
                  {...register("expYear", {
                    required: "Please enter expiration year",
                    minLength: {
                      value: 4,
                      message: "Expiration year must be 4 digits long"
                    },
                    maxLength: {
                      value: 4,
                      message: "Expiration year must be 4 digits long"
                    },
                    min: {
                      value: new Date().getFullYear(),
                      message: `Expiration year must be greater than or equal to ${new Date().getFullYear()}`
                    },
                    max: {
                      value: 2099,
                      message: "Expiration year must be less than 2100"
                    }
                  })}
                  placeholder="Expiration Year (YYYY)"
                  style={{ borderColor: errors.expYear ? 'red' : 'black' }}
                />
              </div>
              {errors.expYear && (
                <span>
                  <AiOutlineExclamationCircle />
                  {errors.expYear.message}
                </span>
              )}
            </div>
          </div>
          {/* CVC */}
          <div className='inputHolder'>
            <div className="holder">
              <input
                type="number"
                {...register("cvc", {
                  required: "Please enter CVC",
                  minLength: {
                    value: 3,
                    message: "CVC must be at least 3 digits long"
                  },
                  maxLength: {
                    value: 4,
                    message: "CVC must be at most 4 digits long"
                  }
                })}
                placeholder="CVC"
                style={{ borderColor: errors.cvc ? 'red' : 'black' }}
              />
            </div>
            {errors.cvc && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.cvc.message}
              </span>
            )}
          </div>
        </div>

          <button className='main-buttom' type="submit">Check Out</button>
      </form>
      <CartCheckoutNav checkout={true}/>
    </div>
  )
}
