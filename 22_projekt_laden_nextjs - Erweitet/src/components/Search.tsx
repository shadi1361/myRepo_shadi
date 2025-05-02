"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search);

    router.push(`/store?${currentSearchParams.toString()}`);
  };

  return (
    <div className="flex">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white focus:outline-none focus:border-gray-400 p-4 h-12 w-130 border border-gray-400 box-border rounded-l placeholder:text-sm"
        type="text"
        placeholder="Artikelnummer / Suchbegriffe"
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white border border-black p-2 h-12 w-30 box-border rounded-r cursor-pointer flex items-center justify-center"
      >
        {/* SVG für die Lupe (Outline) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Search;