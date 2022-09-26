import { useState } from 'react';
import getWeather from './helpers/api/getWeather';
import WindowWrapper from './helpers/wrappers/WindowWrapper';


import {
    Window,
    WindowHeader,
    WindowContent
} from 'react95';

const WeatherWindow = () => {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        getWeather().then((data) => {
            setWeatherData(data);
        })
    }, []);

    return (
        <PopupWrapper>
            <Window>
                <WindowHeader className="window-header">
                    <span>weather.exe</span>
                    <Button>
                        <span className="close-icon" />
                    </Button>
                </WindowHeader>
            </Window>
            <p>{weatherData.main[0].temp}</p>
        </PopupWrapper>
    );
};

export default WeatherWindow;