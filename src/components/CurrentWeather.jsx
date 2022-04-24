import Card from "./Card";
const CurrentWeather = ({ forecastData }) => {
  const icons = {
    sun: "https://img.icons8.com/fluency/48/000000/sun.png",
    partly_cloudy:
      "https://img.icons8.com/dusk/48/000000/partly-cloudy-day.png",
    storm: "https://img.icons8.com/fluency/48/000000/storm.png",
    light_rain: "https://img.icons8.com/fluency/48/000000/light-rain.png",
    cloudy:
      "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/48/4a90e2/external-cloudy-weather-vitaliy-gorbachev-flat-vitaly-gorbachev.png",
    light_snow: "https://img.icons8.com/fluency/48/000000/light-snow.png",
    rainfall: "https://img.icons8.com/fluency/48/000000/downpour.png",
    breezy: "https://img.icons8.com/color/48/000000/air-element.png",
  };

  const convertDate = (date) => {
    const dateObj = new Date(date * 1000);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
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
      case "Storm":
        return icons.storm;
      case "Scattered Showers":
        return icons.light_rain;
      case "Showers":
        return icons.light_rain;
      case "Rain":
        return icons.rainfall;
      case "Cloudy":
        return icons.cloudy;
      case "Breezy":
        return icons.breezy;

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
    <div className="flex flex-wrap justify-evenly">
      {forecastData.map((item, index) => {
        return (
          <Card
            key={index}
            date={convertDate(item.date)}
            icon={getIcon(item.text)}
            description={item.text}
            maxTemp={item.high}
            lowTemp={item.low}
          />
        );
      })}
    </div>
  );
};

export default CurrentWeather;
