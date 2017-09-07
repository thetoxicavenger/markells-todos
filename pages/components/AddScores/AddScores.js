import React from 'react'
import FlatButton from 'material-ui/FlatButton';

function AddScores () {
    return (
        <div style={{textAlign: 'center'}}>
            <FlatButton
                label='Add Scores'
                backgroundColor='#EF6F6C'
                style={{
                    color: 'white'
                }}
            />
        </div>
    )
}

export default AddScores