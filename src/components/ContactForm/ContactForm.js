import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {

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
            placeholder='Email'
            required
          />
          <input
            className='rounded-[5px] border border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-[17px] px-[22px]'
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            required
          />
          <input
            className='rounded-[5px] border border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-[17px] px-[22px]'
            type="text"
            id="phone"
            name="phone"
            placeholder='Phone'
            required
          />

          <select
            className="w-full rounded-[5px] border border-slate-300 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300 py-[17px] px-[22px] my-[5px]"
            id="selection"
            name="selection"
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
