import React from 'react'
import _ from 'lodash'

class PlayerDashboard extends React.Component {
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            //if function === true => console.log('Postoji');
            // else console.log('Ne postoji')
            console.log('working')
        }
    }
    render () {
        const { inputField } = this.props
        return (
            <div className='Input-Field'>
                <input type='text' placeholder='Enter a term...' onKeyPress={this.handleKeyPress} />
            </div>
        )
    }
}

export default PlayerDashboard