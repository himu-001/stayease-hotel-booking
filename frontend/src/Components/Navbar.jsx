import React,  { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../Context/AppContext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {

    const { navigate, user, setUser } = React.useContext(AppContext);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Hotels", path: "/hotels" },
        { name: "Rooms", path: "/rooms" },
        { name: "About", path: "/about" },
    ];

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const logout = () => {
        setUser(false);
        toast.success("Logout successful");
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 bg-[#FF6347] w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-4 md:py-6 transition-all duration-500 z-50">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
                <img
                    src={assets.logo}
                    alt="StayEase"
                    className="h-9 w-auto"
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">

                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        className="group flex flex-col gap-0.5 text-white"
                    >
                        {link.name}

                        <div className="bg-white h-0.5 w-0 group-hover:w-full transition-all duration-300" />
                    </Link>
                ))}

                <button className="border border-white text-white px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    Owner
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">

                {user ? (
                    /* Logged In */
                    <div className="relative group inline-block">

                        {/* Profile Icon */}
                        <img
                            src={assets.profile_icon}
                            alt="Profile"
                            className="w-12 h-12 rounded-full cursor-pointer"
                        />

                        {/* Desktop Dropdown */}
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">

                            <ul className="py-2">

                                {/* My Bookings */}
                                <li>
                                    <Link
                                        to="/my-bookings"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        My Bookings
                                    </Link>
                                </li>

                                {/* Logout */}
                                <li>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Log Out
                                    </button>
                                </li>

                            </ul>

                        </div>
                    </div>

                ) : (

                    /* Logged Out */
                    <button
                        onClick={() => navigate("/login")}
                        className="px-8 py-2.5 rounded-full ml-4 bg-white text-black cursor-pointer hover:bg-primary hover:text-white"
                    >
                        Login
                    </button>
                )}

            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">

                <svg
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="h-6 w-6 cursor-pointer text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>

            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
                    isMenuOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }`}
            >

                {/* Close Button */}
                <button
                    className="absolute top-4 right-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Mobile Navigation Links */}
                {navLinks.map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Owner Button */}
                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                    Owner
                </button>

                {/* Mobile User Section */}
                {user ? (
                    <>
                        {/* Profile Icon */}
                        <img
                            src={assets.profile_icon}
                            alt="Profile"
                            className="w-14 h-14 rounded-full"
                        />

                        {/* My Bookings */}
                        <Link
                            to="/my-bookings"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-700"
                        >
                            My Bookings
                        </Link>

                        {/* Logout */}
                        <button
                            onClick={logout}
                            className="bg-red-500 text-white px-8 py-2.5 rounded-full"
                        >
                            Log Out
                        </button>
                    </>
                ) : (

                    /* Mobile Login */
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            navigate("/login");
                        }}
                        className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 hover:bg-primary hover:text-white"
                    >
                        Login
                    </button>
                )}

            </div>

        </nav>
    );
};

export default Navbar;
