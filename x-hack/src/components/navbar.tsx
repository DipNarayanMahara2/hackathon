import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-green-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center ">
        {/* <h1 className="text-2xl font-bold">Trash to Treasure</h1> */}
        <a href="/">
          <img src="/logo.png" alt="logo" className="width" />
        </a>
        <ul className="flex gap-6">
          <li>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#guide" className="hover:underline">
              Sorting Guide
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="" className="hover:underline">
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
