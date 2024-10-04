import { useParams } from "react-router-dom";
import React from "react";
import { product } from "../product";

const desc =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using here, content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const ShopDetails = ({ img, title }) => {
  const { id } = useParams();

  const item = product.find((item) => item.id === id);

  return (
    <div className="flex justify-center">

      <div className="m-4">
        <div className="flex justify-center max-w-[800px] p-4 items-center md:mt-20 mb-10 gap-2">
          <div className="bg-yellow-400 hover:bg-yellow-500 p-4 w-1/2 justify-center flex">
            <button className="font-bold uppercase text-xl text-white">
              Call +2345678902
            </button>
          </div>

          <div className="bg-green-500 hover:bg-green-600 p-4 w-1/2 justify-center flex ">
            <button className="font-bold uppercase text-xl text-white">
              {" "}
              whatsApp
            </button>
          </div>
        </div>

        <div className="flex  justify-center items-center px-4 max-w-[800px]">
          <div className="md:flex justify-center md:space-x-2 md:space-y-0 space-y-3">
            <img 
            src={item.imgUrl} 
            className="md:w-1/2 w-5/5" 
            alt={item.name} />

            <div className="bg-gray-200 p-4">
              <h1 className="text-3xl font-bold md:py-8">{item.name}</h1>

              <p className="text-xl py-2">
                Brand : The product price goes here
              </p>

              <p className="text-3xl font-semibold md:py-8">$ {item.price}</p>
              <p className="md:py-2 py-8">Shipping Policy</p>
              <p className="py-4">
                <b>Description: </b> {desc}
              </p>

              <div>
                <button className="bg-yellow-500 hover:bg-yellow-400 p-3 my-4 w-full uppercase text-xl font-bold text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
