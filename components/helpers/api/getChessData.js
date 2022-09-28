import ChessWebAPI from 'chess-web-api/src/chess-web-api';

const getChessData =  async () => {
    const chessAPI = new ChessWebAPI();

    let player = await chessAPI.getPlayer('nashtronaut').then((res) => {
        return ({
            joined: new Date(res.body.joined * 1000),
            lastOnline: new Date(res.body.last_online * 1000),
        })
    })

    let playerStats = await chessAPI.getPlayerStats('nashtronaut').then((res) => {
        return ({
            best_rating: res.body.chess_rapid.best.rating,
            current_rating: res.body.chess_rapid.last.rating,
            recordWins: res.body.chess_rapid.record.win,
            recordLoss: res.body.chess_rapid.record.loss,
            recordDraws: res.body.chess_rapid.record.draw
        });
    })

    return ({
        player: player,
        playerStats: playerStats
    })
};

export default getChessData;