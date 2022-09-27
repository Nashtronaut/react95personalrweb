import styled from 'styled-components';
import { useState, useEffect } from 'react';
import getWeather from './helpers/api/getWeather';
import PopupWrapper from './helpers/wrappers/PopupWrapper';
import Image from 'next/future/image';
import cloud from '../public/img/weathericons/cloudy.png';
import thunderstorm from '../public/img/weathericons/storm.png';
import clear from '../public/img/weathericons/sun.png';
import snowflake from '../public/img/weathericons/snowflake.png';
import rain from '../public/img/weathericons/rain.png';
import {
    Window,
    WindowHeader,
    WindowContent,
    Button,
    Cutout
} from 'react95';

const icons = [
    {
        id: 'Thunderstorm',
        icon: {thunderstorm}
    },
    {
        id: 'Clouds',
        icon: {cloud}
    },
    {
        id: 'Clear',
        icon: {clear}
    },
    {
        id: 'Snow',
        icon: {snowflake}
    },
    {
        id: 'Rain',
        icon: {rain}
    }
];

const getIcon = () => {
    return icons
};

const WeatherWindow = (props) => {
    const handleWeatherClose = props.handleWeatherClose; 
    const [weatherData, setWeatherData] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
       getWeather().then((data) => {
            setWeatherData((oldState) => ({...data}));  
        })
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Window style={{ position: 'absolute', zIndex: 1, width: "35%", minWidth: "17.7rem" }}>
                <WindowHeader className="window-header">
                    <span>weather.exe</span>
                    <Button onClick={handleWeatherClose}>
                        <span className="close-icon" />
                    </Button>
                </WindowHeader>
                <WindowContent>
                    {weatherData && (
                        <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '0.2rem'}}>
                            <Image src={thunderstorm} height={100}/>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.85rem'}}>
                                <p style={{textDecoration: 'underline'}}>Edmonton, Alberta, Canada</p>
                                <p>{Math.round(weatherData.main.temp)} &#176; C</p>
                                <p>feels like {Math.round(weatherData.main.feels_like)} &#176; C</p>
                                <p>{weatherData.weather[0].description}</p>
                                <p>{weatherData.wind.speed} km/h wind</p>
                                <p>{weatherData.main.humidity} % humidity</p>
                            </div>
                        </div>
                    )}
                </WindowContent>
            </Window>
        </div>    
    );
};

export default WeatherWindow;