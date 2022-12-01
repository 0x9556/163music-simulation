import React, { memo } from 'react'
import { HeaderWrapper } from './style'


const ThemeHeaderRCM = memo(() => {
    return (
        <HeaderWrapper>
            <div className='left'></div>
            <div className='right'></div>
        </HeaderWrapper>
    )
})

export default ThemeHeaderRCM