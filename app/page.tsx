import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
import Latest from "@/components/latest/Latest";
export default function Home() {
  return (
    <main>
<header className="relative w-full h-[82px] overflow-hidden">

  {/* Background Image */}
  <img
    src="/headerfront.jpg"
    alt="header background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Header Content */}
  <div className="relative z-10 flex items-center justify-between px-8 h-full">

    {/* Store Locator */}
    <button className="flex items-center gap-2 border border-cyan-400 rounded-full px-6 h-[44px] bg-white">
      📍
      <span>Store Locator</span>
    </button>

    {/* Logo */}
    <img
      src="/logo.png"
      alt="logo"
      className="h-[70px]"
    />

    {/* Search + Icons */}
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="border border-cyan-400 rounded-full px-5 h-[44px] bg-white"
      />

      <button className="bg-white rounded-full w-[44px] h-[44px] flex items-center justify-center">
        👤
      </button>

      <button className="bg-white rounded-full w-[44px] h-[44px] flex items-center justify-center">
        👜
      </button>

      <button className="bg-white rounded-full w-[44px] h-[44px] flex items-center justify-center">
        ❤️
      </button>
    </div>

  </div>
</header>
  
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold align-middle">PCJ</h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="/">READY TO SHIP</a>
            <a href="/rings">RINGS</a>
            <a href="/earrings">EARRING</a>
            <a href="/necklaces">NECKLACE</a>
            <a href="/mangalsutras">MANGALSUTRA</a>
            <a href="/coins">COINS</a>
            <a href="/jewellery">ALL JEWELLERY</a>
            <a href="/corporate">CORPORATE</a>
            <button
  className="flex items-center justify-center 
  w-[162px] h-[32px] rounded-full 
  text-[14px] font-medium uppercase 
  leading-[20px] tracking-[0.05em] 
  text-[#6F4A0F]
  shadow-[inset_0_-3.8px_1.9px_rgba(160,94,57,0.25),inset_0_5.7px_1.9px_rgba(255,255,255,0.25)]"
  style={{
    background:
      "linear-gradient(85.24deg, #C59241 0.62%, #EFCB90 30.29%, #E0AE5F 53.1%, #F3D29C 79.29%, #DDBB84 107%)",
  }}
>
  DIGITAL GOLD
</button>
          </nav> 

</div>
      </header>
      <section className="min-h-screen relative">
        <div className="absolute inset-0">
          <Image
            src="/hero1.jpg"
            alt="Elegant jewellery hero"
            fill
            className="object-cover"
            priority
          />
          </div>
          <div className="absolute inset-0 bg-black/30"/>
        
        </section>        

      <section className="py-20 bg-stone-50">
        <div className="max-w-full mx-auto px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-italic uppercase text-gray-900">
              Curated Collections
            </h2>
            
          </div>
        </div>  

 <div className="grid w-full grid-cols-[70%_30%] gap-3 max-lg:grid-cols-1">
   
  {/* Amalia Collection */}
  <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[50vh]">
    <img
      src="/amalia.jpg"
      alt="Amalia Collection"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
  </div>

  {/* Celeste Collection */}
  <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[50vh]">
    <img
      src="/celeste.jpg"
      alt="Celeste Collection"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
  </div>
  </div>
  <div className="grid w-full grid-cols-[30%_70%] gap-3 max-lg:grid-cols-1 mt-3">
  {/* anand Collection */}
  <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[50vh]">
    <img
      src="/anand.jpg"
      alt="Anand Collection"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"

    />
    
  </div>
  <div className="relative overflow-hidden rounded-3xl shadow-lg group h-[50vh]">
    <img
      src="/baby.jpg"
      alt="Baby Collection"
      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
    />
  </div>


</div>

</section>

      {/* Best Sellers */}
      
<section className="py-16 bg-white">

  {/* Title */}
  <div className="flex justify-center mb-8">
    <h2 className="text-[34px] font-medium uppercase tracking-wide text-gray-900">
      Best Sellers
    </h2>
  </div>

  {/* Category Buttons */}
  <div className="flex flex-wrap justify-center gap-5 mb-14 font-['Jost']">

  <button className="px-9 py-3 rounded-full bg-sky-400 text-white text-[14px] font-normal tracking-[0.7px] leading-[14px] border border-sky-400">
    RINGS
  </button>

  <button className="px-9 py-3 rounded-full border border-pink-200 text-[#2A7C89] text-[14px] font-normal tracking-[0.7px] leading-[14px] bg-white">
    MANGALSUTRA
  </button>

  <button className="px-9 py-3 rounded-full border border-pink-200 text-[#2A7C89] text-[14px] font-normal tracking-[0.7px] leading-[14px] bg-white">
    EARRING
  </button>

  <button className="px-9 py-3 rounded-full border border-pink-200 text-[#2A7C89] text-[14px] font-normal tracking-[0.7px] leading-[14px] bg-white">
    CHAIN
  </button>

  <button className="px-9 py-3 rounded-full border border-pink-200 text-[#2A7C89] text-[14px] font-normal tracking-[0.7px] leading-[14px] bg-white">
    BRACELETS
  </button>

</div>

  {/* Cards */}
  <div className="max-w-[1850px] mx-auto px-10">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">

      {/* Card 1 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/ring1.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The R Alphabet Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹41,430
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹46,948
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          11.8% off on product
        </p>
      </div>

      {/* Card 2 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Dring6.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Ximena Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹11,815
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹13,410
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          11.9% off on product
        </p>
      </div>

      {/* Card 3 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Dring5.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Kennet Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹41,118
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹47,329
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          13.1% off on product
        </p>
      </div>

      {/* Card 4 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/ring10.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Akira Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹26,548
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹29,626
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          10.4% off on product
        </p>
      </div>

      {/* Card 5 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Dring4.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Savinay Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹39,041
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹41,870
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          6.8% off on product
        </p>
      </div>

    </div>
  </div>
</section>



<section className="w-full bg-white">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

    {/* Left Big Banner */}
    <div className="min-h-screen relative overflow-hidden">
      <img
        src="/collection.jpg"
        alt="Ring Collection"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      
    </div>

    {/* Right Product Section */}
    <div className="grid grid-cols-2 border-l">

      {/* Card 1 */}
      <div className="border border-pink-100 p-8">
        <div className="flex justify-end">
          <button className="text-2xl text-cyan-500">♡</button>
        </div>

        <img
          src="/ring1.jpg"
          alt="Ring"
          className="w-[260px] h-[260px] object-contain mx-auto"
        />

        <h3 className="text-[30px] mt-5 text-gray-800">
          The R Alphabet Diamond Ring
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl font-medium">₹41,558</span>
          <span className="text-pink-300 line-through text-xl">
            ₹47,076
          </span>
        </div>

        <p className="text-cyan-700 mt-1 text-lg">
          11.7% off on product
        </p>
      </div>

      {/* Card 2 */}
      <div className="border border-pink-100 p-8">
        <div className="flex justify-end">
          <button className="text-2xl text-cyan-500">♡</button>
        </div>

        <img
          src="/Dring1.jpg"
          alt="Ring"
          className="w-[260px] h-[260px] object-contain mx-auto"
        />

        <h3 className="text-[30px] mt-5 text-gray-800">
          The Azva Diamond Ring
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl font-medium">₹50,896</span>
          <span className="text-pink-300 line-through text-xl">
            ₹57,973
          </span>
        </div>

        <p className="text-cyan-700 mt-1 text-lg">
          12.2% off on product
        </p>
      </div>

      {/* Card 3 */}
      <div className="border border-pink-100 p-8">
        <div className="flex justify-end">
          <button className="text-2xl text-cyan-500">♡</button>
        </div>

        <img
          src="/Dring3.jpg"
          alt="Ring"
          className="w-[260px] h-[260px] object-contain mx-auto"
        />

        <h3 className="text-[30px] mt-5 text-gray-800">
          Heart Diamond Ring
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl font-medium">₹32,450</span>
          <span className="text-pink-300 line-through text-xl">
            ₹39,870
          </span>
        </div>

        <p className="text-cyan-700 mt-1 text-lg">
          15% off on product
        </p>
      </div>

      {/* Card 4 */}
      <div className="border border-pink-100 p-8">
        <div className="flex justify-end">
          <button className="text-2xl text-cyan-500">♡</button>
        </div>

        <img
          src="/Dring2.jpg"
          alt="Ring"
          className="w-[260px] h-[260px] object-contain mx-auto"
        />

        <h3 className="text-[30px] mt-5 text-gray-800">
          Elegant Blue Ring
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl font-medium">₹55,700</span>
          <span className="text-pink-300 line-through text-xl">
            ₹62,100
          </span>
        </div>

        <p className="text-cyan-700 mt-1 text-lg">
          10% off on product
        </p>
      </div>

    </div>
  </div>
</section>
<section className="py-16 bg-white">

  {/* Title */}
  <div className="flex justify-center mb-8">
    <h2 className="text-[34px] font-medium uppercase tracking-wide text-gray-900">
      Best Sellers
    </h2>
  </div>

  
  {/* Cards */}
  <div className="max-w-[1850px] mx-auto px-10">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">

      {/* Card 1 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Rring1.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The R Alphabet Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹41,430
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹46,948
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          11.8% off on product
        </p>
      </div>

      {/* Card 2 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Rring3.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Ximena Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹11,815
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹13,410
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          11.9% off on product
        </p>
      </div>

      {/* Card 3 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Rring2.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Kennet Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹41,118
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹47,329
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          13.1% off on product
        </p>
      </div>

      {/* Card 4 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Rring4.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Akira Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹26,548
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹29,626
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          10.4% off on product
        </p>
      </div>

      {/* Card 5 */}
      <div>
        <div className="relative border border-pink-100 rounded-2xl bg-[#fafafa] overflow-hidden h-[360px] flex items-center justify-center">
          <img
            src="/Rring5.jpg"
            alt="Ring"
            className="w-[82%] h-[82%] object-contain"
          />

          <button className="absolute top-5 left-5 bg-white rounded-full w-11 h-11 shadow-sm flex items-center justify-center text-sky-400 text-xl">
            ♡
          </button>
        </div>

        <h3 className="mt-5 text-[18px] font-normal text-gray-800">
          The Savinay Diamond Ring
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-[18px] font-semibold text-black">
            ₹39,041
          </span>

          <span className="text-pink-300 line-through text-[15px]">
            ₹41,870
          </span>
        </div>

        <p className="text-sky-600 text-[15px] mt-1">
          6.8% off on product
        </p>
      </div>

    </div>
  </div>
  <div className="flex justify-center mt-10">
  <button className="px-6 py-3 rounded-full bg-sky-400 text-white text-[14px] font-normal tracking-[0.7px] leading-[14px] border border-sky-400 ">
    View All
  </button>
  </div>
</section>
<section
  className="relative bg-[url('/head.jpg')] bg-cover bg-center h-[600px] flex items-center justify-center my-10 rounded-3xl overflow-hidden"
>
  {/* White transparent overlay */}
  <div className="absolute inset-0 bg-white/40"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-10">

    {/* Left Card */}
    <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-lg text-center">
      <div className="text-5xl mb-4">📍</div>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Find Stores Near You
      </h2>

      <p className="text-gray-500">
        Enter your pincode to discover the nearest store and
        visit us for an exclusive in-store experience.
      </p>
    </div>

    {/* Right Side */}
    <div className="relative w-full max-w-md">

      <img
  src="https://www.pcjeweller.com/img/home/downTomb.svg"
  alt="Store"
  width={800}
  height={450}
  className="w-full h-[450px] object-cover rounded-[40px] shadow-xl "
  
/>


        <input
          type="text"
          placeholder="Enter Pincode"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none mb-4"
        />

        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition">
          LOCATE ME
        </button>

      </div>
    </div>

</section>
 <Latest />

 <section className="w-full bg-gradient-to-r from-pink-300 via-pink-100 to-cyan-100 py-20">
  <div className="max-w-[1600px] mx-auto px-8">
    <div className="grid grid-cols-6 items-start text-center">

      {/* Lifetime Warranty */}
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
          <img
            src="/warranty.png"
            alt="Lifetime Warranty"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="mt-8 text-[18px] uppercase tracking-wide leading-8">
          Lifetime <br /> Warranty
        </h3>
      </div>

      {/* BIS Hallmark */}
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
          <img
            src="/hallmark.png"
            alt="BIS Hallmark"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="mt-8 text-[18px] uppercase tracking-wide leading-8">
          BIS <br /> Hallmark
        </h3>
      </div>

      {/* Certified Diamonds */}
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
          <img
            src="/diamond.png"
            alt="Certified Diamonds"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="mt-8 text-[18px] uppercase tracking-wide leading-8">
          Certified <br /> Diamonds
        </h3>
      </div>

      {/* Insured Shipping */}
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
          <img
            src="/shipping.png"
            alt="Insured Shipping"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="mt-8 text-[18px] uppercase tracking-wide leading-8">
          Insured <br /> Shipping
        </h3>
      </div>

      {/* Lifetime Exchange */}
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
          <img
            src="/exchange.png"
            alt="Lifetime Exchange"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="mt-8 text-[18px] uppercase tracking-wide leading-8">
          Lifetime <br /> Exchange
        </h3>
      </div>

      {/* Easy Returns */}
      <div className="flex flex-col items-center">
        <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center">
          <img
            src="/returns.png"
            alt="Easy Returns"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="mt-8 text-[18px] uppercase tracking-wide leading-8">
          Easy <br /> Returns
        </h3>
      </div>

    </div>
  </div>
</section>

 <Footer />
    </main>
  );
}
