import BookCard from "../../components/BookCard";

export default async function Home() {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=fantasy`
  );
  const data = await res.json();
  const books = data.items || [];
  const cleanedBooks = books.map((item: any) => {
    const volume = item.volumeInfo;
    return {
      title: volume.title || "No title",
      author: volume.authors ? volume.authors[0] : "Unknown author",
      coverUrl: volume.imgLinks?.thumbnail || "",
    };
  });

  return (
    <div>
      <main>
        <h1>My Book App</h1>
        <div>
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
