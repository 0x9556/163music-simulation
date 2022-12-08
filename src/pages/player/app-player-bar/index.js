import React, { memo } from 'react'
import { Slider } from 'antd'
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
const PlayerBar = memo((props) => {
    return (
        <PlaybarWrapper className='sprite_playbar'>
            <div className='content wrap-v2'>
                <Control>
                    <button className='sprite_playbar prev'></button>
                    <button className='sprite_playbar play'></button>
                    <button className='sprite_playbar next'></button>
                </Control>
                <PlayInfo>
                    <div className='image'></div>
                    <div className='info'>
                        <div className='song'>
                            <div className='singer-name'></div>
                        </div>

                        <div className='progress'>
                            <Slider defaultValue={30} />
                            <div className='time'>
                                <span className='now-time'></span>
                                <span className='divider'></span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>

                <Operator>
                    <div className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop"></button>
                        <button className="sprite_playbar btn playlist"></button>
                    </div>
                </Operator>
            </div>

        </PlaybarWrapper>
    )
})

export default PlayerBar