import type { BookCardProps } from "../types/book";

type GoogleBookItem = {
  id: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    publishedDate?: string;
    imageLinks?: {
      thumbnail?: string;
    };
  };
};

type GoogleBooksResponse = {
  items?: GoogleBookItem[];
};

export async function fetchBooks(category: string): Promise<BookCardProps[]> {
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(
    category
  )}&orderBy=newest&printType=books`;
  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch books for "${category}"`);
    }

    const data = (await res.json()) as GoogleBooksResponse;

    const books: GoogleBookItem[] = data.items ?? [];
    console.log("Dates:", books.map(b => b.volumeInfo.publishedDate).filter(Boolean));


    const currentYear = new Date().getFullYear();

    const recentBooks = books.filter((item) => {
      const year = item.volumeInfo.publishedDate?.slice(0, 4);
      return (
        (year && year === String(currentYear)) ||
        year === String(currentYear - 5)
      );
    });

    return recentBooks.map((item) => {
      const v = item.volumeInfo;
      return {
        title: v.title ?? "No title",
        author: v.authors?.[0] ?? "Unknown author",
        coverUrl: v.imageLinks?.thumbnail,
        publishedDate: v.publishedDate,
      };
    });
  } catch (err) {
    console.error("Error fetching books:", err);
    return [];
  }
}
