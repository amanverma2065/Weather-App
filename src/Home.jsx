import React, { useEffect, useState } from "react";

import cloudsbg from "./images/cloudy.jpg";
import clearbg from "./images/sunny.jpg";
import hazebg from "./images/mist.jpg";
import rainybg from "./images/rainy.jpg";
import snowbg from "./images/snow.jpg";
import thunderbg from "./images/thunderstorm.jpg";
import drizzlebg from "./images/drizzle.jpg";

import clear from "./png/clear.png";
import clouds from "./png/cloudy.png";
import drizzle from "./png/drizzle.png";
import haze from "./png/haze.png";
import rainy from "./png/rainy.png";
import snow from "./png/snow.png";
import thunder from "./png/thunder.png";
import searchIcon from "./png/magnifying-glass.png";
import thermometer from "./png/thermometer.png";
import wind from "./png/wind.png";
import humidity from "./png/humidity.png";
import visibility from "./png/visibility.png";

const Home = () => {

    const [apiData, setApiData] = useState({});
    const [search, setSearch] = useState("delhi");
    const [inputValue, setInputValue] = useState();
    const [weatherData, setWeatherData] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState();
    const [background, setBackground] = useState();
    const date = new Date();
    
    
    const fetchData = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=e4d1dcc0c26d565b489f87175092bee2`;
            const response = await fetch(url);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setApiData(jsonResponse);
            const weatherDetail = jsonResponse.weather[0].main;
            setWeatherData(weatherDetail);


            switch (weatherDetail) {
                case "Clouds":
                    setWeatherIcon(clouds);
                    setBackground(cloudsbg);
                    break;

                case "Clear":
                    setWeatherIcon(clear);
                    setBackground(clearbg);
                    break;

                case "Rain":
                    setWeatherIcon(rainy);
                    setBackground(rainybg);
                    break;


                case "Drizzle":
                    setWeatherIcon(drizzle);
                    setBackground(drizzlebg);
                    break;

                case "Snow":
                    setWeatherIcon(snow);
                    setBackground(snowbg);
                    break;

                case "Mist":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Smoke":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Haze":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Dust":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Fog":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Sand":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Ash":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Squall":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Tornado":
                    setWeatherIcon(haze);
                    setBackground(hazebg);
                    break;

                case "Thunderstorm":
                    setWeatherIcon(thunder);
                    setBackground(thunderbg);
                    break;


            }


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCurrentLocation();
    }, []);

    useEffect(() => {
        fetchData();
    }, [search]);

    return (
        <>
            <div className="container-fluid" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${background})`, objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="row" style={{ height: '100vh' }}>
                    <div className="col-lg-8 d-flex flex-column justify-content-between" style={{ minHeight: '50vh' }}>
                        <div className="d-flex m-md-5 mx-2 my-3">
                            <input className="w-100 p-2 " type="search" placeholder="Search Location..." onChange={(event) => { setInputValue(event.target.value) }} style={{ border: 'none', outline: 'none', background: 'transparent', borderBottom: '2px solid white', color: 'white' }} />
                            <div className="btn ms-3" onClick={() => { setSearch(inputValue) }} style={{ border: 'none' }} >
                                <img src={searchIcon} alt="icon" style={{ maxHeight: '4vh' }} />
                            </div>
                        </div>
                        <div className="d-flex mx-sm-5 mx-auto my-md-3">
                            <h1 className="text-white me-3" style={{ fontSize: 'clamp(50px, 8vw, 8vw)' }}>{apiData.main ? `${Math.floor(apiData.main.temp)}°` : "N/A"}</h1>
                            <div className="me-4  d-flex flex-column justify-content-center">
                                <h2 className="text-white text-center m-0" style={{ fontSize: 'clamp(35px, 4vw, 4vw)', fontWeight: '400' }}>{apiData.name}</h2>
                                <p className="text-white m-0 text-center" style={{ fontSize: 'clamp(15px, 1vw, 1vw)' }}>{date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <img src={weatherIcon} alt="image" style={{ height: 'clamp(40px, 6vw, 6vw)' }} />
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 p-lg-5 p-3 d-flex justify-content-center" style={{ backdropFilter: 'blur(10px)', background: 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2))' }}>
                        <div className="col-sm-7 col-lg-10 col-10">
                            <h1 className="text-white text-center my-3 my-md-5" style={{ borderBottom: '2px solid white' }}>{weatherData}</h1>
                            <div className="d-flex justify-content-between mb-lg-3">
                                <p className="text-white">Temperature</p>
                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apiData.main ? `${Math.floor(apiData.main.temp)}°` : "N/A"}</b></p>
                                    <img className="mt-1" src={thermometer} alt="icon" style={{ height: 'clamp(20px, 2vw, 2vw)' }} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mb-lg-3">
                                <p className="text-white">Humidity</p>
                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apiData.main ? `${apiData.main.humidity}%` : "N/A"}</b></p>
                                    <img className="mt-1" src={humidity} alt="icon" style={{ height: 'clamp(20px, 1.8vw, 1.8vw)' }} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mb-lg-3">
                                <p className="text-white">Visibility</p>
                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apiData ? `${Math.floor(apiData.visibility / 1000)}km` : "N/A"}</b></p>
                                    <img className="mt-1" src={visibility} alt="icon" style={{ height: 'clamp(20px, 1.8vw, 1.8vw)' }} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mb-lg-3">
                                <p className="text-white">Wind</p>
                                <div className="d-flex">
                                    <p className="text-white me-3"><b>{apiData.wind ? `${Math.floor(apiData.wind.speed)}km/h` : "N/A"}</b></p>
                                    <img className="mt-1" src={wind} alt="icon" style={{ height: 'clamp(20px, 1.8vw, 1.8vw)' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;
