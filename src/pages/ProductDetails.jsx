import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiTruck, FiRotateCcw, FiShield, FiHeart, FiStar, FiCreditCard, FiTag } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { cart, wishlist } = useSelector(state => state);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pt-32 text-center uppercase tracking-widest text-xs">Loading LuxeMart...</div>;

  const isInCart = cart.find(item => item.id === product?.id);
  const isFavorite = wishlist.find(item => item.id === product?.id);

  const handleBagAction = () => {
    if (isInCart) {
      navigate('/cart');
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  return (
    <div className="pt-32 pb-20 px-10 max-w-7xl mx-auto bg-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Side: Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-white border border-gray-100 p-12">
          <img src={product.image} alt={product.title} className="max-h-[500px] w-full object-contain" />
        </div>

        {/* Right Side: Details */}
        <div className="md:w-1/2">
          <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] mb-4">{product.category}</p>
          <h1 className="text-3xl font-bold text-black mb-4 uppercase tracking-tight">{product.title}</h1>
          
          {/* Reviews */}
          <div className="flex items-center gap-2 mb-6 text-black">
             <div className="flex gap-0.5"><FiStar size={12} fill="black"/><FiStar size={12} fill="black"/><FiStar size={12} fill="black"/><FiStar size={12} fill="black"/><FiStar size={12}/></div>
             <span className="text-[10px] text-gray-400 uppercase tracking-widest">(24 Reviews)</span>
          </div>

          <p className="text-4xl font-light text-black mb-2">${product.price.toFixed(2)}</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-10 font-bold">Units Available: 12</p>
          
          <div className="border-t border-b border-gray-100 py-10 mb-10">
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4">Description</h4>
            <p className="text-gray-600 leading-relaxed text-sm font-light">{product.description}</p>
          </div>

          {/* Exclusive Offers */}
          <div className="mb-10 p-6 bg-gray-50 space-y-3">
             <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><FiTag /> Exclusive Offers</h4>
             <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">• Use code LUXE20 for 20% off jewelry</p>
             <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">• Complimentary gift wrapping on all orders</p>
          </div>

          {/* Single Functional Button Section */}
          <div className="flex flex-col gap-4 mb-12">
            <button 
              onClick={handleBagAction}
              className="w-full bg-black text-white py-5 font-bold hover:bg-zinc-800 transition uppercase tracking-[0.3em] text-[10px]"
            >
              {isInCart ? "Go to Bag" : "Add to Bag"}
            </button>
            
            <button 
              onClick={() => dispatch({ type: 'TOGGLE_WISHLIST', payload: product })}
              className={`w-full border py-5 font-bold transition uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-2 ${isFavorite ? 'bg-black text-white border-black' : 'border-black text-black hover:bg-gray-50'}`}
            >
              <FiHeart fill={isFavorite ? "white" : "none"} />
              {isFavorite ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>

          {/* Payment Options */}
          <div className="mb-10">
             <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><FiCreditCard /> Payment Methods</h4>
             <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em]">Visa, Mastercard, AMEX, PayPal, Apple Pay</p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-gray-100 pt-10">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
              <FiTruck size={16} /> <span>Complimentary Shipping</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
              <FiRotateCcw size={16} /> <span>Easy 30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;