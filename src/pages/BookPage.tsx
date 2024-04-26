import Books from '../components/books/Books'
import { BookProps } from '../data/books'
interface BookPageProps {
  books: BookProps[];
}
const BookPage = ({ books }: BookPageProps) => {
  return (
    <div>
      <Books books={books} />
    </div>
  )
}

export default BookPage
