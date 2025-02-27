import React, { useEffect } from "react";
import { useState } from "react";

const Form = ({ addItem, currentItem }) => {
  const [Product, setProduct] = useState("");
  const [Price, setPrice] = useState("");
  const [Status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Product.trim() || !Price.trim() || !Status.trim()) return;
    addItem({ id: Date.now(), Product, Price, Status });
    setProduct("");
    setPrice("");
    setStatus("");
  };

  useEffect(() => {
    if (currentItem) {
      setProduct(currentItem.Product);
      setPrice(currentItem.Price);
      setStatus(currentItem.Status);
    }
  }, [currentItem]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between my-10 gap-3">
        <input
          type="text"
          placeholder="Product Name"
          className="py-1.5 px-3 shadow rounded bg-[white] w-[30%] "
          value={Product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          className="py-1.5 px-3 shadow rounded bg-[white] w-[30%]"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          className="py-1.5 px-3 shadow rounded bg-[white] w-[30%]"
          value={Status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          type="submit"
          className="h-10 py-1 px-3 font-semibold rounded border border-slate-200 text-slate-600 bg-[white]"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
