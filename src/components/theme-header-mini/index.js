import React, { memo } from 'react'
import { ThemeHeaderMiniWrapper } from './style'
const ThemeHeaderMini = memo((props) => {
    const { title } = props

    return (
        <ThemeHeaderMiniWrapper>
            <h3>{title}</h3>
            <div>{"more >"}</div>
        </ThemeHeaderMiniWrapper>
    )
})

export default ThemeHeaderMini