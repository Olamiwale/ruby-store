import React from "react";
import { useNavigate } from "react-router-dom";
import { product } from "../product";
import PageHeader from "../components/PageHeader";
import ShopCategory from "./ShopCategory";
import MoShopCate from "./MoShopCate";
import Himg from '../assets/pageH-bg.png'

export default function Shop() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(`/shop/${item.id}`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <PageHeader img={Himg} title='Welcome to Our Amazing Store' />

      <MoShopCate />

      <div className="md:flex flex justify-center max-w-[1200px]  p-4 gap-5">
        <div className="p-4 grid lg:grid-cols-4 md:grid-cols-3 bg-gray-200 justify-center gap-4 shadow-lg shadow-gray-400">
          {product.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center bg-gray-100 shadow-lg items-center cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <img
                src={item.imgUrl}
                className="md:w-[200px] w-full h-[400px] md:h-[200px] pb-5 hover:opacity-60 transition-opacity duration-300"
                alt={item.name}
              />
              <p className="p-3 text-xl font-semibold">{item.name}</p>
              <p className="font-bold">$ {item.price}</p>
            </div>
          ))}
        </div>

        <ShopCategory />
      </div>
    </div>
  );
}
