"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

function Navbar() {
  const pathname = usePathname();

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
            <Link href="/cart" >سبد خرید</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
