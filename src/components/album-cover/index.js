import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { formatImageSize } from '../../utils/format'
import { AlbumWrapper } from './style'

const AlbumCover = memo((props) => {

    const { info, size = 100, width = 153, bgp = "-845px" } = props

    return (
        <AlbumWrapper size={size} width={width} bgp={bgp}>

            <div className='album-image'>

                <img src={formatImageSize(info.picUrl, size) || info.picUrl} alt="" />
                <Link to="" className='cover image_cover'></Link>

            </div>

            <div className='album-info'>

                <div className='name'>{info.name}</div>

                <div className='artist'>{info.artist.name}</div>

            </div>
        </AlbumWrapper>
    )
})

export default AlbumCover