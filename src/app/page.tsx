import BookCard from "../../components/BookCard";
import { fetchBooks } from "./lib/fetchBooks";

export default async function Home() {
  const fantasyBooks = await fetchBooks("fantasy");

  return (
    <div>
      <main className="p-8">
        <h1 className="text-3xl mb-6 text-center">Book Tracker</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {fantasyBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              coverUrl={book.coverUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
