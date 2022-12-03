import React, { memo, useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'
import { getNewAlbumsAction } from '../../store'

import ThemeHeaderRCM from '../../../../../../components/theme-header-rcm'
import AlbumCover from '../../../../../../components/album-cover'
import { AlbumWrapper } from './style'

const NewAlbum = memo(() => {

    const { newAlbums } = useSelector(state => state.recommend)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewAlbumsAction())
    }, [dispatch])

    const carouselRef = useRef()
    return (
        <AlbumWrapper>

            <ThemeHeaderRCM title="New-Album" />
            <div className='content'>
                <button className='arrow arrow-left sprite_02' onClick={()=>carouselRef.current.prev()}></button>
                <div className='album'>
                    <Carousel ref={carouselRef}>
                        {
                            [0, 1].map(page =>
                                <div key={page} className='page'>
                                    {
                                        newAlbums.slice(page * 5).map(item =>
                                            <div key={item.id} >
                                                <AlbumCover info={item}  />
                                            </div>
                                        )
                                    }
                                </div>
                            )

                        }
                    </Carousel>
                </div>

                <button className='arrow arrow-right sprite_02' onClick={()=>carouselRef.current.next()}></button>
            </div>

        </AlbumWrapper>
    )
})

export default NewAlbum