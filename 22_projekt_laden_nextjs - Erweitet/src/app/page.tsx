"use client"; // Aktivierung von Client-seitigen Funktionen
import Container from "@/components/Container";
import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Beispiel-Daten
const bottomData = [1, 2, 3, 4, 5]; // داده‌های بخش پایین

function Home() {
  const [currentPage, setCurrentPage] = useState(0); // صفحه فعلی
  const itemsPerPage = 1; // تعداد آیتم‌ها در هر صفحه

  // محاسبه آیتم‌های صفحه فعلی
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <Container>
      {/* Andere Abschnitte der Hauptseite */}

      {/*1- Pagination-Bereich-Top*/}
      <div className="grid grid-cols-1 gap-4 py-4 shadow bg-green-200">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-blue-600 h-170 flex items-center justify-center"
          >
            {item}
          </div>
        ))}

        {/* Pagination-Tasten */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 flex items-center justify-center"
          >
            <BiChevronLeft className="text-2xl" /> {/* Pfeil nach links */}
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(data.length / itemsPerPage) - 1)
              )
            }
            disabled={endIndex >= data.length}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 flex items-center justify-center"
          >
            <BiChevronRight className="text-2xl" /> {/* Pfeil nach rechts */}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 h-200 py-4 gap-6 bg-amber-950 shadow">
        {" "}
        {/* Fester Abschnitte*/}
        {/*2- Grid für Abschnitt 1 */}
        <div className="bg-yellow-200 p-2">
          <div className="grid grid-rows-2 gap-25">
            <div className="bg-red-600 h-70 flex items-center justify-center">
              1.1
            </div>
            <div className="bg-red-600 h-70 flex items-center justify-center">
              1.2
            </div>
          </div>
        </div>
        {/* Abschnitt 2 bleibt unverändert */}
        <div className="bg-yellow-200">2</div>
        {/* Grid für Abschnitt 3 */}
        <div className="bg-yellow-200 p-2">
          <div className="grid grid-rows-2 gap-25">
            <div className="bg-green-400 h-70 flex items-center justify-center">
              3.1
            </div>
            <div className="bg-green-400 h-70 flex items-center justify-center">
              3.2
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 bg-sky-300 h-100 py-4">
        <div className="bg-pink-500"></div>
        <div className="bg-pink-900"></div>
      </div>

      {/*3- Pagination-Bereich-Bottom*/}
      <div className="grid grid-cols-5 shadow bg-purple-700 h-120 gap-5 p-3">
        {bottomData.map((item, index) => (
          <div
            key={index}
            className="bg-white h-110 flex items-center justify-center"
          >
            {item}
          </div>
        ))}
      </div>

          {/* Pagination-Tasten */}
          <div className="flex justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 flex items-center justify-center"
          >
            <BiChevronLeft className="text-2xl" /> {/* Pfeil nach links */}
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(data.length / itemsPerPage) - 1)
              )
            }
            disabled={endIndex >= data.length}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 flex items-center justify-center"
          >
            <BiChevronRight className="text-2xl" /> {/* Pfeil nach rechts */}
          </button>
        </div>
    </Container>
  );
}

export default Home;
