export default function BookCard() {
  return (
    <div className="w-[300px] flex flex-col justify-between text-center bg-red-100 p-3 m-3 rounded-lg shadow-xl">
      <img
        className="w-60 mx-auto rounded-lg shadow-md"
        src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1700221964i/40275288.jpg"
        alt=""
      />
      <h2 className="text-xl py-1">Samantha Shannon</h2>
      <h3 className="text-main py-1">The Priory of the Orange Tree</h3>
      <button className="bg-cyan-700 mt-3 py-2 rounded-lg cursor-pointer">Add to Bookshelf</button>
    </div>
  );
}
