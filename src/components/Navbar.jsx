import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiX, FiBell } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const { cart, wishlist, searchQuery } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 px-10 py-6 flex items-center justify-between border-b border-gray-100">
      
      {/* 1. Logo */}
      <Link to="/" className="text-xl font-black text-black tracking-[0.3em]">LUXEMART</Link>

      {/* 2. Search Container */}
      <div className="flex-1 flex justify-center px-10">
        {isSearchOpen ? (
          <div className="flex items-center bg-gray-50 border border-black px-4 py-2 w-full max-w-md">
            <input 
              autoFocus
              type="text" 
              value={searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
              placeholder="SEARCH PRODUCTS..." 
              className="bg-transparent border-none focus:outline-none w-full text-[10px] tracking-[0.2em] uppercase font-bold" 
            />
            <button onClick={() => { setIsSearchOpen(false); dispatch({ type: 'SET_SEARCH_QUERY', payload: '' }); }}>
              <FiX size={14} />
            </button>
          </div>
        ) : (
          <button onClick={() => setIsSearchOpen(true)} className="text-black hover:opacity-50 transition">
            <FiSearch size={20} />
          </button>
        )}
      </div>

      {/* 3. Right Icons */}
      <div className="flex items-center space-x-8">
        {/* Notification Icon */}
        <button className="text-black hover:opacity-50 transition relative">
          <FiBell size={20} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-black rounded-full border border-white"></span>
        </button>

        <Link to="/login" className="text-black hover:opacity-50 transition"><FiUser size={20} /></Link>
        
        <Link to="/wishlist" className="text-black hover:opacity-50 transition relative">
          <FiHeart size={20} />
          {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold">{wishlist.length}</span>}
        </Link>
        
        <Link to="/cart" className="text-black hover:opacity-50 transition relative">
          <FiShoppingCart size={20} />
          {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-black text-white text-[7px] rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;