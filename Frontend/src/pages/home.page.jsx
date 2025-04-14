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
  { title: "📱 Mobile & Accessories", href: "/mobileacc" },
  { title: "📺 Home Electronics", href: "/docs/primitives/hover-card" },
  { title: "💻 Computers & Accessories", href: "/docs/primitives/progress" },
  { title: "🎧 Audio & Entertainment", href: "/docs/primitives/scroll-area" },
  { title: "🍳 Kitchen Appliances", href: "/docs/primitives/tabs" },
  { title: "🚗 Car Electronics", href: "/docs/primitives/tooltip" },
];

const components2 = [
  { title: "🛏️ Bedroom Furniture", href: "/docs/primitives/alert-dialog" },
  { title: "🛋️ Living Room Furniture", href: "/docs/primitives/hover-card" },
  { title: "🍽️ Dining Room Furniture", href: "/docs/primitives/progress" },
  { title: "💼 Office Furniture", href: "/docs/primitives/scroll-area" },
  { title: "🧒 Kids Furniture", href: "/docs/primitives/tabs" },
  { title: "🌳 Outdoor Furniture", href: "/docs/primitives/tooltip" },
];

const components3 = [
  { title: "👔 Men's Fashion", href: "/docs/primitives/alert-dialog" },
  { title: "👗 Women's Fashion", href: "/docs/primitives/hover-card" },
  { title: "🧒 Kids Fashion", href: "/docs/primitives/progress" },
  { title: "👟 Footwear", href: "/docs/primitives/scroll-area" },
  { title: "👜 Accessories", href: "/docs/primitives/tabs" },
];

const components4 = [
  { title: "📚 Children & Teens", href: "/docs/primitives/alert-dialog" },
  { title: "📖 Fiction", href: "/docs/primitives/hover-card" },
  { title: "📘 Non-Fiction", href: "/docs/primitives/progress" },
  { title: "🏫 Education & Reference", href: "/docs/primitives/scroll-area" },
  { title: "💼 Business & Professional", href: "/docs/primitives/tabs" },
  { title: "🎨 Art & Hobbies", href: "/docs/primitives/tooltip" },
];

const Homepage = () => {
  return (
    <>
     <div className="flex flex-col items-center bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-8 shadow-2xl">

        {/* Title */}
        <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-6">
          ♻️ Second Chance
        </h1>

        {/* Search */}
        <div className="flex w-full max-w-lg items-center space-x-2 mb-8">
          <Input
            type="text"
            placeholder="🔍 Search for anything..."
            className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-lg"
          />
          <Button className="bg-green-700 hover:bg-green-800 text-white rounded-lg px-4 py-2 shadow-md transition-all">
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
