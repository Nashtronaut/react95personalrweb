import { useState } from 'react';
import WeatherWindow from './WeatherWindow';
import ChessStatWindow from './ChessStatWindow';
import TabContentHeader from './TabContentHeader';
import { Fieldset, Anchor } from 'react95';

const About = () => {

    const [showChessWindow, setShowChessWindow] = useState(false);
    const [showWeather, setShowWeather] = useState(false);

    return(
        <div>
            <TabContentHeader header="Nash Boisvert!" />
            <Fieldset style={{fontWeight: 'bold', padding: '0.5rem 0.8rem', margin: '0.8rem 0'}} label="Location">
                Edmonton, Alberta, Canada - <Anchor onClick={() => setShowWeather(true)} style={{cursor: 'pointer'}}>[weather?]</Anchor>
                {showWeather && (
                <WeatherWindow handleWeatherClose={() => setShowWeather(false)} />
            )}
            </Fieldset>
            <Fieldset style={{fontWeight: 'bold', padding: '0.5rem 0.8rem', margin: '0.8rem 0'}} label="Education">
                NAIT - Computer Software Development
            </Fieldset>
            <Fieldset style={{fontWeight: 'bold', background: 'white', padding: '1rem 0.8rem 0.8rem', margin: '0.8rem 0'}} label="About">
                <ul>
                    <li style={{margin: '0.5rem 0'}}>- 4.0 GPA</li>
                    <li style={{margin: '0.5rem 0'}}>- Dean&apos;s Honour Roll</li>
                    <li style={{margin: '0.5rem 0'}}>- 8 month COOP (CGI Group)</li>
                    <li style={{margin: '0.5rem 0'}}>- Full stack role</li>
                    <li style={{margin: '0.5rem 0'}}>- Ran student tutoring Discord</li>
                    <li style={{margin: '0.5rem 0'}}>- Linux lover</li>
                    <li style={{margin: '0.5rem 0'}}>- Dog lover</li>
                    <li style={{margin: '0.5rem 0'}}>- Obsessive <Anchor onClick={() => setShowChessWindow(true)} style={{cursor: 'pointer'}} >chess player</Anchor></li>
                    {showChessWindow && (
                        <ChessStatWindow handleChessClose={() => setShowChessWindow(false)}/>
                    )}
                    <li style={{margin: '0.5rem 0'}}>- V 1.0 released in 1996</li>
                    <li style={{margin: '0.5rem 0'}}>- Tinkering since 2004</li>
                    <li style={{margin: '0.5rem 0'}}>- Poor since 2004</li>
                    <li style={{margin: '0.5rem 0'}}>- Open-source contributor</li>
                    <li style={{margin: '0.5rem 0'}}>- Seeking full time employment</li>
                </ul>
            </Fieldset>
        </div>
    );
};

export default About;