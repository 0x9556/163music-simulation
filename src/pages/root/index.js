import React from 'react'
import AppHeader from '../../components/app-header'
import AppFooter from '../../components/app-footer'
import PlayerBar from '../../pages/player/app-player-bar'




const Root = () => {
    return (
        <div>
            <AppHeader />
            <AppFooter />
            <PlayerBar/>
        </div>
    )
}



export default Root