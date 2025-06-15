import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Updated with emojis
const components1 = [
  { title: "📱 Mobile & Accessories", href: "/electronic/mobileacc/mobilephone" },
  { title: "📺 Home Electronics", href: "/electronic/homeelectronic/televishion" },
  { title: "💻 Computers & Accessories", href: "/electronic/computersaccessories/laptops" },
  { title: "🎧 Audio & Entertainment", href: "/electronic/audioentertainment/headphones" },
  { title: "🍳 Kitchen Appliances", href: "/electronic/kitchenappliances/mixergrinders" },
  { title: "🚗 Car Electronics", href: "/electronic/carelectronics/carstereos" },
];

const components2 = [
  { title: "🛏️ Bedroom Furniture", href: "/furnitures/bedroom/beds" },
  { title: "🛋️ Living Room Furniture", href: "/furnitures/livingroom/coffeetables" },
  { title: "🍽️ Dining Room Furniture", href: "/furnitures/diningroom/barunits" },
  { title: "💼 Office Furniture", href: "/furnitures/officeroom/bookshelves" },
  { title: "🧒 Kids Furniture", href: "/furnitures/kids/bookshelves" },
  { title: "🌳 Outdoor Furniture", href: "/furnitures/outdoor/gardentables" },
];

const components3 = [
  { title: "👔 Men's Fashion", href: "/fashion/men/jackets" },
  { title: "👗 Women's Fashion", href: "/fashion/women/dresses" },
  { title: "🧒 Kids Fashion", href: "/fashion/kids/ethnicWear" },
  { title: "👟 Footwear", href: "/fashion/footware/boots" },
  { title: "👜 Accessories", href: "/fashion/accessories/bags" },
];

const components4 = [
  { title: "📚 Children & Teens", href: "books/children/activitybooks" },
  { title: "📖 Fiction", href: "books/fiction/historicalfiction" },
  { title: "📘 Non-Fiction", href: "books/nonfiction/biographies" },
  { title: "🏫 Education & Reference", href: "books/education/Dictionaries" },
  { title: "💼 Business & Professional", href: "books/business/finance" },
  { title: "🎨 Art & Hobbies", href: "books/art/artCraft" },
];

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-8 shadow-2xl">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-6">
          ♻️ Second Chance
        </h1>

        {/* Introduction */}
        <p className="text-lg text-white mb-6 text-justify w-full">
          Welcome to Second Chance! We're an e-commerce store dedicated to offering only the best quality second-hand items. At Second Chance, we focus on giving pre-loved products a new life by recycling and reselling top-notch, gently used items. Shop sustainably and find amazing deals on mobile accessories, electronics, furniture, fashion, and much more!
        </p>

        {/* Search */}
        <div className="flex w-full max-w-lg items-center space-x-2 mb-8">
          <Input
            type="text"
            placeholder="🔍 Search for anything..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-lg"
          />
          <Button
            onClick={handleSearch}
            className="bg-green-700 hover:bg-green-800 text-white rounded-lg px-4 py-2 shadow-md transition-all"
          >
            Search
          </Button>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Electronics */}
          <CategoryDropdown title="📱 Electronics" color="green" items={components1} />
          {/* Furniture */}
          <CategoryDropdown title="🛋️ Furniture" color="yellow" items={components2} />
          {/* Fashion */}
          <CategoryDropdown title="👗 Fashion" color="purple" items={components3} />
          {/* Books */}
          <CategoryDropdown title="📚 Books" color="blue" items={components4} />
        </div>
      </div>
    </>
  );
};

const CategoryDropdown = ({ title, color, items }) => {
  const colorMap = {
    green: "bg-green-600 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    purple: "bg-purple-600 hover:bg-purple-700",
    blue: "bg-blue-600 hover:bg-blue-700",
  };

  const bgMap = {
    green: "bg-green-100",
    yellow: "bg-yellow-100",
    purple: "bg-purple-100",
    blue: "bg-blue-100",
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${colorMap[color]} text-white px-4 py-2 rounded-xl transition`}>
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className={`grid w-[300px] gap-2 p-3 ${bgMap[color]} rounded-lg shadow-xl`}>
              {items.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none text-gray-800 hover:bg-white hover:text-black transition-all duration-200",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Homepage;