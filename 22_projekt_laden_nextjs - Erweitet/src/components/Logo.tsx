import React from "react";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex justify-start items-center">
      <Link href="#">
        <Image
          src="/fotos/my-logo2.png" // Pfad zu Ihrem Logo
          alt="Mein Logo"
          width={200} // Breite des Logos
          height={80} // Höhe des Logos
        />
      </Link>
    </div>
  );
}

export default Logo;