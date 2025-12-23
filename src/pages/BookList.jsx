import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../api/bookService";
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xoá?");
    if (!confirmDelete) return;

    await deleteBook(id);
    alert("Delete thành công");

    // load lại danh sách
    loadBooks();
  };

  return (
    <div>
      <h1>Library</h1>

      <button onClick={() => navigate("/add")}>Add a new Book</button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.quantity}</td>
              <td>
                <button onClick={() => navigate(`/edit/${b.id}`)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(b.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
