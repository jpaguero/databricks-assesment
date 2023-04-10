import React from 'react';

import Header from "./Header/header"
import Footer from "./Footer/footer"
import ContactForm from "../components/ContactForm/ContactForm"
import "./layout.css"

const Layout = () => {

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

      <ContactForm></ContactForm>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
