import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1466781783364-36c955e42a7f?auto=format&fit=crop&q=80&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4">
        <div className="flex items-center gap-3 mb-6">
          <Leaf className="w-12 h-12" />
          <h1 className="text-5xl font-bold">GreenThumb</h1>
        </div>
        
        <p className="max-w-2xl text-center text-lg mb-8">
          Welcome to GreenThumb, your premier destination for beautiful indoor plants. 
          We carefully select and nurture each plant in our collection to bring the joy 
          of nature into your home. With expert care guides and a curated selection of 
          houseplants, we're here to help you create your perfect indoor garden.
        </p>

        <Link
          to="/products"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg 
                   text-lg font-semibold transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}