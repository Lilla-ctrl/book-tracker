import type { BookCardProps } from "../types/book";

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

    return books.map((item) => {
      const v = item.volumeInfo;
      return {
        title: v.title ?? "No title",
        author: v.authors?.[0] ?? "Unknown author",
        coverUrl: v.imageLinks?.thumbnail,
      };
    });
  } catch (err) {
    console.error("Error fetching books:", err);
    return [];
  }
}
