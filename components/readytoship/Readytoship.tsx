import Image from "next/image";

export default function ReadyToShip() {
  const jewelleryItems = [
    {
      name: "Diamond Ring",
      category: "Ring",
      price: "₹45,999",
      image: "/ring.jpg",
      details: "Elegant diamond ring crafted in white gold.",
    },
    {
      name: "Royal Necklace",
      category: "Necklace",
      price: "₹1,25,999",
      image: "/necklace.jpg",
      details: "Luxury diamond necklace perfect for weddings.",
    },
    {
      name: "Gold Bracelet",
      category: "Bracelet",
      price: "₹32,499",
      image: "/bracelet.jpg",
      details: "Classic gold bracelet with premium finish.",
    },
    {
      name: "Diamond Earrings",
      category: "Earrings",
      price: "₹28,999",
      image: "/earrings.jpg",
      details: "Stylish diamond earrings for every occasion.",
    },
    {
      name: "Luxury Pendant",
      category: "Pendant",
      price: "₹22,999",
      image: "/pendant.jpg",
      details: "Elegant pendant with sparkling diamonds.",
    },
    {
      name: "Wedding Jewellery Set",
      category: "Jewellery Set",
      price: "₹2,49,999",
      image: "/set.jpg",
      details: "Premium bridal jewellery set with diamonds.",
    },
  ];

  return (
    <section className="bg-[#fdf8f4] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Ready To Ship Jewellery
          </h2>
          <p className="text-gray-600 mt-3">
            Elegant jewellery crafted for every special moment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jewelleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-72 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-sm text-yellow-700 font-medium">
                  {item.category}
                </span>

                <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.details}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-2xl font-bold text-gray-900">
                    {item.price}
                  </span>

                  <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}