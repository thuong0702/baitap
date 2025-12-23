import { useEffect, useState } from "react";
import { getBookById, updateBook } from "../api/bookService";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const res = await getBookById(id);
    setTitle(res.data.title);
    setQuantity(res.data.quantity);
  };

  const handleSave = async () => {
    await updateBook(id, {
      title,
      quantity: Number(quantity),
    });

    alert("Cập nhật thành công");
    navigate("/");
  };

  return (
    <div>
      <h1>Edit</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditBook;
