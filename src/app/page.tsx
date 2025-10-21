import BookCard from "../../components/BookCard";



export default async function Home() {

  return (
    <div>
      <main className="p-8">
        <h1 className="text-3xl mb-6 text-center">Book Tracker</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {cleanedBooks.map((book, index) => (
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
