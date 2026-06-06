import { Search, User, ShoppingBag, Heart, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full">
            <MapPin size={18} />
            Store Locator
          </button>

          <h1 className="text-4xl font-bold text-rose-900">
            PCJ
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full"
              />
            </div>

            <User />
            <ShoppingBag />
            <Heart />
          </div>
        </div>

        {/* Categories */}
        <div className="border-t">
          <ul className="flex justify-center gap-8 py-3 text-sm font-medium">
            <li>READY TO SHIP</li>
            <li>RINGS</li>
            <li>EARRINGS</li>
            <li>NECKLACE</li>
            <li>MANGALSUTRA</li>
            <li>NOSE PIN</li>
            <li>CHAIN</li>
            <li>COINS</li>
            <li>ALL JEWELLERY</li>
            <li>CORPORATE</li>
            <li>DIGITAL GOLD</li>
          </ul>
        </div>
      </nav>    
    </>
  );
}