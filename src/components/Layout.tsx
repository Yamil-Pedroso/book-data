import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import BookPage from "../pages/BookPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import Aside from "./aside/Aside";
import books, { BookProps } from "../data/books";

const Layout = () => {
  const [activeBtn, setActiveBtn] = useState("");
  const [myBooks, setMyBooks] = useState<BookProps[]>(books);
  const location = useLocation();

  const showAside = location.pathname === '/';

  const handleBookLanguage = (language: string) => {
    const filteredBooks = books.filter(
      book => book.language.toLowerCase() === language.toLowerCase()
    );
    setMyBooks(filteredBooks);
    setActiveBtn(language);
  };

  return (
    <>
      {showAside && <Aside onClick={handleBookLanguage} activeLanguage={activeBtn} language={activeBtn} />}
      <Routes>
        <Route path="/" element={<BookPage books={myBooks} />} />
        <Route path="/book-details/:id" element={<BookDetailsPage />} />
      </Routes>
    </>
  );
}

export default Layout;
