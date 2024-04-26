import { createContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

type Book = {
    id: number;
    title: string;
    author: string;
    image: string;
};

export type WishlistContextType = {
    wishlist: Book[];
    addToWishlist: (book: Book) => void;
    removeFromWishlist?: ((id: number) => void);
};

// Valor predeterminado que coincide con la estructura del contexto
const defaultValue: WishlistContextType = {
    wishlist: [],
    addToWishlist: () => {},
    removeFromWishlist: () => {}
};

export const WishlistContext = createContext<WishlistContextType>(defaultValue);

// Props type para los children
type WishlistProviderProps = {
    children: ReactNode;
};

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
    const [wishlist, setWishlist] = useState<Book[]>(() => {
        // Intentar recuperar la lista de deseos de localStorage al inicializar
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        // Guardar la lista de deseos en localStorage cada vez que cambia
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (book: Book) => {
        if (!wishlist.some(item => item.id === book.id)) {
            setWishlist(prevWishlist => [...prevWishlist, book]);
            toast.success('Book added to wishlist');
        }
    };

    const removeFromWishlist = (id: number) => {
        setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== id));
        toast.error('Book removed from wishlist');
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};