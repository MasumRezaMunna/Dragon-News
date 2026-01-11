import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view, tags } = news;

  return (
    <div className="card bg-base-100 shadow-md m-3">
      {/* Author */}
      <div className="flex justify-between w-full items-center bg-base-200">
        <div className="flex items-center gap-3 p-4">
        <img
          src={author?.img}
          alt={author?.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-sm">{author?.name}</h4>
          <p className="text-xs text-gray-500">
            {new Date(author?.published_date).toDateString()}
          </p>
        </div>
      </div>
      <button className="flex gap-3 text-gray-500 hover:text-primary m-5">
            <FaRegBookmark></FaRegBookmark>
            
        <FaShareAlt></FaShareAlt>
        </button>
      
      </div>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title leading-snug">{title}</h2>

        <img
          src={image_url}
          alt={title}
          className="rounded-md max-h-56 object-cover"
        />

        <p className="text-sm text-gray-600">
          {details.length > 180 ? details.slice(0, 180) + "..." : details}
          <span className="text-primary font-medium cursor-pointer ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags?.map((tag, index) => (
            <span key={index} className="badge badge-outline badge-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 shadow">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="text-gray-700 font-medium">{rating?.number}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
