import React, { useEffect } from "react";
import { useState } from "react";

const Form = ({ addItem, currentItem }) => {
  const [Product, setProduct] = useState("");
  const [Price, setPrice] = useState("");
  const [Status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!Product.trim()) newErrors.Product = "Tên sản phẩm không được để trống";
    if (!Price.trim() || isNaN(Price) || Number(Price) <= 0)
      newErrors.Price = "Giá phải là số và lớn hơn 0";
    if (!Status.trim()) newErrors.Status = "Trạng thái không được để trống";
    setErrors(newErrors);
    console.log("newErrors", newErrors);

    if (Object.keys(newErrors).length > 0) return;

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
        <div>
          <input
            type="text"
            placeholder="Product Name"
            className="py-1.5 px-3 shadow rounded bg-[white] w-full "
            value={Product}
            onChange={(e) => setProduct(e.target.value)}
          />
          {errors.Product && <p className="text-red-500">{errors.Product}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Price"
            className="py-1.5 px-3 shadow rounded bg-[white] w-full"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.Price && <p className="text-red-500">{errors.Price}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Status"
            className="py-1.5 px-3 shadow rounded bg-[white] w-full"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
          />
          {errors.Status && <p className="text-red-500">{errors.Status}</p>}
        </div>
        <button
          type="submit"
          className="h-10 py-1 px-3 font-semibold rounded border border-slate-200 text-slate-600 bg-[white] cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
