import { useParams } from 'react-router-dom';
import React from 'react';
import { product } from '../product';

const ShopDetails = () => {
  const { id } = useParams();
  console.log(id)
  const item = product.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <img
          src={item.imgUrl}
          className="w-[300px] h-[300px] mb-4"
          alt={item.name}
        />
        <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
        <p className="text-lg font-semibold mb-4">$ {item.price}</p>
        <p className="text-gray-700">{item.description || "No description available"}</p>
      </div>
    </div>
  );
};

export default ShopDetails;
