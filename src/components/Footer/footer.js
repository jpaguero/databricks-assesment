import * as React from "react";
import './footer.scss';

const Footer = ({ onClick }) => {

  return (
    <div className="footer">
    <footer className="bg-[#222427] text-white pt-8">
      <div className="container mx-auto">
        <div className="flex justify-end mt-10 mx-[25px] md:m-0">
          <span onClick={onClick}><i className="fa fa-arrow-up"></i></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-[25px] md:m-0">
          <div className="md:col-span-2 font-thin text-[14px]">
            <div className="flex items-center">
            <i className="fa fa-whatsapp mr-2"></i>
              <span>+1 (877) 777-7777</span>
            </div>
            <div className="flex items-center">
              <i className="fa fa-map-marker mr-2"></i>
              <span>123 Main st, San Francisco, CA, 94107</span>
            </div>
          </div>
          <div className="md:col-span-1">
            <p className="text-white font-medium m-0 mb-2">Free Trial</p>
            <ul className="text-[14px] m-0">
              <li><a href="#" className="text-white hover:text-blue-300 font-thin no-underline">Azure</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 font-thin no-underline">AWS</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 font-thin no-underline">Google</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
          <p className="text-white font-medium m-0 mb-2">Resouces</p>
            <ul className="text-[14px] m-0">
              <li><a href="#" className="text-white hover:text-blue-300 font-thin no-underline">Terms Of Service</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 font-thin no-underline">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-blue-300 font-thin no-underline">Support</a></li>
            </ul>
          </div>
        </div>
      </div>

    <div className="date flex justify-center py-6 mt-16 text-[14px]">
          <span>© 2022 Example </span>
        </div>
    </footer>
  </div>
  )
}

export default Footer