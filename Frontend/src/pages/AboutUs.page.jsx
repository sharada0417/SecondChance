import React from "react";
import { FaRecycle, FaHandHoldingHeart, FaLeaf } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom'; 

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-tr from-green-100 to-yellow-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl p-10">
        <h1 className="text-4xl font-bold text-center text-[#166835] mb-4">About Us</h1>
        <p className="text-lg text-center text-gray-700 mb-10">
          Giving products a second chance, and people a smarter choice.
        </p>

        {/* Our Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#166835] mb-3">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            SecondChance was born from a simple idea  to reduce waste and make quality goods more affordable. 
            In a world where fast fashion and throwaway tech dominate, we’re committed to building a circular economy where products are reused, reloved, and revived. 
            We started as a local project and have grown into an online community of eco-conscious shoppers and sellers.
          </p>
        </section>

        {/* Our Mission & Values */}
        <section className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-100 rounded-xl shadow-md text-center">
            <FaRecycle className="text-4xl text-green-700 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Sustainability</h3>
            <p className="text-gray-700">
              Every reused item means less waste. We're here to make second-hand the first choice.
            </p>
          </div>

          <div className="p-6 bg-yellow-100 rounded-xl shadow-md text-center">
            <FaHandHoldingHeart className="text-4xl text-yellow-700 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Community First</h3>
            <p className="text-gray-700">
              We support local sellers and small businesses to thrive in a conscious economy.
            </p>
          </div>

          <div className="p-6 bg-teal-100 rounded-xl shadow-md text-center">
            <GiShoppingCart className="text-4xl text-teal-700 mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">Smart Shopping</h3>
            <p className="text-gray-700">
              Get quality products for less from books to furniture to fashion all in one place.
            </p>
          </div>
        </section>

        {/* Closing Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#166835] mb-4">Join the Movement</h2>
          <p className="text-gray-700 mb-6">
            By choosing SecondChance, you're not just shopping you're making a statement.
            A statement for the planet, for your wallet, and for a better future.
          </p>
          
           <Link to="/">
            <button className="bg-[#166835] text-white px-6 py-3 rounded-full hover:bg-[#145a2e] transition">
            Start Exploring
          </button>      
        </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

