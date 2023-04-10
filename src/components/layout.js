import React, { useState, useEffect } from 'react';

import Header from "./Header/header"
import Footer from "./Footer/footer"
import ContactForm from "../components/ContactForm/ContactForm"
import "./layout.css"

const Layout = () => {

  const [focus, setFocus] = useState(false);

  const handleClick = () => {
    setFocus(true);
  }

  const handleOnBlur = () => {
    setFocus(false);
  }

  useEffect(() => {}, [focus]);

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <div>
          <h1 className='text-[24px] m-0 pb-[20px]'>Contact Us</h1>
          <p className='text-[14px]'>Please provide some information to get started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="md:col-span-2">
            <ContactForm shouldFocus={focus} onBlurInput={handleOnBlur}></ContactForm>
          </div>
          <div className="md:col-span-1 text-[14px]">
            <p className='m-0'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
            <p className='m-0 pt-[15px] font-bold'>Phone: </p>
            <p className='m-0'><a href='' className='text-blue-500 hover:text-blue-700 transition-colors duration-300 no-underline'>+1 (877) 777-7777</a></p>
            <p className='m-0 pt-[15px] font-bold'>Hours: </p>
            <p className='m-0'>Monday - Sunday: <span className='font-bold'>7am - 11pm EST</span></p>
          </div>
        </div>
      </div>
      <Footer onClick={handleClick} />
    </>
  )
}

export default Layout
