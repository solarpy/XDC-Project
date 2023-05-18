import React from "react";

const commonLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insurance", label: "Insurance" },
  { href: "/team", label: "Team" },
  { href: "/new", label: "New" },
];

export default function Navbar() {
  return (
    <div className="flex justify-around mt-2">
      <div>
        <a href="/">Logo</a>
      </div>

      <div>
        <ul className="flex space-x-4">
          {commonLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-base text-gray-600 font-medium hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
}
