import calendarLogo from "../../assets/calendar.svg";
import penLogo from "../../assets/pen.svg";
export default function HomeBlog({ product }) {
  return (
    <div className="shadow-md rounded-md hover:shadow-lg hover:cursor-pointer hover:hover:-translate-y-6">
      <img
        className="w-[25rem] rounded-md mb-4"
        src={product.imgSrc}
        alt="blog1"
      />
      <div className="mx-4">
        <div className="flex justify-between mb-4">
          <span className="flex items-center gap-2 text-slate-500">
            <img className="w-4 h-4" src={penLogo} alt="pen" />
            {product.author}
          </span>
          <span className="flex items-center gap-2 text-slate-500">
            <img className="w-5 h-5" src={calendarLogo} alt="pen" />
            {product.datePublished}
          </span>
        </div>
        <h4 className="text-slate-800 font-semibold text-lg mb-4 hover:text-pink-500">
          {product.title}
        </h4>
        <p className="text-slate-500 text-lg font-medium mb-6">
          {product.description}
        </p>
        <p className="text-pink-600 font-bold text-lg mb-6 hover:text-pink-700">
          Read More
        </p>
      </div>
    </div>
  );
}
