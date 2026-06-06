import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, searchQuery, activeCategory } = useSelector((state) => state);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      });
  }, [dispatch]);

  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) return <div className="pt-48 text-center uppercase tracking-widest text-xs font-bold">Loading Collection...</div>;

  return (
    <div className="pt-20 pb-20 bg-white">
      <Hero />
      
      {/* Category Filter Bar - UPDATED SIZE AND SPACING */}
      <div className="flex justify-center items-center flex-wrap gap-12 mt-16 mb-20 px-10 border-b border-gray-100 pb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch({ type: 'SET_CATEGORY', payload: cat })}
            className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] pb-3 transition-all ${
              activeCategory === cat ? 'text-black border-b-2 border-black' : 'text-gray-300 hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="px-10 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-xs uppercase tracking-widest text-gray-400">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group block">
                <div className="relative aspect-[3/4] bg-white flex items-center justify-center overflow-hidden border border-gray-100 p-8">
                  <img src={product.image} alt={product.title} className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <button className="w-full bg-black text-white py-5 text-[10px] font-bold tracking-widest uppercase">View Details</button>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2 font-medium">{product.category}</p>
                  <h3 className="text-xs font-bold text-black uppercase truncate mb-2 px-2">{product.title}</h3>
                  <p className="text-black font-light text-base">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;