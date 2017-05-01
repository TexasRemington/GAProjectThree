// essentials
import React from 'react'

// components
import Controls from './Controls/Controls'
import Display from './Display/Display'
import Tracklist from './Tracklist/Tracklist'
import Playlist from './Playlist/Playlist'
import Overlay from './Overlay'

const Player = () => (
    <div className="player" >
        <Overlay />
        <Display />
        <Controls />
        <Tracklist />
        <Playlist />
    </div>
)

export default Player
