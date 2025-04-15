import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="shadow p-4 mr-4">
      <Link className="mr-4" href="/">
        Home
      </Link>
      <Link href="/blogs" className="mr-4">Blogs</Link>
      <Link href="/create-blog">Create</Link>
    </div>
  );
}

export default Navbar;
