import Image from "next/image";

export interface IProductItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

function ProductItem({ image, title, price }: IProductItemProps) {
  return (
    <div className="shadow-md rounded-lg">
      {/* Image */}
      <div className="h-48 relative">
        <Image
          src={image}
          alt={title} //as title 
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Detail for Products*/}
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-700">
          قیمت : <span className="font-semibold">{price}$</span>
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
