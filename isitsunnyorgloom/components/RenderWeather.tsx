"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function RenderWeather() {
  const [weather, setWeather] = useState<any>();

  const captureLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("captureLocation", data);

      const { latitude: lat, longitude: lon } = data;

      await fetchWeather(lat, lon);

      return data;
    } catch (error) {
      console.error("Error capturing location:", error);
    }
  };

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      const data = await res.json();

      console.log("fetchWeather", data);

      setWeather(data);

      return data;
    } catch (error) {
      console.log("fetchWeather", error);
    }
  };

  useEffect(() => {
    console.log("capture", captureLocation());
  }, []);

  // convert yo Kelvin to Celsius

  //   const toCelsius = () => {
  //       const converted = (weather?.main.temp - 273.15).toFixed(1);
  //       return converted;
  //   }

  console.log("RenderWeather", weather);

  return (
    <div>
      {weather ? (
        <div>
          <div className="flex items-center justify-between w-full font-semibold text-xl space-x-4">
            <p>{weather?.name}</p>
            <p>|</p>
            <p>{`${(weather?.main.temp - 273.15).toFixed(1)} °C`}</p>
          </div>
          <div className="flex items-center justify-center space-x-4 font-semibold">
            <Image
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt={weather?.weather[0].description}
              width={50}
              height={50}
            />
            <p>{weather?.weather[0].description}</p>
          </div>
        </div>
      ) : (
        <p>Outlook looking gloomy cuz...</p>
      )}
    </div>
  );
}

export default RenderWeather;
