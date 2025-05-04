import Link from 'next/link';
import React from 'react';

function TopNavbar() {
  return (
    <div className="flex justify-center items-center bg-orange-600 text-white font-stretch-ultra-expanded font-medium h-10">
      <Link href={"/store"}>
      60% auf Herrendüfte nur am 01.05.2025
      </Link>
      
    </div>
  );
}

export default TopNavbar;