/* "use client";

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
    const searchParams=useSearchParams()

  const handlePageClick = (e: { selected: number }) => {  
    const page = e.selected + 1;


    const currentSearchParams=new URLSearchParams(searchParams.toString());

    currentSearchParams.set("page", page.toString())
    currentSearchParams.set("per_page", "1")

    router.push(`/store?${currentSearchParams.toString()}`);  // Adressierung zum Aufrufen der gewünschten Seite
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
 */