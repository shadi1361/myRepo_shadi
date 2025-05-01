"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

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
    <div className="flex items-center space-x-2">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 h-12 w-110 mr-1 border border-black box-border rounded"
        type="text"
        placeholder="Artikelnummer / Suchbegriffe"
      />
      <button
        onClick={handleSearch}
        className="bg-black text-white border border-black p-2 h-12 w-30 box-border rounded cursor-pointer"
      >
        Suchen
      </button>
    </div>
  );
}

export default Search;