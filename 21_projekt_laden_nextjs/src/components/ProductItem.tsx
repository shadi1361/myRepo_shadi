"use client";

import { formatNumberWithCommas } from "@/utilities/number";
import Image from "next/image";

export interface IProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface IProductList {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
  data: IProductItemProps[];
}

function ProductItem({ image, title, price }: IProductItemProps) {
  return (
    <div className="shadow-md rounded-lg">
      <div className="h-48 relative">
        {image ? (
          <Image
            src={image}
            alt={title || "Product Image"}
            fill // Ersetzt layout="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Fügt Größen für responsive Bilder hinzu
            className="rounded-t-lg object-cover" // Verwendet Tailwinds object-cover anstelle von objectFit
            priority // Lädt das Bild vor, um die LCP-Leistung zu verbessern
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center rounded-t-lg">
            <p>Kein Bild</p>
          </div>
        )}
      </div>

      {/* Details für Produkte */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-700">
          Preis: <span>{formatNumberWithCommas(price)}$</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
