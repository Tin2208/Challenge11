import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

const CrudApp = () => {
  const [currentItem, setCurrentItem] = useState(null);

  // ✅ Khởi tạo state từ localStorage
  const [items, setItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem("items");
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error("Lỗi khi parse JSON từ localStorage:", error);
      return [];
    }
  });

  // ✅ Lưu dữ liệu vào localStorage khi items thay đổi
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // ✅ Thêm hoặc cập nhật item
  const addItem = (item) => {
    if (currentItem) {
      const updatedItems = items.map((i) =>
        i.id === currentItem.id ? { ...item, id: currentItem.id } : i
      );
      setItems(updatedItems);
      setCurrentItem(null);

      console.log(items);
    } else {
      // Thêm item mới
      setItems([...items, { id: Date.now(), ...item }]);
    }
  };

  // ✅ Xóa item theo ID
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // ✅ Chỉnh sửa item
  const editItem = (item) => {
    setCurrentItem(item);
  };

  return (
    <div className="w-1/2 bg-[#1d293d] shadow rounded p-10">
      <h2 className="text-center text-4xl font-bold tracking-tighter text-white">
        Crud App
      </h2>
      <Form addItem={addItem} currentItem={currentItem} />
      <Table items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
};

export default CrudApp;
