import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Posts", slug: "/add-posts", active: authStatus },
    ];

    return (
        <header className="w-full py-3 shadow bg-blue-500 sticky top-0 z-50">
            <Container>
                <nav className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <Logo width="184px" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-4">
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => navigate(item.slug)}
                                            className="px-5 py-2 text-white rounded-full hover:bg-blue-400 transition"
                                        >
                                            {item.name}
                                        </button>
                                    </li>
                                )
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 bg-blue-600 rounded-lg p-4">
                        <ul className="flex flex-col space-y-3">
                            {navItems.map(
                                (item) =>
                                    item.active && (
                                        <li key={item.name}>
                                            <button
                                                onClick={() => {
                                                    navigate(item.slug);
                                                    setMenuOpen(false);
                                                }}
                                                className="w-full text-left px-4 py-2 text-white rounded hover:bg-blue-500 transition"
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    )
                            )}
                            {authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </Container>
        </header>
    );
}

export default Header;
