import React from 'react'
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

// icons
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaTiktok, } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {name, phone, email, message } = data

    console.log(data);
  };
  return ( 
    <div className="contact-page">
      <div className='mapHolder container'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d27628.34438364104!2d31.392415411669926!3d30.049964779134346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzI5LjEiTiAzMcKwMjMnNDYuNyJF!5e0!3m2!1sar!2seg!4v1715094139179!5m2!1sar!2seg&maptype=satellite"
          width="100%" 
          height="100%" 
          loading="lazy"
          style={{border: '0'}}
        />
      </div>
      <div className="contact container">
        <div className="info-contact">
          <h1>Lets Discuss Your Project</h1>
          <div className="address">
            <FaLocationDot className="icon"/>
            <div>
            <h3>Address</h3>
            <p>42 Tahrir Square</p>
            <p>26 Giza, Cairo</p>
          </div>
          </div>
          <div className="Email">
            <MdEmail className="icon"/>
            <div>
            <h3>Email us</h3>
            <p>TechTrove@gmail.com</p>
          </div>
          </div>
          <div className="call">
            <IoCall className="icon"/>
            <div>
              <h3>Call Us Now</h3>
              <p>+20 (11) 50865211</p>
              <p>+20 (10) 48064123</p>
            </div>
          </div>
          <div className="follow">
            <h5>Follow us at</h5> | 
            <div className="social">
              <FaFacebook  />
              <FaTwitter  />
              <BiLogoInstagramAlt />
              <FaTiktok  />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Get in Touch</h1>
          <div className='holder'>      
            <TextField
              className='customInput'
              InputLabelProps={{ classes: { root: 'customLabel', focused: 'focusedLabel' } }}
              error={Boolean(errors.name)}
              helperText={Boolean(errors.name) ? "Enter Atleast 3 characters" : null}
              {...register("name", { required: true, minLength: 3 })}
              label="Your Name"
              variant="filled"
            />
            <TextField
              className='customInput'
              InputLabelProps={{ classes: { root: 'customLabel', focused: 'focusedLabel' } }}
              error={Boolean(errors.phone)}
              helperText={Boolean(errors.phone) ? "Please Enter a Valid Phone Number" : null}
              {...register("phone", {
                required: true,
                pattern: /^\d{10,}$/
              })}
              label="Your Phone"
              variant="filled"
            />
          </div>
          <TextField
              className='customInput'
              InputLabelProps={{ classes: { root: 'customLabel', focused: 'focusedLabel' } }}
            error={Boolean(errors.email)}
            helperText={Boolean(errors.email) ? "Please Enter a Valid Email Address" : null}
            {...register("email", {
              required: true,
              pattern: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
            })}
            label="Your Email"
            variant="filled"
          />
          <TextField
              className='customInput'
              InputLabelProps={{ classes: { root: 'customLabel', focused: 'focusedLabel' } }}
            error={Boolean(errors.message)}
            {...register("message", { required: true, minLength: 10})}
            helperText={Boolean(errors.message) ? "Type Your Message Content Here" : null}
            label="Type Your Message Here.."
            variant="filled"
            multiline
            rows={4}
          />
          <button type='submit' className='main-buttom'>Submit</button>
        </form>
      </div>
    </div>
  )
}
