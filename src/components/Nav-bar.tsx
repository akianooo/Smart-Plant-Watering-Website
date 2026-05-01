import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full h-20 text-black drop-shadow bg-[#6fcf97] p-5">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            href="/"
            className="hover:text-[#388e3c] transition-colors duration-150 font-semibold"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-[#388e3c] transition-colors duration-150 font-semibold"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className="hover:text-[#388e3c] transition-colors duration-150 font-semibold"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
