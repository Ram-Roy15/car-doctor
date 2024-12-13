import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  "";

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className=" bg-slate-500 ">
      <div className="navbar bg-slate-900  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <Link href="/">
            <Image
              alt="logo"
              src="/assets/logo.png"
              height={60}
              width={100}
            ></Image>
          </Link>
        </div>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              className="font-semibold text-white hover:text-primary hover:animate-pulse duration-300"
              href={item.path}
              key={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <dir className="flex items-center space-x-3 ">
            <CiSearch className="text-2xl hover:text-orange-300 hover:animate-pulse" />
            <CiShoppingCart className="text-2xl hover:text-orange-300 hover:animate-pulse" />
            <a className="btn btn-outline btn-primary hover:animate-pulse px-4">
              Appointment
            </a>
          </dir>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
