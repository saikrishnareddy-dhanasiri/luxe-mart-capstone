import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-black tracking-[0.3em] text-black uppercase">LuxeMart</h3>
          <p className="text-gray-400 text-[10px] leading-loose uppercase tracking-widest font-light">
            Defining modern elegance through a curated selection of premium essentials. Minimalist design for the maximal impact.
          </p>
        </div>

        {/* Shop Section */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Collection</h4>
          <ul className="text-gray-500 text-[9px] uppercase tracking-[0.2em] space-y-4 font-medium">
            <li className="hover:text-black cursor-pointer transition">New Arrivals</li>
            <li className="hover:text-black cursor-pointer transition">Best Sellers</li>
            <li className="hover:text-black cursor-pointer transition">Limited Edition</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Client Service</h4>
          <ul className="text-gray-500 text-[9px] uppercase tracking-[0.2em] space-y-4 font-medium">
            <li><Link to="/faq" className="hover:text-black transition">Frequently Asked Questions</Link></li>
            <li><Link to="/cart" className="hover:text-black transition">Shipping & Returns</Link></li>
            <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer transition">Contact Us</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-black">Newsletter</h4>
          <p className="text-gray-400 text-[9px] uppercase tracking-widest mb-6">Join for exclusive updates.</p>
          <div className="flex border-b border-black pb-2">
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="bg-transparent border-none focus:outline-none text-[9px] w-full tracking-widest font-bold"
            />
            <button className="text-[9px] font-black uppercase tracking-widest ml-4 hover:opacity-50 transition">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-50 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[8px] text-gray-400 uppercase tracking-[0.3em]">
          © 2024 LuxeMart. All Rights Reserved.
        </p>
        <div className="flex space-x-8 text-[8px] text-gray-400 uppercase tracking-[0.2em]">
          <span>Instagram</span>
          <span>Twitter</span>
          <span>Pinterest</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;