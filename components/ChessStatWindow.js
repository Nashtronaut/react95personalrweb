import { useState, useEffect } from 'react';
import getChessData from './helpers/api/getChessData';
import {
    Window,
    WindowHeader,
    WindowContent,
    Button
} from 'react95';

const ChessStatWindow = (props) => {
    
    const handleChessClose = props.handleChessClose; 
    const [chessData, setChessData] = useState(null);

    useEffect(() => {
       const chessDataGetter = async () => {
            let data = await getChessData();
            console.log(data)
            setChessData(data);

            return; 
       }

       chessDataGetter();
    }, [])

    return (
            <Window style={{ position: 'absolute', zIndex: 1, width: "45%", minWidth: "15rem", top: 0 }}>
                <WindowHeader className="window-header">
                    <span>chess_stats.exe</span>
                    <Button onClick={handleChessClose}>
                        <span className="close-icon" />
                    </Button>
                </WindowHeader>
                <WindowContent>
                    {chessData && (
                        <p>{chessData.player.joined.toDateString()}</p> //TODO populate information. Information setting successful. 
                    )}
                </WindowContent>
            </Window>    
    );
};

export default ChessStatWindow;