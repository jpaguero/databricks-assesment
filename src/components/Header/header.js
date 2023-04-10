import * as React from "react"
import './header.scss';

const Header = () => (
  <div className="header">
    <header
      className="flex justify-center w-full h-9 bg-[#222427]"
    >
      <p className="text-white text-[14px] font-sans m-0 py-2 px-0">Learn more about our latest features</p>
    </header>
    <div className="flex justify-center">
      <p className="text-[25px] font-sans m-0 py-2 px-0 font-bold">Company Name</p>
    </div>
  </div>
)

export default Header
