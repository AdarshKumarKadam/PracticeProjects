
const EduCard = ({ icon, title, description, year, score }) => {
  return (
    <div className="relative cursor-pointer dark:text-white">
      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
      <div
        className="relative p-6 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500"
      >
        <div className="flex items-center">
          <span className="text-xl">{icon}</span>
          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-500 text-lg dark:text-gray-300">{description}</p>
        <div className="flex justify-between mt-2">
          <div className="text-gray-500 text-lg dark:text-gray-300">{year}</div>
          <div className="text-gray-500 text-lg dark:text-gray-300 mr-10">{score}</div>
        </div>
      </div>

    </div>
  );
};

export default EduCard;
