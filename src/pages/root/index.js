import React, { memo } from 'react'
import AppHeader from '../../components/app-header'
import AppFooter from '../../components/app-footer'





const Root = memo(() => {
    return (
        <div>
            <AppHeader />

            <AppFooter/>
        </div>
    )
})



export default Root