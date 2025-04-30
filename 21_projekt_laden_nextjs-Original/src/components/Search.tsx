"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

function Search() {
    const searchParams=useSearchParams()
    const router=useRouter()
    const [search, setSearch] = useState("")
    const handleSearch=()=>{


const currentSearchParams=new URLSearchParams(searchParams.toString())
currentSearchParams.set("title", search)

      router.push(`/store?${currentSearchParams.toString()}`)
    }

  return (
    <div>
        <input onChange={(e)=>setSearch(e.target.value)} className="bg-slate-400 p-1 rounded w-100" type="text" placeholder="نام کالا را وارد کنید" />
        <button onClick={handleSearch} className="bg-sky-500 text-white p-1 px-3 ml-3 w-30 rounded">جستجو</button>
    </div>
  )
}

export default Search