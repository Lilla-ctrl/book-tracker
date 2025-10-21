import BookCard from "../../components/BookCard";

interface BookCardProps {
  title: string;
  author: string;
  coverUrl?: string;
}

type GoogleBookItem = {
  id: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
  };
};

type GoogleBooksResponse = {
  items?: GoogleBookItem[];
};

export default async function Home() {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=fantasy`,
    { cache: "no-store" }
  );

  const data = (await res.json()) as GoogleBooksResponse;

  const books: GoogleBookItem[] = data.items ?? [];

  const cleanedBooks: BookCardProps[] = books.map((item) => {
    const volume = item.volumeInfo;
    return {
      title: volume.title ?? "No title",
      author: volume.authors?.[0] ?? "Unknown author",
      coverUrl: volume.imageLinks?.thumbnail,
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
