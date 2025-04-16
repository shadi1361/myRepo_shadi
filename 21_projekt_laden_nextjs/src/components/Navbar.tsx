"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/contaxt/ShoppingCartContext";

function Navbar() {
  const pathname = usePathname();
  const {cartTotalQty}=useShoppingCartContext()

  const navLinks = [
    {
      href: "/",
      title: "خانه "
    },
    {
      href: "/store",
      title: " فروشگاه "
    }
  ];

  return (
    <nav className="shadow p-4">
      <Container>
        <div className="flex justify-between">
          <div>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className={`mr-4 ${
                  pathname === item.href ? "text-sky-500" : ""
                }`}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <span className="px-2 py-1 bg-orange-400 text-white rounded-full">{cartTotalQty}</span>
            <Link href="/cart" >سبد خرید</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
