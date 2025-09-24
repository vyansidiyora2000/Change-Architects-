import React from "react";

export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Deliver", href: "#deliver" },
    { name: "Solutions", href: "#solutions" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-700">
          Change Architects Inc.
        </h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-purple-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
