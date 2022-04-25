import { useState, useEffect } from "react";

const Navbar = ({ darkTheme, setDarkTheme, setLocation, locationData }) => {
  const [text, setText] = useState("");
  const [locationGotten, setLocationGotten] = useState(false);

  useEffect(() => {
    document
      .getElementById("searchBar")
      .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
          const searchInput = document.getElementById("searchBar").value;
          setLocation(searchInput);
        }
      });
  }, []);

  useEffect(() => {
    if (locationData.city !== undefined) {
      setLocationGotten(true);
    } else {
      setLocationGotten(false);
    }
  }, [locationData]);

  return (
    <nav className="p-5 flex flex-wrap sm:justify-between justify-center items-center mb-5">
      <div className="flex justify-between items-center w-screen">
        <div>
          <input
            value={text}
            type="text"
            id="searchBar"
            className="sm:w-96 w-80 h-10 dark:bg-darkBG2 bg-gray-100 dark:text-white rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
            placeholder="🔎 Search Your City"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          className="text-xl rounded-full p-2 hover:shadow-lg hover:shadow-slate-900 dark:hover:shadow-slate-50"
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
            localStorage.setItem("darkTheme", !darkTheme);
          }}
        >
          {darkTheme ? "💡" : "🌙"}
        </button>
      </div>
      {locationGotten ? (
        <p className="text-xl mt-5 font-medium dark:text-gray-50 mx-auto">{`${locationData.city}, ${locationData.region}, ${locationData.country}`}</p>
      ) : null}
    </nav>
  );
};

export default Navbar;
