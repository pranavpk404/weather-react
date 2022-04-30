const Card = ({ description, lowTemp, maxTemp, date, icon }) => {
  return (
    <section className="rounded-xl text-center mx-2 my-4 hover:shadow-lg duration-200  hover:shadow-gray-900 dark:hover:shadow-gray-50 ">
      <div className="container mx-auto flex ">
        <div className="rounded-xl  dark:bg-darkBG2 bg-gray-100 dark:text-gray-100 text-gray-900 flex">
          <div className="p-6">
            <p className="text-left">{date}</p>
            <img className="mx-auto my-5" src={icon} alt={description} />
            <h2 className="text-xl font-semibold mb-3">{description}</h2>
            <p className="text-lg font-medium mb-3">
              {`Low Temp:${Math.round(lowTemp)}°C`}
            </p>
            <p className="text-lg font-medium mb-3">
              {`High Temp:${Math.round(maxTemp)}°C`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
