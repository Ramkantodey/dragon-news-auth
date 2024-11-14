import { useState } from 'react';
import { FaStar, FaEye, FaShareAlt, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
    const { news } = props || {};
    const [isExpanded, setIsExpanded] = useState(false); // State to track if details are expanded

    return (
        <div className="card w-full bg-base-100 shadow-md border border-gray-200 rounded-lg p-4 relative">

            {/* Share and Bookmark icons */}
            <div className="absolute top-4 right-4 flex space-x-2">
                <FaShareAlt className="text-gray-600 cursor-pointer hover:text-blue-600" title="Share" />
                <FaBookmark className="text-gray-600 cursor-pointer hover:text-blue-600" title="Bookmark" />
            </div>

            {/* Author information */}
            <div className="flex items-center mb-4">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div className="ml-3">
                    <h2 className="font-semibold text-gray-800">{news.author.name}</h2>
                    <p className="text-sm text-gray-500">
                        {new Date(news.author.published_date).toLocaleDateString()}
                    </p>
                </div>
            </div>

            {/* News title section */}
            <h3 className="font-bold text-lg mb-2 text-gray-800">{news.title}</h3>

            {/* News image section */}
            <Link to={`/news/${news._id}`}>
                <img
                    src={news.image_url}
                    alt="News"
                    className="w-full rounded-md mb-3"
                />
            </Link>

            {/* News details section with a short preview of the content */}
            <p className="text-gray-600 mb-4">
                {/* Show either a short preview or full details based on 'isExpanded' state */}
                {isExpanded ? news.details : `${news.details.slice(0, 150)}...`}
                <span
                    className="text-[#FF8C47] cursor-pointer ml-1"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? ' Show Less' : ' Read More'}
                </span>
            </p>

            {/* Rating and view count section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {/* Render four stars */}
                    {Array(4).fill().map((_, index) => (
                        <FaStar key={index} className="text-yellow-500 mr-1" />
                    ))}
                    <span className="font-semibold text-gray-800 ml-2">{news.rating.number}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaEye className="mr-1" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
