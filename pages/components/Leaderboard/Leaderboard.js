import React from 'react'
import Stats from '../Stats/Stats'
import AddScores from '../AddScores/AddScores'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function Leaderboard (props) {
    return (
        <MuiThemeProvider>
            <div
                style={{
                    textAlign: 'center'
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        margin: 0
                    }}
                >Leaderboard</h1>
                <img 
                    src='https://cdn2.iconfinder.com/data/icons/sport-ii/78/14-512.png'
                    style={{maxWidth: '300px'}}
                />
                <Stats/>
                <AddScores/>
            </div>
        </MuiThemeProvider>
    )
}

export default Leaderboard