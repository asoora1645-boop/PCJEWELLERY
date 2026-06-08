"use client";
import Image from "next/image";
import { useState } from "react";
import Latest from "@/components/latest/Latest";
import Footer from "@/components/Footer/footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* ── TOP HEADER ── */}
      <header className="relative w-full h-[82px] overflow-hidden">
        <img
          src="/headerfront.jpg"
          alt="header background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Desktop header */}
        <div className="relative z-10 hidden md:flex items-center justify-between px-8 h-full">
          <button className="flex items-center gap-2 border border-cyan-400 rounded-full px-6 h-[44px] bg-white">
            📍<span>Store Locator</span>
          </button>

          <img src="/logo.png" alt="logo" className="h-[70px]" />

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border border-cyan-400 rounded-full px-5 h-[44px] bg-white"
            />
            {["👤", "👜", "❤️"].map((icon, i) => (
              <button
                key={i}
                className="bg-white rounded-full w-[44px] h-[44px] flex items-center justify-center"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile header */}
        <div className="relative z-10 flex md:hidden items-center justify-between px-4 h-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center text-lg"
          >
            ☰
          </button>

          <img src="/logo.png" alt="logo" className="h-[60px]" />

          <div className="flex items-center gap-2">
            <button className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              🔍
            </button>
            <button className="bg-white rounded-full w-[38px] h-[38px] flex items-center justify-center">
              👜
            </button>
          </div>
        </div>
      </header>

      {/* ── NAVBAR ── */}
      <header className="bg-white shadow-sm">
        {/* Desktop nav */}
        <div className="hidden md:flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
          <h1 className="text-3xl font-bold">PCJ</h1>
          <nav className="flex gap-8 text-sm font-medium flex-wrap justify-center">
            <a href="/">READY TO SHIP</a>
            <a href="/rings">RINGS</a>
            <a href="/earrings">EARRING</a>
            <a href="/necklaces">NECKLACE</a>
            <a href="/mangalsutras">MANGALSUTRA</a>
            <a href="/coins">COINS</a>
            <a href="/jewellery">ALL JEWELLERY</a>
            <a href="/corporate">CORPORATE</a>
            <button
              className="flex items-center justify-center w-[162px] h-[32px] rounded-full text-[14px] font-medium uppercase leading-[20px] tracking-[0.05em] text-[#6F4A0F] shadow-[inset_0_-3.8px_1.9px_rgba(160,94,57,0.25),inset_0_5.7px_1.9px_rgba(255,255,255,0.25)]"
              style={{
                background:
                  "linear-gradient(85.24deg, #C59241 0.62%, #EFCB90 30.29%, #E0AE5F 53.1%, #F3D29C 79.29%, #DDBB84 107%)",
              }}
            >
              DIGITAL GOLD
            </button>
          </nav>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col bg-white border-t border-gray-100 px-6 py-4 gap-4 text-sm font-medium">
            {[
              ["READY TO SHIP", "/"],
              ["RINGS", "/rings"],
              ["EARRING", "/earrings"],
              ["NECKLACE", "/necklaces"],
              ["MANGALSUTRA", "/mangalsutras"],
              ["COINS", "/coins"],
              ["ALL JEWELLERY", "/jewellery"],
              ["CORPORATE", "/corporate"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="border-b border-gray-100 pb-2">
                {label}
              </a>
            ))}
            <button
              className="self-start flex items-center justify-center w-[162px] h-[36px] rounded-full text-[14px] font-medium uppercase text-[#6F4A0F]"
              style={{
                background:
                  "linear-gradient(85.24deg, #C59241 0.62%, #EFCB90 30.29%, #E0AE5F 53.1%, #F3D29C 79.29%, #DDBB84 107%)",
              }}
            >
              DIGITAL GOLD
            </button>
          </nav>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="min-h-[50vh] md:min-h-screen relative">
        <div className="absolute inset-0">
          <Image
            src="/hero1.jpg"
            alt="Elegant jewellery hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* ── CURATED COLLECTIONS ── */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-italic uppercase text-gray-900">
            Curated Collections
          </h2>
        </div>

        {/* Row 1: 70/30 → stacked on mobile */}
        <div className="grid w-full grid-cols-1 md:grid-cols-[70%_30%] gap-3 px-3 md:px-0">
          <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[40vw] min-h-[220px] max-h-[50vh]">
            <img
              src="/amalia.jpg"
              alt="Amalia Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[40vw] min-h-[220px] max-h-[50vh]">
            <img
              src="/celeste.jpg"
              alt="Celeste Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Row 2: 30/70 → stacked on mobile */}
        <div className="grid w-full grid-cols-1 md:grid-cols-[30%_70%] gap-3 mt-3 px-3 md:px-0">
          <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[40vw] min-h-[220px] max-h-[50vh]">
            <img
              src="/anand.jpg"
              alt="Anand Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[40vw] min-h-[220px] max-h-[50vh]">
            <img
              src="/baby.jpg"
              alt="Baby Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS (Diamonds) ── */}
      <BestSellersSection
        title="Best Sellers"
        showCategories
        cards={[
          { img: "/ring1.jpg", name: "The R Alphabet Diamond Ring", price: "₹41,430", mrp: "₹46,948", off: "11.8%" },
          { img: "/Dring6.jpg", name: "The Ximena Diamond Ring", price: "₹11,815", mrp: "₹13,410", off: "11.9%" },
          { img: "/Dring5.jpg", name: "The Kennet Diamond Ring", price: "₹41,118", mrp: "₹47,329", off: "13.1%" },
          { img: "/ring10.jpg", name: "The Akira Diamond Ring", price: "₹26,548", mrp: "₹29,626", off: "10.4%" },
          { img: "/Dring4.jpg", name: "The Savinay Diamond Ring", price: "₹39,041", mrp: "₹41,870", off: "6.8%" },
        ]}
      />

      {/* ── COLLECTION BANNER + PRODUCT GRID ── */}
      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-screen">
          {/* Left big banner */}
          <div className="relative overflow-hidden h-[50vw] min-h-[260px] lg:min-h-screen">
            <img
              src="/collection.jpg"
              alt="Ring Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Right 2×2 grid */}
          <div className="grid grid-cols-2 border-l">
            {[
              { img: "/ring1.jpg", name: "The R Alphabet Diamond Ring", price: "₹41,558", mrp: "₹47,076", off: "11.7%" },
              { img: "/Dring1.jpg", name: "The Azva Diamond Ring", price: "₹50,896", mrp: "₹57,973", off: "12.2%" },
              { img: "/Dring3.jpg", name: "Heart Diamond Ring", price: "₹32,450", mrp: "₹39,870", off: "15%" },
              { img: "/Dring2.jpg", name: "Elegant Blue Ring", price: "₹55,700", mrp: "₹62,100", off: "10%" },
            ].map((item, i) => (
              <div key={i} className="border border-pink-100 p-4 md:p-8">
                <div className="flex justify-end">
                  <button className="text-xl md:text-2xl text-cyan-500">♡</button>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full max-w-[160px] md:max-w-[260px] h-[120px] md:h-[260px] object-contain mx-auto"
                />
                <h3 className="text-[14px] md:text-[22px] mt-3 md:mt-5 text-gray-800 leading-snug">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-base md:text-3xl font-medium">{item.price}</span>
                  <span className="text-pink-300 line-through text-sm md:text-xl">{item.mrp}</span>
                </div>
                <p className="text-cyan-700 mt-1 text-sm md:text-lg">{item.off} off on product</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS (Rose) ── */}
      <BestSellersSection
        title="Best Sellers"
        showViewAll
        cards={[
          { img: "/Rring1.jpg", name: "The R Alphabet Diamond Ring", price: "₹41,430", mrp: "₹46,948", off: "11.8%" },
          { img: "/Rring3.jpg", name: "The Ximena Diamond Ring", price: "₹11,815", mrp: "₹13,410", off: "11.9%" },
          { img: "/Rring2.jpg", name: "The Kennet Diamond Ring", price: "₹41,118", mrp: "₹47,329", off: "13.1%" },
          { img: "/Rring4.jpg", name: "The Akira Diamond Ring", price: "₹26,548", mrp: "₹29,626", off: "10.4%" },
          { img: "/Rring5.jpg", name: "The Savinay Diamond Ring", price: "₹39,041", mrp: "₹41,870", off: "6.8%" },
        ]}
      />

      {/* ── STORE LOCATOR ── */}
      <section className="relative bg-[url('/head.jpg')] bg-cover bg-center flex items-center justify-center my-6 md:my-10 rounded-3xl overflow-hidden mx-3 md:mx-0 min-h-[420px] md:h-[600px]">
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 py-10">
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 w-full max-w-lg text-center">
            <div className="text-4xl md:text-5xl mb-4">📍</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Find Stores Near You
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Enter your pincode to discover the nearest store and visit us for an exclusive in-store experience.
            </p>
          </div>

          {/* Input */}
          <div className="relative w-full max-w-md flex flex-col items-center gap-4">
            <img
              src="https://www.pcjeweller.com/img/home/downTomb.svg"
              alt="Store"
              className="w-full h-[280px] md:h-[450px] object-cover rounded-[40px] shadow-xl"
            />
            <input
              type="text"
              placeholder="Enter Pincode"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition">
              LOCATE ME
            </button>
          </div>
        </div>
      </section>

      <Latest />

      {/* ── TRUST BADGES ── */}
      <section className="w-full bg-gradient-to-r from-pink-300 via-pink-100 to-cyan-100 py-12 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-start text-center">
            {[
              { img: "/warranty.png", label: "Lifetime\nWarranty" },
              { img: "/hallmark.png", label: "BIS\nHallmark" },
              { img: "/diamond.png", label: "Certified\nDiamonds" },
              { img: "/shipping.png", label: "Insured\nShipping" },
              { img: "/exchange.png", label: "Lifetime\nExchange" },
              { img: "/returns.png", label: "Easy\nReturns" },
            ].map(({ img, label }, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-white flex items-center justify-center">
                  <img src={img} alt={label} className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                </div>
                <h3 className="mt-4 md:mt-8 text-[13px] md:text-[18px] uppercase tracking-wide leading-snug whitespace-pre-line">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ── Shared Best Sellers Section ── */
function BestSellersSection({
  title,
  showCategories = false,
  showViewAll = false,
  cards,
}: {
  title: string;
  showCategories?: boolean;
  showViewAll?: boolean;
  cards: { img: string; name: string; price: string; mrp: string; off: string }[];
}) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="flex justify-center mb-6 md:mb-8">
        <h2 className="text-2xl md:text-[34px] font-medium uppercase tracking-wide text-gray-900">
          {title}
        </h2>
      </div>

      {showCategories && (
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10 md:mb-14 font-['Jost'] px-4">
          {["RINGS", "MANGALSUTRA", "EARRING", "CHAIN", "BRACELETS"].map((cat, i) => (
            <button
              key={cat}
              className={`px-6 md:px-9 py-2 md:py-3 rounded-full text-[13px] md:text-[14px] font-normal tracking-[0.7px] leading-[14px] border ${
                i === 0
                  ? "bg-sky-400 text-white border-sky-400"
                  : "border-pink-200 text-[#2A7C89] bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="max-w-[1850px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-7">
          {cards.map((card, i) => (
            <div key={i}>
              <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[180px] sm:h-[260px] md:h-[360px] flex items-center justify-center">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-[82%] h-[82%] object-contain"
                />
                <button className="absolute top-3 left-3 bg-white rounded-full w-9 h-9 md:w-11 md:h-11 shadow-sm flex items-center justify-center text-sky-400 text-lg md:text-xl">
                  ♡
                </button>
              </div>
              <h3 className="mt-3 md:mt-5 text-[14px] md:text-[18px] font-normal text-gray-800 leading-snug">
                {card.name}
              </h3>
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <span className="text-[15px] md:text-[18px] font-semibold text-black">{card.price}</span>
                <span className="text-pink-300 line-through text-[13px] md:text-[15px]">{card.mrp}</span>
              </div>
              <p className="text-sky-600 text-[13px] md:text-[15px] mt-1">{card.off} off on product</p>
            </div>
          ))}
        </div>
      </div>

      {showViewAll && (
        <div className="flex justify-center mt-8 md:mt-10">
          <button className="px-6 py-3 rounded-full bg-sky-400 text-white text-[14px] font-normal tracking-[0.7px] border border-sky-400">
            View All
          </button>
        </div>
      )}
    </section>
  );
}