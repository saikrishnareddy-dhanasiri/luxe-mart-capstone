import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingCart } from 'react-icons/fi';

const Wishlist = () => {
  const { wishlist } = useSelector(state => state);
  const dispatch = useDispatch();

  const moveToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    dispatch({ type: 'TOGGLE_WISHLIST', payload: product }); // Remove from wishlist after moving
  };

  if (wishlist.length === 0) {
    return (
      <div className="pt-48 text-center px-10 min-h-screen">
        <h2 className="text-xl font-light uppercase tracking-[0.3em] mb-8">Your Wishlist is Empty</h2>
        <Link to="/" className="text-[10px] font-bold border-b border-black pb-1 uppercase tracking-widest hover:text-gray-500 transition">
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 px-10 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-xl font-bold uppercase tracking-[0.4em] mb-16 text-center">My Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {wishlist.map(item => (
          <div key={item.id} className="flex gap-8 border border-gray-100 p-6 items-center">
            <div className="w-24 h-32 flex-shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-2 truncate max-w-[200px]">{item.title}</h3>
              <p className="text-sm font-light mb-6">${item.price.toFixed(2)}</p>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => moveToCart(item)}
                  className="bg-black text-white px-4 py-2 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-800 transition"
                >
                  <FiShoppingCart size={12} /> Move to Bag
                </button>
                <button 
                  onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: item })}
                  className="border border-gray-200 px-4 py-2 text-[9px] font-bold uppercase tracking-widest hover:bg-gray-50 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;