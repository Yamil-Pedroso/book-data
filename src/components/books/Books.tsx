import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BookProps } from "../../data/books";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaShare,
  FaBook,
} from "react-icons/fa";
import Search from "../search/Search";
import { WishlistContext } from "../providers/WishListProvider";
import styles from "./styles.module.css";
import { toast } from "sonner";
interface BooksProps {
  books: BookProps[];
}

const limitBooks = 6;

const Books = ({ books }: BooksProps) => {
  const [myBooks, setMyBooks] = useState<BookProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<BookProps[]>(books);
  const [shareOptions, setShareOptions] = useState({
    show: false,
    index: null,
  });
  const [cardContentShow, setCardContentShow] = useState<number | null>(null);

  const { wishlist, addToWishlist } = useContext(WishlistContext) ;

  console.log(myBooks, cardContentShow);

  const handleAddToWishlist = (book: BookProps) => {
    const bookExists = wishlist.some((item: any) => item.id === book.id);

    if (bookExists) {
      return toast.error("Book already in wishlist");
    } else {
      addToWishlist(book);
    }
  };
  const onOverCardContent = (index: number) => {
    setCardContentShow(index);
  };

  const onOutCardContent = () => {
    setCardContentShow(null);
  };

  const handleClick = (index: any) => {
    setShareOptions((prev) => ({
      show: prev.index !== index ? true : !prev.show,
      index: index,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setMyBooks(filteredBooks);

    if (e.target.value === "") {
      setMyBooks(books);
    }
  };

  useEffect(() => {
    const searchLower = search.toLowerCase();
    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchLower)
    );
    setFilteredBooks(filtered);
  }, [books, search]);

  useEffect(() => {
    if (filteredBooks.length <= currentIndex && currentIndex !== 0) {
      setCurrentIndex(0);
    }
  }, [filteredBooks]);

  const next = () => {
    const newStart = currentIndex + limitBooks;
    if (newStart < filteredBooks.length) {
      setCurrentIndex(newStart);
    }
  };

  const back = () => {
    const newStart = currentIndex - limitBooks;
    if (newStart >= 0) {
      setCurrentIndex(newStart);
    } else {
      setCurrentIndex(0);
    }
  };

  const shareBookViaWhatsApp = (book: any) => {
    const shareText = `Look at this book:
    "${book.title}" de ${book.author}. Is very interesting.
    ${book.image}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappURL, "_blank");
  };

  const shareBookViaGmail = (book: any) => {
    const subject = encodeURIComponent(`Recommendation:
    ${book.title}`);
    const body = encodeURIComponent(
      `Hi,\n\nLook at this book :):
      "${book.title}" de ${book.author}.\n\nYou can find more information about this book here:
      ${book.imageURL}\n\nBest regards.`
    );
    const gmailURL = `mailto:?subject=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  };

  const handleClickOutside = (e: any) => {
    const shareOptionsRef = document.querySelector(
      `.${styles.shareOptionsWrapper}`
    );

    if (
      shareOptions.show &&
      shareOptionsRef &&
      !shareOptionsRef.contains(e.target)
    ) {
      setShareOptions({ show: false, index: null });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shareOptions.show]);

  return (
    <div>
      <Search mySearch={search} handleChange={handleChange} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
      >
        <span onClick={back}>
          <FaArrowLeft size={32} />
        </span>
        <span onClick={next}>
          <FaArrowRight size={32} style={{ cursor: "pointer" }} />
        </span>
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        key={currentIndex}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {filteredBooks
          .slice(currentIndex, currentIndex + limitBooks)
          .map((book, index) => (
            <div key={book.id} className="book-card">
              {/*<div
                className={`${styles.cardContent}
                      ${cardContentShow === index ? styles.show : ''}
                      `}
              >
                <div className={styles.cont}>
                  <p>Description: </p>
                  <span>{book.description}</span>
                </div>
          </div>*/}
              <div className={styles.card}>
                <Link to={`/book-details/${book.id}`}>
                  <img
                    onMouseOver={() => onOverCardContent(index)}
                    onMouseOut={onOutCardContent}
                    src={book.image}
                    alt={book.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </div>
              <div className="book-content">
                <div className="paragr">
                  <p>
                    Title: <span>{book.title}</span>
                  </p>
                  <p>
                    Author: <span>{book.author}</span>
                  </p>
                  <p>
                    Year: <span>{book.year}</span>
                  </p>
                  <p>
                    Pages: <span>{book.pages}</span>
                  </p>
                  <p>
                    Language: <span>{book.language}</span>
                  </p>
                </div>
                <div className="icons">
                  <FaHeart
                    className="icon-heart"
                    size={32}
                    onClick={() => handleAddToWishlist(book)}
                    style={{
                      cursor: "pointer",
                      color: wishlist.some((item: any) => item.id === book.id)
                        ? "red"
                        : "",
                    }}
                  />
                  <FaShare
                    className="icon-share"
                    size={32}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(index)}
                  />

                  <FaBook
                    className="icon-book"
                    size={32}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>

              {shareOptions.show && shareOptions.index === index && (
                <div
                  className={`${styles.shareOptionsWrapper}
                  ${shareOptions === index && styles.show}
                `}
                >
                  <p onClick={() => shareBookViaWhatsApp(book)}>WhatsApp</p>

                  <p onClick={() => shareBookViaGmail(book)}>Gmail</p>
                </div>
              )}
            </div>
          ))}
      </motion.div>
    </div>
  );
};

export default Books;
