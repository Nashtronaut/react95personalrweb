import { useState, useEffect } from 'react';
import ForecastWrapper from './helpers/wrappers/ForecastWrapper';
import getWeather from './helpers/api/getCurrentWeather';
import getForecast from './helpers/api/getForecast';
import Image from 'next/future/image';
import cloud from '../public/img/weathericons/cloudy.png';
import thunderstorm from '../public/img/weathericons/storm.png';
import sun from '../public/img/weathericons/sun.png';
import snowflake from '../public/img/weathericons/snowflake.png';
import rain from '../public/img/weathericons/rain.png';
import {
    Window,
    WindowHeader,
    WindowContent,
    Button,
    Fieldset
} from 'react95';

const icons = [
    {
        id: 'Thunderstorm',
        icon: thunderstorm
    },
    {
        id: 'Clouds',
        icon: cloud
    },
    {
        id: 'Clear',
        icon: sun
    },
    {
        id: 'Snow',
        icon: snowflake
    },
    {
        id: 'Rain',
        icon: rain
    }
];

const WeatherWindow = (props) => {
    const handleWeatherClose = props.handleWeatherClose; 
    const [currentWeatherData, setCurrentWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [forecastIcons, setForecastIcons] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const foreCastIconSetter = (forecasts) => {            
            const iconsToSet = forecasts.map((forecast) => {
                const icon = icons.find(x => x.id == forecast.main).icon;
                return icon
            })
            console.log(iconsToSet);
            setForecastIcons(iconsToSet);
        };

        const weatherGetter = async () => {
            const data = await getWeather();
            setCurrentWeatherData(data);

            const forecasts = await getForecast();
            setForecastData(forecasts);

            await foreCastIconSetter(forecasts);

            const icon = await icons.find(x => x.id == data.weather[0].main).icon;
            setIcon(icon);
            return 
       };
       weatherGetter();
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Window style={{ position: 'absolute', zIndex: 1, width: "45%", minWidth: "19rem" }}>
                <WindowHeader className="window-header">
                    <span>weather.exe</span>
                    <Button onClick={handleWeatherClose}>
                        <span className="close-icon" />
                    </Button>
                </WindowHeader>
                <WindowContent>
                    {currentWeatherData && icon && (
                        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                            <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center', padding: '0.2rem'}}>
                                <Image src={icon} height={100} alt={currentWeatherData.main.description}/>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.85rem', textAlign: 'right'}}>
                                    <p style={{textDecoration: 'underline'}}>Edmonton, Alberta, Canada</p>
                                    <p>{Math.round(currentWeatherData.main.temp)} &#176; C</p>
                                    <p>feels like {Math.round(currentWeatherData.main.feels_like)} &#176; C</p>
                                    <p>{currentWeatherData.weather[0].description}</p>
                                    <p>{currentWeatherData.wind.gust} km/h gusts</p>
                                    <p>{currentWeatherData.main.humidity} % humidity</p>
                                </div>
                            </div>
                        {forecastData && forecastIcons && (
                            <Fieldset label="outlook">
                                <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: '1rem'}}>
                                    {forecastData.map((forecast, index) => {
                                        return (
                                        <ForecastWrapper key={index}>
                                            <p style={{textDecoration: 'underline'}}>{forecast.day}</p>
                                            <div style={{display: 'flex', justifyContent: 'center', margin: '0.5rem 0'}}>
                                                <Image src={forecastIcons[index]} height={50} alt={forecast.description}/>
                                            </div>
                                            <div style={{lineHeight: '1.2'}}>
                                                <p>{Math.round(forecast.temp)} &#176; C</p>
                                                <p>{forecast.weather}</p>
                                            </div>
                                        </ForecastWrapper>
                                        );
                                    })}
                                </div>
                            </Fieldset>
                        )}
                        </div>  
                    )}
                </WindowContent>
            </Window>
        </div>    
    );
};

export default WeatherWindow;