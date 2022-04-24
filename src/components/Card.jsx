const Card = ({ cityName, region, country, description, lowTemp, maxTemp }) => {
  const icons = {
    sun: "https://img.icons8.com/fluency/48/000000/sun.png",
    partly_cloudy:
      "https://img.icons8.com/dusk/48/000000/partly-cloudy-day.png",
    storm: "https://img.icons8.com/fluency/48/000000/storm.png",
    light_rain: "https://img.icons8.com/fluency/48/000000/light-rain.png",

    fog: "https://img.icons8.com/fluency/48/000000/foggy-night-1.png",
    hail: "https://img.icons8.com/fluency/48/000000/hail.png",
    intense_rain: "https://img.icons8.com/fluency/48/000000/intense-rain.png",
    light_snow: "https://img.icons8.com/fluency/48/000000/light-snow.png",
    rainfall: "https://img.icons8.com/fluency/48/000000/downpour.png",
  };

  const getIcon = (description) => {
    switch (description) {
      case "Mostly Sunny":
        return icons.sun;
      case "Sunny":
        return icons.sun;
      case "Partly Cloudy":
        return icons.partly_cloudy;
      case "Mostly Cloudy":
        return icons.partly_cloudy;
      case "Thunderstorms":
        return icons.storm;
      case "Scattered Thunderstorms":
        return icons.storm;
      case "Scattered Showers":
        return icons.light_rain;
      case "Rain":
        return icons.rainfall;
      case "Storm":
        return icons.storm;
      case "Showers":
        return icons.light_rain;

      case "Fog":
        return icons.fog;
      case "Hail":
        return icons.hail;
      case "Heavy Rain":
        return icons.intense_rain;

      default:
        return null;
    }
  };

  return (
    <section className="text-center  ">
      <div className="container mx-auto flex">
        <div className="rounded-xl mx-auto dark:bg-gray-600 dark:text-slate-50 bg-gray-100 text-gray-600  flex">
          <div className="p-6">
            <img className="mx-auto my-5" src={getIcon(description)} />
            <h2 className="text-xl font-semibold mb-3">{`${description}`}</h2>
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
{
  /*
  :"https://img.icons8.com/fluency/48/000000/thermometer-down.png",
  :"https://img.icons8.com/fluency/48/000000/thermometer-up.png",
  
  */
}
