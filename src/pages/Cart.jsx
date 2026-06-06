import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const Cart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="pt-48 text-center px-10 min-h-screen">
        <h2 className="text-xl font-light uppercase tracking-[0.3em] mb-8">Your Bag is Empty</h2>
        <Link to="/" className="text-[10px] font-bold border-b border-black pb-1 uppercase tracking-widest hover:text-gray-500 hover:border-gray-500 transition">
          Discover New Arrivals
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 px-10 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-xl font-bold uppercase tracking-[0.4em] mb-16 text-center">Shopping Bag</h1>
      
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left: Item List */}
        <div className="lg:w-2/3 space-y-10">
          {cart.map(item => (
            <div key={item.id} className="flex gap-8 border-b border-gray-100 pb-10">
              <div className="w-32 h-40 bg-white border border-gray-50 p-4 flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider max-w-[250px] leading-relaxed">{item.title}</h3>
                    <button onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: item.id})}>
                      <FiTrash2 size={16} className="text-gray-300 hover:text-black transition" />
                    </button>
                  </div>
                  <p className="text-sm font-light text-gray-500 mb-6">${item.price.toFixed(2)}</p>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-5 border border-gray-200 px-4 py-2">
                    <button onClick={() => dispatch({type: 'UPDATE_QTY', id: item.id, qty: Math.max(1, item.qty - 1)})}><FiMinus size={10}/></button>
                    <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => dispatch({type: 'UPDATE_QTY', id: item.id, qty: item.qty + 1})}><FiPlus size={10}/></button>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest">Total: ${(item.price * item.qty).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Summary Block */}
        <div className="lg:w-1/3 h-fit border border-gray-100 p-8">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border-b border-gray-100 pb-4">Summary</h2>
          <div className="flex justify-between mb-5 text-[10px] uppercase tracking-widest text-gray-500">
            <span>Subtotal</span>
            <span className="text-black font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-10 text-[10px] uppercase tracking-widest text-gray-500">
            <span>Shipping</span>
            <span className="text-black font-bold">Complimentary</span>
          </div>
          <div className="flex justify-between mb-10 text-sm font-bold border-t border-gray-100 pt-6">
            <span className="uppercase tracking-[0.1em]">Estimated Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;