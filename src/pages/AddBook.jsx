import { useState } from "react";
import { addBook } from "../api/bookService";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title || !quantity) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    await addBook({
      title,
      quantity: Number(quantity),
    });

    alert("Thêm book thành công");
    navigate("/");
  };

  return (
    <div>
      <h1>Add a new Book</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddBook;
