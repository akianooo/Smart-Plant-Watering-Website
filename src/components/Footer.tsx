export default function Footer() {
  return (
    <footer className="flex flex-col min-h-fit bg-[#1a1a1a] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#00fa9a]">
            Smart Plant Watering
          </h3>
          <p className="text-gray-400">
            Keep your plants healthy with automated watering schedules and smart
            monitoring.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-[#00fa9a]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#00fa9a]">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#00fa9a]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@smartplantwatering.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Garden Lane, Plant City</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Smart Plant Watering. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
