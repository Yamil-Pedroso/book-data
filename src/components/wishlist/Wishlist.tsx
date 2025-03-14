import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../providers/WishListProvider";
import { MdDeleteForever } from "react-icons/md";
import styles from "./styles.module.css";

const Wishlist = () => {
  const context = useContext(WishlistContext) as any;
  if (!context) throw new Error("WishlistContext not found");

  const { wishlist, removeFromWishlist } = context;

  return (
    <div>
      <h1>Wishlist</h1>

          <Link to="/"><span
          style={{
            color: "#82a58e",
          }}
          >Back to Home</span></Link>
      
      <div className={styles.wishlist}>
        {wishlist.map((book: any) => (
          <div
            className={styles.wishlistItem}
            key={book.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ marginRight: "10px" }}
            />
            <div
             className={styles.wishlistContent}
            >
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <MdDeleteForever
                onClick={() => removeFromWishlist(book.id)}
                 className={styles.deleteIcon}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
