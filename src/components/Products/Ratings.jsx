import Rating from "./Rating";
export default function Ratings({ ratings, title, color }) {
  return (
    <div className="mb-10">
      <h1 className="text-slate-800 font-bold">{title}</h1>
      <div className="border-b border-slate-800 my-4"></div>
      <div className="flex flex-col gap-4">
        {ratings.map((item, index) => (
          <div key={item} className="flex flex-row gap-2 items-center">
            <label className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className={`peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border bg-${color}-100 border-${color}-100 checked:bg-${color}-600 checked:border-${color}-600`}
                id={item}
              />
              <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <Rating ratings={ratings} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
