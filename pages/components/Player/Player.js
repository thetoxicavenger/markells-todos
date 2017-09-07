import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Player extends React.Component {
    render () {
        return (
            <Card
                style={{
                    maxWidth: '300px',
                    display: 'inline-block',
                    marginLeft: '1.5%',
                    marginBottom: '10px'
                }}
            >
                <h1>{this.props.rank}</h1>
                <h3>{this.props.name}</h3>
                <img 
                    src={this.props.photo} 
                    style={{maxWidth: '300px'}}
                />
                <h3>{this.props.wins} - {this.props.losses}</h3>
            </Card>
        )
    }
}

export default Player