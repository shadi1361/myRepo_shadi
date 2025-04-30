"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/contaxt/ShoppingCartContext";
import Cookies from "js-cookie";

function Navbar() {
  const pathname = usePathname();
  const { cartTotalQty } = useShoppingCartContext();

  const navLinks = [
    { href: "/", title: "Home" },
    { href: "/store", title: "Store" },
    { href: "/dashboard", title: "Dashboard" },
    { href: "/login", title: "Einloggen" }
  ];

  const navRights = [
    { href: "/unternehmen", title: "Unternehmen" },
    { href: "/service", title: "Service" },
    { href: "/babyclub", title: "BabyClub" },
    { href: "/karriere", title: "Karriere" }
  ];

  return (
    <nav className="shadow bg-slate-200">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Left-aligned navLinks */}
          <div className="flex h-full">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-center px-4 h-full transition 
                  ${pathname === item.href ? "text-orange-500" : "text-black"} 
                  hover:bg-white`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right-aligned navRights */}
          <div className="flex h-full">
            {/* Cart */}
            <div className="relative flex items-center justify-center px-4 h-full transition hover:bg-white">
              <Link
                href="/cart"
                className={`flex items-center justify-center h-full w-full transition 
                  ${pathname === "/cart" ? "text-orange-500" : "text-black"} 
                  hover:bg-white`}
              >
                Cart
              </Link>
              <span className="absolute top-1 right-1 bg-orange-400 text-white text-xs rounded-full px-2 py-0.5">
                {cartTotalQty}
              </span>
            </div>

            {/* Other Right Items */}
            {navRights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-center px-4 h-full transition 
                  ${pathname === item.href ? "text-orange-500" : "text-black"} 
                  hover:bg-white`}
              >
                {item.title}
              </Link>
            ))}

            {/* Logout */}
            <button
              onClick={() => {
                Cookies.remove("token");
                redirect("/login");
              }}
              className={`flex items-center justify-center px-4 h-full w-full transition hover:bg-white hover:text-black ${
                pathname === "/login" ? "text-orange-500" : "text-black"
              }`}
            >
              Ausloggen
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
