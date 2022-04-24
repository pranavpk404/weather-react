import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme")) || false
  );

  const [location, setLocation] = useState("");
  const [forecastData, setForecastData] = useState({});
  const [locationData, setLocationData] = useState({});
  const [locationTyped, setLocationTyped] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
    localStorage.setItem("location", location);
  }, [location, darkTheme]);

  useEffect(() => {
    const getWeather = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
          "X-RapidAPI-Key":
            "cc5f65bb61mshbf8e792e8aa607fp148ec8jsnc39b381f4869",
        },
      };
      const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`;

      const data = await fetch(url, options);
      const resp = await data.json();

      setForecastData(resp.forecasts);
      setLocationData(resp.location);
      setLocationTyped(true);
    };
    if (location !== "") {
      getWeather();
    }
  }, [location]);

  return (
    <div className={darkTheme ? "dark" : "light "}>
      <section className="font-Poppins h-screen  dark:bg-gray-800">
        <Navbar
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          setLocation={setLocation}
          locationData={locationData}
        />
        {locationTyped ? <CurrentWeather forecastData={forecastData} /> : null}
      </section>
    </div>
  );
}

export default App;
