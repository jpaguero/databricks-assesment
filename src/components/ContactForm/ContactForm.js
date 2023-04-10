import React, { useEffect, useState, useRef } from 'react';
import './ContactForm.scss';

const ContactForm = ({ shouldFocus, onBlurInput }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selection, setSelection] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const emailInputRef = useRef(null);

  const isEmailValid = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return regex.test(email);
  };

  const isPhoneValid = (phone) => {
    const regex = /^\(\d{3}\)\s?\d{3}-\d{5}$/;
    return regex.test(phone);
  }

  const hasGmail = (email) => {
    const isGmail = email.toLowerCase().includes('@gmail.com');
    return !isGmail;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length >= 10 && isEmailValid(email) && isPhoneValid(phone)) {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (shouldFocus && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div className="contact-form">
      {submitted ? (
        <p className="text-[25px] font-sans m-0 py-2 px-0">Thank you.</p>
      ) : (
        <form onSubmit={handleSubmit} className='text-[15px]'>
          <input
            ref={emailInputRef}
            className={`rounded-[5px] border border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-[17px] px-[22px]`}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={onBlurInput}
            placeholder='Email'
            required
          />
          {!hasGmail(email) && email.length && (
            <span className="error">Gmail is not allowed.</span>
          )}
          {email.length < 10 && email.length > 0 && (
            <span className="error">Minimum 10 characters.</span>
          )}
          <input
            className='rounded-[5px] border border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-[17px] px-[22px]'
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
          />
          <input
            className='rounded-[5px] border border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-[17px] px-[22px]'
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Phone, ex. (000) 000-00000'
            required
          />
          {!isPhoneValid(phone) && phone.length > 0 && (
            <span className="error">Add a valid Phone.</span>
          )}

          <select
            className="w-full rounded-[5px] border border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-[17px] px-[22px] my-[5px]"
            id="selection"
            name="selection"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            required
          >
            <option value="">How we can help you?</option>
            <option value="Sales">Sales</option>
            <option value="Press">Press</option>
            <option value="Support">Support</option>
            <option value="Demo">Demo</option>
          </select>

          <div className="text-right w-full">
            <button
              type="submit"
              className="font-thin text-[20px] bg-black text-white rounded-md py-[5px] px-[46px] mt-[15px] hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
