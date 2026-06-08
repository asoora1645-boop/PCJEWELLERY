export default function Footer() {
  return (
    <footer className="bg-cyan-500 text-white pt-16 pb-6 px-16 max-md:px-5 max-md:pt-12">
      
      {/* Top Grid */}
      <div className="grid grid-cols-5 gap-14 max-md:grid-cols-1 max-md:gap-10">

        {/* Company */}
        <div>
          <h3 className="text-[20px] font-medium tracking-[2px] uppercase mb-10 max-md:mb-5 max-md:text-[18px]">
            Company
          </h3>

          <ul className="space-y-7 text-[17px] text-white/70 font-medium max-md:space-y-4 max-md:text-[15px]">
            <li>About Us</li>
            <li>Why Choose Us ?</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Corporate</li>
          </ul>
        </div>

        {/* Our Policies */}
        <div>
          <h3 className="text-[20px] font-medium tracking-[2px] uppercase mb-10 max-md:mb-5 max-md:text-[18px]">
            Our Policies
          </h3>

          <ul className="space-y-7 text-[17px] text-white/70 font-medium max-md:space-y-4 max-md:text-[15px]">
            <li>Refund & Exchange Policy</li>
            <li>Cancellation Policy</li>
            <li>Buy Back Policy</li>
            <li>Shipping Policy</li>
            <li>Corporate Gifting</li>
            <li>Terms And Conditions</li>
          </ul>
        </div>

        {/* Customer Delight */}
        <div>
          <h3 className="text-[20px] font-medium tracking-[2px] uppercase mb-10 max-md:mb-5 max-md:text-[18px]">
            Customer Delight
          </h3>

          <ul className="space-y-7 text-[17px] text-white/70 font-medium max-md:space-y-4 max-md:text-[15px]">
            <li>Best Prices Assurance</li>
            <li>Jewellery Makeover</li>
            <li>Track Your Order</li>
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h3 className="text-[20px] font-medium tracking-[2px] uppercase mb-10 max-md:mb-5 max-md:text-[18px]">
            Guides
          </h3>

          <ul className="space-y-7 text-[17px] text-white/70 font-medium max-md:space-y-4 max-md:text-[15px]">
            <li>Diamond Guide</li>
            <li>Metal Guide</li>
            <li>Setting Guide</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[20px] font-medium tracking-[2px] uppercase mb-10 max-md:mb-5 max-md:text-[18px]">
            Newsletter
          </h3>

          {/* Email Input */}
          <div className="relative mb-12 max-md:mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[56px] rounded-xl px-8 text-gray-500 text-[18px] outline-none max-md:h-[50px] max-md:px-5 max-md:text-[15px]"
            />

            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-black text-3xl">
              ›
            </button>
          </div>

          {/* Contact Details */}
          <div className="space-y-7 text-[17px] text-white/90 font-medium max-md:space-y-4 max-md:text-[15px]">
            <p>
              Call:{" "}
              <span className="font-semibold">
                1800-120-1434 (Toll Free)
              </span>
            </p>

            <p>
              Whatsapp:{" "}
              <span className="font-semibold">
                7669389128
              </span>
            </p>

            <p>
              Visit Us:
              <span className="font-semibold">
                {" "}
                Monday - Saturday | 10am - 6pm IST
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/30 mt-20 pt-8 relative max-md:mt-12 max-md:pt-6">

        {/* Social Icons Mobile */}
        <div className="hidden max-md:flex justify-center gap-4 mb-6 flex-wrap">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
            f
          </div>

          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
            ◎
          </div>

          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
            t
          </div>

          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
            ▶
          </div>

          <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-xl shadow-lg">
            📞
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-white/60 text-[18px] font-medium max-md:text-[14px]">
          © PC JEWELLER · ALL RIGHTS RESERVED.
        </p>

        {/* Desktop Social Icons */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 md:flex items-center gap-4 hidden">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
            f
          </div>

          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
            ◎
          </div>

          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
            t
          </div>

          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">
            ▶
          </div>

          <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center text-2xl shadow-lg">
            📞
          </div>
        </div>
      </div>
    </footer>
  );
}