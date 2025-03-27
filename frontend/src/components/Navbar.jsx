import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-700">
        Nakhon Pathom Airline
      </div>
      <div className="flex gap-4 text-purple-700">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
    </nav>
  );
}
