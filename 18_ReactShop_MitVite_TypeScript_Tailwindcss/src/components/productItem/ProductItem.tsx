import { IProduct } from "../../types/server";

type TProductItem = IProduct;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="shadow border rounded pb-2">
      <img className="rounded-t transform hover:scale-110 transition-all duration-300 " src={image} alt="" />
      <div className="flex justify-between px-1 mt-1">
        <h3 className="line-clamp-1 font-bold w-52">{title}</h3>
        <span className="font-bold">{price}$</span>
      </div>
      <div className="px-4">
        <p className="line-clamp-2 text-left text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
