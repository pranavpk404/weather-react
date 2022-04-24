import Card from "./Card";
const CurrentWeather = ({ forecastData }) => {
  return (
    <div>
      <Card
        description={forecastData[0].text}
        lowTemp={forecastData[0].low}
        maxTemp={forecastData[0].high}
      />
    </div>
  );
};

export default CurrentWeather;
