import React from 'react'
import 'isomorphic-fetch'
import {polyfill} from 'es6-promise'
import Player from '../Player/Player'
polyfill()

class Stats extends React.Component {
    state = {
        players: []
    }
    componentDidMount () {
        fetch('http://localhost:8080/players')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                this.setState({
                    players: json
                })
            })
    }
    render () {
        return (
            <div style={{margin: '0 auto', textAlign: 'center'}}>
                
                {this.state.players.map((player) => {
                    return (
                        <Player
                            key={player.id}
                            {...player}
                        />
                    )
                })}
                
            </div>
        )
    }
}

export default Stats