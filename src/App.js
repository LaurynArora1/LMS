import "./styles.css";
// import Login from "./Login";
import React from "react";
import { useState } from "react";
import AddBook from "./Components/AddBook";
import BooksList from "./Components/BooksList";

export default function App() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    console.log("The id of the document to be edited is", id);
    setBookId(id);
  };
  return (
    <div className="App">
      <AddBook id={bookId} setBookId={setBookId} />
      <BooksList getBookId={getBookIdHandler} />
    </div>
  );
}
