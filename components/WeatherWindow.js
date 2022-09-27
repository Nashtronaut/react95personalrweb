import styled from 'styled-components';
import { useState, useEffect } from 'react';
import getWeather from './helpers/api/getWeather';
import PopupWrapper from './helpers/wrappers/PopupWrapper';
import {
    Window,
    WindowHeader,
    WindowContent,
    Button
} from 'react95';

const WeatherWindow = (props) => {
    const handleWeatherClose = props.handleWeatherClose; 
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        getWeather().then((data) => {
            setWeatherData({...data});
        })
    },[])

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Window style={{ position: 'absolute', zIndex: 1, width: "30%" }}>
                <WindowHeader className="window-header">
                    <span>weather.exe</span>
                    <Button onClick={handleWeatherClose}>
                        <span className="close-icon" />
                    </Button>
                </WindowHeader>
                <WindowContent>
                    {weatherData && (
                        <p>{weatherData.main.temp}</p>
                    )}
                </WindowContent>
            </Window>
        </div>    
    );
};

export default WeatherWindow;