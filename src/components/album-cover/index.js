import React, { memo } from 'react'
import { formatImageSize } from '../../utils/format'
import { AlbumWrapper } from './style'

const AlbumCover = memo((props) => {

    const { info } = props

    return (
        <AlbumWrapper>

            <div className='album-image'>

                <img src={formatImageSize(info.picUrl, 100)} alt="" />
                <div className='cover sprite_cover'></div>

            </div>

            <div className='album-info'>

                <div className='name'>
                    {info.name}
                </div>

                <div className='artist'>
                    {info.artist.name}
                </div>

            </div>
        </AlbumWrapper>
    )
})

export default AlbumCover