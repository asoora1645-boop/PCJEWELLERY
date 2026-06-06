export default function RingsSection() {
  const rings = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
      details: "18K White Gold • Certified Diamond",
    },
    {
      id: 2,
      name: "Luxury Gold Ring",
      price: "₹54,999",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600",
      details: "22K Gold • Premium Finish",
    },
    {
      id: 3,
      name: "Rose Gold Couple Ring",
      price: "₹44,999",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
      details: "Rose Gold • Elegant Design",
    },
    {
      id: 4,
      name: "Royal Diamond Ring",
      price: "₹1,19,999",
      image:
        "https://images.unsplash.com/photo-1588444650733-d53b0c4f6b52?w=600",
      details: "Luxury Diamond • Bridal Collection",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Elegant Rings Collection
          </h2>
          <p className="text-gray-500 mt-3">
            Discover luxury diamond and gold rings
          </p>
        </div>

        {/* Ring Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rings.map((ring) => (
            <div
              key={ring.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={ring.image}
                alt={ring.name}
                className="w-full h-72 object-cover hover:scale-105 transition duration-300"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {ring.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {ring.details}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-2xl font-bold text-yellow-600">
                    {ring.price}
                  </span>

                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
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