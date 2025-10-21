interface BookCardProps {
  title: string;
  author: string;
  coverUrl?: string;
}

export default function BookCard({ title, author, coverUrl}: BookCardProps) {
  return (
    <div className="w-[300px] flex flex-col justify-between text-center bg-red-100 p-3 m-3 rounded-lg shadow-xl">
      {coverUrl && <img
        className="w-40 mx-auto rounded-lg shadow-md"
        src={coverUrl}
        alt={`Cover of ${title}`}
      />}
      <h2 className="text-xl py-1">{author}</h2>
      <h3 className="text-main py-1">{title}</h3>
      <button className="bg-cyan-700 mt-3 py-2 rounded-lg cursor-pointer">Add to Bookshelf</button>
    </div>
  );
}
