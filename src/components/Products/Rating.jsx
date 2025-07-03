const STAR_COLOR = "text-yellow-400";
const EMPTY_STAR_COLOR = "text-slate-200";
export default function Rating({ ratings, item }) {
  return (
    <>
      {ratings.map((_, index2) => (
        <span key={index2} className="text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              item >= index2 + 1 ? STAR_COLOR : EMPTY_STAR_COLOR
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
          </svg>
        </span>
      ))}
    </>
  );
}
