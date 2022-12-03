import React, { memo } from 'react'
import { formatCount, formatImageSize } from '../../utils/format'
import { ThemeCoverWrapper } from './style'

const ThemeCover = memo((props) => {

    const { info } = props
    
    return (
        <ThemeCoverWrapper>
            <div className='cover-top'>
                <img src={formatImageSize(info.picUrl,140)} alt="" />
                <div className='cover sprite_cover'>
                    <div className='info sprite_cover'>
                        <span>
                            <i className='sprite_icon erji'></i>
                            {formatCount(info.playCount)}
                        </span>

                        <i className='sprite_icon play'></i>
                    </div>
                </div>
            </div>
            <div className='cover-bottom '>
                {info.name}
            </div>
            <div className='cover-source'>

            </div>
        </ThemeCoverWrapper>
    )
})

export default ThemeCover