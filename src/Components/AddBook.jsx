import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button, Stack, Alert } from "@mui/material";
import BookDataService from "../services/books.services";

function AddBook({ id, setBookId }) {
  const txtStyle = {
    width: "60%",
    margin: "auto 20%",
  };
  const topStyle = {
    backgroundColor: "grey",
  };
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents refresh of the page when we click submit
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      title,
      author,
      status,
    };
    console.log(newBook);
    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "New book added successfully" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
    setStatus("Available");
  };
  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log(docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
  useEffect(() => {
    console.log("The id of the book is", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  return (
    <>
      {message?.msg && (
        <Alert
          severity={message?.error ? "error" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
          <h1 style={topStyle}>Library- Firebase CRUD</h1>
          <Stack spacing={2} justifyContent="center">
            <TextField
              label="Book Title"
              variant="filled"
              placeholder="Enter book title"
              value={title}
              style={txtStyle}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Book Author"
              variant="filled"
              placeholder="Enter book author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={txtStyle}
            />
          </Stack>
          <Stack direction="row" style={{ margin: "10px 25%" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "green" }}
              onClick={() => setStatus("Available")}
            >
              Available
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "red" }}
              onClick={() => setStatus("Unavailable")}
            >
              Not Available
            </Button>
          </Stack>
          <Button
            type="submit"
            variant="outlined"
            style={{ width: "50%", margin: "10px 22%" }}
          >
            Add/Update
          </Button>
        </Stack>
      </form>
    </>
  );
}
export default AddBook;
