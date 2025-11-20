// ServicesSection.js
import clsx from 'clsx';

function ServicesSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #bf0000 0%, #800000 100%)',
        minHeight: '100vh',
      }}
      className="py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto text-center text-white mb-12">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-md">Unlock Your Digital Potential</h2>
        <p className="text-lg md:text-xl text-gray-100 fade-in">
          Custom web, app development & marketing solutions designed to boost your business growth.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl">
          <div className="flex justify-center mb-4 text-[#bf0000]">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 00-3.16 19.48l-4.24 4.24a1 1 0 001.41 1.41l4.24-4.24A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-center text-gray-900">Web Development</h3>
          <p className="text-gray-700 text-center mb-4">
            Responsive, modern websites & eCommerce stores built for speed and usability.
          </p>
          <div className="text-center">
            <a
              href="/work/services"
              className="bg-[#bf0000] text-white font-semibold px-4 py-2 rounded hover:bg-[#9b0000] transition"
            >
              Know More
            </a>
          </div>
        </div>
        {/* Service 2 */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl">
          <div className="flex justify-center mb-4 text-[#bf0000]">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 10.5V8a4 4 0 00-8 0v2.5a4 4 0 00-1 7.5h10a4 4 0 00-1-7.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-center text-gray-900">Mobile & App Development</h3>
          <p className="text-gray-700 text-center mb-4">
            Native, hybrid, or progressive apps with sleek UI and smooth performance.
          </p>
          <div className="text-center">
            <a
              href="/work/services"
              className="bg-[#bf0000] text-white font-semibold px-4 py-2 rounded hover:bg-[#9b0000] transition"
            >
              Know More
            </a>
          </div>
        </div>
        {/* Service 3 */}
        <div className="bg-white rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-2xl">
          <div className="flex justify-center mb-4 text-[#bf0000]">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4a8 8 0 00-8 8v4a4 4 0 004 4h8a4 4 0 004-4v-4a8 8 0 00-8-8zm0 14a6 6 0 01-6-6v-2a6 6 0 0112 0v2a6 6 0 01-6 6z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-center text-gray-900">Digital Marketing</h3>
          <p className="text-gray-700 text-center mb-4">
            SEO, social media, and ad campaigns to grow your brand and attract more clients.
          </p>
          <div className="text-center">
            <a
              href="/work/services"
              className="bg-[#bf0000] text-white font-semibold px-4 py-2 rounded hover:bg-[#9b0000] transition"
            >
              Know More
            </a>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <a
          href="/work/contact"
          className="inline-block bg-[#bf0000] hover:bg-[#9b0000] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-1"
        >
          Let&apos;s Create Your Next Big Project! 
        </a>
      </div>
    </section>
  );
}

export default ServicesSection;
