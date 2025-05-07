"use client"; // Aktivierung von Client-seitigen Funktionen
import Container from "@/components/Container";
import React, { useState } from "react";

const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`); // Beispiel-Daten
const bottomData = [1, 2, 3, 4, 5]; // Daten für den unteren Bereich

//Teil1- Pagination1 :
function Home() {
  const [currentPage, setCurrentPage] = useState(0); // Aktuelle Seite
  const itemsPerPage = 1; // Anzahl der Elemente pro Seite

  //1-1 Berechnung der Elemente der aktuellen Seite
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <Container>
      {/*1 Bereich der Seitenzahl-Top*/}

      {/*1-1 Seitenzahl-Top*/}
      <div className="grid grid-cols-1 gap-4 py-4 shadow bg-green-200">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-blue-500 h-170 flex items-center justify-center"
          >
            {item}
          </div>
        ))}

        {/*1-2 Seitenzahl-Top-Tasten */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from(
            { length: Math.ceil(data.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full flex items-center justify-center transition-transform duration-700 ease-in-out ${
                  currentPage === index
                    ? "bg-blue-500 scale-150"
                    : "bg-white scale-100"
                } shadow-lg`}
              ></button>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 h-200 py-4 gap-6 bg-amber-950 shadow">
        {" "}
        {/************************************************************************************************/}
        {/* Abschnitt 1 */}
        {/* Grid für Abschnitt 1 */}
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
        {/* Grid für Abschnitt 2 */}
        <div className="bg-yellow-200 flex items-center justify-center">2</div>
        {/* Grid für Abschnitt 3 */}
        <div className="bg-yellow-200 p-2">
          <div className="grid grid-rows-2 gap-25 ">
            <div className="bg-green-600 h-70 flex items-center justify-center">
              3.1
            </div>
            <div className="bg-green-600 h-70 flex items-center justify-center">
              3.2
            </div>
          </div>
        </div>
      </div>
      {/************************************************************************************************/}
      {/* Abschnitt 2 */}
      <div className="grid grid-cols-2 gap-0 bg-sky-300 h-100 py-4">
        <div className="bg-pink-500"></div>
        <div className="bg-pink-900"></div>
      </div>

      {/************************************************************************************************/}
      {/*3- Bereich der Seitenzahl-Bottom*/}
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

      {/* Seitenzahl-Bottom-Tasten */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from(
          { length: Math.ceil(data.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full flex items-center justify-center transition-transform duration-700 ease-in-out ${
                currentPage === index
                  ? "bg-blue-500 scale-150"
                  : "bg-blue-800 scale-100"
              } shadow-lg`}
            ></button>
          )
        )}
      </div>
    </Container>
  );
}

export default Home;
