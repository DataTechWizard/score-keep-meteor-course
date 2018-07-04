import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'
import FlipMove from 'react-flip-move'

export default class PlayerList extends React.Component {
  renderPlayers () {
    if (this.props.players.length === 0) {
      return (
        <div className='item'>
          <p className='item__message item__message--empty'>Add someone to start the game!</p>
        </div>)
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player} />
      })
    }
  }
  render () {
    return (
      <div>
        <FlipMove maintainContainerHeight>
          {this.renderPlayers()}
        </FlipMove>
      </div>

    )
  }
}
PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
