import logo from '../assets/logo.png';
import banner from '../assets/banner.jpg';
import * as React from "react";
import { Link } from 'react-router-dom'; 
import { GiManualMeatGrinder, GiBookshelf, GiBookmarklet } from "react-icons/gi";
import { FaMobileAlt, FaLaptop, FaHeadphones, FaCar, FaTshirt, FaShoePrints, FaUserTie, FaBookOpen } from "react-icons/fa";
import { IoBed, IoTvOutline } from "react-icons/io5";
import { MdChair, MdOutlineTableBar, MdOutlineWork } from "react-icons/md";
import { BsFillPeopleFill, BsFillCameraVideoFill } from "react-icons/bs";
import { BiLeaf } from "react-icons/bi";
import { PiStudentFill } from "react-icons/pi";
import { useGetProductsByCategoryQuery } from '@/lib/api/productApi';

const Homepage = () => {
  const components1 = [
    { title: " Mobile & Accessories", href: "/electronic/mobileacc/mobilephone", icon: <FaMobileAlt /> },
    { title: " Home Electronics", href: "/electronic/homeelectronic/televishion", icon: <IoTvOutline /> },
    { title: " Computers & Accessories", href: "/electronic/computersaccessories/laptops", icon: <FaLaptop /> },
    { title: " Audio & Entertainment", href: "/electronic/audioentertainment/headphones", icon: <FaHeadphones /> },
    { title: " Kitchen Appliances", href: "/electronic/kitchenappliances/mixergrinders", icon: <GiManualMeatGrinder /> },
    { title: " Car Electronics", href: "/electronic/carelectronics/carstereos", icon: <FaCar /> },
  ];

  const components2 = [
    { title: " Bedroom Furniture", href: "/furnitures/bedroom/beds", icon: <IoBed /> },
    { title: " Living Room Furniture", href: "/furnitures/livingroom/coffeetables", icon: <MdChair /> },
    { title: " Dining Room Furniture", href: "/furnitures/diningroom/barunits", icon: <MdOutlineTableBar /> },
    { title: " Office Furniture", href: "/furnitures/officeroom/bookshelves", icon: <MdOutlineWork /> },
    { title: " Kids Furniture", href: "/furnitures/kids/bookshelves", icon: <BsFillPeopleFill /> },
    { title: " Outdoor Furniture", href: "/furnitures/outdoor/gardentables", icon: <BiLeaf /> },
  ];

  const components3 = [
    { title: " Men's Fashion", href: "/fashion/men/jackets", icon: <FaUserTie /> },
    { title: " Women's Fashion", href: "/fashion/women/dresses", icon: <FaTshirt /> },
    { title: " Kids Fashion", href: "/fashion/kids/ethnicWear", icon: <BsFillPeopleFill /> },
    { title: " Footwear", href: "/fashion/footware/boots", icon: <FaShoePrints /> },
    { title: " Accessories", href: "/fashion/accessories/bags", icon: <BsFillCameraVideoFill /> },
  ];

  const components4 = [
    { title: " Children & Teens", href: "books/children/activitybooks", icon: <GiBookmarklet /> },
    { title: " Fiction", href: "books/fiction/historicalfiction", icon: <FaBookOpen /> },
    { title: " Non-Fiction", href: "books/nonfiction/biographies", icon: <GiBookshelf /> },
    { title: " Education & Reference", href: "books/education/Dictionaries", icon: <PiStudentFill /> },
    { title: " Business & Professional", href: "books/business/finance", icon: <MdOutlineWork /> },
    { title: " Art & Hobbies", href: "books/art/artCraft", icon: <BiLeaf /> },
  ];

  const allComponents = [...components1, ...components2, ...components3, ...components4];

  const { data: products = [], isLoading, isError } = useGetProductsByCategoryQuery({ categoryId: 1, subid: 1 });

  return (
    <>
      {/* Header Section */}
      <div className="header w-full px-10 py-8 flex items-center justify-center gap-10 bg-white shadow">
        <div className="logo flex-shrink-0">
          <img src={logo} alt="Second Chance Logo" className="h-40 w-auto" />
        </div>
        <div className="text-content">
          <div className="tagline text-4xl font-bold text-black-700 mb-2 mr-5">
            Second Chance
          </div>
          <p className="description text-gray-800 text-base leading-relaxed max-w-2xl">
            Second Chance strives to bring you top-quality, affordable thrift finds. We offer clothing, accessories, home decor, and more! Everyone deserves their ideal thrifting experience. Shop our curated collection today for a new, thrifty look.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-80">
        <img src={banner} alt="Second Chance Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="px-10 text-white text-justify w-full">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6 leading-snug">
              Welcome to SecondChance, your eco-friendly online shop for quality secondhand items.
              We help reduce waste by giving products a new life. Shop smart, save more, and support sustainability!
              At SecondChance, we believe in conscious shopping. Every item you buy from us prevents another from ending up in a landfill. Whether you're looking for stylish clothing, reliable electronics, or unique home decor, our carefully curated collections ensure quality and affordability.
              We work closely with trusted sellers and communities to bring you products that are gently used, thoroughly inspected, and ready to serve again. By choosing SecondChance, you're not just making a smart financial decision—you're making a positive impact on the planet.
              Join our growing community of sustainable shoppers and discover the joy of giving things a second life. Thank you for supporting reuse, recycling, and responsible living.
            </p>
            <Link to="/aboutus">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Category Grid Section */}
      <div className="trending-section mt-10">
        <h2 className="text-4xl font-bold text-center text-black h-20">Categories</h2>
      </div>
      <div className="category-grid flex flex-wrap justify-center gap-8 p-4">
        {allComponents.map((component, i) => (
          <a key={i} href={component.href} className="flex flex-col items-center w-32">
            <div className="w-24 h-24 rounded-full border-2 border-green-600 flex items-center justify-center bg-white">
              {React.cloneElement(component.icon, { className: 'w-10 h-10 text-black' })}
            </div>
            <p className="mt-2 text-gray-800 text-center text-sm">{component.title}</p>
          </a>
        ))}
      </div>

      {/* Trending Products Section */}
      <div className="trending-section mt-8">
        <h2 className="text-4xl font-bold text-center text-black h-20">Trending Products</h2>
        {isLoading ? (
          <p className="text-center p-6">Loading trending products...</p>
        ) : isError ? (
          <p className="text-center text-red-600 p-6">Error loading trending products.</p>
        ) : products.length === 0 ? (
          <p className="text-center p-6">No trending products found.</p>
        ) : (
          <div className="trending-products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {products.slice(0, 6).map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="block bg-white p-4 rounded-lg border border-green-100 shadow hover:shadow-lg transition"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600 line-clamp-2">{product.description}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-500">Recycle Date: {product.recycleDate}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
