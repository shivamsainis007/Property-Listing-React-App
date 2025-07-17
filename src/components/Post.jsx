import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

function Post() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const categories = [
    { name: "Cars", sub: [] },
    {
      name: "Properties",
      sub: [
        "For Sale: Houses & Apartments",
        "For Rent: Houses & Apartments",
        "Lands & Plots",
        "For Rent: Shops & Offices",
        "For Sale: Shops & Offices",
        "PG & Guest Houses"
      ]
    },
    { name: "Mobiles", sub: [] },
    { name: "Jobs", sub: [] },
    { name: "Bikes", sub: [] },
    { name: "Electronics & Appliances", sub: [] },
    { name: "Commercial Vehicles & Spares", sub: [] },
    { name: "Furniture", sub: [] },
    { name: "Fashion", sub: [] },
    { name: "Books, Sports & Hobbies", sub: [] },
    { name: "Pets", sub: [] },
    { name: "Services", sub: [] }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white p-10">
      <h1 className="text-2xl font-bold mb-6">POST YOUR AD</h1>

      <div className="flex border border-gray-300 rounded-md w-full max-w-4xl">
        {/* Left: Categories */}
        <div className="w-1/2 border-r">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 ${activeCategory === item.name ? "bg-gray-200" : ""}`}
              onClick={() => setActiveCategory(item.name)}
            >
              <div className="flex items-center gap-2">
                <span className="material-icons">category</span>
                <span>{item.name}</span>
              </div>
              {item.sub.length > 0 && <span className="material-icons">chevron_right</span>}
            </div>
          ))}
        </div>

        {/* Right: Subcategories */}
        <div className="w-1/2">
          {categories
            .find(cat => cat.name === activeCategory)?.sub
            .map((subItem, i) => (
              <div
                key={i}
                className="px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/form/${encodeURIComponent(subItem)}`)} // 👈 Navigate to form
              >
                {subItem}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
