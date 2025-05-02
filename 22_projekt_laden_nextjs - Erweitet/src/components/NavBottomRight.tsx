"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { MdLocationOn, MdPersonOutline, MdMenuBook } from "react-icons/md"; 
import { FaShoppingBag } from "react-icons/fa"; 

function NavBottomRight() {
  const pathname = usePathname();

  const navRights = [
    {
      href: "/unternehmen",
      title: "Meine Filiale",
      icon: <MdLocationOn className="h-7 w-7 mb-1" />, 
    },
    {
      href: "/login",
      title: "Mein Konto",
      icon: <MdPersonOutline className="h-7 w-7 mb-1" />, 
    },
    {
      href: "/broschüre",
      title: "Broschüre",
      icon: <MdMenuBook className="h-7 w-7 mb-1" />, 
    },
    {
      href: "/cart",
      title: "Warenkorb",
      icon: <FaShoppingBag className="h-6 w-6 mb-1 " />, 
    },
  ];

  return (
    <nav className="h-15">
      <Container>
        <div className="flex justify-between items-center h-16 font-thin"> {/* تغییر فونت */}
          {/* Right-aligned navRights */}
          <div className="flex h-full">
            {/* Other Right Items */}
            {navRights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center px-4 h-full transition 
                  ${pathname === item.href ? "text-orange-500" : "text-black"} 
                  hover:text-orange-500 hover:underline`}
              >
                {/* SVG Icon */}
                {item.icon}
                {/* Title */}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBottomRight;
