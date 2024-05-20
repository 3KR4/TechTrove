import React, { useState } from 'react'
import '../Css/register-login-checkout.css'
import { useForm } from 'react-hook-form';

import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";

export default function ForgetPass() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <div className='register-page forget container'>
        <div className="top">
          <h1>Reset Password</h1> 
          <p>Please enter your email address. You will receive a link to create a new password via email.</p>
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className='inputHolder'>
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
            placeholder="Enter Your Email"
            style={{ borderColor: errors.email ? 'red' : 'black' }}
          />
          </div>
          {errors.email && (
            <span>
              <AiOutlineExclamationCircle />
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="btns">
          <button className='main-buttom' type="submit">Reset Password</button>
          <Link to='/login' className='main-buttom'>Back</Link>
        </div>
      </form>
    </div>
  )
}
