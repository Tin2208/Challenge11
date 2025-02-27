import React from "react";

const Table = ({ items, deleteItem, editItem }) => {
  return (
    <table className="shadow-lg bg-[white] font-[poppins] px-10 w-[100%] rounded">
      <thead>
        <tr>
          <th className="bg-zinc-100 text-start px-4 py-3">ID</th>
          <th className="bg-zinc-100 text-start px-4 py-3">Product Name</th>
          <th className="bg-zinc-100 text-start px-4 py-3">Price</th>
          <th className="bg-zinc-100 text-start px-4 py-3">Status</th>
          <th className="bg-zinc-100 text-start px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <tr key={item.id}>
              <td className="px-4 py-4">{index + 1}</td>
              <td className="px-4 py-4">{item.Product}</td>
              <td className="px-4 py-4">${item.Price}</td>
              <td className="px-4 py-4">{item.Status}</td>
              <td className="px-4 py-4">
                <button
                  type="button"
                  className="bg-green-700 text-white px-4 py-1.5 rounded active:scale-95 mr-5 cursor-pointer"
                  onClick={() => editItem(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="bg-red-700 text-white px-4 py-1.5 rounded active:scale-95 cursor-pointer"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center py-4">
              No Record Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
